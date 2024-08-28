let participlesQuiz = [
  {
    question: "Which sentence uses a participle correctly?",
    options: {
      A: "The broken vase was on the shelf.",
      B: "The broke vase was on the shelf.",
      C: "The breaking vase was on the shelf.",
      D: "The breaked vase was on the shelf.",
    },
    correctAnswer: "A",
    explanation:
      "The participle 'broken' is used correctly to describe the noun 'vase.'",
  },
  {
    question: "Select the sentence where 'baking' is used as a participle:",
    options: {
      A: "The baking bread smelled delicious.",
      B: "She is baking bread now.",
      C: "Baking bread is her hobby.",
      D: "They were baking bread yesterday.",
    },
    correctAnswer: "A",
    explanation:
      "'Baking' is a participle used as an adjective to describe the noun 'bread.'",
  },
  {
    question: "Which sentence contains a past participle used as an adjective?",
    options: {
      A: "The shattered window needs to be replaced.",
      B: "The shatter window needs to be replaced.",
      C: "The shattering window needs to be replaced.",
      D: "The shatterred window needs to be replaced.",
    },
    correctAnswer: "A",
    explanation:
      "'Shattered' is the past participle describing the noun 'window.'",
  },
  {
    question: "Choose the sentence where 'excited' is used as a participle:",
    options: {
      A: "The excited children played in the park.",
      B: "She is excited for the party.",
      C: "They were excited to see the movie.",
      D: "Exciting is the news they received.",
    },
    correctAnswer: "A",
    explanation:
      "'Excited' is the participle used to describe the noun 'children.'",
  },
  {
    question: "Which of these sentences includes a participle phrase?",
    options: {
      A: "Running down the street, he lost his hat.",
      B: "He is running down the street.",
      C: "He runs down the street.",
      D: "He has run down the street.",
    },
    correctAnswer: "A",
    explanation:
      "The participle phrase 'Running down the street' modifies 'he' and describes an action.",
  },
  {
    question:
      "Identify the participle in the sentence: 'The damaged car was towed away.'",
    options: {
      A: "Damaged",
      B: "Car",
      C: "Was",
      D: "Towed",
    },
    correctAnswer: "A",
    explanation: "'Damaged' is the past participle describing the noun 'car.'",
  },
  {
    question: "Which sentence uses a participle phrase correctly?",
    options: {
      A: "Covered in paint, the walls looked fresh.",
      B: "Covering in paint, the walls looked fresh.",
      C: "The cover paint made the walls look fresh.",
      D: "Covered with paint, fresh looked the walls.",
    },
    correctAnswer: "A",
    explanation:
      "The participle phrase 'Covered in paint' describes 'the walls.'",
  },
  {
    question: "Choose the sentence where 'exciting' is used as a participle:",
    options: {
      A: "The exciting news spread quickly.",
      B: "She is exciting to meet him.",
      C: "They were exciting about the trip.",
      D: "Exciting is the plan for tomorrow.",
    },
    correctAnswer: "A",
    explanation:
      "'Exciting' is the present participle used to describe 'news.'",
  },
  {
    question:
      "Which of the following sentences contains a participle used as an adjective?",
    options: {
      A: "The completed project was impressive.",
      B: "The complete project was impressive.",
      C: "Completing the project was impressive.",
      D: "The complete was impressive project.",
    },
    correctAnswer: "A",
    explanation:
      "'Completed' is the past participle describing the noun 'project.'",
  },
  {
    question: "Select the correct use of a present participle:",
    options: {
      A: "The rising sun was beautiful.",
      B: "The risen sun was beautiful.",
      C: "The rise sun was beautiful.",
      D: "The risinged sun was beautiful.",
    },
    correctAnswer: "A",
    explanation:
      "'Rising' is the present participle used to describe the noun 'sun.'",
  },
  {
    question:
      "Identify the participle phrase in the sentence: 'Smiling broadly, she accepted the award.'",
    options: {
      A: "Smiling broadly",
      B: "She accepted the award",
      C: "Accepted the award",
      D: "Smiling and broadly",
    },
    correctAnswer: "A",
    explanation:
      "The participle phrase 'Smiling broadly' modifies 'she' and describes her action.",
  },
  {
    question:
      "Which sentence contains a participle used to describe the subject?",
    options: {
      A: "The crying baby needed attention.",
      B: "The cry baby needed attention.",
      C: "The cried baby needed attention.",
      D: "Crying the baby needed attention.",
    },
    correctAnswer: "A",
    explanation:
      "'Crying' is the present participle used to describe the noun 'baby.'",
  },
  {
    question:
      "Choose the sentence with a past participle used as an adjective:",
    options: {
      A: "The broken window was repaired.",
      B: "The breaked window was repaired.",
      C: "The breaking window was repaired.",
      D: "The breaks window was repaired.",
    },
    correctAnswer: "A",
    explanation: "'Broken' is the past participle used to describe 'window.'",
  },
  {
    question:
      "Identify the participle in the sentence: 'The sleeping child looked peaceful.'",
    options: {
      A: "Sleeping",
      B: "Child",
      C: "Looked",
      D: "Peaceful",
    },
    correctAnswer: "A",
    explanation:
      "'Sleeping' is the present participle describing the noun 'child.'",
  },
  {
    question: "Which of these sentences includes a present participle phrase?",
    options: {
      A: "Laughing with friends, he had a great time.",
      B: "He laughs with friends.",
      C: "He laughed with friends.",
      D: "Laughs with friends is his hobby.",
    },
    correctAnswer: "A",
    explanation:
      "The present participle phrase 'Laughing with friends' modifies 'he' and describes an action.",
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

shuffle(participlesQuiz);

// Display questions dynamically
function display_questions() {
  participlesQuiz.forEach((element, index) => {
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
  let questions = participlesQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  participlesQuiz.forEach((element, index) => {
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
