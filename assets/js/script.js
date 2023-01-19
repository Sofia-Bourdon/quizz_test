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
        image : "assets/images/vietnamese-pho.jpeg",
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
          image: 'assets/images/acai-berries.jpeg',
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

  let questionBox = document.getElementById('question-box');
  let resultBox = document.getElementById('result-box');
  var optionButtons = document.querySelectorAll('.option-button');
  let questionElement = document.getElementById('question');
  let image = document.getElementById('img_question');
  let nextButton = document.getElementById('next-btn');
  let quitButton = document.querySelectorAll('.quit-button');

  let currentQuestionIndex = 0;

  function showQuestion(){

    questionElement.textContent = QUESTIONS[currentQuestionIndex].questionText;
    image.src = QUESTIONS[currentQuestionIndex].image;
    optionButtons.forEach(function(element, index){
    element.style.backgroundColor = "aliceblue"
    element.textContent = QUESTIONS[currentQuestionIndex].options[index];
    });
  }

  function onOptionClick(event){
    console.log("answer selected");
    const correctOption = QUESTIONS[currentQuestionIndex].correctAnswer;
    console.log(correctOption)
    disableButtons();
    const selectedAnswer = event.target.textContent;
    // Also check if answer is correct
    if (selectedAnswer ===  correctOption) {
    // Increment the score
      console.log("Correct");
      alert("You got it right!! That was a tough one!");
      this.style.backgroundColor = "rgb(124, 187, 124)";
      incrementScore();
    } else {
      console.log("Incorrect");
      alert("AWW that was the wrong one... You'll get it right next time!");
      this.style.backgroundColor = "rgb(248, 69, 69)";
      displayRightAnswer(correctOption);
    }
    disableButtons();
  }

  function displayRightAnswer(correctOption)
  {
    for (let i = 0; i < optionButtons.length; i++){
      if (optionButtons[i].innerHTML == correctOption){
        optionButtons[i].style.backgroundColor = "rgb(124, 187, 124)"
      }
    }
  }
  
  function onNextClick(){
    currentQuestionIndex++;
    enableButtons();
    if(currentQuestionIndex < QUESTIONS.length){
      showQuestion();
    } else{
      questionBox.style.display = "none"
      displayResultBox();
    }
  }

  function onQuitClick(){
    console.log("quit");
    window.location.href = "index.html";
  }
  
  function initEventListeners() {
    for (let i = 0; i < optionButtons.length; i++) {
      optionButtons[i].addEventListener('click', onOptionClick);
    }
    nextButton.addEventListener('click', onNextClick);
    console.log("Event listeners initialized");
    
    quitButton.forEach(function (i) {
      i.addEventListener('click', onQuitClick);
    });
  }
  
  function onPageLoad() {
    initEventListeners();
    showQuestion();
  }
  
  window.addEventListener('DOMContentLoaded', () => { onPageLoad() });

  function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    console.log(oldScore);
  }

  function displayResultBox(){
    console.log("result ready!");
    resultBox.classList.remove('hide');
    resultBox.classList.add('result_box');
  }

  function disableButtons()
  {
      for (let i = 0; i < optionButtons.length; i++){
        optionButtons[i].disabled = true;
      }           
  }

  function enableButtons()
  {
      for (let i = 0; i < optionButtons.length; i++){
        optionButtons[i].disabled = false;
      }           
  }
