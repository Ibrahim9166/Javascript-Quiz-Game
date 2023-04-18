// quiz questions and answers
const questions = [
    {
      question: "Inside which HTML element do we put the JavaScript",
      options: [
        "<js>;",
        "var = blue;",
        "<javascript>;",
        "<script>;"
      ],
      answer: "<script>;"
    },
    {
        question: "Where is the correct place to insert a JavaScript?",
        options: [
          "<head> and <body>",
          "<head>",
          "<body>",
          "<footer>"
        ],
        answer: "<head> and <body>"
      },
      {
        question: "How can you add a comment in a JavaScript?",
        options: [
          "//",
          "<!-- blah -->",
          "' '",
        ],
        answer: "//"
      }
    ];

    // define quiz stats 
    let currentQuestionIndex = 0;
    let timeLeft = 60;
    let score = 0;
    let highScores = [];

    // put in html elements
    const startButton = document.getElementById("start-button");
    const quizContainer = document.getElementById("quiz-container");
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const timerElement = document.getElementById("timer");
    const scoreForm = document.getElementById("score-form");
    const initialsInput = document.getElementById("initials-input");
    const scoreList = document.getElementById("score-list");

    
    function setTimeLeft(time) {
        timerElement.innerText = timeLeft;
      }
      

    //event listeners 
    startButton.addEventListener("click", startQuiz);
    optionsElement.addEventListener("click", checkAnswer);
    scoreForm.addEventListener("submit", saveScore);

    // Function to start the quiz
function startQuiz() {
    // Hide the start button
    startButton.classList.add("hide");

     // Show the quiz container and start the timer
  quizContainer.classList.remove("hide");
  setTimeLeft(timeLeft);
  setInterval(() => {
    timeLeft--;
    setTimeLeft(timeLeft);
    if (timeLeft === 0) {
      endQuiz();
    }
  }, 1000);

  // Show first question
  showQuestion();
}

// Function to show the current question
function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.innerText = question.question;
    optionsElement.innerHTML = "";
    for (const option of question.options) {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
    }
  }

  // Function to check the answer and go to the next one
function checkAnswer(event) {
    const selectedButton = event.target;
    const selectedAnswer = selectedButton.innerText;
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer) {
      score++;
    } else {
      timeLeft -= 10;
      if (timeLeft < 0) {
        timeLeft = 0;
      }
      setTimeLeft(timeLeft);
    }
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      showQuestion();
    }
  }

  // Function to end quiz and show the score
  function endQuiz() {
    quizContainer.classList.add("hide");
    scoreForm.classList.remove("hide");
    const messageElement = document.getElementById("message");

  
    const scoreElement = document.getElementById("score");
    if (scoreElement) {
      scoreElement.innerText = score;
    }
  
    const finalScoreElement = document.getElementById("final-score");
    if (finalScoreElement) {
      finalScoreElement.innerText = score;
    }
  
    if (messageElement){
      const message = `Congratulations, you got ${score} out of ${questions.length}!`;
      messageElement.innerText = message;
    }

    showHighScores();
  }
  
  
  // Function to save score and show high score
  function saveScore(event) {
    event.preventDefault();
    const initials = initialsInput.value.trim();
    if (initials !== "") {
      highScores.push({
        initials: initials,
        score: score
      });
      console.log(highScores);
      highScores.sort((a, b) => b.score - a.score);
      localStorage.setItem("highScores", JSON.stringify(highScores));
      showHighScores();
      if (scoreList.classList.contains("hide")) {
        showHighScores();
    }
  }

  // to show the high scores
  function showHighScores() {
    const highScoresList = JSON.parse(localStorage.getItem("highScores")) || [];
    console.log(highScoresList)
    highScoresList.sort((a, b) => b.score - a.score);
    const scoreList = document.getElementById("score-list");

    scoreForm.classList.add("hide");
    scoreList.classList.remove("hide");
    scoreList.innerHTML = "";

    const ul = document.createElement("ul");
    highScoresList.forEach((score) => {
        const li = document.createElement("li"); 
        console.log(score);
        li.innerText = `${score.initials} - ${score.score}`;
        ul.appendChild(li);
  });
  
    for (const score of highScoresList) {
      const li = document.createElement("li");
      li.innerText = `${score.initials} - ${score.score}`;
      scoreList.appendChild(li);
    }
  }
  
  function checkAnswer(event) {
    const selectedButton = event.target;
    const selectedAnswer = selectedButton.innerText;
    const correctAnswer = questions[currentQuestionIndex].answer;
    const messageElement = document.getElementById("message");
  
    if (selectedAnswer === correctAnswer) {
      score++;
      messageElement.innerText = "Correct!";
      messageElement.classList.remove("wrong");
    } else {
      timeLeft -= 10;
      if (timeLeft < 0) {
        timeLeft = 0;
      }
      setTimeLeft(timeLeft);
      messageElement.innerText = "Wrong!";
      messageElement.classList.add("wrong");
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      endQuiz();
    } else {
      showQuestion();
    }
  }
  
  function displayHighScores() {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  
    highScores.sort(function(a, b) {
      return b.score - a.score;
    });
  
    var scoreList = document.getElementById("score-list");
    var scoreItems = "";
  
    for (var i = 0; i < highScores.length; i++) {
      scoreItems += "<li id='score-item'>" +
        "<span>" + highScores[i].initials + "</span>" +
        "<span>" + highScores[i].score + "</span>" +
        "</li>";
    }
  
    scoreList.querySelector("ul").innerHTML = scoreItems;
  }
}