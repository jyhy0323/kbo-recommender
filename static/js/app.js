// 15가지 KBO 야구 성향 밸런스 테스트 문항 (이모지, 카테고리, 서브 텍스트 보강)
const questions = [
    {
        id: 1,
        category: "📍 연고지 위치",
        title: "선호하는 연고지 위치는?",
        optA: "대중교통 편하고 경기장이 모여있는 [수도권 팀]",
        optB: "지역색 뚜렷하고 지역민의 열정이 넘치는 [지방 연고지 팀]",
        emojiA: "🚇",
        subA: "서울·인천·수원! 지하철 타고 가볍게 직관 가자",
        emojiB: "🌄",
        subB: "광주·부산·대구·대전·창원! 끈끈한 로컬 자부심"
    },
    {
        id: 2,
        category: "⚔️ 창 vs 방패",
        title: "가슴 뛰는 경기 스타일은?",
        optA: "홈런과 안타가 펑펑 터지는 [화끈한 타격의 팀]",
        optB: "점수를 1점도 안 내주는 짠물 피칭, [견고한 투수진의 팀]",
        emojiA: "💥",
        subA: "화끈한 타격전과 장쾌한 홈런 레이스!",
        emojiB: "🛡️",
        subB: "묵직한 탈삼진 쇼와 팽팽한 명품 투수전!"
    },
    {
        id: 3,
        category: "🏆 성적 vs 낭만",
        title: "팀 성적에 대한 나의 기준은?",
        optA: "지면 스트레스 받는다! 매년 가을야구 가는 [상위권 강팀]",
        optB: "성적은 좀 떨어져도 괜찮다! [낭만과 성장 스토리]",
        emojiA: "🥇",
        subA: "승리의 쾌감이 최우선! 가을야구 단골 진출",
        emojiB: "🌱",
        subB: "우여곡절 끝에 만들어내는 눈물겨운 성장 드라마"
    },
    {
        id: 4,
        category: "🌱 선수단 구성",
        title: "끌리는 선수단 구성 및 분위기는?",
        optA: "패기와 열정으로 똘똘 뭉친 [젊은 유망주 중심의 팀]",
        optB: "위기관리와 노련미가 돋보이는 [베테랑 중심의 안정적인 팀]",
        emojiA: "⚡",
        subA: "겁 없는 신인들의 폭발적인 패기와 미래 가치",
        emojiB: "🎖️",
        subB: "베테랑들의 침착한 경기 운영과 든든한 리더십"
    },
    {
        id: 5,
        category: "⚡ 승리 전술",
        title: "좋아하는 승리 작전 스타일은?",
        optA: "도루, 번트, 기동력으로 상대를 흔드는 [스피드 & 스몰볼]",
        optB: "작전보다는 큼지막한 장타 한 방으로 승부하는 [빅볼 & 파워]",
        emojiA: "👟",
        subA: "쉴 새 없이 뛰고 흔드는 다이나믹한 발야구",
        emojiB: "🚀",
        subB: "경기 흐름을 단숨에 뒤집는 시원한 장타 야구"
    },
    {
        id: 6,
        category: "🎉 직관의 맛",
        title: "내가 원하는 야구장 직관 분위기는?",
        optA: "경기 내내 일어나서 노래 부르고 점프하는 [열광적인 떼창 파티]",
        optB: "맛있는 음식 먹으며 시원한 맥주 한잔하는 [여유로운 관람/먹방]",
        emojiA: "🎤",
        subA: "목 터져라 응원가 부르며 스트레스 올킬!",
        emojiB: "🍗",
        subB: "치킨, 크림새우, 시원한 생맥주와 힐링 타임"
    },
    {
        id: 7,
        category: "🤝 팬덤 문화",
        title: "함께하고 싶은 팬덤 문화는?",
        optA: "원정 경기장도 홈으로 만들어버리는 [전국구 압도적 대규모 팬덤]",
        optB: "서로 끈끈하게 가족처럼 뭉치는 [알짜배기 찐팬 팬덤]",
        emojiA: "🌊",
        subA: "전국 어디를 가든 관중석을 가득 채우는 압도적 화력",
        emojiB: "💛",
        subB: "고난도 함께 나누는 끈끈하고 따뜻한 유대감"
    },
    {
        id: 8,
        category: "🏛️ 헤리티지",
        title: "구단의 역사와 헤리티지에 대한 생각은?",
        optA: "원년 시절부터 이어져 온 전통과 역사가 깊은 [명문 구단]",
        optB: "요즘 감성에 맞게 빠르고 트렌디하게 마케팅하는 [현대적인 구단]",
        emojiA: "📜",
        subA: "세대를 이어온 웅장한 역사와 깊은 전통",
        emojiB: "📱",
        subB: "트렌디한 팝업스토어와 감각적인 브랜딩 마케팅"
    },
    {
        id: 9,
        category: "💥 도파민 폭발",
        title: "나를 도파민 폭발하게 만드는 경기는?",
        optA: "9회말 2아웃까지 엎치락뒤치락하는 [심장 쫄깃한 역전 드라마]",
        optB: "초반부터 점수 넉넉히 내고 편안하게 굳히는 [무난한 완승]",
        emojiA: "🎢",
        subA: "손에 땀을 쥐게 하는 롤러코스터 끝내기 역전극",
        emojiB: "☕",
        subB: "불안함 없이 편안하게 음료 마시며 즐기는 대승"
    },
    {
        id: 10,
        category: "⭐ 스타 파워",
        title: "구단을 대표하는 선수의 형태는?",
        optA: "리그를 씹어먹는 확실한 전국구 [슈퍼스타 / 간판스타]",
        optB: "스타 1명에 의존하지 않고 고르게 활약하는 [원팀(One Team)]",
        emojiA: "🌟",
        subA: "이름만 들어도 가슴 뛰는 슈퍼스타의 존재감",
        emojiB: "🤝",
        subB: "모든 선수가 톱니바퀴처럼 맞물리는 끈끈한 조직력"
    },
    {
        id: 11,
        category: "🧢 유니폼 & 굿즈",
        title: "탐나는 유니폼 및 굿즈 스타일은?",
        optA: "역사가 묻어나는 클래식하고 깔끔한 [전통 레트로 유니폼]",
        optB: "콜라보 굿즈 많고 사진 잘 나오는 [트렌디하고 힙한 유니폼]",
        emojiA: "👕",
        subA: "클래식의 멋! 유행을 타지 않는 영원한 정통 유니폼",
        emojiB: "✨",
        subB: "인스타 감성 저격! 귀여운 캐릭터와 감각적인 굿즈"
    },
    {
        id: 12,
        category: "✈️ 원정 투어",
        title: "원정 경기 직관을 떠난다면?",
        optA: "도심 속에서 쇼핑, 핫플과 함께 즐기는 [도심형 구장 투어]",
        optB: "야구장도 가고 그 지역 로컬 맛집까지 정복하는 [식도락 투어]",
        emojiA: "🏙️",
        subA: "세련된 도심 속 문화생활과 편리한 인프라",
        emojiB: "🍜",
        subB: "전국 각지의 소문난 로컬 맛집 정복과 여행"
    },
    {
        id: 13,
        category: "❤️ 멘탈 관리",
        title: "팀이 패배했을 때 나의 반응은?",
        optA: "끝까지 최선을 다하고 명경기를 보여줬다면 박수 쳐줄 수 있다!",
        optB: "지면 하루 종일 기분이 다운된다! 무조건 이겨야 직성이 풀린다!",
        emojiA: "👏",
        subA: "멋진 플레이였다면 졌어도 괜찮아, 내일 이기자!",
        emojiB: "😤",
        subB: "승부욕 폭발! 오늘 밤 잠은 다 잤다, 이겨야 산다!"
    },
    {
        id: 14,
        category: "🧠 사령탑 전술",
        title: "선호하는 감독님의 전술 성향은?",
        optA: "세이버메트릭스와 통계 데이터를 바탕으로 한 [철저한 확률 야구]",
        optB: "선수를 믿고 뚝심 있게 밀어붙이는 [의리와 직관의 감성 야구]",
        emojiA: "📊",
        subA: "냉철한 데이터와 분석에 근거한 정밀한 승부수",
        emojiB: "🎯",
        subB: "선수와의 깊은 신뢰, 한 방을 믿는 뚝심의 리더십"
    },
    {
        id: 15,
        category: "🏁 궁극적 목표",
        title: "구단이 추구해야 할 방향성은?",
        optA: "지금 당장 모든 걸 쏟아부어 우승 트로피를 드는 [윈나우(Win-Now)]",
        optB: "유망주를 키우며 2~3년 뒤 왕조를 꿈꾸는 [리빌딩과 육성]",
        emojiA: "🏆",
        subA: "지금이 바로 적기! 올 시즌 우승 트로피를 들어 올리자",
        emojiB: "🏗️",
        subB: "탄탄한 기초공사로 지속 가능한 최강 왕조를 세우자"
    }
];

