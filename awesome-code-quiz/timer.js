const startTimer = document.querySelector("#startBtn");
const timeEl = document.querySelector("#time");

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
});

function sendMessage() {
  timeEl.textContent = "";
}
