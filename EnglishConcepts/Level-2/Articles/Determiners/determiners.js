let determinersQuiz = [
  {
    question: `Which of these words is a determiner?`,
    options: {
      A: "Quickly",
      B: "Their",
      C: "Jumped",
      D: "Happily",
    },
    correctAnswer: "Their",
    explanation: `"Their" is a determiner that shows possession and introduces a noun.`,
  },
  {
    question: `Select the determiner in this sentence: "Some people like to travel."`,
    options: {
      A: "People",
      B: "Like",
      C: "Travel",
      D: "Some",
    },
    correctAnswer: "Some",
    explanation: `"Some" is a determiner that introduces the noun "people."`,
  },
  {
    question: `Identify the determiner used in the following sentence: "That car is very expensive."`,
    options: {
      A: "Car",
      B: "Is",
      C: "That",
      D: "Expensive",
    },
    correctAnswer: "That",
    explanation: `"That" is a determiner that specifies which car is being referred to.`,
  },
  {
    question: `Which word is a determiner in this sentence? "Each student received a certificate."`,
    options: {
      A: "Student",
      B: "Received",
      C: "Each",
      D: "Certificate",
    },
    correctAnswer: "Each",
    explanation: `"Each" is a determiner that introduces the noun "student" and indicates individuality.`,
  },
  {
    question: `Choose the determiner from this sentence: "No one knows the answer."`,
    options: {
      A: "Knows",
      B: "No",
      C: "Answer",
      D: "The",
    },
    correctAnswer: "No",
    explanation: `"No" is a determiner that negates the noun "one."`,
  },
  {
    question: `Which of these sentences uses a determiner correctly?`,
    options: {
      A: "I bought some apples from the market.",
      B: "I bought apples some from the market.",
      C: "I bought apples the some market.",
      D: "I bought from the some apples market.",
    },
    correctAnswer: "I bought some apples from the market.",
    explanation: `"Some" is a determiner that introduces the noun "apples."`,
  },
  {
    question: `Identify the determiner in this sentence: "This table needs to be cleaned."`,
    options: {
      A: "Table",
      B: "Needs",
      C: "This",
      D: "Cleaned",
    },
    correctAnswer: "This",
    explanation: `"This" is a determiner that specifies which table is being referred to.`,
  },
  {
    question: `Which of these words functions as a determiner?`,
    options: {
      A: "Beautifully",
      B: "Several",
      C: "Quick",
      D: "Running",
    },
    correctAnswer: "Several",
    explanation: `"Several" is a determiner that indicates an unspecified number of nouns.`,
  },
  {
    question: `Choose the sentence where the determiner is used correctly.`,
    options: {
      A: "I need a few more details.",
      B: "I need more details a few.",
      C: "I need details a few more.",
      D: "I need a details few more.",
    },
    correctAnswer: "I need a few more details.",
    explanation: `"A few" is a determiner phrase that modifies "details."`,
  },
  {
    question: `Which word is a determiner in the following sentence? "Those shoes are really comfortable."`,
    options: {
      A: "Shoes",
      B: "Are",
      C: "Those",
      D: "Comfortable",
    },
    correctAnswer: "Those",
    explanation: `"Those" is a determiner that specifies which shoes are being discussed.`,
  },
  {
    question: `Select the determiner used in this sentence: "Each book on the shelf is unique."`,
    options: {
      A: "Book",
      B: "Is",
      C: "Each",
      D: "Shelf",
    },
    correctAnswer: "Each",
    explanation: `"Each" is a determiner that introduces the noun "book" and indicates individuality.`,
  },
  {
    question: `Which of the following sentences contains a determiner?`,
    options: {
      A: "Several guests attended the party.",
      B: "Guests several attended the party.",
      C: "Attended several guests the party.",
      D: "Party several guests attended the.",
    },
    correctAnswer: "Several guests attended the party.",
    explanation: `"Several" is a determiner that introduces the noun "guests."`,
  },
  {
    question: `Identify the determiner in this sentence: "That idea is worth considering."`,
    options: {
      A: "Idea",
      B: "Is",
      C: "That",
      D: "Considering",
    },
    correctAnswer: "That",
    explanation: `"That" is a determiner that specifies which idea is being referred to.`,
  },
  {
    question: `Which word in this sentence is a determiner? "My friends are coming over later."`,
    options: {
      A: "Friends",
      B: "Are",
      C: "My",
      D: "Later",
    },
    correctAnswer: "My",
    explanation: `"My" is a determiner that shows possession and introduces the noun "friends."`,
  },
  {
    question: `Choose the correct sentence where the determiner is used appropriately.`,
    options: {
      A: "We visited those beautiful gardens yesterday.",
      B: "We visited beautiful those gardens yesterday.",
      C: "We visited gardens those beautiful yesterday.",
      D: "We visited yesterday those beautiful gardens.",
    },
    correctAnswer: "We visited those beautiful gardens yesterday.",
    explanation: `"Those" is a determiner specifying which gardens are being discussed.`,
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

shuffle(determinersQuiz);

// Display questions dynamically
function display_questions() {
  determinersQuiz.forEach((element, index) => {
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
  let questions = determinersQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  determinersQuiz.forEach((element, index) => {
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
