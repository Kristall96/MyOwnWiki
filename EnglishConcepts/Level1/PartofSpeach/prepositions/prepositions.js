let prepositionsQuiz = [
  {
    question: `Which word in this sentence is a preposition? "The book is on the table."`,
    options: {
      A: "Book",
      B: "Is",
      C: "On",
      D: "Table",
    },
    correctAnswer: "On",
    explanation: `"On" is a preposition because it shows the relationship between the book and the table.`,
  },
  {
    question: `Identify the preposition in this sentence: "She walked through the park."`,
    options: {
      A: "Walked",
      B: "She",
      C: "Through",
      D: "Park",
    },
    correctAnswer: "Through",
    explanation: `"Through" is a preposition because it shows the relationship between the action of walking and the park.`,
  },
  {
    question: `Which of the following is a preposition?`,
    options: {
      A: "Beautiful",
      B: "Jump",
      C: "Behind",
      D: "Happy",
    },
    correctAnswer: "Behind",
    explanation: `"Behind" is a preposition because it indicates the position of one object in relation to another.`,
  },
  {
    question: `What is the preposition in this sentence: "The cat is under the chair."`,
    options: {
      A: "Cat",
      B: "Under",
      C: "Chair",
      D: "Is",
    },
    correctAnswer: "Under",
    explanation: `"Under" is a preposition because it shows the relationship between the cat and the chair.`,
  },
  {
    question: `Which word is a preposition in this sentence: "They sat next to each other during the movie."`,
    options: {
      A: "Sat",
      B: "Next to",
      C: "Movie",
      D: "Other",
    },
    correctAnswer: "Next to",
    explanation: `"Next to" is a compound preposition because it shows the relationship between their seating positions and each other.`,
  },
  {
    question: `Identify the preposition in this sentence: "We arrived after the show started."`,
    options: {
      A: "Arrived",
      B: "After",
      C: "Show",
      D: "Started",
    },
    correctAnswer: "After",
    explanation: `"After" is a preposition because it shows the relationship between the arrival and the show starting.`,
  },
  {
    question: `Which of the following is a preposition that indicates time?`,
    options: {
      A: "During",
      B: "Above",
      C: "Between",
      D: "Near",
    },
    correctAnswer: "During",
    explanation: `"During" is a preposition that indicates a time relationship.`,
  },
  {
    question: `Which preposition correctly completes this sentence: "We will meet ___ the afternoon."`,
    options: {
      A: "On",
      B: "In",
      C: "At",
      D: "By",
    },
    correctAnswer: "In",
    explanation: `"In" is the correct preposition when referring to a time of day, such as "in the afternoon."`,
  },
  {
    question: `In the sentence "The keys are inside the drawer," which word is a preposition?`,
    options: {
      A: "Keys",
      B: "Inside",
      C: "Drawer",
      D: "Are",
    },
    correctAnswer: "Inside",
    explanation: `"Inside" is a preposition because it shows the location of the keys in relation to the drawer.`,
  },
  {
    question: `Which of the following is a preposition that shows direction?`,
    options: {
      A: "Into",
      B: "Beside",
      C: "At",
      D: "By",
    },
    correctAnswer: "Into",
    explanation: `"Into" is a preposition that indicates movement or direction toward something.`,
  },
  {
    question: `Which word in this sentence is a preposition? "The ball rolled under the couch."`,
    options: {
      A: "Rolled",
      B: "Under",
      C: "Ball",
      D: "Couch",
    },
    correctAnswer: "Under",
    explanation: `"Under" is a preposition because it shows the relationship between the ball and the couch.`,
  },
  {
    question: `Identify the preposition in this sentence: "The airplane flew above the clouds."`,
    options: {
      A: "Flew",
      B: "Above",
      C: "Airplane",
      D: "Clouds",
    },
    correctAnswer: "Above",
    explanation: `"Above" is a preposition because it indicates the position of the airplane in relation to the clouds.`,
  },
  {
    question: `Which of the following is a preposition that indicates location?`,
    options: {
      A: "Under",
      B: "Quickly",
      C: "Jumped",
      D: "Beside",
    },
    correctAnswer: "Beside",
    explanation: `"Beside" is a preposition because it indicates the location of one object in relation to another.`,
  },
  {
    question: `What is the preposition in this sentence: "The train arrived at the station on time."`,
    options: {
      A: "Train",
      B: "Arrived",
      C: "At",
      D: "Station",
    },
    correctAnswer: "At",
    explanation: `"At" is a preposition because it shows the relationship between the train and the station.`,
  },
  {
    question: `Which word is a preposition in this sentence: "We walked along the beach during sunset."`,
    options: {
      A: "Walked",
      B: "Along",
      C: "Beach",
      D: "Sunset",
    },
    correctAnswer: "Along",
    explanation: `"Along" is a preposition because it indicates the direction or path of movement in relation to the beach.`,
  },
];

// Getting references to elements
let quiz_container = document.getElementById("quizContainer");
let result_div = document.getElementById("result");
let result_container = document.getElementById("resultText"); // Ensure this targets the correct ID
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

// Shuffle the questions
shuffle(prepositionsQuiz);

// Display questions dynamically
function display_questions() {
  prepositionsQuiz.forEach((element, index) => {
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
  let questions = prepositionsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  prepositionsQuiz.forEach((element, index) => {
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
