const startButton = document.getElementById('start-btn');


function startGame(){
  console.log("quiz started");
  window.location.href = "quiz.html";
}

startButton.addEventListener('click', startGame);