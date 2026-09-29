// 15가지 KBO 야구 성향 밸런스 테스트 문항
const questions = [
    {
        id: 1,
        title: "1. 선호하는 연고지 위치는?",
        optA: "대중교통 편하고 경기장이 모여있는 [수도권 팀]",
        optB: "지역색 뚜렷하고 지역민의 열정이 넘치는 [지방 연고지 팀]"
    },
    {
        id: 2,
        title: "2. 가슴 뛰는 경기 스타일은? (창 vs 방패)",
        optA: "홈런과 안타가 펑펑 터지는 [화끈한 타격의 팀]",
        optB: "점수를 1점도 안 내주는 짠물 피칭, [견고한 투수진의 팀]"
    },
    {
        id: 3,
        title: "3. 팀 성적에 대한 나의 기준은?",
        optA: "지면 스트레스 받는다! 매년 가을야구 가는 [상위권 강팀]",
        optB: "성적은 좀 떨어져도 괜찮다! [낭만과 성장 스토리]"
    },
    {
        id: 4,
        title: "4. 끌리는 선수단 구성 및 분위기는?",
        optA: "패기와 열정으로 똘똘 뭉친 [젊은 유망주 중심의 팀]",
        optB: "위기관리와 노련미가 돋보이는 [베테랑 중심의 안정적인 팀]"
    },
    {
        id: 5,
        title: "5. 좋아하는 승리 작전 스타일은?",
        optA: "도루, 번트, 기동력으로 상대를 흔드는 [스피드 & 스몰볼]",
        optB: "작전보다는 큼지막한 장타 한 방으로 승부하는 [빅볼 & 파워]"
    },
    {
        id: 6,
        title: "6. 내가 원하는 야구장 직관 분위기는?",
        optA: "경기 내내 일어나서 노래 부르고 점프하는 [열광적인 떼창 파티]",
        optB: "맛있는 음식 먹으며 시원한 맥주 한잔하는 [여유로운 관람/먹방]"
    },
    {
        id: 7,
        title: "7. 함께하고 싶은 팬덤 문화는?",
        optA: "원정 경기장도 홈으로 만들어버리는 [전국구 압도적 대규모 팬덤]",
        optB: "서로 끈끈하게 가족처럼 뭉치는 [알짜배기 찐팬 팬덤]"
    },
    {
        id: 8,
        title: "8. 구단의 역사와 헤리티지에 대한 생각은?",
        optA: "원년 시절부터 이어져 온 전통과 역사가 깊은 [명문 구단]",
        optB: "요즘 감성에 맞게 빠르고 트렌디하게 마케팅하는 [현대적인 구단]"
    },
    {
        id: 9,
        title: "9. 나를 도파민 폭발하게 만드는 경기는?",
        optA: "9회말 2아웃까지 엎치락뒤치락하는 [심장 쫄깃한 역전 드라마]",
        optB: "초반부터 점수 넉넉히 내고 편안하게 굳히는 [무난한 완승]"
    },
    {
        id: 10,
        title: "10. 구단을 대표하는 선수의 형태는?",
        optA: "리그를 씹어먹는 확실한 전국구 [슈퍼스타 / 간판스타]",
        optB: "스타 1명에 의존하지 않고 고르게 활약하는 [원팀(One Team)]"
    },
    {
        id: 11,
        title: "11. 탐나는 유니폼 및 굿즈 스타일은?",
        optA: "역사가 묻어나는 클래식하고 깔끔한 [전통 레트로 유니폼]",
        optB: "콜라보 굿즈 많고 사진 잘 나오는 [트렌디하고 힙한 유니폼]"
    },
    {
        id: 12,
        title: "12. 원정 경기 직관을 떠난다면?",
        optA: "도심 속에서 쇼핑, 핫플과 함께 즐기는 [도심형 구장 투어]",
        optB: "야구장도 가고 그 지역 로컬 맛집까지 정복하는 [식도락 투어]"
    },
    {
        id: 13,
        title: "13. 팀이 패배했을 때 나의 반응은?",
        optA: "끝까지 최선을 다하고 명경기를 보여줬다면 박수 쳐줄 수 있다!",
        optB: "지면 하루 종일 기분이 다운된다! 무조건 이겨야 직성이 풀린다!"
    },
    {
        id: 14,
        title: "14. 선호하는 감독님의 전술 성향은?",
        optA: "세이버메트릭스와 통계 데이터를 바탕으로 한 [철저한 확률 야구]",
        optB: "선수를 믿고 뚝심 있게 밀어붙이는 [의리와 직관의 감성 야구]"
    },
    {
        id: 15,
        title: "15. 구단이 추구해야 할 방향성은?",
        optA: "지금 당장 모든 걸 쏟아부어 우승 트로피를 드는 [윈나우(Win-Now)]",
        optB: "유망주를 키우며 2~3년 뒤 왕조를 꿈꾸는 [리빌딩과 육성]"
    }
];

