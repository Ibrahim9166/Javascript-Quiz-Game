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

  // Show the first question
  showQuestion();
}

