let pastPerfectContinuousQuiz = [
  {
    question: `Which sentence is in the past perfect continuous tense?`,
    options: {
      A: "I write letters.",
      B: "I had written a letter.",
      C: "I had been writing a letter.",
      D: "I will write a letter.",
    },
    correctAnswer: "I had been writing a letter.",
    explanation: `"I had been writing a letter" is in the past perfect continuous tense because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `Identify the sentence that correctly uses the past perfect continuous tense.`,
    options: {
      A: "She eats lunch every day.",
      B: "She had been eating lunch when I arrived.",
      C: "She ate lunch.",
      D: "She will eat lunch.",
    },
    correctAnswer: "She had been eating lunch when I arrived.",
    explanation: `"She had been eating lunch" is in the past perfect continuous tense because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `Which of the following sentences is in the past perfect continuous tense?`,
    options: {
      A: "They play soccer.",
      B: "They had been playing soccer before it started raining.",
      C: "They played soccer.",
      D: "They will play soccer.",
    },
    correctAnswer: "They had been playing soccer before it started raining.",
    explanation: `"They had been playing soccer" is in the past perfect continuous tense because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `What is the correct past perfect continuous tense form of this sentence? "He ___ to school every day before he moved."`,
    options: {
      A: "Goes",
      B: "Had gone",
      C: "Had been going",
      D: "Will go",
    },
    correctAnswer: "Had been going",
    explanation: `"Had been going" is the correct past perfect continuous tense form because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `Which sentence uses the past perfect continuous tense correctly?`,
    options: {
      A: "I go to the store.",
      B: "I had been going to the store regularly before it closed.",
      C: "I went to the store.",
      D: "I will go to the store.",
    },
    correctAnswer: "I had been going to the store regularly before it closed.",
    explanation: `"I had been going to the store" is in the past perfect continuous tense because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `Identify the past perfect continuous tense form of this sentence: "She ___ her homework for hours before she finished."`,
    options: {
      A: "Did",
      B: "Had done",
      C: "Had been doing",
      D: "Will do",
    },
    correctAnswer: "Had been doing",
    explanation: `"Had been doing" is the correct past perfect continuous tense form because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `Which of the following sentences is in the past perfect continuous tense?`,
    options: {
      A: "We watch movies every weekend.",
      B: "We had been watching a movie when the power went out.",
      C: "We watched a movie last night.",
      D: "We will watch a movie later.",
    },
    correctAnswer: "We had been watching a movie when the power went out.",
    explanation: `"We had been watching a movie" is in the past perfect continuous tense because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `What is the correct past perfect continuous tense form of this sentence? "They ___ the bus for months before they got a car."`,
    options: {
      A: "Took",
      B: "Had taken",
      C: "Had been taking",
      D: "Will take",
    },
    correctAnswer: "Had been taking",
    explanation: `"Had been taking" is the correct past perfect continuous tense form because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `Which sentence uses the past perfect continuous tense correctly?`,
    options: {
      A: "She reads books every night.",
      B: "She had been reading a book when I called.",
      C: "She read a book last night.",
      D: "She will read a book tomorrow.",
    },
    correctAnswer: "She had been reading a book when I called.",
    explanation: `"She had been reading a book" is in the past perfect continuous tense because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `Identify the past perfect continuous tense form of this sentence: "He ___ coffee every morning before he switched to tea."`,
    options: {
      A: "Drank",
      B: "Had drunk",
      C: "Had been drinking",
      D: "Will drink",
    },
    correctAnswer: "Had been drinking",
    explanation: `"Had been drinking" is the correct past perfect continuous tense form because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `Which of the following sentences is in the past perfect continuous tense?`,
    options: {
      A: "They study for the test every day.",
      B: "They had been studying for the test before the teacher arrived.",
      C: "They studied for the test last night.",
      D: "They will study for the test later.",
    },
    correctAnswer:
      "They had been studying for the test before the teacher arrived.",
    explanation: `"They had been studying for the test" is in the past perfect continuous tense because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `What is the correct past perfect continuous tense form of this sentence? "She ___ to the gym regularly before she moved."`,
    options: {
      A: "Goes",
      B: "Had gone",
      C: "Had been going",
      D: "Will go",
    },
    correctAnswer: "Had been going",
    explanation: `"Had been going" is the correct past perfect continuous tense form because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `Which sentence uses the past perfect continuous tense correctly?`,
    options: {
      A: "He cooks dinner every night.",
      B: "He had been cooking dinner for hours when the power went out.",
      C: "He cooked dinner last night.",
      D: "He will cook dinner tomorrow.",
    },
    correctAnswer:
      "He had been cooking dinner for hours when the power went out.",
    explanation: `"He had been cooking dinner" is in the past perfect continuous tense because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `Identify the past perfect continuous tense form of this sentence: "They ___ in the park every morning before they moved."`,
    options: {
      A: "Walked",
      B: "Had walked",
      C: "Had been walking",
      D: "Will walk",
    },
    correctAnswer: "Had been walking",
    explanation: `"Had been walking" is the correct past perfect continuous tense form because it describes an action that was ongoing in the past before another action.`,
  },
  {
    question: `Which of the following sentences is in the past perfect continuous tense?`,
    options: {
      A: "We plan a trip every summer.",
      B: "We had been planning a trip for months before the pandemic hit.",
      C: "We planned a trip last year.",
      D: "We will plan a trip soon.",
    },
    correctAnswer:
      "We had been planning a trip for months before the pandemic hit.",
    explanation: `"We had been planning a trip" is in the past perfect continuous tense because it describes an action that was ongoing in the past before another action.`,
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

shuffle(pastPerfectContinuousQuiz);

// Display questions dynamically
function display_questions() {
  pastPerfectContinuousQuiz.forEach((element, index) => {
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
  let questions = pastPerfectContinuousQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  pastPerfectContinuousQuiz.forEach((element, index) => {
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
