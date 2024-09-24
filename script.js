// 이건 나중에 수정하자
const textContent = "CSS는 나중에 작성하자";
const textContainer = document.getElementById("animatedText");

textContent.split("").forEach((char, index) => {
  const letterDiv = document.createElement("div");
  letterDiv.classList.add("letter");
  letterDiv.style.animationDelay = `${index * 0.3}s`;
  letterDiv.textContent = char;
  textContainer.appendChild(letterDiv);
});

// 비도 나중에 수정. 이걸로 날씨 표현하면 재밌을듯?
const rainContainer = document.getElementById("rain");

let createRain = () => {
  for (let i = 0; i < 100; i++) {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 0.5 + 0.5}s`;
    drop.style.animationDelay = `${Math.random() * 1}s`;
    rainContainer.appendChild(drop);
  }
};

createRain();