// 사용자의 선택 상태 저장 객체 { 1: "선택내용", 2: "선택내용", ... }
const userAnswers = {};
let currentQuestionIndex = 0; // 현재 보고 있는 카드 인덱스

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

// 1. 현재 질문 카드 렌더링 (카드 슬라이드 방식)
function renderCurrentQuestion(direction = "next") {
    const q = questions[currentQuestionIndex];
    const total = questions.length;
    const isAnswered = !!userAnswers[q.id];
    const selectedText = userAnswers[q.id];

    // 카드 내부 HTML
    questionsWrapper.innerHTML = `
        <div class="question-card active-card ${direction === 'next' ? 'slide-in-right' : 'slide-in-left'}" id="q-card-${q.id}">
            <div class="card-top-meta">
                <span class="category-pill">${q.category}</span>
                <span class="step-indicator">${currentQuestionIndex + 1} / ${total}</span>
            </div>

            <h3 class="question-title">
                <span class="question-number">Q${currentQuestionIndex + 1}.</span> ${q.title}
            </h3>

            <div class="vs-card-group">
                <!-- 선택지 A -->
                <button type="button" class="vs-option-btn opt-a ${selectedText === q.optA ? 'selected' : ''}" data-qid="${q.id}" data-opt="A" data-text="${q.optA}">
                    <div class="opt-emoji-box">${q.emojiA}</div>
                    <div class="opt-content-box">
                        <div class="opt-label-badge badge-a">OPTION A</div>
                        <div class="opt-main-text">${q.optA}</div>
                        <div class="opt-sub-text">${q.subA}</div>
                    </div>
                    <div class="opt-check-icon">✓</div>
                </button>

                <!-- VS 뱃지 -->
                <div class="vs-badge">
                    <span>VS</span>
                </div>

                <!-- 선택지 B -->
                <button type="button" class="vs-option-btn opt-b ${selectedText === q.optB ? 'selected' : ''}" data-qid="${q.id}" data-opt="B" data-text="${q.optB}">
                    <div class="opt-emoji-box">${q.emojiB}</div>
                    <div class="opt-content-box">
                        <div class="opt-label-badge badge-b">OPTION B</div>
                        <div class="opt-main-text">${q.optB}</div>
                        <div class="opt-sub-text">${q.subB}</div>
                    </div>
                    <div class="opt-check-icon">✓</div>
                </button>
            </div>

            <!-- 하단 카드 이동 네비게이션 -->
            <div class="card-nav-bar">
                <button type="button" class="nav-btn prev-btn" id="prevCardBtn" ${currentQuestionIndex === 0 ? 'disabled' : ''}>
                    ← 이전 질문
                </button>
                <div class="nav-counter">
                    ${isAnswered ? '<span class="status-badge-done">선택 완료!</span>' : '<span class="status-badge-waiting">하나를 골라주세요</span>'}
                </div>
                <button type="button" class="nav-btn next-btn" id="nextCardBtn" ${currentQuestionIndex === total - 1 ? 'disabled' : ''}>
                    다음 질문 →
                </button>
            </div>
        </div>
    `;

    // 이벤트 리스너 등록
    document.querySelectorAll(".vs-option-btn").forEach(btn => {
        btn.addEventListener("click", handleOptionSelect);
    });

    const prevBtn = document.getElementById("prevCardBtn");
    if (prevBtn) {
        prevBtn.addEventListener("click", () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                renderCurrentQuestion("prev");
            }
        });
    }

    const nextBtn = document.getElementById("nextCardBtn");
    if (nextBtn) {
        nextBtn.addEventListener("click", () => {
            if (currentQuestionIndex < total - 1) {
                currentQuestionIndex++;
                renderCurrentQuestion("next");
            }
        });
    }

    updateProgress();
}

