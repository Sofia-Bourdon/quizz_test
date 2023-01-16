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
        image : "assets/images/veg-romanesco.jpeg",
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
        image : "assets/images/Vietnamese-Pho.jpeg",
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
        image : 'assets/images/ribeye_steak.jpeg',
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
          image: 'assets/images/Acai-Berries.jpeg',
          options: [
            'Blueberry',
            'Acai',
            'Boysenberry',
            'Elderberry'
          ],
          correctAnswer: 'Acai'
        },
        {
          questionText: 'Which dessert is this?',
          image : 'assets/images/baklava.jpeg',
          options: [
            'Mille-feuille',
            'Clafoutis',
            'Rum cake',
            'Baklava'
          ],
          correctAnswer: 'Baklava'
        }
    ];


  var optionButtons = document.querySelectorAll('.option-button');
  let questionElement = document.getElementById('question');


  function showQuestion(){

  // replacing the question text content
    questionElement.textContent = QUESTIONS[0].questionText;
  
  // replacing the options content with the content inside the array 
      optionButtons.forEach(function(element, index){
      element.textContent = QUESTIONS[0].options[index];

    })

  }
  showQuestion();


  function selectAnswer(){
    console.log("answer selected");
    this.style.backgroundColor = "lightgray"
  }

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].addEventListener('click', selectAnswer);
  }


  let image = document.getElementById('img_question')
  let nextButton = document.getElementById('next-btn');

  if (nextButton) {
  // changing the question and option content when the next button is clicked
  
    nextButton.addEventListener('click', setNextQuestion)

    function setNextQuestion(){

      console.log("next question ready!");

      // questionElement.textContent = QUESTIONS[1].questionText;
      // image.src = QUESTIONS[1].image;
      // optionButtons.forEach(function(element, index){
      // element.textContent = QUESTIONS[1].options[index];
      // })

      let random = Math.floor(Math.random() * QUESTIONS.length);

      questionElement.innerText = QUESTIONS[random].questionText;

      image.src = QUESTIONS[random].image;

      optionButtons.forEach(function(element, index){
      element.textContent = QUESTIONS[random].options[index];
      })

      }
}
