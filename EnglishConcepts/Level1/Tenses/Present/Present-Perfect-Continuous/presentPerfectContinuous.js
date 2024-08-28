let presentPerfectContinuousQuiz = [
  {
    question: `Which sentence is in the present perfect continuous tense?`,
    options: {
      A: "I write letters.",
      B: "I have written a letter.",
      C: "I have been writing a letter.",
      D: "I will write a letter.",
    },
    correctAnswer: "I have been writing a letter.",
    explanation: `"I have been writing a letter" is in the present perfect continuous tense because it describes an action that started in the past and is still continuing.`,
  },
  {
    question: `Identify the sentence that correctly uses the present perfect continuous tense.`,
    options: {
      A: "She eats lunch every day.",
      B: "She has been eating lunch.",
      C: "She ate lunch.",
      D: "She will eat lunch.",
    },
    correctAnswer: "She has been eating lunch.",
    explanation: `"She has been eating lunch" is in the present perfect continuous tense because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `Which of the following sentences is in the present perfect continuous tense?`,
    options: {
      A: "They play soccer.",
      B: "They have been playing soccer.",
      C: "They played soccer.",
      D: "They will play soccer.",
    },
    correctAnswer: "They have been playing soccer.",
    explanation: `"They have been playing soccer" is in the present perfect continuous tense because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `What is the correct present perfect continuous tense form of this sentence? "He ___ to school every day for years."`,
    options: {
      A: "Goes",
      B: "Has gone",
      C: "Has been going",
      D: "Will go",
    },
    correctAnswer: "Has been going",
    explanation: `"Has been going" is the correct present perfect continuous tense form because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `Which sentence uses the present perfect continuous tense correctly?`,
    options: {
      A: "I go to the store.",
      B: "I have been going to the store.",
      C: "I went to the store.",
      D: "I will go to the store.",
    },
    correctAnswer: "I have been going to the store.",
    explanation: `"I have been going to the store" is in the present perfect continuous tense because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `Identify the present perfect continuous tense form of this sentence: "She ___ her homework for hours."`,
    options: {
      A: "Does",
      B: "Has done",
      C: "Has been doing",
      D: "Will do",
    },
    correctAnswer: "Has been doing",
    explanation: `"Has been doing" is the correct present perfect continuous tense form because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `Which of the following sentences is in the present perfect continuous tense?`,
    options: {
      A: "We watch movies every weekend.",
      B: "We have been watching a movie.",
      C: "We watched a movie last night.",
      D: "We will watch a movie later.",
    },
    correctAnswer: "We have been watching a movie.",
    explanation: `"We have been watching a movie" is in the present perfect continuous tense because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `What is the correct present perfect continuous tense form of this sentence? "They ___ the bus to work for months."`,
    options: {
      A: "Take",
      B: "Have taken",
      C: "Have been taking",
      D: "Will take",
    },
    correctAnswer: "Have been taking",
    explanation: `"Have been taking" is the correct present perfect continuous tense form because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `Which sentence uses the present perfect continuous tense correctly?`,
    options: {
      A: "She reads books every night.",
      B: "She has been reading a book.",
      C: "She read a book last night.",
      D: "She will read a book tomorrow.",
    },
    correctAnswer: "She has been reading a book.",
    explanation: `"She has been reading a book" is in the present perfect continuous tense because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `Identify the present perfect continuous tense form of this sentence: "He ___ coffee every morning for years."`,
    options: {
      A: "Drinks",
      B: "Has drunk",
      C: "Has been drinking",
      D: "Will drink",
    },
    correctAnswer: "Has been drinking",
    explanation: `"Has been drinking" is the correct present perfect continuous tense form because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `Which of the following sentences is in the present perfect continuous tense?`,
    options: {
      A: "They study for the test every day.",
      B: "They have been studying for the test.",
      C: "They studied for the test last night.",
      D: "They will study for the test later.",
    },
    correctAnswer: "They have been studying for the test.",
    explanation: `"They have been studying for the test" is in the present perfect continuous tense because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `What is the correct present perfect continuous tense form of this sentence? "She ___ to the gym regularly for months."`,
    options: {
      A: "Goes",
      B: "Has gone",
      C: "Has been going",
      D: "Will go",
    },
    correctAnswer: "Has been going",
    explanation: `"Has been going" is the correct present perfect continuous tense form because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `Which sentence uses the present perfect continuous tense correctly?`,
    options: {
      A: "He cooks dinner every night.",
      B: "He has been cooking dinner.",
      C: "He cooked dinner last night.",
      D: "He will cook dinner tomorrow.",
    },
    correctAnswer: "He has been cooking dinner.",
    explanation: `"He has been cooking dinner" is in the present perfect continuous tense because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `Identify the present perfect continuous tense form of this sentence: "They ___ in the park every morning for weeks."`,
    options: {
      A: "Walk",
      B: "Have walked",
      C: "Have been walking",
      D: "Will walk",
    },
    correctAnswer: "Have been walking",
    explanation: `"Have been walking" is the correct present perfect continuous tense form because it describes an action that started in the past and is still ongoing.`,
  },
  {
    question: `Which of the following sentences is in the present perfect continuous tense?`,
    options: {
      A: "We plan a trip every summer.",
      B: "We have been planning a trip.",
      C: "We planned a trip last year.",
      D: "We will plan a trip soon.",
    },
    correctAnswer: "We have been planning a trip.",
    explanation: `"We have been planning a trip" is in the present perfect continuous tense because it describes an action that started in the past and is still ongoing.`,
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

shuffle(presentPerfectContinuousQuiz);

// Display questions dynamically
function display_questions() {
  presentPerfectContinuousQuiz.forEach((element, index) => {
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
  let questions = presentPerfectContinuousQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  presentPerfectContinuousQuiz.forEach((element, index) => {
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