// 2. 옵션 선택 핸들러
function handleOptionSelect(e) {
    const btn = e.currentTarget;
    const qid = parseInt(btn.dataset.qid, 10);
    const text = btn.dataset.text;

    // 가벼운 진동 햅틱 효과 (모바일 지원 기기)
    if (navigator.vibrate) {
        try { navigator.vibrate(12); } catch (err) {}
    }

    // 카드 내 선택 상태 토글 및 바운스 효과
    document.querySelectorAll(".vs-option-btn").forEach(b => b.classList.remove("selected", "bounce-click"));
    btn.classList.add("selected", "bounce-click");
    userAnswers[qid] = text;

    updateProgress();

    // 0.22초 후 다음 카드로 자동 슬라이드
    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            renderCurrentQuestion("next");
        } else {
            // 마지막 15번 질문을 완료한 경우
            renderCurrentQuestion("next");
            // 제출 버튼으로 부드럽게 스크롤 및 포커스
            submitBtn.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }, 220);
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
        submitBtn.classList.add("pulse-ready");
        submitBtn.innerText = "🔥 15개 완료! AI에게 내 응원팀 추천받기";
    } else {
        submitBtn.setAttribute("disabled", "true");
        submitBtn.classList.remove("pulse-ready");
        submitBtn.innerText = `⚾ ${selectedCount} / 15개 선택됨 (모두 완료해주세요)`;
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

// KBO 10개 구단 공식 엠블럼, 고유 테마 컬러, 대표 투수/타자 간판스타 매핑 정보
const kboTeamInfo = [
    {
        keywords: ["한화", "이글스", "HH"],
        fullName: "한화 이글스",
        logo: "/static/images/teams/HH.png",
        pitcher: "류현진",
        batter: "노시환",
        primaryColor: "#F37321", // 한화 오렌지
        secondaryColor: "#25282A",
        bgTint: "rgba(243, 115, 33, 0.12)",
        glow: "rgba(243, 115, 33, 0.35)",
        badgeBg: "#FFF1E8",
        badgeText: "#D6590A"
    },
    {
        keywords: ["KIA", "기아", "타이거즈", "HT"],
        fullName: "KIA 타이거즈",
        logo: "/static/images/teams/HT.png",
        pitcher: "양현종",
        batter: "김도영",
        primaryColor: "#C41230", // 타이거즈 레드
        secondaryColor: "#0C2340",
        bgTint: "rgba(196, 18, 48, 0.12)",
        glow: "rgba(196, 18, 48, 0.35)",
        badgeBg: "#FFEAEF",
        badgeText: "#A80D26"
    },
    {
        keywords: ["삼성", "라이온즈", "SS"],
        fullName: "삼성 라이온즈",
        logo: "/static/images/teams/SS.png",
        pitcher: "원태인",
        batter: "구자욱",
        primaryColor: "#0066B3", // 라이온즈 블루
        secondaryColor: "#C0C0C0",
        bgTint: "rgba(0, 102, 179, 0.12)",
        glow: "rgba(0, 102, 179, 0.35)",
        badgeBg: "#EBF5FF",
        badgeText: "#005291"
    },
    {
        keywords: ["LG", "엘지", "트윈스"],
        fullName: "LG 트윈스",
        logo: "/static/images/teams/LG.png",
        pitcher: "임찬규",
        batter: "오지환",
        primaryColor: "#C30452", // 트윈스 레드/핑크
        secondaryColor: "#000000",
        bgTint: "rgba(195, 4, 82, 0.12)",
        glow: "rgba(195, 4, 82, 0.35)",
        badgeBg: "#FFEAF2",
        badgeText: "#A10041"
    },
    {
        keywords: ["두산", "베어스", "OB"],
        fullName: "두산 베어스",
        logo: "/static/images/teams/OB.png",
        pitcher: "곽빈",
        batter: "양의지",
        primaryColor: "#131230", // 딥 네이비
        secondaryColor: "#ED1C24",
        bgTint: "rgba(19, 18, 48, 0.12)",
        glow: "rgba(19, 18, 48, 0.35)",
        badgeBg: "#ECECF8",
        badgeText: "#131230"
    },
    {
        keywords: ["KT", "케이티", "위즈", "wiz"],
        fullName: "kt wiz",
        logo: "/static/images/teams/KT.png",
        pitcher: "고영표",
        batter: "안현민",
        primaryColor: "#221F1F", // 매직 블랙
        secondaryColor: "#EC1C24",
        bgTint: "rgba(236, 28, 36, 0.12)",
        glow: "rgba(236, 28, 36, 0.35)",
        badgeBg: "#FFEBEB",
        badgeText: "#C41219"
    },
    {
        keywords: ["SSG", "랜더스", "쓱", "SK"],
        fullName: "SSG 랜더스",
        logo: "/static/images/teams/SK.png",
        pitcher: "김광현",
        batter: "최정",
        primaryColor: "#CE0E2D", // 랜더스 레드
        secondaryColor: "#BA9653",
        bgTint: "rgba(206, 14, 45, 0.12)",
        glow: "rgba(206, 14, 45, 0.35)",
        badgeBg: "#FFEBEE",
        badgeText: "#B00924"
    },
    {
        keywords: ["롯데", "자이언츠", "LT"],
        fullName: "롯데 자이언츠",
        logo: "/static/images/teams/LT.png",
        pitcher: "박세웅",
        batter: "한동희",
        primaryColor: "#002955", // 헤리티지 블루
        secondaryColor: "#D31145",
        bgTint: "rgba(0, 41, 85, 0.12)",
        glow: "rgba(0, 41, 85, 0.35)",
        badgeBg: "#EBF3FB",
        badgeText: "#002955"
    },
    {
        keywords: ["NC", "엔씨", "다이노스"],
        fullName: "NC 다이노스",
        logo: "/static/images/teams/NC.png",
        pitcher: "구창모",
        batter: "김주원",
        primaryColor: "#315288", // 마린 블루
        secondaryColor: "#AF9165",
        bgTint: "rgba(49, 82, 136, 0.12)",
        glow: "rgba(49, 82, 136, 0.35)",
        badgeBg: "#EDF2FA",
        badgeText: "#25406B"
    },
    {
        keywords: ["키움", "히어로즈", "WO"],
        fullName: "키움 히어로즈",
        logo: "/static/images/teams/WO.png",
        pitcher: "안우진",
        batter: "이주형",
        primaryColor: "#570514", // 버건디
        secondaryColor: "#A7A9AC",
        bgTint: "rgba(87, 5, 20, 0.12)",
        glow: "rgba(87, 5, 20, 0.35)",
        badgeBg: "#F7EAEB",
        badgeText: "#570514"
    }
];

function findTeamTheme(teamName) {
    if (!teamName) return null;
    const cleanName = teamName.toUpperCase();
    return kboTeamInfo.find(t => t.keywords.some(k => cleanName.includes(k.toUpperCase()))) || null;
}

// 5. 결과 화면 렌더링
function displayResult(data) {
    loadingContainer.classList.add("hidden");
    resultSection.classList.remove("hidden");

    const teamName = data.primary_team || '추천 팀';
    const teamTheme = findTeamTheme(teamName);
    const resultCard = document.getElementById("resultCard");
    const teamEmblem = document.getElementById("teamEmblem");

    // 구단 엠블럼, 고유 테마 컬러, 대표 선수 동적 적용
    if (teamTheme) {
        teamEmblem.src = teamTheme.logo;
        teamEmblem.alt = teamTheme.fullName;
        
        resultCard.style.setProperty("--team-primary", teamTheme.primaryColor);
        resultCard.style.setProperty("--team-secondary", teamTheme.secondaryColor);
        resultCard.style.setProperty("--team-bg-tint", teamTheme.bgTint);
        resultCard.style.setProperty("--team-glow", teamTheme.glow);
        resultCard.style.setProperty("--team-badge-bg", teamTheme.badgeBg);
        resultCard.style.setProperty("--team-badge-text", teamTheme.badgeText);

        document.getElementById("pitcherName").innerText = teamTheme.pitcher;
        document.getElementById("batterName").innerText = teamTheme.batter;
    } else {
        teamEmblem.src = "/static/icons/icon-192.png";
        teamEmblem.alt = teamName;
        resultCard.style.setProperty("--team-primary", "#1a4b8c");
        resultCard.style.setProperty("--team-glow", "rgba(26, 75, 140, 0.2)");
        document.getElementById("pitcherName").innerText = "에이스 투수";
        document.getElementById("batterName").innerText = "간판 타자";
    }

    document.getElementById("matchRate").innerText = `매칭률 ${data.match_rate || 90}%`;
    document.getElementById("resultHeadline").innerText = `"${data.headline || ''}"`;
    document.getElementById("primaryTeam").innerText = teamName;
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
    const pitcher = document.getElementById("pitcherName")?.innerText || '';
    const batter = document.getElementById("batterName")?.innerText || '';

    const markdownContent = `# ⚾ 나의 AI KBO 응원팀 매칭 리포트\n\n` +
        `> **${headline}**\n\n` +
        `## 🏆 1순위 추천 구단: ${team} (${matchRate})\n` +
        `- **${subTeam}**\n\n` +
        `---\n\n` +
        `### ⭐ 구단 대표 간판스타\n` +
        `- **⚾ 대표 투수:** ${pitcher}\n` +
        `- **🏏 대표 타자:** ${batter}\n\n` +
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
    currentQuestionIndex = 0;
    renderCurrentQuestion();

    resultSection.classList.add("hidden");
    quizForm.classList.remove("hidden");
    document.getElementById("progressSection").classList.remove("hidden");
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// 앱 시작 시 첫 번째 카드 렌더링
renderCurrentQuestion();
