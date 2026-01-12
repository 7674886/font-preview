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
  { name: "부크크명조", value: "'BookkMyungjo', serif" },
  { name: "리디바탕", value: "'Ridibatang', serif" },
  { name: "조선신명조", value: "'JoseonShinmyeongjo', serif" },
  { name: "조선굵은명조", value: "'JoseonBoldMyongjo', serif" },
  { name: "마루부리", value: "'MaruBuri', serif" },
  { name: "마포애민", value: "'MapoAemin', serif" },
  { name: "마포꽃섬", value: "'MapoFlowerIsland', serif" },
  { name: "HS 봄바람체 2.1", value: "'HsBombaram21', serif" },
  { name: "전남교육 또박체", value: "'JeonnamEducationTtobaks', serif" },
  { name: "국립박물관문화재단 클래식", value: "'MuseumCulturalFoundationClassic', serif" },
  { name: "산돌국대떡볶이체", value: "'SandoolGukdaeTteokbokki', serif" }
],
  handwriting: [
    { name: "tvN 즐거운이야기", value: "'JoyfulStory', cursive" },
    { name: "코트라 희망체", value: "'KotraHope', cursive" },
    { name: "온글잎 밑미", value: "'MitmiFont', cursive" },
    { name: "온글잎 박다현체", value: "'OngleipParkDahyeon', cursive" },
    { name: "학교안심 꾸러기", value: "'SchoolSafetyKid', cursive" },
    { name: "배찌체", value: "'NexonBazzi', cursive" },
    { name: "전남교육 유나체", value: "'JeonnamEducationYuna', cursive" },
    { name: "잉크립퀴드체", value: "'InkLiquid', cursive" },
    { name: "이서윤체", value: "'IsYun', cursive" }
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
