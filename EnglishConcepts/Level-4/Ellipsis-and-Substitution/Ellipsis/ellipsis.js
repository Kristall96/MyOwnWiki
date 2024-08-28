let ellipsisQuiz = [
  {
    question:
      "What does the ellipsis in 'I can cook Italian, and she ___ Chinese' imply?",
    options: {
      A: "She can cook Chinese",
      B: "She can cook Italian",
      C: "She cannot cook",
      D: "She can cook French",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis means that 'can cook' is omitted because it is implied.",
  },
  {
    question:
      "In 'Tom will do the project, and I ___,' what does the ellipsis imply?",
    options: {
      A: "I will do the project",
      B: "I will not do the project",
      C: "I will start a new project",
      D: "I will review the project",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis indicates that 'will do the project' is omitted because it is understood.",
  },
  {
    question:
      "What is the implied meaning of the ellipsis in 'She finished her homework, and he ___'?",
    options: {
      A: "He finished his homework",
      B: "He started his homework",
      C: "He did not do his homework",
      D: "He helped her with homework",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis shows that 'finished his homework' is omitted because it is implied.",
  },
  {
    question:
      "In the sentence 'I love reading books, and my sister ___,' what does the ellipsis indicate?",
    options: {
      A: "My sister loves reading books",
      B: "My sister dislikes reading books",
      C: "My sister reads magazines",
      D: "My sister writes books",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis indicates that 'loves reading books' is omitted as it is understood.",
  },
  {
    question:
      "What does the ellipsis in 'We will meet at the cafe, and they ___ at the restaurant' signify?",
    options: {
      A: "They will meet at the restaurant",
      B: "They will meet at the cafe",
      C: "They will not meet",
      D: "They will go home",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis suggests that 'will meet' is omitted because it is implied.",
  },
  {
    question:
      "In 'She wants to visit Paris, and he ___ London,' what does the ellipsis imply?",
    options: {
      A: "He wants to visit London",
      B: "He wants to visit Paris",
      C: "He does not want to visit London",
      D: "He prefers staying home",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis indicates that 'wants to visit' is omitted because it is understood.",
  },
  {
    question:
      "What does the ellipsis in 'I studied hard for the test, and my friend ___' mean?",
    options: {
      A: "My friend studied hard for the test",
      B: "My friend did not study",
      C: "My friend took a break",
      D: "My friend did not take the test",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis shows that 'studied hard for the test' is omitted as it is understood.",
  },
  {
    question:
      "In the sentence 'He can play the guitar, and she ___ the piano,' what does the ellipsis imply?",
    options: {
      A: "She can play the piano",
      B: "She can play the guitar",
      C: "She cannot play any instrument",
      D: "She can play the violin",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis indicates that 'can play' is omitted because it is implied.",
  },
  {
    question:
      "What is the implied meaning of the ellipsis in 'I bought a new car, and my brother ___ a new bike'?",
    options: {
      A: "My brother bought a new bike",
      B: "My brother bought a new car",
      C: "My brother rented a bike",
      D: "My brother did not buy anything",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis means that 'bought a new bike' is omitted as it is understood.",
  },
  {
    question:
      "In 'She made dinner, and he ___ the dishes,' what does the ellipsis signify?",
    options: {
      A: "He did the dishes",
      B: "He made dinner",
      C: "He cleaned the kitchen",
      D: "He went out to eat",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis indicates that 'did the dishes' is omitted because it is understood.",
  },
  {
    question:
      "What does the ellipsis in 'They traveled to Spain, and we ___ to Italy' imply?",
    options: {
      A: "We traveled to Italy",
      B: "We traveled to Spain",
      C: "We stayed at home",
      D: "We went to France",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis shows that 'traveled to Italy' is omitted as it is implied.",
  },
  {
    question:
      "In the sentence 'She likes classical music, and he ___ rock music,' what is the implied meaning of the ellipsis?",
    options: {
      A: "He likes rock music",
      B: "He dislikes rock music",
      C: "He likes classical music",
      D: "He prefers jazz music",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis indicates that 'likes rock music' is omitted because it is understood.",
  },
  {
    question:
      "What does the ellipsis in 'I will meet you at 5 PM, and he ___ at 6 PM' signify?",
    options: {
      A: "He will meet you at 6 PM",
      B: "He will meet you at 5 PM",
      C: "He will meet you at 7 PM",
      D: "He will not meet you",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis means that 'will meet you' is omitted because it is implied.",
  },
  {
    question:
      "In 'She solved the problem, and he ___ the solution,' what does the ellipsis imply?",
    options: {
      A: "He found the solution",
      B: "He ignored the solution",
      C: "He created the problem",
      D: "He asked for help",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis indicates that 'found the solution' is omitted because it is understood.",
  },
  {
    question:
      "What is the meaning of the ellipsis in 'I enjoy hiking, and my friend ___ biking'?",
    options: {
      A: "My friend enjoys biking",
      B: "My friend enjoys hiking",
      C: "My friend dislikes biking",
      D: "My friend prefers swimming",
    },
    correctAnswer: "A",
    explanation:
      "The ellipsis means that 'enjoys biking' is omitted as it is implied.",
  },
];

let quiz_container = document.getElementById("quizContainer");
let result_div = document.getElementById("result");
let result_container = document.getElementById("resultText"); // Correctly targets the #resultText element
let submit_quiz = document.getElementById("submit");
let reset_quiz = document.getElementById("reset");

// Shuffle function for randomizing questions
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

shuffle(ellipsisQuiz);

// Display questions dynamically
function display_questions() {
  ellipsisQuiz.forEach((element, index) => {
    let questionNumber = index + 1;
    let question_div = document.createElement("div");
    question_div.id = "questionsDiv";

    question_div.innerHTML = `<h2 id="questionNumberAndQuestion">${questionNumber}. ${element.question}</h2>`;

    quiz_container.appendChild(question_div);
    let options_div = document.createElement("div");
    options_div.id = "optionsDiv";

    for (const [key, value] of Object.entries(element.options)) {
      let options_inner_div = document.createElement("div");
      options_inner_div.id = "optionsInnerDiv";
      let radio_button = document.createElement("input");
      radio_button.type = "radio";
      radio_button.name = `question${index}`;
      radio_button.id = `radioButton-${index}-${key}`;
      radio_button.value = value;
      let label = document.createElement("label");
      label.textContent = `${key}: ${value}`;

      options_inner_div.appendChild(radio_button);
      question_div.appendChild(options_div);
      options_inner_div.appendChild(label);
      options_div.appendChild(options_inner_div);
    }
    let explanation = document.createElement("div");
    explanation.classList = "explanation";

    explanation.style.display = "none";
    question_div.appendChild(explanation);
  });
}
display_questions();

// Submit quiz and calculate score
submit_quiz.addEventListener("click", function () {
  let score = 0;
  let questions = ellipsisQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  ellipsisQuiz.forEach((element, index) => {
    let radio_button = document.querySelector(
      `input[name="question${index}"]:checked`
    );

    let explanation = document.querySelectorAll(".explanation")[index];
    explanation.style.display = "block";

    if (radio_button) {
      if (radio_button.value === element.correctAnswer) {
        score++;
        explanation.style.color = "green";
        explanation.innerHTML = `<p>Correct! - "${element.correctAnswer}" is the right answer</p><p>Explanation: ${element.explanation}</p>`;
      } else {
        explanation.style.color = "red";
        explanation.innerHTML = `<p>Incorrect! - "${element.correctAnswer}" is the right answer</p><p>Explanation: ${element.explanation}<p/>`;
      }
    } else {
      explanation.innerHTML = `<p>No Answer Selected</p><p>The correct answer is: ${element.correctAnswer}<p/><p>Explanation: ${element.explanation}</p>`;
    }
  });

  result_container.textContent = `Your score is: ${score} out of ${questions}`;
  result_div.style.display = "block"; // Ensure result div is displayed
});

// Reset quiz functionality
reset_quiz.addEventListener("click", function () {
  // Clear all radio button selections
  document.querySelectorAll("input[type=radio]").forEach((element) => {
    element.checked = false;
  });

  // Hide all explanations and clear their content
  document.querySelectorAll(".explanation").forEach((element) => {
    element.style.display = "none";
    element.innerHTML = "";
  });

  // Hide the result container and clear its content
  result_div.style.display = "none";
  result_container.innerHTML = ""; // Clear the result text content
});
