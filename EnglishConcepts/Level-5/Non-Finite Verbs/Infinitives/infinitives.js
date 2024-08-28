let infinitivesQuiz = [
  {
    question: "Which sentence contains an infinitive?",
    options: {
      A: "He decided to go to the concert.",
      B: "He went to the concert.",
      C: "He will be attending the concert.",
      D: "He is going to the concert.",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive is 'to go,' which is used to express the purpose or intention.",
  },
  {
    question: "Choose the sentence with the correct infinitive usage:",
    options: {
      A: "She needs to finish her homework.",
      B: "She needs finishing her homework.",
      C: "She needs finished her homework.",
      D: "She needs finish her homework.",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive 'to finish' correctly follows 'needs' to indicate what she needs to do.",
  },
  {
    question: "Which of the following is an infinitive phrase?",
    options: {
      A: "To eat healthy food",
      B: "Eating healthy food",
      C: "Eat healthy food",
      D: "Eats healthy food",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive phrase is 'To eat healthy food,' where 'to eat' is the infinitive verb form followed by the object.",
  },
  {
    question: "Select the sentence that uses the infinitive correctly:",
    options: {
      A: "They asked to leave early.",
      B: "They asked leaving early.",
      C: "They asked leave early.",
      D: "They asked left early.",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive 'to leave' is used correctly to express what they asked to do.",
  },
  {
    question: "Which sentence correctly uses an infinitive?",
    options: {
      A: "She promised to help us with the project.",
      B: "She promised helping us with the project.",
      C: "She promised help us with the project.",
      D: "She promised helped us with the project.",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive 'to help' is used correctly to show what she promised to do.",
  },
  {
    question:
      "Identify the infinitive in this sentence: 'My goal is to run a marathon.'",
    options: {
      A: "My goal",
      B: "Is",
      C: "To run",
      D: "A marathon",
    },
    correctAnswer: "C",
    explanation: "The infinitive 'to run' shows the purpose of the goal.",
  },
  {
    question: "Which of these sentences contains an infinitive phrase?",
    options: {
      A: "She went to the store to buy groceries.",
      B: "She went to the store buying groceries.",
      C: "She went to the store buys groceries.",
      D: "She went to the store bought groceries.",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive phrase 'to buy groceries' explains the purpose of her going to the store.",
  },
  {
    question: "Select the correct use of an infinitive:",
    options: {
      A: "He hopes to travel around the world.",
      B: "He hopes traveling around the world.",
      C: "He hopes travel around the world.",
      D: "He hopes traveled around the world.",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive 'to travel' is used correctly to express his hopes.",
  },
  {
    question: "Which sentence contains a split infinitive?",
    options: {
      A: "She wanted to quickly finish her assignment.",
      B: "She wanted to finish her assignment quickly.",
      C: "She quickly wanted to finish her assignment.",
      D: "She wanted finishing her assignment quickly.",
    },
    correctAnswer: "A",
    explanation:
      "The split infinitive is 'to quickly finish,' where 'quickly' is placed between 'to' and 'finish.'",
  },
  {
    question: "Choose the sentence with an infinitive used as the subject:",
    options: {
      A: "To learn a new language is exciting.",
      B: "Learning a new language is exciting.",
      C: "A new language is exciting to learn.",
      D: "It is exciting to learn a new language.",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive 'To learn a new language' functions as the subject of the sentence.",
  },
  {
    question: "Identify the correct use of an infinitive in this sentence:",
    options: {
      A: "He made a decision to leave early.",
      B: "He made a decision leaving early.",
      C: "He made decision to leave early.",
      D: "He made decision leaving early.",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive 'to leave' is used correctly after 'decision' to explain what the decision was about.",
  },
  {
    question: "Which sentence correctly uses an infinitive to express purpose?",
    options: {
      A: "She exercises to stay healthy.",
      B: "She exercises staying healthy.",
      C: "She exercise to stay healthy.",
      D: "She exercises stayed healthy.",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive 'to stay' is used to show the purpose of her exercising.",
  },
  {
    question: "Select the sentence where the infinitive is used as an object:",
    options: {
      A: "He wants to improve his skills.",
      B: "He wants improving his skills.",
      C: "He wants improve his skills.",
      D: "He wants improved his skills.",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive 'to improve' is used as the object of the verb 'wants'.",
  },
  {
    question: "Which of these sentences uses an infinitive correctly?",
    options: {
      A: "They promised to meet us at noon.",
      B: "They promised meeting us at noon.",
      C: "They promised meet us at noon.",
      D: "They promised met us at noon.",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive 'to meet' is used correctly to show what they promised to do.",
  },
  {
    question: "Identify the correct use of the infinitive in this sentence:",
    options: {
      A: "To find a solution was challenging.",
      B: "Finding a solution was challenging.",
      C: "The solution to find was challenging.",
      D: "The challenging was to find a solution.",
    },
    correctAnswer: "A",
    explanation:
      "The infinitive 'To find' is used as the subject of the sentence to express what was challenging.",
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

shuffle(infinitivesQuiz);

// Display questions dynamically
function display_questions() {
  infinitivesQuiz.forEach((element, index) => {
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
  let questions = infinitivesQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  infinitivesQuiz.forEach((element, index) => {
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
