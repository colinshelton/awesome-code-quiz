const landingEl = document.querySelector("#landingPage");
const startQuiz = document.querySelector("#startBtn");
const startTimer = document.querySelector("#startBtn");
const timeEl = document.querySelector("#time");

// Object containing Q&As
const questionAnswers = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
    correctAnswer: "2. Booleans",
  },
  {
    question: "The condition in an if/else statement is enclosed within_____.",
    answers: [
      "1. quotes",
      "2. curly brackets",
      "3. parenthesis",
      "4. square brackets",
    ],
    correctAnswer: "3. parenthesis",
  },
];
let questionVar = [];

//TIMER:
let secondsLeft = 75;
startTimer.addEventListener("click", function setTime() {
  const timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    var counter = 0;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
  // adds timer to HTML
  function sendMessage() {
    timeEl.textContent = "";
  }
});

//START QUIZ!!
startQuiz.addEventListener("click", function () {
  //leave landing objects
  landingEl.style.display = "none";

  //loop QUESTIONs, display in h2
  for (let i = 0; i < questionAnswers.length; i++) {
    //display current question to user
    let question = document.querySelector(".questions");
    question.textContent = questionAnswers[0].question; //look to answer choices, may need to change index to 'i' -OR question counter??
  }
  //loop ANSWERS, display in appended button
  let answers = questionAnswers[0].answers;
  console.log(answers);
  for (let i = 0; i < answers.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = answers[i];
    console.log(answers[i]);
    //2.append somewhere
    let ul = document.querySelector(".answerChoices");
    ul.appendChild(button);
    //3. add event handler
    button.addEventListener("click", function checkAnswer() {
      // timer decrement
      if (
        this.value.innerHTML !== questionAnswers[questionCount].correctAnswer
      ) {
        console.log(this.value.innerHTML);
        console.log(questionAnswers[questionCount].correctAnswer);
        alert("incorrect");
        secondsLeft = secondsLeft - 10;
        console.log(secondsLeft);
        timeEl.textContent = secondsLeft;
        // end quiz when time runs out
        if (secondsLeft <= 0) {
          secondsLeft = 0;
          endQuiz();
        }
        if (this.value === questionAnswers[questionCount].correctAnswer) {
        }
        //cycle to next question answer index??
      } else {
        alert("correct");
      }
      questionCount++;
      if (questionCount === questionAnswers.length) {
        endQuiz();
      }
    });
  }
});
//Question Counter -->move inside start quiz function in logical place
let questionCount = 0;
function nextQuestion(event) {
  let question = questionAnswers[questionCount]; //compare
  questionCount++;
  if (event === questionAnswers.correctAnswer);
}

// End Quiz
function endQuiz() {
  if (secondsLeft === 0) {
    let allDone = document.querySelector(".questions");
    allDone.textContent = "All done!";
  }
}

// document.getElementById();

// //HIGHSCORES PAGE
// submitbtn.addEventListener("click", function highscores(event) {
//   event.preventDefault();
//   //Array for highscores form:
//   const highscores = {
//     initials: initialsInput.value.trim(),
//     secondsLeft: "",
//   };
//   // validate field
//   if (highscores.initials === "") {
//     displayMessage("error", "initials cannot be blank");
//   } else {
//     displayMessage("success", "you have joined the leaderboard");
//   }
//   // set new submission
//   console.log(highscores);
//   localStorage.setItem("highscores", JSON.stringify(highscores)); //must be ran as string, stringify, to be added to local storage

//   // get most recent submission :: add to leaderboard
//   const lastSubmission = JSON.parse(localStorage.getItem("highscores")); //must be turned back into obj and use obj notation
// });
