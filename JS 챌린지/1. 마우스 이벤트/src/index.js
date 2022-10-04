const colors = ["Green", "Blue", "Orange", "Purple"];
const title = document.querySelector("h2");

const handleEvent = {
  enter: function () {
    title.innerText = "Green!";
    title.style.color = colors[0];
  },
  leave: function () {
    title.innerText = "Blue!";
    title.style.color = colors[1];
  },
  click: function () {
    title.innerText = "Right click!";
    title.style.color = colors[2];
  },
  auxClick: function () {
    title.innerText = "Orange!";
    title.style.color = colors[3];
  },
};

title.addEventListener("mouseenter", handleEvent.enter);
title.addEventListener("mouseleave", handleEvent.leave);
title.addEventListener("click", handleEvent.click);
title.addEventListener("auxclick", handleEvent.auxClick);


