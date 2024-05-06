// script.js
document.getElementById('startButton').addEventListener('click', startQuiz);

const questions = [
    { question: "What is the capital of France?", 
        options: ["London", "Paris", "Berlin", "Madrid"], correctAnswer: "Paris" },
    { question: "What is the largest planet in our solar system?", 
        options: ["Mars", "Jupiter", "Saturn", "Neptune"], correctAnswer: "Jupiter" },
    { question: "Who wrote 'Romeo and Juliet'?", 
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"], correctAnswer: "William Shakespeare" },
    { question: "What is the chemical symbol for water?", 
        options: ["O2", "CO2", "H2O", "N2"], correctAnswer: "H2O" },
        { question: "What is the chemical symbol for water?", 
        options: ["O2", "CO2", "H2O", "N2"], correctAnswer: "H2O" },
    { question: "How Much Are you Satisfied with this test",
        options: ["Yes", "no", "somehow", "I can cope"]}
    
];

let currentQuestionIndex = 0;
let correct = 0;
let Incorrect = 0;

function startQuiz() {
    document.getElementById('startButton').style.display = 'none'; // Hide start button
    showQuestion();
    updateScoreDisplay();
    document.getElementById('return').removeAttribute('disabled');

}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = ''; // Clear previous options

    question.options.forEach(option => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.onclick = () => selectAnswer(option, optionButton);
        optionsContainer.appendChild(optionButton);
    });

    document.getElementById('prevButton').disabled = currentQuestionIndex === 0;
    document.getElementById('nextButton').disabled = true; // Disable next until an answer is selected
}

function selectAnswer(selectedOption, optionButton) {
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;
    document.querySelectorAll('#options button').forEach(btn => {
        btn.disabled = true; // Disable all option buttons
        if (btn.textContent === correctAnswer) {
            btn.classList.add('blinking-text');
            btn.classList.add('green'); // Highlight correct answer
        }
        if (btn.textContent !== correctAnswer) {
            // btn.classList.add('blinking-text');
            btn.classList.add('red'); // Mark incorrect answers
        }
    });
    if (selectedOption === correctAnswer) {
        score++;
    }else {
            Incorrect++;
        }
  
    document.getElementById('nextButton').disabled = false; // Enable the next button
    updateScoreDisplay();
}


function updateScoreDisplay() {
    // document.getElementById('incorrectdisp').textContent = `Incorrect: ${incorrect}`;
    document.getElementById('scoreDisplay').textContent = `correct: ${correct}`;
    document.getElementById('totalDisplay').textContent = `Total: ${questions.length}`;
    document.getElementById('scoreDisp').textContent = `Incorrect: ${Incorrect}`;

}

document.getElementById('nextButton').addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        endQuiz();
    }
});

document.getElementById('prevButton').addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

function endQuiz() {
    document.getElementById('question').textContent = "Quiz Completed! contact the whatsapp for price";
    document.getElementById('options').innerHTML = '';
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('prevButton').style.display = 'none';
    document.getElementById('scoreDisplay').textContent = `Final Score: ${correct}`;
}
const back = document.getElementById("return").addEventListener('click', ()=>{
    window.location.href = "./index.html";
})


// const questions = [
//     {
//       question: "What is the capital of France?",
//       options: ["London", "Paris", "Berlin", "Madrid"],
//       correctAnswer: "Paris"
//     },
//     {
//       question: "What is the largest planet in our solar system?",
//       options: ["Mars", "Jupiter", "Saturn", "Neptune"],
//       correctAnswer: "Jupiter"
//     },
//     {
//       question: "Who wrote 'Romeo and Juliet'?",
//       options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
//       correctAnswer: "William Shakespeare"
//     },
//     {
//       question: "What is the chemical symbol for water?",
//       options: ["O2", "CO2", "H2O", "N2"],
//       correctAnswer: "H2O"
//     }
//   ];
  
//   let currentQuestionIndex = 0;
//   let score = 0;
  
//   const questionElement = document.getElementById('question');
//   const optionsElement = document.getElementById('options');
//   const nextButton = document.getElementById('nextButton');
//   const scoreDisplay = document.getElementById('scoreDisplay');
//   const totalDisplay = document.getElementById('totalDisplay');
//   const prevButton = document.getElementById('prevButton');
  
//   function showQuestion() {
//     const currentQuestion = questions[currentQuestionIndex];
//     questionElement.textContent = currentQuestion.question;
//     optionsElement.innerHTML = '';
  
//     currentQuestion.options.forEach(option => {
//       const button = document.createElement('button');
//       button.textContent = option;
//       button.addEventListener('click', function () { checkAnswer(option, button); });
//       optionsElement.appendChild(button);
//     });
//     if (currentQuestionIndex > 0) {
//         prevButton.disabled = false;
//         nextButton.disabled = true;
//       } else {
//         prevButton.disabled = true;
//         nextButton.disabled = true;
//       }
    
//       // Update score and total displays
//       scoreDisplay.textContent = `Score: ${score}`;
//       totalDisplay.textContent = `Total: ${questions.length}`;
//       nextButton.disabled = false; // Disable the next button until an answer is selected
//     // Update score and total displays
//     scoreDisplay.textContent = `Score: ${score}`;
//     totalDisplay.textContent = `Total: ${questions.length}`;
//   }
  
//   function checkAnswer(selectedOption, button) {
//     const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  
//     document.querySelectorAll('#options button').forEach(btn => {
//       btn.disabled = true; // Disable all buttons
//       if (btn.textContent === correctAnswer) {
//         btn.classList.add('green'); // Highlight correct answer
//       }
//     });
  
//     if (selectedOption === correctAnswer) {
//       score++;
//       button.classList.add('green');
//     } else {
//       button.classList.add('red');
//     }
  
//     // Enable the next button after an answer is selected
//     nextButton.disabled = false;
//   }
  
//   function showNextQuestion() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//       showQuestion();
//       nextButton.disabled = true; // Disable the next button until an answer is selected
//     } else {
//       endQuiz();
//     }
//   }

//   function showPrevQuestion() {
//     if (currentQuestionIndex > 0) {
//       currentQuestionIndex--;
//       showQuestion();
//       nextButton.disabled = true;  // Ensure the next button is disabled until a new answer is selected
//     }
//     // Disable the previous button if we are at the first question
//     if (currentQuestionIndex === 0) {
//       prevButton.disabled = true;
//     }
//   }
//   prevButton.addEventListener('click', showPrevQuestion);

  
//   function endQuiz() {
//     questionElement.textContent = "Quiz Completed!";
//     optionsElement.innerHTML = '';
//     nextButton.style.display = 'none';
//     scoreDisplay.textContent = `Final Score: ${score}`;
//   }
  
//   nextButton.addEventListener('click', showNextQuestion);
//   nextButton.disabled = true; // Initially disable the next button
  
//   // Initialize the quiz
//   showQuestion();
  
