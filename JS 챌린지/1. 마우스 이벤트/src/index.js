// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

const h2 = document.querySelector("h2");

const superEventHandler = {
  handleEnter: function () {
    h2.innerText = "The mouse is here!";
    h2.style.color = colors[0];
  },
  handleLeave: function () {
    h2.innerText = "The mouse in gone!";
    h2.style.color = colors[1];
  },
  handleAuxclick: function () {
    h2.innerText = "Right click!";
    h2.style.color = colors[2];
  },
  handleResize: function () {
    h2.innerText = "Window is resized!";
    h2.style.color = colors[3];
  }
};

h2.onmouseenter = superEventHandler.handleEnter;
h2.onmouseleave = superEventHandler.handleLeave;
h2.onauxclick = superEventHandler.handleAuxclick;
window.onresize = superEventHandler.handleResize;
