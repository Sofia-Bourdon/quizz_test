const startButton = document.getElementById('start-btn')
let startBox = document.getElementById('start-box')
let questionBox = document.getElementsByClassName('question_box')
let resultBox = document.getElementById('result_box')

startButton.addEventListener('click', startGame)

function startGame(){
    console.log("quiz started");
    window.location.href = "quiz.html";
}

const QUESTIONS = [
    {
      id: 1,
      questionText: 'Can you name this vegetable?',
      options: [
        'Amaranth',
        'Romanesco',
        'Oca',
        'Nopal'
      ],
      correctAnswer: 'Romanesco'
    },
    {
      id: 2,
      questionText: 'What is this dish called?',
      options: [
        'Lo Mein',
        'Udon soup',
        'Pho',
        'Beef Ramen'
      ],
      correctAnswer: 'Pho'
    },
    {
      id: 3,
      questionText: 'Which cut is this?',
      options: [
        'Ribeye',
        'Sirloin',
        'Rump steak',
        'Porterhouse'
      ],
      correctAnswer: 'Ribeye'
    },
    {
        id: 4,
        questionText: 'What is this fruit called?',
        options: [
          'Blueberry',
          'Acai',
          'Boysenberry',
          'Elderberry'
        ],
        correctAnswer: 'Acai'
      },
      {
        id: 5,
        questionText: 'What is this dish called?',
        options: [
          'Mille-feuille',
          'Clafoutis',
          'Rum cake',
          'Baklava'
        ],
        correctAnswer: 'Baklava'
      }
  ];
  
function setQuestion(){

}

function selectAnswer(){

}