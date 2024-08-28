let simplePresentQuiz = [
  {
    question: `Which sentence is in the simple present tense?`,
    options: {
      A: "I am writing a letter.",
      B: "I wrote a letter.",
      C: "I write letters.",
      D: "I will write a letter.",
    },
    correctAnswer: "I write letters.",
    explanation: `"I write letters" is in the simple present tense because it describes a habitual action.`,
  },
  {
    question: `Identify the sentence that correctly uses the simple present tense.`,
    options: {
      A: "She eats lunch every day.",
      B: "She is eating lunch.",
      C: "She ate lunch.",
      D: "She will eat lunch.",
    },
    correctAnswer: "She eats lunch every day.",
    explanation: `"She eats lunch every day" is in the simple present tense because it describes a regular action.`,
  },
  {
    question: `Which of the following sentences is in the simple present tense?`,
    options: {
      A: "They are playing soccer.",
      B: "They played soccer.",
      C: "They play soccer.",
      D: "They will play soccer.",
    },
    correctAnswer: "They play soccer.",
    explanation: `"They play soccer" is in the simple present tense because it describes a regular action.`,
  },
  {
    question: `What is the correct simple present tense form of this sentence? "He ___ to school every day."`,
    options: {
      A: "Goes",
      B: "Is going",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Goes",
    explanation: `"Goes" is the correct simple present tense form because it describes a regular action.`,
  },
  {
    question: `Which sentence uses the simple present tense correctly?`,
    options: {
      A: "I am going to the store.",
      B: "I go to the store.",
      C: "I went to the store.",
      D: "I will go to the store.",
    },
    correctAnswer: "I go to the store.",
    explanation: `"I go to the store" is in the simple present tense because it describes a regular action.`,
  },
  {
    question: `Identify the simple present tense form of this sentence: "She ___ her homework every day."`,
    options: {
      A: "Does",
      B: "Is doing",
      C: "Did",
      D: "Will do",
    },
    correctAnswer: "Does",
    explanation: `"Does" is the correct simple present tense form because it describes a regular action.`,
  },
  {
    question: `Which of the following sentences is in the simple present tense?`,
    options: {
      A: "We are watching a movie.",
      B: "We watch movies every weekend.",
      C: "We watched a movie last night.",
      D: "We will watch a movie later.",
    },
    correctAnswer: "We watch movies every weekend.",
    explanation: `"We watch movies every weekend" is in the simple present tense because it describes a regular action.`,
  },
  {
    question: `What is the correct simple present tense form of this sentence? "They ___ the bus to work every day."`,
    options: {
      A: "Take",
      B: "Are taking",
      C: "Took",
      D: "Will take",
    },
    correctAnswer: "Take",
    explanation: `"Take" is the correct simple present tense form because it describes a regular action.`,
  },
  {
    question: `Which sentence uses the simple present tense correctly?`,
    options: {
      A: "She is reading a book.",
      B: "She reads books every night.",
      C: "She read a book last night.",
      D: "She will read a book tomorrow.",
    },
    correctAnswer: "She reads books every night.",
    explanation: `"She reads books every night" is in the simple present tense because it describes a habitual action.`,
  },
  {
    question: `Identify the simple present tense form of this sentence: "He ___ coffee every morning."`,
    options: {
      A: "Drinks",
      B: "Is drinking",
      C: "Drank",
      D: "Will drink",
    },
    correctAnswer: "Drinks",
    explanation: `"Drinks" is the correct simple present tense form because it describes a regular action.`,
  },
  {
    question: `Which of the following sentences is in the simple present tense?`,
    options: {
      A: "They are studying for the test.",
      B: "They study for the test every day.",
      C: "They studied for the test last night.",
      D: "They will study for the test later.",
    },
    correctAnswer: "They study for the test every day.",
    explanation: `"They study for the test every day" is in the simple present tense because it describes a regular action.`,
  },
  {
    question: `What is the correct simple present tense form of this sentence? "She ___ to the gym every week."`,
    options: {
      A: "Goes",
      B: "Is going",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Goes",
    explanation: `"Goes" is the correct simple present tense form because it describes a regular action.`,
  },
  {
    question: `Which sentence uses the simple present tense correctly?`,
    options: {
      A: "He is cooking dinner.",
      B: "He cooks dinner every night.",
      C: "He cooked dinner last night.",
      D: "He will cook dinner tomorrow.",
    },
    correctAnswer: "He cooks dinner every night.",
    explanation: `"He cooks dinner every night" is in the simple present tense because it describes a habitual action.`,
  },
  {
    question: `Identify the simple present tense form of this sentence: "They ___ in the park on weekends."`,
    options: {
      A: "Walk",
      B: "Are walking",
      C: "Walked",
      D: "Will walk",
    },
    correctAnswer: "Walk",
    explanation: `"Walk" is the correct simple present tense form because it describes a regular action.`,
  },
  {
    question: `Which of the following sentences is in the simple present tense?`,
    options: {
      A: "We are planning a trip.",
      B: "We plan a trip every summer.",
      C: "We planned a trip last year.",
      D: "We will plan a trip soon.",
    },
    correctAnswer: "We plan a trip every summer.",
    explanation: `"We plan a trip every summer" is in the simple present tense because it describes a regular action.`,
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

shuffle(simplePresentQuiz);

// Display questions dynamically
function display_questions() {
  simplePresentQuiz.forEach((element, index) => {
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
  let questions = simplePresentQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  simplePresentQuiz.forEach((element, index) => {
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
