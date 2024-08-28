let simplePastQuiz = [
  {
    question: `Which sentence is in the simple past tense?`,
    options: {
      A: "I write letters.",
      B: "I have written a letter.",
      C: "I wrote a letter.",
      D: "I will write a letter.",
    },
    correctAnswer: "I wrote a letter.",
    explanation: `"I wrote a letter" is in the simple past tense because it describes an action that was completed in the past.`,
  },
  {
    question: `Identify the sentence that correctly uses the simple past tense.`,
    options: {
      A: "She eats lunch every day.",
      B: "She is eating lunch.",
      C: "She ate lunch.",
      D: "She will eat lunch.",
    },
    correctAnswer: "She ate lunch.",
    explanation: `"She ate lunch" is in the simple past tense because it describes an action that was completed in the past.`,
  },
  {
    question: `Which of the following sentences is in the simple past tense?`,
    options: {
      A: "They play soccer.",
      B: "They have played soccer.",
      C: "They played soccer.",
      D: "They will play soccer.",
    },
    correctAnswer: "They played soccer.",
    explanation: `"They played soccer" is in the simple past tense because it describes an action that was completed in the past.`,
  },
  {
    question: `What is the correct simple past tense form of this sentence? "He ___ to school yesterday."`,
    options: {
      A: "Goes",
      B: "Has gone",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Went",
    explanation: `"Went" is the correct simple past tense form because it describes an action that was completed in the past.`,
  },
  {
    question: `Which sentence uses the simple past tense correctly?`,
    options: {
      A: "I go to the store.",
      B: "I have gone to the store.",
      C: "I went to the store.",
      D: "I will go to the store.",
    },
    correctAnswer: "I went to the store.",
    explanation: `"I went to the store" is in the simple past tense because it describes an action that was completed in the past.`,
  },
  {
    question: `Identify the simple past tense form of this sentence: "She ___ her homework last night."`,
    options: {
      A: "Does",
      B: "Has done",
      C: "Did",
      D: "Will do",
    },
    correctAnswer: "Did",
    explanation: `"Did" is the correct simple past tense form because it describes an action that was completed in the past.`,
  },
  {
    question: `Which of the following sentences is in the simple past tense?`,
    options: {
      A: "We watch movies every weekend.",
      B: "We are watching a movie.",
      C: "We watched a movie last night.",
      D: "We will watch a movie later.",
    },
    correctAnswer: "We watched a movie last night.",
    explanation: `"We watched a movie last night" is in the simple past tense because it describes an action that was completed in the past.`,
  },
  {
    question: `What is the correct simple past tense form of this sentence? "They ___ the bus to work yesterday."`,
    options: {
      A: "Take",
      B: "Have taken",
      C: "Took",
      D: "Will take",
    },
    correctAnswer: "Took",
    explanation: `"Took" is the correct simple past tense form because it describes an action that was completed in the past.`,
  },
  {
    question: `Which sentence uses the simple past tense correctly?`,
    options: {
      A: "She reads books every night.",
      B: "She has read a book.",
      C: "She read a book last night.",
      D: "She will read a book tomorrow.",
    },
    correctAnswer: "She read a book last night.",
    explanation: `"She read a book last night" is in the simple past tense because it describes an action that was completed in the past.`,
  },
  {
    question: `Identify the simple past tense form of this sentence: "He ___ coffee this morning."`,
    options: {
      A: "Drinks",
      B: "Has drunk",
      C: "Drank",
      D: "Will drink",
    },
    correctAnswer: "Drank",
    explanation: `"Drank" is the correct simple past tense form because it describes an action that was completed in the past.`,
  },
  {
    question: `Which of the following sentences is in the simple past tense?`,
    options: {
      A: "They study for the test every day.",
      B: "They have studied for the test.",
      C: "They studied for the test last night.",
      D: "They will study for the test later.",
    },
    correctAnswer: "They studied for the test last night.",
    explanation: `"They studied for the test last night" is in the simple past tense because it describes an action that was completed in the past.`,
  },
  {
    question: `What is the correct simple past tense form of this sentence? "She ___ to the gym yesterday."`,
    options: {
      A: "Goes",
      B: "Has gone",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Went",
    explanation: `"Went" is the correct simple past tense form because it describes an action that was completed in the past.`,
  },
  {
    question: `Which sentence uses the simple past tense correctly?`,
    options: {
      A: "He cooks dinner every night.",
      B: "He has cooked dinner.",
      C: "He cooked dinner last night.",
      D: "He will cook dinner tomorrow.",
    },
    correctAnswer: "He cooked dinner last night.",
    explanation: `"He cooked dinner last night" is in the simple past tense because it describes an action that was completed in the past.`,
  },
  {
    question: `Identify the simple past tense form of this sentence: "They ___ in the park yesterday."`,
    options: {
      A: "Walk",
      B: "Have walked",
      C: "Walked",
      D: "Will walk",
    },
    correctAnswer: "Walked",
    explanation: `"Walked" is the correct simple past tense form because it describes an action that was completed in the past.`,
  },
  {
    question: `Which of the following sentences is in the simple past tense?`,
    options: {
      A: "We plan a trip every summer.",
      B: "We have planned a trip.",
      C: "We planned a trip last year.",
      D: "We will plan a trip soon.",
    },
    correctAnswer: "We planned a trip last year.",
    explanation: `"We planned a trip last year" is in the simple past tense because it describes an action that was completed in the past.`,
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

shuffle(simplePastQuiz);

// Display questions dynamically
function display_questions() {
  simplePastQuiz.forEach((element, index) => {
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
  let questions = simplePastQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  simplePastQuiz.forEach((element, index) => {
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
