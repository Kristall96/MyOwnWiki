let subordinatingConjunctionsQuiz = [
  {
    question: `Which subordinating conjunction is used to introduce a reason or cause?`,
    options: {
      A: "Although",
      B: "Because",
      C: "If",
      D: "Unless",
    },
    correctAnswer: "Because",
    explanation: `"Because" is used to explain the reason or cause behind the main clause.`,
  },
  {
    question: `Identify the subordinating conjunction used to show contrast in the sentence: "I will go to the party, although I am tired."`,
    options: {
      A: "Although",
      B: "Because",
      C: "If",
      D: "Unless",
    },
    correctAnswer: "Although",
    explanation: `"Although" introduces a contrast between the action of going to the party and the speaker's tiredness.`,
  },
  {
    question: `Which subordinating conjunction is used to introduce a condition?`,
    options: {
      A: "While",
      B: "If",
      C: "Because",
      D: "Though",
    },
    correctAnswer: "If",
    explanation: `"If" introduces a condition that must be met for the main clause to occur.`,
  },
  {
    question: `Choose the correct subordinating conjunction to complete the sentence: "I will call you ______ I arrive at the station."`,
    options: {
      A: "Although",
      B: "Because",
      C: "If",
      D: "When",
    },
    correctAnswer: "When",
    explanation: `"When" is used to indicate the time at which the main clause will occur.`,
  },
  {
    question: `Which subordinating conjunction shows a purpose or intention?`,
    options: {
      A: "So that",
      B: "Unless",
      C: "Even though",
      D: "While",
    },
    correctAnswer: "So that",
    explanation: `"So that" introduces a purpose or intention behind the action in the main clause.`,
  },
  {
    question: `Identify the subordinating conjunction used to show a concession in the sentence: "She went to the gym, even though she was feeling sick."`,
    options: {
      A: "If",
      B: "Although",
      C: "Even though",
      D: "Before",
    },
    correctAnswer: "Even though",
    explanation: `"Even though" introduces a concession, showing that she went to the gym despite being sick.`,
  },
  {
    question: `Which subordinating conjunction is used to introduce a time-related clause?`,
    options: {
      A: "Unless",
      B: "After",
      C: "Because",
      D: "If",
    },
    correctAnswer: "After",
    explanation: `"After" introduces a clause that indicates the time following the main action.`,
  },
  {
    question: `Choose the correct subordinating conjunction to complete the sentence: "She will succeed ______ she continues to work hard."`,
    options: {
      A: "Although",
      B: "If",
      C: "Because",
      D: "Unless",
    },
    correctAnswer: "If",
    explanation: `"If" introduces a condition that must be met for the main clause to happen.`,
  },
  {
    question: `Which subordinating conjunction introduces a contrasting idea?`,
    options: {
      A: "Before",
      B: "Since",
      C: "Although",
      D: "Unless",
    },
    correctAnswer: "Although",
    explanation: `"Although" introduces a contrasting idea between the two clauses.`,
  },
  {
    question: `Identify the subordinating conjunction used to show a result in the sentence: "He was late, so we missed the beginning of the movie."`,
    options: {
      A: "So",
      B: "While",
      C: "Even though",
      D: "If",
    },
    correctAnswer: "So",
    explanation: `"So" is used to indicate the result of the action described in the main clause.`,
  },
  {
    question: `Which subordinating conjunction is used to show the reason behind something?`,
    options: {
      A: "Before",
      B: "Because",
      C: "Unless",
      D: "Although",
    },
    correctAnswer: "Because",
    explanation: `"Because" explains the reason or cause for the main clause's action.`,
  },
  {
    question: `Choose the correct subordinating conjunction to complete the sentence: "He stayed at home ______ it was snowing heavily outside."`,
    options: {
      A: "Even though",
      B: "So that",
      C: "If",
      D: "When",
    },
    correctAnswer: "Even though",
    explanation: `"Even though" introduces a contrast between staying at home and the heavy snowfall.`,
  },
  {
    question: `Which subordinating conjunction introduces a time-related clause?`,
    options: {
      A: "While",
      B: "Because",
      C: "If",
      D: "Although",
    },
    correctAnswer: "While",
    explanation: `"While" indicates that the action of the main clause occurs simultaneously with the action described in the subordinate clause.`,
  },
  {
    question: `Identify the subordinating conjunction in this sentence: "She wore a jacket because it was cold outside."`,
    options: {
      A: "Because",
      B: "Although",
      C: "If",
      D: "When",
    },
    correctAnswer: "Because",
    explanation: `"Because" introduces the reason why she wore a jacket.`,
  },
  {
    question: `Which subordinating conjunction is used to introduce an exception or negative condition?`,
    options: {
      A: "If",
      B: "Unless",
      C: "Though",
      D: "Since",
    },
    correctAnswer: "Unless",
    explanation: `"Unless" introduces a negative condition or exception to the main clause.`,
  },
  {
    question: `Choose the correct subordinating conjunction to complete the sentence: "We will go to the park ______ it stops raining."`,
    options: {
      A: "Although",
      B: "When",
      C: "If",
      D: "So that",
    },
    correctAnswer: "If",
    explanation: `"If" introduces a condition that must be met for the action in the main clause to occur.`,
  },
  {
    question: `Which subordinating conjunction is used to show time in the sentence: "We will start dinner after everyone arrives."`,
    options: {
      A: "Before",
      B: "Since",
      C: "After",
      D: "While",
    },
    correctAnswer: "After",
    explanation: `"After" indicates the time when the action of the main clause will start.`,
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

shuffle(subordinatingConjunctionsQuiz);

// Display questions dynamically
function display_questions() {
  subordinatingConjunctionsQuiz.forEach((element, index) => {
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
  let questions = subordinatingConjunctionsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  subordinatingConjunctionsQuiz.forEach((element, index) => {
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
