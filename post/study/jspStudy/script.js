let i = 1;

while (i > 0) {
  let postsLink = document.querySelector(`#jsp${i}`);
  if (!postsLink) {
    break;
  }

  let idValue = postsLink.id;

  if (idValue.substring(3) == i) {
    (function (i) {
      postsLink.addEventListener("click", () => {
        let pageNumber = i <= 9 ? `0${i}` : `${i}`;
        location.assign(`jsp${pageNumber}.html`);
      });
    })(i);
  }

  i++;
}
