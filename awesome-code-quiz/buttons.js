const startQuiz = document.querySelector('#startBtn');
const landingEl = document.querySelector('#landingPage');



// create 4 buttons 

startQuiz.addEventListener('click', function leaveLanding(event) {
    landingEl.style.display = 'none';
    if (event.target.matches('li')) {
        const buttons = document.createElement('button');
        buttons.innerHTML = '';
        li.appendChild('button');
    }
})

// use function (event) to place event listener 

//continue by choice evaluation 