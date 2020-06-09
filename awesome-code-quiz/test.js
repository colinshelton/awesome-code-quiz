// let button = document.createElement('button');
//       button.innerHTML = 'questionAnswers[0].answers' //parse or parseFloat??
//       //2.append somewhere
//       let li = document.getElementsByTagName('li')[0];
//       li.appendChild(button);
//       //3. add event handler
//       button.addEventListener ('click', function() { //will become 'compare answers'
//         alert('did it');
//       })


// may be helpful when adding event listener to select answer choices:
    //more research on 'event.target'

//reseach 'JSON Objects' for ref array within obj correctly for answers choices 

startQuiz.addEventListener('click', function displayAnswers(event) {
    if (event.target.match('li')) {
      const button = document.createElement('button');
      button.textContent = questionAnswers[]
    }