let periodsQuiz = [
  {
    question: `Which sentence correctly uses a period?`,
    options: {
      A: "She enjoys reading.",
      B: "She enjoys reading",
      C: "She enjoys reading!",
      D: "She enjoys reading?",
    },
    correctAnswer: "She enjoys reading.",
    explanation: `A period is used to end a declarative sentence, which states a fact or opinion. Here, "She enjoys reading." is a complete statement ending with a period.`,
  },
  {
    question: `Identify the sentence that properly uses a period.`,
    options: {
      A: "The meeting starts at 10 AM.",
      B: "The meeting starts at 10 AM!",
      C: "The meeting starts at 10 AM?",
      D: "The meeting starts at 10 AM",
    },
    correctAnswer: "The meeting starts at 10 AM.",
    explanation: `A period is used to end declarative sentences. "The meeting starts at 10 AM." is a complete statement ending with a period.`,
  },
  {
    question: `Which of these sentences ends correctly with a period?`,
    options: {
      A: "I have a new book.",
      B: "I have a new book!",
      C: "I have a new book?",
      D: "I have a new book",
    },
    correctAnswer: "I have a new book.",
    explanation: `"I have a new book." is a declarative sentence that ends with a period.`,
  },
  {
    question: `Choose the sentence that uses a period correctly.`,
    options: {
      A: "The car is parked outside.",
      B: "The car is parked outside!",
      C: "The car is parked outside?",
      D: "The car is parked outside.",
    },
    correctAnswer: "The car is parked outside.",
    explanation: `"The car is parked outside." is a declarative sentence ending with a period.`,
  },
  {
    question: `Which sentence correctly uses a period?`,
    options: {
      A: "The store opens at 9 AM.",
      B: "The store opens at 9 AM!",
      C: "The store opens at 9 AM?",
      D: "The store opens at 9 AM",
    },
    correctAnswer: "The store opens at 9 AM.",
    explanation: `"The store opens at 9 AM." is a declarative statement that ends with a period.`,
  },
  {
    question: `Identify the correct usage of a period.`,
    options: {
      A: "She went to the park.",
      B: "She went to the park!",
      C: "She went to the park?",
      D: "She went to the park",
    },
    correctAnswer: "She went to the park.",
    explanation: `"She went to the park." is a complete declarative sentence that ends with a period.`,
  },
  {
    question: `Which sentence ends with a period?`,
    options: {
      A: "They completed the project.",
      B: "They completed the project!",
      C: "They completed the project?",
      D: "They completed the project",
    },
    correctAnswer: "They completed the project.",
    explanation: `"They completed the project." is a declarative sentence that ends with a period.`,
  },
  {
    question: `Choose the sentence with the correct use of a period.`,
    options: {
      A: "I like to swim.",
      B: "I like to swim!",
      C: "I like to swim?",
      D: "I like to swim",
    },
    correctAnswer: "I like to swim.",
    explanation: `"I like to swim." is a declarative sentence that ends with a period.`,
  },
  {
    question: `Which of these sentences uses a period correctly?`,
    options: {
      A: "The sun rises in the east.",
      B: "The sun rises in the east!",
      C: "The sun rises in the east?",
      D: "The sun rises in the east",
    },
    correctAnswer: "The sun rises in the east.",
    explanation: `"The sun rises in the east." is a declarative sentence and ends with a period.`,
  },
  {
    question: `Identify the sentence that uses a period correctly.`,
    options: {
      A: "We are going on vacation.",
      B: "We are going on vacation!",
      C: "We are going on vacation?",
      D: "We are going on vacation",
    },
    correctAnswer: "We are going on vacation.",
    explanation: `"We are going on vacation." is a declarative sentence that correctly ends with a period.`,
  },
  {
    question: `Which sentence correctly ends with a period?`,
    options: {
      A: "He enjoys painting.",
      B: "He enjoys painting!",
      C: "He enjoys painting?",
      D: "He enjoys painting",
    },
    correctAnswer: "He enjoys painting.",
    explanation: `"He enjoys painting." is a complete declarative sentence that ends with a period.`,
  },
  {
    question: `Choose the sentence that ends with a period.`,
    options: {
      A: "The book is on the table.",
      B: "The book is on the table!",
      C: "The book is on the table?",
      D: "The book is on the table",
    },
    correctAnswer: "The book is on the table.",
    explanation: `"The book is on the table." is a declarative statement ending with a period.`,
  },
  {
    question: `Identify the correct usage of a period in the following sentence.`,
    options: {
      A: "She likes chocolate.",
      B: "She likes chocolate!",
      C: "She likes chocolate?",
      D: "She likes chocolate",
    },
    correctAnswer: "She likes chocolate.",
    explanation: `"She likes chocolate." is a declarative sentence that ends with a period.`,
  },
  {
    question: `Which sentence correctly uses a period?`,
    options: {
      A: "The weather is nice today.",
      B: "The weather is nice today!",
      C: "The weather is nice today?",
      D: "The weather is nice today",
    },
    correctAnswer: "The weather is nice today.",
    explanation: `"The weather is nice today." is a declarative sentence and ends with a period.`,
  },
  {
    question: `Select the sentence with the correct period usage.`,
    options: {
      A: "She finished her homework.",
      B: "She finished her homework!",
      C: "She finished her homework?",
      D: "She finished her homework",
    },
    correctAnswer: "She finished her homework.",
    explanation: `"She finished her homework." is a complete sentence and uses a period correctly.`,
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

shuffle(periodsQuiz);

// Display questions dynamically
function display_questions() {
  periodsQuiz.forEach((element, index) => {
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
  let questions = periodsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  periodsQuiz.forEach((element, index) => {
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
