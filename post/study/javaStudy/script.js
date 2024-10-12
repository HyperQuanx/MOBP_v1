let i = 1;

while (i > 0) {
  let postsLink = document.querySelector(`#java${i}`);
  if (!postsLink) {
    break;
  }

  let idValue = postsLink.id;

  if (idValue.substring(4) == i) {
    (function (i) {
      postsLink.addEventListener("click", () => {
        let pageNumber = i <= 9 ? `0${i}` : `${i}`;
        location.assign(`java${pageNumber}.html`);
      });
    })(i);
  }

  i++;
}

const autoResize = (textarea) => {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight - 30 + "px";
};

document.addEventListener("DOMContentLoaded", function () {
  const textareas = document.querySelectorAll(".javaCode");
  textareas.forEach(autoResize);
});
