//Question Page elements 
const landingEl = document.querySelector('#landingPage');
const startQuiz = document.querySelector('#startBtn');
const answerChoices = document.querySelector('#answerChoices')
//let questionEl = document.querySelector('#questionPage'); 

// Object containing Q&As
const questionAnswers =
  [
    {
      question: 'Commonly used data types DO NOT include:',
      answers: ['1. Strings', '2. Booleans', '3. Alerts', '4. Numbers'],
      correctAnswer: '2. Booleans'
    },
    {
      question: 'The condition in an if/else statement is enclosed within_____.',
      answers: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
      correctAnswer: '3. parenthesis'
    }

  ];
console.log(questionAnswers[0].answers[0]);
 let answerCho = questionAnswers[0].answers;
 console.log(answerCho.parse);

//START QUIZ, score 0.
let score = 0; //=time remaining 

startQuiz.addEventListener('click', function leaveLanding() {
  //leave landing objects
  landingEl.style.display = 'none';

  //loop over every QUESTION object
  for (let i = 0; i < questionAnswers.length; i++) {

    //display current question to user 
    let question = document.querySelector('.questions');
    question.textContent = questionAnswers[0].question; //some 'i' should work here to ocellate to next question, once correct answer is achieved -
  }
})

// Display corresponding answer choices in button

console.log(parse(questionAnswers[0].answers[0]))

startQuiz.addEventListener('click', function displayAnswers() {

  //loop through, list each answer choice, create button 
  for (let i = 0; i < questionAnswers[0].answers[0].length; i++) {

    //1. Create button
    let button = document.createElement('button');
    button.innerHTML = questionAnswers[0].answers //parse or parseFloat??
    //2.append somewhere
    let ul = document.getElementsByTagName('ul')[0];
    ul.appendChild(button);
    //3. add event handler
    button.addEventListener('click', function () { //will become 'compare answers'
      alert('did it');
    })
  }
})
  // Compare answers
  if (question === questionAnswers[0].correctAnswer) {
    // Increase score
    score++;
    //alert('Correct');
  } else {
    //alert('Wrong!');
  }













// API Activity 10 Light/Dark Mode 
// my idea for marking questions correct or incorrect based on user choice:

    // const themeSwitcher = document.querySelector("#theme-switcher");
    // const container = document.querySelector(".container");
    // let mode = "dark";


    // themeSwitcher.addEventListener("click", function() {
    //     if (mode === "dark") {
    //     mode = "light";
    //     container.setAttribute("class", "light");
    //     }
    //     else {
    //     mode = "dark";
    //     container.setAttribute("class", "dark");
    //     }
    // });