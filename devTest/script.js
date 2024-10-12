const weatherContainer = document.querySelector("#weather");
const controlsMenu = document.querySelector("#controlsMenu");
const menuButton = document.querySelector("#menuButton");
const back99 = document.querySelector(".back99");

// 메뉴 토글 함수
function toggleMenu() {
  controlsMenu.classList.toggle("open"); // 메뉴 열기/닫기 클래스 토글
}

// 비 생성 함수
let createRain = () => {
  back99.style.backgroundColor = "#4a5568";
  document.body.style.backgroundColor = "#4a5568";
  for (let i = 0; i < 100; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
    drop.style.animationDelay = `${Math.random() * 1}s`;
    weatherContainer.appendChild(drop);
  }
};

// 눈 생성 함수
let createSnow = () => {
  back99.style.backgroundColor = "#cbd5e0";
  document.body.style.backgroundColor = "#cbd5e0"; // #e2e8f0 이 색도 예쁨
  for (let i = 0; i < 150; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 2 + 3}s`;
    snowflake.style.animationDelay = `${Math.random() * 4}s`;
    weatherContainer.appendChild(snowflake);
  }
};

function startRain() {
  clearWeather();
  createRain();
  menuButton.style.backgroundImage = "url('/public/rain.png')"; // 비가 시작되면 버튼 배경 변경
}

function startSnow() {
  clearWeather();
  createSnow();
  menuButton.style.backgroundImage = "url('/public/snow.png')"; // 눈이 시작되면 버튼 배경 변경
}

function clearWeather() {
  weatherContainer.innerHTML = "";
  back99.style.backgroundColor = "#f0f2f5";
  document.body.style.backgroundColor = "#f0f2f5";
  menuButton.style.backgroundImage = "url('/public/sunny.png')"; // 초기화하면 기본 햇빛 배경으로 변경
}
