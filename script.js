var descriptionEl = document.querySelector(".description");
var viewHighscoresEl = document.querySelector("#view-highscores");
var startQuizEl = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var titleEl = document.querySelector(".title");
var questionNumber = -1;

//Intro Text
descriptionEl.textContent =
  "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

//Quiz
var quizObj = {
  question: [ //0
    "Commonly used data types DO NOT include:",
    "The condition in an if / else statement must be enclose within ____.",
    "Arrays in javascript can be used to store ____.",
    "String values must be enclosed within ____ when being assigned to variables.",
    "A very useful tool used in development and debugging for printing content in the debugger is:",
  ],
  answerOne: [ //1
    "1. Strings",
    "1. Quotes",
    "1. Numbers and Strings",
    "1. Commas",
    "1. Javascript",
  ],
  answerTwo: [ //2
    "2. Booleans",
    "2. Curly Brackets",
    "2. Other Arrays",
    "2. Curly Braces",
    "2. Terminal / Bash",
  ],
  answerThree: [ //3
    "3. Alerts",
    "3. Parenthesis",
    "3. Booleans",
    "3. Quotes",
    "3. For Loops",
  ],
  answerFour: [ //4
    "4. Numbers",
    "4. Square Brackets",
    "4. All of the above",
    "4. Parenthesis",
    "4. Console Log",
  ],
  correctValue: ["3", "3", "1", "4", "4"],
};

//Answers
var aEl = document.createElement("button");
aEl.classList.add("btn");
aEl.classList.add("btn-primary");
aEl.classList.add("answer");
aEl.setAttribute(
  "style",
  "background-color: blueviolet; border: none; margin: left; display: flex; margin-top: 5%;"
);

var bEl = document.createElement("button");
bEl.classList.add("btn");
bEl.classList.add("btn-primary");
bEl.classList.add("answer");
bEl.setAttribute(
  "style",
  "background-color: blueviolet; border: none; margin: left; display: flex; margin-top: 1%;"
);

var cEl = document.createElement("button");
cEl.classList.add("btn");
cEl.classList.add("btn-primary");
cEl.classList.add("answer");
cEl.setAttribute(
  "style",
  "background-color: blueviolet; border: none; margin: left; display: flex; margin-top: 1%;"
);

var dEl = document.createElement("button");
dEl.classList.add("btn");
dEl.classList.add("btn-primary");
dEl.classList.add("answer");
dEl.setAttribute(
  "style",
  "background-color: blueviolet; border: none; margin: left; display: flex; margin-top: 1%;"
);

//events
viewHighscoresEl.addEventListener("click", function () {});

startQuizEl.addEventListener("click", function () {
  descriptionEl.remove();
  startQuizEl.remove();
  generateContent();
});

aEl.addEventListener("click", function () {
  generateContent();
});
bEl.addEventListener("click", function () {
  generateContent();
});
cEl.addEventListener("click", function () {
  generateContent();
});
dEl.addEventListener("click", function () {
  generateContent();
});

//functions

function generateContent() {
  questionNumber++;
  if (questionNumber < 5) {
  titleEl.textContent = quizObj.question[questionNumber];
  aEl.textContent = quizObj.answerOne[questionNumber];
  bEl.textContent = quizObj.answerTwo[questionNumber];
  cEl.textContent = quizObj.answerThree[questionNumber];
  dEl.textContent = quizObj.answerFour[questionNumber];
  titleEl.setAttribute("style", "text-align: left");
  document.querySelector(".column").appendChild(aEl);
  document.querySelector(".column").appendChild(bEl);
  document.querySelector(".column").appendChild(cEl);
  document.querySelector(".column").appendChild(dEl);
} else {
  titleEl.textContent = "All Done!"
  aEl.remove();
  bEl.remove();
  cEl.remove();
  dEl.remove();
}
}
