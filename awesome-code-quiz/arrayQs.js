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
  }
];

function buildQuiz() {
  // variable to store the html output 
  const questionVar = [];

  // and for each avaiable answer 
  for (letter in currentQuestion.answers) {
    // ...add an HTML radio button 
    answers.push(
      `<label>
        <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}     
      </label>`
    );
  }
  // add this question and its answers to the output 
  output.push(
    `<div class="question"> ${currentQuestion.question} </div>
    <div class= "answers"> ${answer.join('')} </div>`
  );
}

let index = 0;

//TIMER:
let secondsLeft = 75;
startTimer.addEventListener("click", function setTime() {
  const timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;

    if (secondsLeft <= 0) {
      secondsLeft = 0;
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
  // adds timer to HTML
  function sendMessage() {
    timeEl.textContent = "Time: 0";
  }
});

// // START QUIZ!!
// startQuiz.addEventListener('click', function () {
//   landingEl.style.display = 'none';

//   for (let i = 0; i < questionAnswers.length - 1; i++) {

//     // call QUESTIONS
//     let h2 = document.querySelector(".questions");
//     const question = questionAnswers[index];
//     h2.innerHTML = questionAnswers[i].question;

//     // call CHOICES 
//     let choices = document.createElement('button');
//     const answer = questionAnswers[index]
//     choices.innerHTML = questionAnswers[index].answers;

//     // append to a button 
//     let ul = document.querySelector('.answerChoices');
//     ul.append(choices);

//     // what happens when user selects answer 
//     choices.addEventListener('click', function () {
//       if (this.value.innerHTML !== questionAnswers[index].correctAnswer) {
//         alert("incorrect");
//         secondsLeft = secondsLeft - 10;
//       }
//       if (this.value.innerHTML === questionAnswers[index].correctAnswer) {
//         index++;
//       }
//     })


//   };
// });

//START QUIZ!!
startQuiz.addEventListener("click", function () {
  // //leave landing objects
  landingEl.style.display = "none";
  let ul = document.querySelector(".answerChoices");


  //display current question to user
  let question = document.querySelector(".questions");
  const currentQ = questionAnswers[index];
  let li = document.createElement("li");
  question.textContent = questionAnswers[index].question;
  while (question.hasChildNodes()) {
    question.removeChild(question.firstChild);
  }
  ul.appendChild(question);
  question.appendChild(li)

  //loop ANSWERS, display in appended button
  let answers = questionAnswers[0].answers;
  console.log(answers);
  for (let i = 0; i < currentQ.answers.length; i++) {
    let button = document.createElement("button");
    button.innerHTML = answers[i];
    console.log(answers[i]);
    //2.append somewhere
    //let ul = document.querySelector(".answerChoices");
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
