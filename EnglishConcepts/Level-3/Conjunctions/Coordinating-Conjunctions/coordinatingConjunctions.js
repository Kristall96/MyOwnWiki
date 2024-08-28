let coordinatingConjunctionsQuiz = [
  {
    question: `Which coordinating conjunction is used to add information?`,
    options: {
      A: "But",
      B: "Or",
      C: "And",
      D: "Nor",
    },
    correctAnswer: "And",
    explanation: `The conjunction "and" is used to connect similar or equal parts of a sentence, adding information.`,
  },
  {
    question: `Identify the correct use of "but" in the sentence: "I wanted to go to the park, ______ it started raining."`,
    options: {
      A: "But",
      B: "And",
      C: "Or",
      D: "So",
    },
    correctAnswer: "But",
    explanation: `"But" is used to show contrast between two clauses. Here, it contrasts the desire to go to the park with the fact that it started raining.`,
  },
  {
    question: `Choose the correct coordinating conjunction to complete the sentence: "You can have tea ______ coffee."`,
    options: {
      A: "But",
      B: "Or",
      C: "So",
      D: "For",
    },
    correctAnswer: "Or",
    explanation: `"Or" is used to offer an alternative between two choices: tea or coffee.`,
  },
  {
    question: `Which coordinating conjunction is used to show cause or reason?`,
    options: {
      A: "Nor",
      B: "For",
      C: "Yet",
      D: "But",
    },
    correctAnswer: "For",
    explanation: `"For" is used to explain the reason or cause for the preceding clause.`,
  },
  {
    question: `Identify the correct use of "nor" in the sentence: "He does not like tea, ______ does he like coffee."`,
    options: {
      A: "Nor",
      B: "But",
      C: "Or",
      D: "And",
    },
    correctAnswer: "Nor",
    explanation: `"Nor" is used to present an additional negative statement, connecting two negative clauses.`,
  },
  {
    question: `Which sentence correctly uses the coordinating conjunction "and"?`,
    options: {
      A: "She went to the store, and she bought some milk.",
      B: "He was tired, but he went to bed early.",
      C: "I will have pizza, or I will have pasta.",
      D: "The sky was clear, for it was sunny.",
    },
    correctAnswer: "She went to the store, and she bought some milk.",
    explanation: `"And" correctly connects two equal parts of the sentence, showing that both actions occurred.`,
  },
  {
    question: `Choose the correct coordinating conjunction to complete the sentence: "He is smart ______ he is not very disciplined."`,
    options: {
      A: "Yet",
      B: "Or",
      C: "For",
      D: "Nor",
    },
    correctAnswer: "Yet",
    explanation: `"Yet" is used to show contrast, indicating that despite being smart, he lacks discipline.`,
  },
  {
    question: `Which coordinating conjunction correctly completes this sentence: "I wanted to go for a run, ______ it was too cold outside."`,
    options: {
      A: "And",
      B: "But",
      C: "So",
      D: "Or",
    },
    correctAnswer: "But",
    explanation: `"But" shows a contrast between the desire to run and the obstacle of cold weather.`,
  },
  {
    question: `Identify the coordinating conjunction used to show a result or effect in the sentence: "She studied hard, ______ she passed the exam with flying colors."`,
    options: {
      A: "Nor",
      B: "So",
      C: "Yet",
      D: "Or",
    },
    correctAnswer: "So",
    explanation: `"So" is used to indicate a result or effect of the action described in the first clause.`,
  },
  {
    question: `Which sentence uses the coordinating conjunction "or" correctly?`,
    options: {
      A: "You can choose to come with us, or stay home.",
      B: "He likes to read, yet he doesn't have much time.",
      C: "They are tired, but they decided to continue.",
      D: "I have to leave now, for I am getting late.",
    },
    correctAnswer: "You can choose to come with us, or stay home.",
    explanation: `"Or" is used to present alternatives or choices.`,
  },
  {
    question: `Choose the correct coordinating conjunction to complete the sentence: "I like apples ______ oranges."`,
    options: {
      A: "Nor",
      B: "Yet",
      C: "But",
      D: "And",
    },
    correctAnswer: "And",
    explanation: `"And" is used to connect two similar items, in this case, "apples" and "oranges".`,
  },
  {
    question: `Which coordinating conjunction shows a choice between two alternatives?`,
    options: {
      A: "But",
      B: "Or",
      C: "For",
      D: "So",
    },
    correctAnswer: "Or",
    explanation: `"Or" is used to present options or alternatives between two items.`,
  },
  {
    question: `Identify the coordinating conjunction in this sentence: "They wanted to buy the house, yet they couldn't afford it."`,
    options: {
      A: "Yet",
      B: "And",
      C: "So",
      D: "Nor",
    },
    correctAnswer: "Yet",
    explanation: `"Yet" is used to show contrast between the desire to buy the house and the inability to afford it.`,
  },
  {
    question: `Which coordinating conjunction correctly completes this sentence: "She wanted to play outside, ______ it was raining."`,
    options: {
      A: "So",
      B: "Nor",
      C: "But",
      D: "And",
    },
    correctAnswer: "But",
    explanation: `"But" is used to show contrast between her desire to play and the fact that it was raining.`,
  },
  {
    question: `Choose the correct coordinating conjunction to complete the sentence: "He studied for the test, ______ he still failed."`,
    options: {
      A: "For",
      B: "Nor",
      C: "Yet",
      D: "And",
    },
    correctAnswer: "Yet",
    explanation: `"Yet" is used to show a surprising result or contrast between studying and failing.`,
  },
  {
    question: `Which sentence uses the coordinating conjunction "and" incorrectly?`,
    options: {
      A: "She likes ice cream and chocolate.",
      B: "He is smart and he is hardworking.",
      C: "We can go to the beach, or we can stay at home.",
      D: "She wanted to go for a walk, but it was raining.",
    },
    correctAnswer: "None of the options are incorrect.",
    explanation: `All provided sentences use "and" correctly to connect similar parts of the sentence.`,
  },
  {
    question: `Identify the coordinating conjunction in this sentence: "I wanted to join the team, but I had other commitments."`,
    options: {
      A: "Or",
      B: "Yet",
      C: "But",
      D: "And",
    },
    correctAnswer: "But",
    explanation: `"But" is used to show contrast between the desire to join the team and having other commitments.`,
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

shuffle(coordinatingConjunctionsQuiz);

// Display questions dynamically
function display_questions() {
  coordinatingConjunctionsQuiz.forEach((element, index) => {
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
  let questions = coordinatingConjunctionsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  coordinatingConjunctionsQuiz.forEach((element, index) => {
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
