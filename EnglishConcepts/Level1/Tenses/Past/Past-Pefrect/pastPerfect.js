let pastPerfectQuiz = [
  {
    question: `Which sentence is in the past perfect tense?`,
    options: {
      A: "I write letters.",
      B: "I have written a letter.",
      C: "I had written a letter.",
      D: "I will write a letter.",
    },
    correctAnswer: "I had written a letter.",
    explanation: `"I had written a letter" is in the past perfect tense because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `Identify the sentence that correctly uses the past perfect tense.`,
    options: {
      A: "She eats lunch every day.",
      B: "She has eaten lunch.",
      C: "She had eaten lunch before I arrived.",
      D: "She will eat lunch.",
    },
    correctAnswer: "She had eaten lunch before I arrived.",
    explanation: `"She had eaten lunch before I arrived" is in the past perfect tense because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `Which of the following sentences is in the past perfect tense?`,
    options: {
      A: "They play soccer.",
      B: "They had played soccer before it started raining.",
      C: "They played soccer.",
      D: "They will play soccer.",
    },
    correctAnswer: "They had played soccer before it started raining.",
    explanation: `"They had played soccer" is in the past perfect tense because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `What is the correct past perfect tense form of this sentence? "He ___ to school before the bell rang."`,
    options: {
      A: "Goes",
      B: "Had gone",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Had gone",
    explanation: `"Had gone" is the correct past perfect tense form because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `Which sentence uses the past perfect tense correctly?`,
    options: {
      A: "I go to the store.",
      B: "I had gone to the store before it closed.",
      C: "I went to the store.",
      D: "I will go to the store.",
    },
    correctAnswer: "I had gone to the store before it closed.",
    explanation: `"I had gone to the store" is in the past perfect tense because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `Identify the past perfect tense form of this sentence: "She ___ her homework before dinner."`,
    options: {
      A: "Does",
      B: "Had done",
      C: "Did",
      D: "Will do",
    },
    correctAnswer: "Had done",
    explanation: `"Had done" is the correct past perfect tense form because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `Which of the following sentences is in the past perfect tense?`,
    options: {
      A: "We watch movies every weekend.",
      B: "We had watched a movie before the power went out.",
      C: "We watched a movie last night.",
      D: "We will watch a movie later.",
    },
    correctAnswer: "We had watched a movie before the power went out.",
    explanation: `"We had watched a movie" is in the past perfect tense because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `What is the correct past perfect tense form of this sentence? "They ___ the bus before it started raining."`,
    options: {
      A: "Take",
      B: "Had taken",
      C: "Took",
      D: "Will take",
    },
    correctAnswer: "Had taken",
    explanation: `"Had taken" is the correct past perfect tense form because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `Which sentence uses the past perfect tense correctly?`,
    options: {
      A: "She reads books every night.",
      B: "She had read a book before she went to bed.",
      C: "She read a book last night.",
      D: "She will read a book tomorrow.",
    },
    correctAnswer: "She had read a book before she went to bed.",
    explanation: `"She had read a book" is in the past perfect tense because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `Identify the past perfect tense form of this sentence: "He ___ coffee before he left."`,
    options: {
      A: "Drinks",
      B: "Had drunk",
      C: "Drank",
      D: "Will drink",
    },
    correctAnswer: "Had drunk",
    explanation: `"Had drunk" is the correct past perfect tense form because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `Which of the following sentences is in the past perfect tense?`,
    options: {
      A: "They study for the test every day.",
      B: "They had studied for the test before taking it.",
      C: "They studied for the test last night.",
      D: "They will study for the test later.",
    },
    correctAnswer: "They had studied for the test before taking it.",
    explanation: `"They had studied for the test" is in the past perfect tense because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `What is the correct past perfect tense form of this sentence? "She ___ to the gym before she went to work."`,
    options: {
      A: "Goes",
      B: "Had gone",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Had gone",
    explanation: `"Had gone" is the correct past perfect tense form because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `Which sentence uses the past perfect tense correctly?`,
    options: {
      A: "He cooks dinner every night.",
      B: "He had cooked dinner before they arrived.",
      C: "He cooked dinner last night.",
      D: "He will cook dinner tomorrow.",
    },
    correctAnswer: "He had cooked dinner before they arrived.",
    explanation: `"He had cooked dinner" is in the past perfect tense because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `Identify the past perfect tense form of this sentence: "They ___ in the park before it started raining."`,
    options: {
      A: "Walk",
      B: "Had walked",
      C: "Walked",
      D: "Will walk",
    },
    correctAnswer: "Had walked",
    explanation: `"Had walked" is the correct past perfect tense form because it describes an action that was completed before another action in the past.`,
  },
  {
    question: `Which of the following sentences is in the past perfect tense?`,
    options: {
      A: "We plan a trip every summer.",
      B: "We had planned a trip before the pandemic hit.",
      C: "We planned a trip last year.",
      D: "We will plan a trip soon.",
    },
    correctAnswer: "We had planned a trip before the pandemic hit.",
    explanation: `"We had planned a trip" is in the past perfect tense because it describes an action that was completed before another action in the past.`,
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

shuffle(pastPerfectQuiz);

// Display questions dynamically
function display_questions() {
  pastPerfectQuiz.forEach((element, index) => {
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
  let questions = pastPerfectQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  pastPerfectQuiz.forEach((element, index) => {
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
