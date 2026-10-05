import os
import json
import logging
import requests
from flask import Flask, render_template, request, jsonify, session, redirect, url_for
from dotenv import load_dotenv
from google import genai

# 로깅 설정 (서버 동작 과정을 콘솔에 깔끔하게 출력)
logging.basicConfig(level=logging.INFO, format="%(asctime)s [%(levelname)s] %(message)s")

# 1. 환경변수 로드
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
SERPER_API_KEY = os.getenv("SERPER_API_KEY")
ACCESS_PASSWORD = os.getenv("ACCESS_PASSWORD", "0110")
SECRET_KEY = os.getenv("SECRET_KEY", "kbo_2026_recommender_secret_session_key_0110")

if not GEMINI_API_KEY:
    logging.warning("⚠️ GEMINI_API_KEY가 .env 파일에 설정되지 않았습니다.")
if not SERPER_API_KEY:
    logging.warning("⚠️ SERPER_API_KEY가 .env 파일에 설정되지 않았습니다.")

# 2. Flask 앱 생성 및 세션 키 / Gemini 클라이언트 초기화
app = Flask(__name__)
app.secret_key = SECRET_KEY

client = genai.Client(api_key=GEMINI_API_KEY) if GEMINI_API_KEY else None

# 3. Serper API를 활용한 KBO 최신 뉴스 검색 함수
def get_kbo_latest_context():
    """KBO 최근 이슈 및 현황을 Serper API로 검색하여 최신 정보 문자열을 반환합니다."""
    if not SERPER_API_KEY or SERPER_API_KEY == "your_serper_api_key_here":
        logging.info("ℹ️ SERPER_API_KEY가 없어 기본 지식 베이스를 사용합니다.")
        return "최신 실시간 검색 정보 없음 (내장된 KBO 구단 역사와 특색 지식을 바탕으로 추천)"

    try:
        url = "https://google.serper.dev/search"
        payload = json.dumps({"q": "KBO 프로야구 구단 순위 최근 이슈", "gl": "kr", "hl": "ko"})
        headers = {
            "X-API-KEY": SERPER_API_KEY,
            "Content-Type": "application/json"
        }
        response = requests.post(url, headers=headers, data=payload, timeout=5)
        
        if response.status_code == 200:
            data = response.json()
            snippets = []
            if "organic" in data:
                for item in data["organic"][:4]:
                    title = item.get("title", "")
                    snippet = item.get("snippet", "")
                    snippets.append(f"- {title}: {snippet}")
            logging.info("✅ Serper API 검색 성공")
            return "\n".join(snippets)
        else:
            logging.warning(f"⚠️ Serper API 응답 오류: {response.status_code}")
            return "최신 검색 결과 로드 실패 (기본 지식으로 추천)"
    except Exception as e:
        logging.error(f"⚠️ Serper 검색 중 예외 발생: {e}")
        return "검색 연결 오류 (기본 지식으로 추천)"

# 4. 보안 접근 인증 및 라우트
@app.route("/")
def index():
    # URL 파라미터로 ?pw=0110 이 들어오면 바로 자동 로그인 처리 (원클릭 프리패스 입장)
    pw_param = request.args.get("pw")
    if pw_param and pw_param.strip() == ACCESS_PASSWORD:
        session["authenticated"] = True
        session.permanent = True
        logging.info("🔓 URL 쿼리 파라미터를 통한 원클릭 자동 인증 성공")
        return redirect(url_for("index"))

    if not session.get("authenticated"):
        return render_template("login.html")
    return render_template("index.html")

@app.route("/login", methods=["POST"])
def login():
    data = request.get_json() or {}
    password = str(data.get("password", "")).strip()
    if password == ACCESS_PASSWORD:
        session["authenticated"] = True
        session.permanent = True
        logging.info("🔓 보안 인증 성공: 0110")
        return jsonify({"success": True})
    logging.warning("🔒 보안 인증 실패 (잘못된 비밀번호 입력)")
    return jsonify({"success": False, "error": "비밀번호가 올바르지 않습니다."}), 401

@app.route("/logout")
def logout():
    session.clear()
    logging.info("🔒 사용자 세션 로그아웃 완료")
    return redirect(url_for("index"))

