// Declare global scope variables
var startButton = document.querySelector("#start");
var timeDisplay = document.querySelector("#time");
var questionTitle = document.querySelector("#question-title");
var choices = document.querySelector("#choices");
var feedback = document.querySelector("#feedback");
var initialsInput = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");

// Declare quiz variables
var quizQuestions = [
    {
        question: "Where is the correct place to insert a JavaScript?", 
        options: ["The <body> section", "Both the <head> section and the <body> section", "The <head> section"], 
        answer: "The <head> section"
    },
    {
    question: "What is the correct syntax for referring to an external script called 'xxx.js'?", 
    options: ["<script src='xxx.js'>", "<script name='xxx.js'>", "<script href='xxx.js'>"], 
    answer: "<script src='xxx.js'> "
}
]

var quizTime = 60;
var currentQuestionIndex = 0;
var timeLeft = quizTime;
var score = 0;
var timerInterval;


// Function to begin quiz
function startQuiz() {
    startButton.style.display = "none";
    document.querySelector("#start-screen").classList.add("hide");
    document.querySelector("#questions").classList.remove("hide");

timerInterval = setInterval(function () {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
    displayQuestion();
}

// Function to display questions
function displayQuestion() {
    if (currentQuestionIndex >= quizQuestions.length) {
      endQuiz();
      return;
    }

var currentQuestion = quizQuestions[currentQuestionIndex];

questionTitle.textContent = currentQuestion.question;
choices.innerHTML = "";

currentQuestion.options.forEach(function (choice, index) {
  var choiceButton = document.createElement("button");
  choiceButton.textContent = choice;
  choiceButton.addEventListener("click", function () {
    confirmAnswer(choice, currentQuestion.answer);
  });

  choices.appendChild(choiceButton);
});
}

// Function to check and compare answer
function confirmAnswer(selectedChoice, correctChoice) {
    if (selectedChoice === correctChoice) {
      feedback.textContent = "Correct!";
      score++;
    } else {
      feedback.textContent = "Incorrect!";
      timeLeft -= 10;
    }

    currentQuestionIndex++;
    setTimeout(function () {
      feedback.textContent = "";
      displayQuestion();
    }, 1000);
  }

  function endQuiz() {
    clearInterval(timerInterval);

    document.querySelector("#questions").classList.add("hide");
    document.querySelector("#end-screen").classList.remove("hide");
    document.querySelector("#final-score").textContent = score;
  }

  


