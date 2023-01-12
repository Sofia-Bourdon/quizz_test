const startButton = document.getElementById('start-btn');
let resultBox = document.getElementById('result-box')

if (startButton){

  startButton.addEventListener('click', startGame)

  function startGame(){
    console.log("quiz started");
    window.location.href = "quiz.html";
  }
}

  const QUESTIONS = [
      {
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

  const nextButton = getElementById("next-btn");
  const quitButton = getElementById("quit-btn");

  function showQuestion(){

  // replacing the question text content
    let questionElement = document.getElementById('question');
    questionElement.textContent = QUESTIONS[0].questionText;
  
  // replacing the options content with the content inside the array 
    let optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach(function(element, index){
      element.textContent = QUESTIONS[0].options[index];
    })
  }

  function selectAnswer(){

  }

  showQuestion();