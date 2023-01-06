const startButton = document.getElementById('start-btn')
let startBox = document.getElementById('start-box')
let questionBox = document.getElementsByClassName('question_box')
let resultBox = document.getElementById('result_box')

startButton.addEventListener('click', startGame)

function startGame(){
    console.log("quiz started");
    startBox.classList.add('hide')
    questionBox.classList.remove('hide')

}

function selectAnswer(){

}