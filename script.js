var descriptionEl = document.querySelector(".description");
var viewHighscoresEl = document.querySelector("#view-highscores");
var startQuizEl = document.querySelector("#start");
var timerEl = document.querySelector("#timer");
var titleEl = document.querySelector(".title");
var questionNumber = -1;
var submitEl = document.createElement("button");
var goBackEl = document.createElement("button");
var clearEl = document.createElement("button");
var InitialEl = document.createElement("p");
var formEl = document.createElement("input");

InitialEl.textContent = "Enter Intials: ";
InitialEl.setAttribute("style", "text-align: left; float: left");

goBackEl.textContent = "Go Back";
goBackEl.classList.add("btn");
goBackEl.classList.add("btn-primary");
goBackEl.classList.add("back");
goBackEl.setAttribute(
  "style",
  "background-color: blueviolet;border: none;margin: left;margin-right: 2%;display: flex;float: left;"
);

clearEl.textContent = "Clear Highscores";
clearEl.classList.add("btn");
clearEl.classList.add("btn-primary");
clearEl.classList.add("clear");
clearEl.setAttribute(
  "style",
  "background-color: blueviolet; border: none; margin: left; display: flex;"
);

submitEl.textContent = "submit";
submitEl.classList.add("btn");
submitEl.classList.add("btn-primary");
submitEl.classList.add("submit");
submitEl.setAttribute(
  "style",
  "background-color: blueviolet; border: none; margin: left; display: flex;"
);

formEl.setAttribute(
  "style",
  "text-align: left;float: left;margin-left: 2%;margin-right: 2%;width: 50%;"
);
formEl.classList.add("form-control");

//Intro Text
descriptionEl.textContent =
  "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!";

//Quiz
var quizObj = {
  question: [
    //0
    "Commonly used data types DO NOT include:",
    "The condition in an if / else statement must be enclose within ____.",
    "Arrays in javascript can be used to store ____.",
    "String values must be enclosed within ____ when being assigned to variables.",
    "A very useful tool used in development and debugging for printing content in the debugger is:",
  ],
  answerOne: [
    //1
    "1. Strings",
    "1. Quotes",
    "1. Numbers and Strings",
    "1. Commas",
    "1. Javascript",
  ],
  answerTwo: [
    //2
    "2. Booleans",
    "2. Curly Brackets",
    "2. Other Arrays",
    "2. Curly Braces",
    "2. Terminal / Bash",
  ],
  answerThree: [
    //3
    "3. Alerts",
    "3. Parenthesis",
    "3. Booleans",
    "3. Quotes",
    "3. For Loops",
  ],
  answerFour: [
    //4
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

clearEl.addEventListener("click", function () {
  descriptionEl.remove();
});

goBackEl.addEventListener("click", function() {
  location.reload();
});

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

submitEl.addEventListener("click", function () {
  titleEl.textContent = "Highscores";
  descriptionEl.textContent = formEl.value;
  descriptionEl.setAttribute(
    "style",
    "text-align: left; background-color: azure; padding-right: 70%; padding-top: 1%; padding-bottom: 1%;"
  );
  document.querySelector(".column").appendChild(goBackEl);
  document.querySelector(".column").appendChild(clearEl);
  InitialEl.remove();
  formEl.remove();
  submitEl.remove();
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
    questionNumber = -1;
    titleEl.textContent = "All Done!";
    aEl.remove();
    bEl.remove();
    cEl.remove();
    dEl.remove();
    descriptionEl = document.createElement("p");
    descriptionEl.textContent = "Your final score is ";
    descriptionEl.setAttribute("style", "text-align: left");
    document.querySelector(".column").appendChild(descriptionEl);
    document.querySelector(".column").appendChild(InitialEl);
    document.querySelector(".column").appendChild(formEl);
    document.querySelector(".column").appendChild(submitEl);
  }
}