// 사용자의 선택 상태 저장 객체 { 1: "선택내용", 2: "선택내용", ... }
const userAnswers = {};

// DOM 요소 캐싱
const questionsWrapper = document.getElementById("questionsWrapper");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const submitBtn = document.getElementById("submitBtn");
const quizForm = document.getElementById("quizForm");
const loadingContainer = document.getElementById("loading");
const resultSection = document.getElementById("resultSection");
const copyBtn = document.getElementById("copyBtn");
const retryBtn = document.getElementById("retryBtn");

// 1. 화면에 15개 질문 렌더링
function renderQuestions() {
    questionsWrapper.innerHTML = questions.map((q, idx) => `
        <div class="question-card" id="q-card-${q.id}">
            <h3 class="question-title">
                <span class="question-index">Q${idx + 1}.</span>${q.title.replace(/^\d+\.\s*/, '')}
            </h3>
            <div class="options-group">
                <button type="button" class="option-btn" data-qid="${q.id}" data-opt="A" data-text="${q.optA}">
                    <span class="option-tag">A</span>
                    <span class="option-text">${q.optA}</span>
                </button>
                <button type="button" class="option-btn" data-qid="${q.id}" data-opt="B" data-text="${q.optB}">
                    <span class="option-tag">B</span>
                    <span class="option-text">${q.optB}</span>
                </button>
            </div>
        </div>
    `).join("");

    // 옵션 클릭 이벤트 리스너 등록
    document.querySelectorAll(".option-btn").forEach(btn => {
        btn.addEventListener("click", handleOptionSelect);
    });
}

// 2. 옵션 선택 핸들러
function handleOptionSelect(e) {
    const btn = e.currentTarget;
    const qid = btn.dataset.qid;
    const text = btn.dataset.text;

    // 같은 카드의 다른 버튼 선택 해제
    const parentCard = document.getElementById(`q-card-${qid}`);
    parentCard.querySelectorAll(".option-btn").forEach(b => b.classList.remove("selected"));

    // 현재 버튼 선택
    btn.classList.add("selected");
    userAnswers[qid] = text;

    updateProgress();
}

// 3. 프로그레스 바 및 제출 버튼 상태 업데이트
function updateProgress() {
    const selectedCount = Object.keys(userAnswers).length;
    const totalCount = questions.length;
    const percentage = Math.round((selectedCount / totalCount) * 100);

    progressBar.style.width = `${percentage}%`;
    progressText.innerText = `${selectedCount} / ${totalCount} 완료 (${percentage}%)`;

    // 15개 모두 선택 시 제출 버튼 활성화
    if (selectedCount === totalCount) {
        submitBtn.removeAttribute("disabled");
        submitBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
        submitBtn.setAttribute("disabled", "true");
    }
}

// 4. 폼 제출 및 추천 요청
quizForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (Object.keys(userAnswers).length < 15) {
        alert("15개 문항을 모두 선택해 주세요!");
        return;
    }

    // 배열 형태로 변환
    const answersArray = questions.map(q => ({
        question: q.title,
        choice: userAnswers[q.id]
    }));

    // UI 상태: 로딩 시작
    quizForm.classList.add("hidden");
    document.getElementById("progressSection").classList.add("hidden");
    loadingContainer.classList.remove("hidden");
    resultSection.classList.add("hidden");
    loadingContainer.scrollIntoView({ behavior: "smooth" });

    try {
        const response = await fetch("/recommend", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ answers: answersArray })
        });

        const result = await response.json();

        if (response.ok && result.success) {
            displayResult(result.data);
        } else {
            throw new Error(result.error || "추천 결과를 가져오는 데 실패했습니다.");
        }
    } catch (err) {
        alert(`오류: ${err.message}`);
        // 오류 시 다시 설문 화면으로 복귀
        loadingContainer.classList.add("hidden");
        quizForm.classList.remove("hidden");
        document.getElementById("progressSection").classList.remove("hidden");
    }
});

