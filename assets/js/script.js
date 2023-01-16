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

  let resultBox = document.getElementById('result-box')
  
  var optionButtons = document.querySelectorAll('.option-button');
  let questionElement = document.getElementById('question');
  let image = document.getElementById('img_question')
  let nextButton = document.getElementById('next-btn');
  const currentQuestionIndex = 0;


  function showQuestion(){

  // replacing the question text content
  // questionElement.textContent = QUESTIONS[0].questionText;
  questionElement.textContent = QUESTIONS[currentQuestionIndex].questionText;
  
  // replacing the options content with the content inside the array 
      optionButtons.forEach(function(element, index){
      element.textContent = QUESTIONS[currentQuestionIndex].options[index];
    })
  // show image
  image.src = QUESTIONS[currentQuestionIndex].image;
  }
  // showQuestion();

  // function selectAnswer(){
    // console.log("answer selected");
    // this.style.backgroundColor = "lightgray"
  // }

  // for (let i = 0; i < optionButtons.length; i++) {
    // optionButtons[i].addEventListener('click', selectAnswer);
  // }

  // if (nextButton) {
  // changing the question and option content when the next button is clicked
  
    // nextButton.addEventListener('click', setNextQuestion)

    // function setNextQuestion(){
      // console.log("next question ready!");
      // }
      // let random = Math.floor(Math.random() * QUESTIONS.length);
      // questionElement.textContent = QUESTIONS[random].questionText;

    // image.src = QUESTIONS[random].image;

    // optionButtons.forEach(function(element, index){
      // element.textContent = QUESTIONS[random].options[index];
      // })

      // }
  // }

  function onOptionClick(event){
    console.log("answer selected");
    this.style.backgroundColor = "lightgray";
    const selectedAnswer = event.target.textContent;
    // Also check if answer is correct
    if (selectedAnswer ===  QUESTIONS[currentQuestionIndex].correctAnswer) {
      // INcrement the score
      console.log("Correct");
    } else {
      console.log("InCorrect");
    }
  }
  
  function onNextClick(){
    console.log("next question ready!");
    currentQuestionIndex++;
    showQuestion();
  }
  
  function initEventListeners() {
    for (let i = 0; i < optionButtons.length; i++) {
      optionButtons[i].addEventListener('click', onOptionClick);
    }
  
    nextButton.addEventListener('click', onNextClick);
  }
  
  function onPageLoad() {
    initEventListeners();
    showQuestion();
  }
  
  
  document.onload = onPageLoad;
