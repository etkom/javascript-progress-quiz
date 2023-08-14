// Declare global scope variables
var startButton = document.querySelector("#start");
var timeDisplay = document.querySelector("#time");
var questionTitle = document.querySelector("#question-title");
var choicesContainer = document.querySelector("#choices");
var feedbackContainer = document.querySelector("#feedback");
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");

// Declare quiz variables
var quizQuestions = [{question: "Where is the correct place to insert a JavaScript?", options: ["The <body> section", "Both the <head> section and the <body> section", "The <head> section"], answer: "The <head> section"},
{question: "What is the correct syntax for referring to an external script called 'xxx.js'?", options: ["<script src='xxx.js'>", "<script name='xxx.js'>", "<script href='xxx.js'>"], answer: "<script src='xxx.js'> "}]

var quizTime = 60;
var currentQuestionIndex = 0;
var timeLeft = quizTime;
var score = 0;
var timerInterval;

function startQuiz() {
    startButton.style.display = "none";
    document.getElementById("start-screen").classList.add("hide");
    document.getElementById("questions").classList.remove("hide");
}