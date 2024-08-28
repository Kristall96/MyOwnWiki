let presentContinuousQuiz = [
  {
    question: `Which sentence is in the present continuous tense?`,
    options: {
      A: "I write letters.",
      B: "I am writing a letter.",
      C: "I wrote a letter.",
      D: "I will write a letter.",
    },
    correctAnswer: "I am writing a letter.",
    explanation: `"I am writing a letter" is in the present continuous tense because it describes an action currently in progress.`,
  },
  {
    question: `Identify the sentence that correctly uses the present continuous tense.`,
    options: {
      A: "She eats lunch every day.",
      B: "She is eating lunch.",
      C: "She ate lunch.",
      D: "She will eat lunch.",
    },
    correctAnswer: "She is eating lunch.",
    explanation: `"She is eating lunch" is in the present continuous tense because it describes an action currently happening.`,
  },
  {
    question: `Which of the following sentences is in the present continuous tense?`,
    options: {
      A: "They play soccer.",
      B: "They are playing soccer.",
      C: "They played soccer.",
      D: "They will play soccer.",
    },
    correctAnswer: "They are playing soccer.",
    explanation: `"They are playing soccer" is in the present continuous tense because it describes an action currently in progress.`,
  },
  {
    question: `What is the correct present continuous tense form of this sentence? "He ___ to school right now."`,
    options: {
      A: "Goes",
      B: "Is going",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Is going",
    explanation: `"Is going" is the correct present continuous tense form because it describes an action currently in progress.`,
  },
  {
    question: `Which sentence uses the present continuous tense correctly?`,
    options: {
      A: "I go to the store.",
      B: "I am going to the store.",
      C: "I went to the store.",
      D: "I will go to the store.",
    },
    correctAnswer: "I am going to the store.",
    explanation: `"I am going to the store" is in the present continuous tense because it describes an action currently happening.`,
  },
  {
    question: `Identify the present continuous tense form of this sentence: "She ___ her homework right now."`,
    options: {
      A: "Does",
      B: "Is doing",
      C: "Did",
      D: "Will do",
    },
    correctAnswer: "Is doing",
    explanation: `"Is doing" is the correct present continuous tense form because it describes an action currently in progress.`,
  },
  {
    question: `Which of the following sentences is in the present continuous tense?`,
    options: {
      A: "We watch movies every weekend.",
      B: "We are watching a movie.",
      C: "We watched a movie last night.",
      D: "We will watch a movie later.",
    },
    correctAnswer: "We are watching a movie.",
    explanation: `"We are watching a movie" is in the present continuous tense because it describes an action currently happening.`,
  },
  {
    question: `What is the correct present continuous tense form of this sentence? "They ___ the bus to work right now."`,
    options: {
      A: "Take",
      B: "Are taking",
      C: "Took",
      D: "Will take",
    },
    correctAnswer: "Are taking",
    explanation: `"Are taking" is the correct present continuous tense form because it describes an action currently in progress.`,
  },
  {
    question: `Which sentence uses the present continuous tense correctly?`,
    options: {
      A: "She reads books every night.",
      B: "She is reading a book.",
      C: "She read a book last night.",
      D: "She will read a book tomorrow.",
    },
    correctAnswer: "She is reading a book.",
    explanation: `"She is reading a book" is in the present continuous tense because it describes an action currently happening.`,
  },
  {
    question: `Identify the present continuous tense form of this sentence: "He ___ coffee right now."`,
    options: {
      A: "Drinks",
      B: "Is drinking",
      C: "Drank",
      D: "Will drink",
    },
    correctAnswer: "Is drinking",
    explanation: `"Is drinking" is the correct present continuous tense form because it describes an action currently in progress.`,
  },
  {
    question: `Which of the following sentences is in the present continuous tense?`,
    options: {
      A: "They study for the test every day.",
      B: "They are studying for the test.",
      C: "They studied for the test last night.",
      D: "They will study for the test later.",
    },
    correctAnswer: "They are studying for the test.",
    explanation: `"They are studying for the test" is in the present continuous tense because it describes an action currently happening.`,
  },
  {
    question: `What is the correct present continuous tense form of this sentence? "She ___ to the gym right now."`,
    options: {
      A: "Goes",
      B: "Is going",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Is going",
    explanation: `"Is going" is the correct present continuous tense form because it describes an action currently in progress.`,
  },
  {
    question: `Which sentence uses the present continuous tense correctly?`,
    options: {
      A: "He cooks dinner every night.",
      B: "He is cooking dinner.",
      C: "He cooked dinner last night.",
      D: "He will cook dinner tomorrow.",
    },
    correctAnswer: "He is cooking dinner.",
    explanation: `"He is cooking dinner" is in the present continuous tense because it describes an action currently happening.`,
  },
  {
    question: `Identify the present continuous tense form of this sentence: "They ___ in the park right now."`,
    options: {
      A: "Walk",
      B: "Are walking",
      C: "Walked",
      D: "Will walk",
    },
    correctAnswer: "Are walking",
    explanation: `"Are walking" is the correct present continuous tense form because it describes an action currently happening.`,
  },
  {
    question: `Which of the following sentences is in the present continuous tense?`,
    options: {
      A: "We plan a trip every summer.",
      B: "We are planning a trip.",
      C: "We planned a trip last year.",
      D: "We will plan a trip soon.",
    },
    correctAnswer: "We are planning a trip.",
    explanation: `"We are planning a trip" is in the present continuous tense because it describes an action currently in progress.`,
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

shuffle(presentContinuousQuiz);

// Display questions dynamically
function display_questions() {
  presentContinuousQuiz.forEach((element, index) => {
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
  let questions = presentContinuousQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  presentContinuousQuiz.forEach((element, index) => {
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
