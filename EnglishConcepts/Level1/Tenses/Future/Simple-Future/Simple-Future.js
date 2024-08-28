let simpleFutureQuiz = [
  {
    question: `Which sentence is in the simple future tense?`,
    options: {
      A: "I write letters.",
      B: "I have written a letter.",
      C: "I will write a letter.",
      D: "I wrote a letter.",
    },
    correctAnswer: "I will write a letter.",
    explanation: `"I will write a letter" is in the simple future tense because it describes an action that will happen in the future.`,
  },
  {
    question: `Identify the sentence that correctly uses the simple future tense.`,
    options: {
      A: "She eats lunch every day.",
      B: "She will eat lunch.",
      C: "She ate lunch.",
      D: "She is eating lunch.",
    },
    correctAnswer: "She will eat lunch.",
    explanation: `"She will eat lunch" is in the simple future tense because it describes an action that will happen in the future.`,
  },
  {
    question: `Which of the following sentences is in the simple future tense?`,
    options: {
      A: "They play soccer.",
      B: "They will play soccer.",
      C: "They played soccer.",
      D: "They are playing soccer.",
    },
    correctAnswer: "They will play soccer.",
    explanation: `"They will play soccer" is in the simple future tense because it describes an action that will happen in the future.`,
  },
  {
    question: `What is the correct simple future tense form of this sentence? "He ___ to school tomorrow."`,
    options: {
      A: "Goes",
      B: "Has gone",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Will go",
    explanation: `"Will go" is the correct simple future tense form because it describes an action that will happen in the future.`,
  },
  {
    question: `Which sentence uses the simple future tense correctly?`,
    options: {
      A: "I go to the store.",
      B: "I will go to the store.",
      C: "I went to the store.",
      D: "I have gone to the store.",
    },
    correctAnswer: "I will go to the store.",
    explanation: `"I will go to the store" is in the simple future tense because it describes an action that will happen in the future.`,
  },
  {
    question: `Identify the simple future tense form of this sentence: "She ___ her homework later."`,
    options: {
      A: "Does",
      B: "Has done",
      C: "Will do",
      D: "Did",
    },
    correctAnswer: "Will do",
    explanation: `"Will do" is the correct simple future tense form because it describes an action that will happen in the future.`,
  },
  {
    question: `Which of the following sentences is in the simple future tense?`,
    options: {
      A: "We watch movies every weekend.",
      B: "We will watch a movie.",
      C: "We watched a movie last night.",
      D: "We are watching a movie.",
    },
    correctAnswer: "We will watch a movie.",
    explanation: `"We will watch a movie" is in the simple future tense because it describes an action that will happen in the future.`,
  },
  {
    question: `What is the correct simple future tense form of this sentence? "They ___ the bus tomorrow."`,
    options: {
      A: "Take",
      B: "Have taken",
      C: "Took",
      D: "Will take",
    },
    correctAnswer: "Will take",
    explanation: `"Will take" is the correct simple future tense form because it describes an action that will happen in the future.`,
  },
  {
    question: `Which sentence uses the simple future tense correctly?`,
    options: {
      A: "She reads books every night.",
      B: "She will read a book.",
      C: "She read a book last night.",
      D: "She has read a book.",
    },
    correctAnswer: "She will read a book.",
    explanation: `"She will read a book" is in the simple future tense because it describes an action that will happen in the future.`,
  },
  {
    question: `Identify the simple future tense form of this sentence: "He ___ coffee tomorrow morning."`,
    options: {
      A: "Drinks",
      B: "Has drunk",
      C: "Drank",
      D: "Will drink",
    },
    correctAnswer: "Will drink",
    explanation: `"Will drink" is the correct simple future tense form because it describes an action that will happen in the future.`,
  },
  {
    question: `Which of the following sentences is in the simple future tense?`,
    options: {
      A: "They study for the test every day.",
      B: "They will study for the test.",
      C: "They studied for the test last night.",
      D: "They are studying for the test.",
    },
    correctAnswer: "They will study for the test.",
    explanation: `"They will study for the test" is in the simple future tense because it describes an action that will happen in the future.`,
  },
  {
    question: `What is the correct simple future tense form of this sentence? "She ___ to the gym tomorrow."`,
    options: {
      A: "Goes",
      B: "Has gone",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Will go",
    explanation: `"Will go" is the correct simple future tense form because it describes an action that will happen in the future.`,
  },
  {
    question: `Which sentence uses the simple future tense correctly?`,
    options: {
      A: "He cooks dinner every night.",
      B: "He will cook dinner tomorrow.",
      C: "He cooked dinner last night.",
      D: "He has cooked dinner.",
    },
    correctAnswer: "He will cook dinner tomorrow.",
    explanation: `"He will cook dinner tomorrow" is in the simple future tense because it describes an action that will happen in the future.`,
  },
  {
    question: `Identify the simple future tense form of this sentence: "They ___ in the park tomorrow."`,
    options: {
      A: "Walk",
      B: "Have walked",
      C: "Walked",
      D: "Will walk",
    },
    correctAnswer: "Will walk",
    explanation: `"Will walk" is the correct simple future tense form because it describes an action that will happen in the future.`,
  },
  {
    question: `Which of the following sentences is in the simple future tense?`,
    options: {
      A: "We plan a trip every summer.",
      B: "We will plan a trip soon.",
      C: "We planned a trip last year.",
      D: "We are planning a trip.",
    },
    correctAnswer: "We will plan a trip soon.",
    explanation: `"We will plan a trip soon" is in the simple future tense because it describes an action that will happen in the future.`,
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

shuffle(simpleFutureQuiz);

// Display questions dynamically
function display_questions() {
  simpleFutureQuiz.forEach((element, index) => {
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
  let questions = simpleFutureQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  simpleFutureQuiz.forEach((element, index) => {
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
