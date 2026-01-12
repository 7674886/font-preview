const preview = document.getElementById("preview");
const styleSelect = document.getElementById("styleSelect");
const fontSelect = document.getElementById("fontSelect");
const fontSize = document.getElementById("fontSize");

// 폰트 리스트
const fontData = {
 gothic: [
  { name: "페이퍼로지", value: "'Paperozi', sans-serif" },
  { name: "프리텐다드", value: "'Pretendard', sans-serif" },
  { name: "SUIT", value: "'Suit', sans-serif" },
  { name: "나눔스퀘어", value: "'NanumSquare', sans-serif" },
  { name: "본고딕", value: "'Noto Sans KR', sans-serif" },
  { name: "엘리스 널리", value: "'Elice DX Neolli', sans-serif" },
  { name: "배민 도현", value: "'Dohyun', sans-serif" },
  { name: "이사만루", value: "'Isamanru', sans-serif" },
  { name: "학교안심 곧은제목", value: "'SchoolSafetyStraightTitle', sans-serif" },
  { name: "에스코어드림", value: "'Escoredream', sans-serif" },
  { name: "G마켓 산스", value: "'GMarketSans', sans-serif" },
  { name: "블랙 한산스", value: "'Black Han Sans', sans-serif" }
],
  myeongjo: [
    { name: "나눔명조", value: "'Nanum Myeongjo', serif" },
    { name: "Noto Serif KR", value: "'Noto Serif KR', serif" },
    { name: "송명", value: "'Song Myung', serif" },
    { name: "고운바탕", value: "'Gowun Batang', serif" }
  ],
  hand: [
    { name: "고운돋움", value: "'Gowun Dodum', sans-serif" },
    { name: "하이멜로디", value: "'Hi Melody', cursive" },
    { name: "가우기", value: "'Gaegu', cursive" }
  ],
  display: [
    { name: "스타일리시", value: "'Stylish', sans-serif" },
    { name: "도현", value: "'Do Hyeon', sans-serif" },
    { name: "블랙한산스", value: "'Black Han Sans', sans-serif" },
    { name: "해바라기", value: "'Sunflower', sans-serif" }
  ]
};

// 폰트 옵션 생성
function updateFontList() {
  fontSelect.innerHTML = "";
  fontData[styleSelect.value].forEach(font => {
    const option = document.createElement("option");
    option.textContent = font.name;
    option.value = font.value;
    fontSelect.appendChild(option);
  });
  preview.style.fontFamily = fontSelect.value;
}

// 이벤트
styleSelect.addEventListener("change", updateFontList);

fontSelect.addEventListener("change", () => {
  preview.style.fontFamily = fontSelect.value;
});

fontSize.addEventListener("input", () => {
  preview.style.fontSize = fontSize.value + "px";
});

// 초기 실행
updateFontList();
