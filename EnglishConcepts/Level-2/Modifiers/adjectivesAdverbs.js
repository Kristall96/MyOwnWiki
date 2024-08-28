let adjectivesAdverbsQuiz = [
  {
    question: `Choose the correct comparative form of the adjective: "This book is ______ than that one."`,
    options: {
      A: "Interesting",
      B: "More interesting",
      C: "Most interesting",
      D: "Interestinger",
    },
    correctAnswer: "More interesting",
    explanation: `The comparative form is used to compare two things. "More interesting" is the correct comparative form of "interesting".`,
  },
  {
    question: `Which sentence uses the superlative form of the adjective correctly?`,
    options: {
      A: "She is the most tallest in her class.",
      B: "He is the tallest of all his friends.",
      C: "They are the more talented in the group.",
      D: "This is the more difficult test.",
    },
    correctAnswer: "He is the tallest of all his friends.",
    explanation: `The superlative form is used to compare three or more things. "Tallest" is the correct superlative form of "tall".`,
  },
  {
    question: `Identify the adverb in the sentence: "The dog runs very fast in the park."`,
    options: {
      A: "Dog",
      B: "Runs",
      C: "Very",
      D: "Park",
    },
    correctAnswer: "Very",
    explanation: `In this sentence, "very" is an adverb that modifies the adverb "fast", indicating the degree of the speed.`,
  },
  {
    question: `Choose the correct comparative form of the adverb: "She works ______ than her colleagues."`,
    options: {
      A: "Harder",
      B: "Hardest",
      C: "More hard",
      D: "Most hard",
    },
    correctAnswer: "Harder",
    explanation: `The comparative form of "hard" is "harder" to compare the work of two people.`,
  },
  {
    question: `Which sentence correctly uses the superlative form of the adverb?`,
    options: {
      A: "He ran the fastest of all the competitors.",
      B: "She sings most beautifully of all the contestants.",
      C: "They played more well than their opponents.",
      D: "This project is the more successfully completed.",
    },
    correctAnswer: "He ran the fastest of all the competitors.",
    explanation: `The superlative form "fastest" is used to compare three or more things, indicating the highest degree of speed.`,
  },
  {
    question: `Identify the correct adjective in the sentence: "This is a ______ place to visit."`,
    options: {
      A: "Enjoy",
      B: "Enjoyable",
      C: "Enjoying",
      D: "Enjoyed",
    },
    correctAnswer: "Enjoyable",
    explanation: `An adjective describes a noun. "Enjoyable" describes the noun "place".`,
  },
  {
    question: `Which sentence uses the adverb correctly?`,
    options: {
      A: "She completed the task quick.",
      B: "He runs quick.",
      C: "The answer was quick given.",
      D: "They completed the project quickly.",
    },
    correctAnswer: "They completed the project quickly.",
    explanation: `The adverb "quickly" correctly modifies the verb "completed".`,
  },
  {
    question: `Choose the correct comparative form of the adjective: "This problem is ______ than the last one."`,
    options: {
      A: "More difficult",
      B: "Most difficult",
      C: "Difficultest",
      D: "Difficultly",
    },
    correctAnswer: "More difficult",
    explanation: `The comparative form "more difficult" is used to compare two problems.`,
  },
  {
    question: `Which sentence uses the superlative form of the adjective correctly?`,
    options: {
      A: "This is the most best option.",
      B: "She is the best student in the class.",
      C: "He is the more talented player.",
      D: "This is the more easiest way.",
    },
    correctAnswer: "She is the best student in the class.",
    explanation: `The superlative form "best" is used to compare three or more things, indicating the highest degree.`,
  },
  {
    question: `Identify the adverb in the sentence: "The cat sleeps quite soundly."`,
    options: {
      A: "Cat",
      B: "Sleeps",
      C: "Quite",
      D: "Soundly",
    },
    correctAnswer: "Quite",
    explanation: `In this sentence, "quite" is an adverb modifying the adverb "soundly", indicating the degree of the sleep.`,
  },
  {
    question: `Choose the correct comparative form of the adjective: "Her dress is ______ than mine."`,
    options: {
      A: "Prettier",
      B: "Prettiest",
      C: "More pretty",
      D: "Prettyer",
    },
    correctAnswer: "Prettier",
    explanation: `The comparative form of "pretty" is "prettier" to compare two dresses.`,
  },
  {
    question: `Which sentence uses the superlative form of the adverb correctly?`,
    options: {
      A: "She speaks the most clearly of all the speakers.",
      B: "He runs more fastest of all the runners.",
      C: "They sing most beautiful of all the singers.",
      D: "This is the most good option.",
    },
    correctAnswer: "She speaks the most clearly of all the speakers.",
    explanation: `The superlative form "most clearly" is used to compare the clarity of speech among several speakers.`,
  },
  {
    question: `Identify the correct adjective in the sentence: "This puzzle is much ______ than I expected."`,
    options: {
      A: "Challenging",
      B: "Challenge",
      C: "Challenged",
      D: "Challenges",
    },
    correctAnswer: "Challenging",
    explanation: `An adjective describes a noun. "Challenging" describes the noun "puzzle".`,
  },
  {
    question: `Choose the correct comparative form of the adverb: "She sings ______ than her sister."`,
    options: {
      A: "More beautifully",
      B: "Beautifully",
      C: "Most beautifully",
      D: "Beautifuler",
    },
    correctAnswer: "More beautifully",
    explanation: `The comparative form of "beautifully" is "more beautifully" to compare the singing of two people.`,
  },
  {
    question: `Which sentence uses the superlative form of the adjective correctly?`,
    options: {
      A: "This is the more exciting game.",
      B: "He is the most smartest student.",
      C: "She is the most talented artist.",
      D: "This is the excitingest movie.",
    },
    correctAnswer: "She is the most talented artist.",
    explanation: `The superlative form "most talented" is used to compare three or more artists, indicating the highest degree of talent.`,
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

shuffle(adjectivesAdverbsQuiz);

// Display questions dynamically
function display_questions() {
  adjectivesAdverbsQuiz.forEach((element, index) => {
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
  let questions = adjectivesAdverbsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  adjectivesAdverbsQuiz.forEach((element, index) => {
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
