const body = document.querySelector("body");

window.addEventListener("resize", WindowResize);

function WindowResize() {
  const windowSize = window.innerWidth;
  if (windowSize > 1200) {
    // purple
    body.classList.add("large");
    body.classList.remove("medium");
    body.classList.remove("small");
  } else if (windowSize > 800) {
    // orange
    body.classList.remove("large");
    body.classList.add("medium");
    body.classList.remove("small");
  } else {
    // blue
    body.classList.remove("large");
    body.classList.remove("medium");
    body.classList.add("small");
  }
}
