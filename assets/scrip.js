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
    