// 5. 결과 화면 렌더링
function displayResult(data) {
    loadingContainer.classList.add("hidden");
    resultSection.classList.remove("hidden");

    document.getElementById("matchRate").innerText = `매칭률 ${data.match_rate || 90}%`;
    document.getElementById("resultHeadline").innerText = `"${data.headline || ''}"`;
    document.getElementById("primaryTeam").innerText = data.primary_team || '추천 팀';
    document.getElementById("subTeam").innerText = `차선책 추천: ${data.sub_team || '기타 구단'}`;
    document.getElementById("resultReason").innerText = data.reason || '';
    document.getElementById("cheerSong").innerText = data.cheer_song || '';
    document.getElementById("foodStadium").innerText = data.food_and_stadium || '';
    document.getElementById("recentVibe").innerText = data.recent_vibe || '';

    resultSection.scrollIntoView({ behavior: "smooth" });
}

// 6. 결과 클립보드 복사
copyBtn.addEventListener("click", () => {
    const team = document.getElementById("primaryTeam").innerText;
    const headline = document.getElementById("resultHeadline").innerText;
    const reason = document.getElementById("resultReason").innerText;
    const cheer = document.getElementById("cheerSong").innerText;

    const shareText = `⚾ [AI KBO 야구 응원팀 추천 결과]\n\n나의 추천 구단: ${team}\n${headline}\n\n🎯 추천 이유:\n${reason}\n\n🎵 대표 응원가:\n${cheer}\n\n너도 테스트해봐!`;

    navigator.clipboard.writeText(shareText).then(() => {
        alert("추천 결과가 클립보드에 복사되었습니다! 친구들에게 공유해 보세요 🎉");
    }).catch(() => {
        alert("복사에 실패했습니다.");
    });
});

// 6-1. 결과 리포트 Markdown(.md) 파일 다운로드 기능
const downloadBtn = document.getElementById("downloadBtn");
downloadBtn.addEventListener("click", () => {
    const team = document.getElementById("primaryTeam").innerText;
    const headline = document.getElementById("resultHeadline").innerText;
    const matchRate = document.getElementById("matchRate").innerText;
    const subTeam = document.getElementById("subTeam").innerText;
    const reason = document.getElementById("resultReason").innerText;
    const cheer = document.getElementById("cheerSong").innerText;
    const food = document.getElementById("foodStadium").innerText;
    const vibe = document.getElementById("recentVibe").innerText;

    const markdownContent = `# ⚾ 나의 AI KBO 응원팀 매칭 리포트\n\n` +
        `> **${headline}**\n\n` +
        `## 🏆 1순위 추천 구단: ${team} (${matchRate})\n` +
        `- **${subTeam}**\n\n` +
        `---\n\n` +
        `### 🎯 추천 이유\n` +
        `${reason}\n\n` +
        `### 🎵 대표 응원가\n` +
        `${cheer}\n\n` +
        `### 🍗 홈구장 및 필수 먹거리\n` +
        `${food}\n\n` +
        `### 🔥 최근 실시간 구단 소식 & 분위기\n` +
        `${vibe}\n\n` +
        `---\n` +
        `*생성일시: ${new Date().toLocaleDateString('ko-KR')} | AI KBO Team Recommender*\n`;

    const blob = new Blob([markdownContent], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${team.replace(/\s+/g, '_')}_추천리포트.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
});

// 7. 다시 테스트하기 (초기화)
retryBtn.addEventListener("click", () => {
    for (let key in userAnswers) {
        delete userAnswers[key];
    }
    document.querySelectorAll(".option-btn").forEach(btn => btn.classList.remove("selected"));
    updateProgress();

    resultSection.classList.add("hidden");
    quizForm.classList.remove("hidden");
    document.getElementById("progressSection").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 앱 시작 시 질문 렌더링
renderQuestions();
