let i = 1;

while (i > 0) {
  let postsLink = document.querySelector(`#bdk${i}`);
  if (!postsLink) {
    break;
  }

  let idValue = postsLink.id;

  if (idValue.substring(3) == i) {
    (function (i) {
      postsLink.addEventListener("click", () => {
        let pageNumber = i <= 9 ? `0${i}` : `${i}`;
        location.assign(`bdk${pageNumber}.html`);
      });
    })(i);
  }
  i++;
}
