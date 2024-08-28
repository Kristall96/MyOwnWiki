let indefiniteArticleQuiz = [
  {
    question: `Which sentence uses the indefinite article appropriately?`,
    options: {
      A: "I need a pen to write a letter.",
      B: "I need the pen to write the letter.",
      C: "I need pens to write letters.",
      D: "I need some pen to write some letter.",
    },
    correctAnswer: "I need a pen to write a letter.",
    explanation: `"A" refers to any one pen and any one letter, not specific ones.`,
  },
  {
    question: `Choose the sentence that correctly uses the indefinite article.`,
    options: {
      A: "He is looking for a job.",
      B: "He is looking for the job.",
      C: "He is looking for jobs.",
      D: "He is looking for some job.",
    },
    correctAnswer: "He is looking for a job.",
    explanation: `"A" refers to any one job, not a specific one.`,
  },
  {
    question: `Which of these sentences uses the indefinite article correctly?`,
    options: {
      A: "I would like to have an orange.",
      B: "I would like to have the orange.",
      C: "I would like to have oranges.",
      D: "I would like to have some orange.",
    },
    correctAnswer: "I would like to have an orange.",
    explanation: `"An" refers to any one orange, not a specific one.`,
  },
  {
    question: `Identify the sentence that uses the indefinite article correctly.`,
    options: {
      A: "She adopted a puppy from the shelter.",
      B: "She adopted the puppy from the shelter.",
      C: "She adopted puppies from the shelter.",
      D: "She adopted some puppy from the shelter.",
    },
    correctAnswer: "She adopted a puppy from the shelter.",
    explanation: `"A" refers to any one puppy, not a specific one.`,
  },
  {
    question: `Which sentence uses the indefinite article appropriately?`,
    options: {
      A: "I saw an interesting movie last night.",
      B: "I saw the interesting movie last night.",
      C: "I saw interesting movies last night.",
      D: "I saw some interesting movie last night.",
    },
    correctAnswer: "I saw an interesting movie last night.",
    explanation: `"An" refers to any one interesting movie, not a specific one.`,
  },
  {
    question: `Select the sentence that uses the indefinite article correctly.`,
    options: {
      A: "He wants to be a teacher.",
      B: "He wants to be the teacher.",
      C: "He wants to be teachers.",
      D: "He wants to be some teacher.",
    },
    correctAnswer: "He wants to be a teacher.",
    explanation: `"A" refers to any one teacher, not a specific one.`,
  },
  {
    question: `Which of the following sentences uses the indefinite article correctly?`,
    options: {
      A: "They bought an umbrella for the rainy day.",
      B: "They bought the umbrella for the rainy day.",
      C: "They bought umbrellas for the rainy day.",
      D: "They bought some umbrella for the rainy day.",
    },
    correctAnswer: "They bought an umbrella for the rainy day.",
    explanation: `"An" refers to any one umbrella, not a specific one.`,
  },
  {
    question: `Identify the sentence that correctly uses the indefinite article.`,
    options: {
      A: "She wore an elegant dress to the party.",
      B: "She wore the elegant dress to the party.",
      C: "She wore elegant dresses to the party.",
      D: "She wore some elegant dress to the party.",
    },
    correctAnswer: "She wore an elegant dress to the party.",
    explanation: `"An" refers to any one elegant dress, not a specific one.`,
  },
  {
    question: `Which sentence uses the indefinite article appropriately?`,
    options: {
      A: "I found a wallet on the street.",
      B: "I found the wallet on the street.",
      C: "I found wallets on the street.",
      D: "I found some wallet on the street.",
    },
    correctAnswer: "I found a wallet on the street.",
    explanation: `"A" refers to any one wallet, not a specific one.`,
  },
  {
    question: `Choose the sentence that uses the indefinite article correctly.`,
    options: {
      A: "He bought a new car yesterday.",
      B: "He bought the new car yesterday.",
      C: "He bought new cars yesterday.",
      D: "He bought some new car yesterday.",
    },
    correctAnswer: "He bought a new car yesterday.",
    explanation: `"A" refers to any one new car, not a specific one.`,
  },
  {
    question: `Which of these sentences uses the indefinite article correctly?`,
    options: {
      A: "I need an answer to my question.",
      B: "I need the answer to my question.",
      C: "I need answers to my questions.",
      D: "I need some answer to my question.",
    },
    correctAnswer: "I need an answer to my question.",
    explanation: `"An" refers to any one answer, not a specific one.`,
  },
  {
    question: `Identify the sentence that correctly uses the indefinite article.`,
    options: {
      A: "She gave me a chance to prove myself.",
      B: "She gave me the chance to prove myself.",
      C: "She gave me chances to prove myself.",
      D: "She gave me some chance to prove myself.",
    },
    correctAnswer: "She gave me a chance to prove myself.",
    explanation: `"A" refers to any one chance, not a specific one.`,
  },
  {
    question: `Which sentence uses the indefinite article appropriately?`,
    options: {
      A: "He needs a moment to think.",
      B: "He needs the moment to think.",
      C: "He needs moments to think.",
      D: "He needs some moment to think.",
    },
    correctAnswer: "He needs a moment to think.",
    explanation: `"A" refers to any one moment, not a specific one.`,
  },
  {
    question: `Select the sentence that uses the indefinite article correctly.`,
    options: {
      A: "I am reading a book about history.",
      B: "I am reading the book about history.",
      C: "I am reading books about history.",
      D: "I am reading some book about history.",
    },
    correctAnswer: "I am reading a book about history.",
    explanation: `"A" refers to any one book, not a specific one.`,
  },
  {
    question: `Which of these sentences uses the indefinite article correctly?`,
    options: {
      A: "She wants to eat an ice cream.",
      B: "She wants to eat the ice cream.",
      C: "She wants to eat ice creams.",
      D: "She wants to eat some ice cream.",
    },
    correctAnswer: "She wants to eat an ice cream.",
    explanation: `"An" refers to any one ice cream, not a specific one.`,
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

shuffle(indefiniteArticleQuiz);

// Display questions dynamically
function display_questions() {
  indefiniteArticleQuiz.forEach((element, index) => {
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
  let questions = indefiniteArticleQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  indefiniteArticleQuiz.forEach((element, index) => {
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
