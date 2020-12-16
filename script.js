var descriptionEl = document.querySelector(".description");
var viewHighscoresEl = document.querySelector("#view-highscores");
var startQuizEl = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var titleEl = document.querySelector(".title");

descriptionEl.textContent =
  "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

var aEl = document.createElement("button");
aEl.classList.add("btn");
aEl.classList.add("btn-primary");
aEl.setAttribute("style", "background-color: blueviolet; border: none; margin: left; display: flex; margin-top: 5%;");

var bEl = document.createElement("button");
bEl.classList.add("btn");
bEl.classList.add("btn-primary");
bEl.setAttribute("style", "background-color: blueviolet; border: none; margin: left; display: flex; margin-top: 1%;");

var cEl = document.createElement("button");
cEl.classList.add("btn");
cEl.classList.add("btn-primary");
cEl.setAttribute("style", "background-color: blueviolet; border: none; margin: left; display: flex; margin-top: 1%;");

var dEl = document.createElement("button");
dEl.classList.add("btn");
dEl.classList.add("btn-primary");
dEl.setAttribute("style", "background-color: blueviolet; border: none; margin: left; display: flex; margin-top: 1%;");

viewHighscoresEl.addEventListener("click", function () {});

startQuizEl.addEventListener("click", function () {
  titleEl.textContent = "Commonly used data types DO NOT include:";
  titleEl.setAttribute("style", "text-align: left");
  descriptionEl.remove();
  startQuizEl.remove();
  aEl.textContent = "strings"
  bEl.textContent = "booleans"
  cEl.textContent = "alerts"
  dEl.textContent = "numbers"
  document.querySelector(".column").appendChild(aEl);
  document.querySelector(".column").appendChild(bEl);
  document.querySelector(".column").appendChild(cEl);
  document.querySelector(".column").appendChild(dEl);
});