# 5. 추천 생성 API Route (보안 인증 필수)
@app.route("/recommend", methods=["POST"])
def recommend():
    if not session.get("authenticated"):
        return jsonify({"success": False, "error": "보안 인증이 필요합니다. 먼저 로그인해 주세요."}), 401

    try:
        data = request.get_json()
        if not data or "answers" not in data:
            return jsonify({"success": False, "error": "응답 데이터가 올바르지 않습니다."}), 400

        answers = data.get("answers", [])
        if len(answers) < 15:
            return jsonify({"success": False, "error": "15개 문항을 모두 선택해 주세요."}), 400

        logging.info(f"📥 15개 설문 응답 수신 완료: {answers[:3]}... (총 {len(answers)}개)")

        # Serper 최신 정보 획득
        kbo_context = get_kbo_latest_context()

        # Gemini Flash Lite 프롬프트 구성
        prompt = f"""
당신은 한국 프로야구(KBO 리그) 최고의 전문 야구 데이터 분석가이자 구단 매칭 코치입니다.
KBO 10개 구단(KIA 타이거즈, 삼성 라이온즈, LG 트윈스, 두산 베어스, kt wiz, SSG 랜더스, 롯데 자이언츠, 한화 이글스, NC 다이노스, 키움 히어로즈)의 특색과 역사, 팬덤 문화를 완벽하게 이해하고 있습니다.

다음은 사용자가 15개 밸런스 질문에 대해 선택한 성향 리스트입니다:
{json.dumps(answers, ensure_ascii=False, indent=2)}

또한 다음은 최근 검색된 KBO 구단 관련 최신 이슈 정보입니다:
{kbo_context}

위 사용자의 15가지 성향과 구단들의 실제 팀 컬러, 연고지, 경기 스타일, 응원 분위기, 역사 등을 종합 분석하여 반드시 아래 JSON 형식으로만 응답하세요. 다른 설명 문구나 마크다운 없이 순수 JSON만 출력하세요.

JSON 출력 형식:
{{
  "primary_team": "1순위 추천 구단명 (예: 한화 이글스)",
  "match_rate": 95,
  "sub_team": "2순위 대안 구단명 (예: 롯데 자이언츠)",
  "headline": "사용자의 성향을 한 줄로 요약한 위트 있는 슬로건",
  "reason": "왜 이 팀이 사용자에게 찰떡궁합인지 15개 응답과 팀 특색을 연결해 친절하고 열정적으로 설명 (3~4문장)",
  "cheer_song": "이 구단의 대표 추천 응원가 이름 및 부르는 재미 설명",
  "food_and_stadium": "홈구장 명칭과 직관 시 꼭 먹어야 할 대표 명물 먹거리",
  "recent_vibe": "최근 이 구단의 팀 분위기나 최신 핫이슈 (실시간 검색 내용 반영)"
}}
"""

        logging.info("🤖 Gemini Flash Lite 모델 호출 시작...")
        
        # 최신 Gemini 3.5 Flash Lite 모델 호출
        response = client.models.generate_content(
            model="gemini-3.5-flash-lite",
            contents=prompt,
        )

        response_text = response.text.strip()
        
        # 혹시 모를 마크다운 코드블록 제거 처리
        if response_text.startswith("```json"):
            response_text = response_text[7:]
        if response_text.startswith("```"):
            response_text = response_text[3:]
        if response_text.endswith("```"):
            response_text = response_text[:-3]
        response_text = response_text.strip()

        result_json = json.loads(response_text)
        logging.info(f"🎉 추천 성공: {result_json.get('primary_team')} (일치율: {result_json.get('match_rate')}%)")

        return jsonify({"success": True, "data": result_json})

    except json.JSONDecodeError as jde:
        logging.error(f"❌ AI 응답 JSON 파싱 실패: {jde} / 원본 텍스트: {response_text}")
        return jsonify({"success": False, "error": "AI 응답을 처리하는 중 오류가 발생했습니다. 다시 시도해 주세요."}), 500
    except Exception as e:
        logging.error(f"❌ 서버 처리 오류: {e}")
        return jsonify({"success": False, "error": f"서버 내부 오류가 발생했습니다: {str(e)}"}), 500

if __name__ == "__main__":
    app.run(debug=True, port=5000)
