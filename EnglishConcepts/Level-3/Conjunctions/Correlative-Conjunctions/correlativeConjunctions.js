let correlativeConjunctionsQuiz = [
  {
    question: `Choose the correct correlative conjunction pair to complete the sentence: "She will bring either a salad ______ a dessert to the party."`,
    options: {
      A: "Neither...nor",
      B: "Both...and",
      C: "Either...or",
      D: "Not only...but also",
    },
    correctAnswer: "Either...or",
    explanation: `"Either...or" is used to offer two alternatives in the sentence.`,
  },
  {
    question: `Which correlative conjunction pair is used to add emphasis and indicate that two things are equally true or relevant?`,
    options: {
      A: "Not only...but also",
      B: "Either...or",
      C: "Both...and",
      D: "Whether...or",
    },
    correctAnswer: "Not only...but also",
    explanation: `"Not only...but also" emphasizes that both items or actions are true or applicable.`,
  },
  {
    question: `Identify the correlative conjunctions used to connect two similar ideas in a sentence: "Both the cake ______ the ice cream were delicious."`,
    options: {
      A: "Either...or",
      B: "Not only...but also",
      C: "Both...and",
      D: "Neither...nor",
    },
    correctAnswer: "Both...and",
    explanation: `"Both...and" is used to link two similar ideas or items in a sentence.`,
  },
  {
    question: `Complete the sentence using the correct correlative conjunctions: "He is neither a good student ______ a diligent worker."`,
    options: {
      A: "Not only...but also",
      B: "Either...or",
      C: "Both...and",
      D: "Neither...nor",
    },
    correctAnswer: "Neither...nor",
    explanation: `"Neither...nor" is used to indicate that neither of the two stated qualities is true.`,
  },
  {
    question: `Which correlative conjunction pair is used to express uncertainty between two options?`,
    options: {
      A: "Whether...or",
      B: "Not only...but also",
      C: "Both...and",
      D: "Either...or",
    },
    correctAnswer: "Whether...or",
    explanation: `"Whether...or" is used to present two options when there is uncertainty about which one will happen.`,
  },
  {
    question: `Choose the correct correlative conjunction pair to complete the sentence: "You should not only focus on your grades ______ on your extracurricular activities."`,
    options: {
      A: "Either...or",
      B: "Both...and",
      C: "Not only...but also",
      D: "Neither...nor",
    },
    correctAnswer: "Not only...but also",
    explanation: `"Not only...but also" is used to emphasize that both elements are important.`,
  },
  {
    question: `Which correlative conjunction pair is used to connect two equal elements in a sentence?`,
    options: {
      A: "Either...or",
      B: "Neither...nor",
      C: "Both...and",
      D: "Whether...or",
    },
    correctAnswer: "Both...and",
    explanation: `"Both...and" connects two equal elements in a sentence, indicating that both are included or true.`,
  },
  {
    question: `Identify the correct correlative conjunction pair to complete the sentence: "She will decide whether to stay here ______ move to another city."`,
    options: {
      A: "Not only...but also",
      B: "Either...or",
      C: "Both...and",
      D: "Neither...nor",
    },
    correctAnswer: "Either...or",
    explanation: `"Either...or" is used to present two alternatives or choices.`,
  },
  {
    question: `Which correlative conjunction pair is used to introduce options that are not mutually exclusive?`,
    options: {
      A: "Both...and",
      B: "Either...or",
      C: "Neither...nor",
      D: "Whether...or",
    },
    correctAnswer: "Both...and",
    explanation: `"Both...and" introduces options that can coexist or both be true.`,
  },
  {
    question: `Complete the sentence using the correct correlative conjunctions: "He is not only talented ______ also hardworking."`,
    options: {
      A: "Either...or",
      B: "Both...and",
      C: "Neither...nor",
      D: "Not only...but also",
    },
    correctAnswer: "Not only...but also",
    explanation: `"Not only...but also" is used to highlight two qualities or actions equally.`,
  },
  {
    question: `Which correlative conjunction pair is used to present an alternative or choice between two possibilities?`,
    options: {
      A: "Neither...nor",
      B: "Both...and",
      C: "Either...or",
      D: "Not only...but also",
    },
    correctAnswer: "Either...or",
    explanation: `"Either...or" is used to present alternatives or choices between two possibilities.`,
  },
  {
    question: `Identify the correlative conjunction pair used to show a combination of two qualities or actions: "The team was both efficient ______ innovative."`,
    options: {
      A: "Not only...but also",
      B: "Both...and",
      C: "Either...or",
      D: "Neither...nor",
    },
    correctAnswer: "Both...and",
    explanation: `"Both...and" shows that two qualities or actions are combined or true together.`,
  },
  {
    question: `Complete the sentence using the correct correlative conjunctions: "He can choose to go either to the beach ______ to the mountains."`,
    options: {
      A: "Neither...nor",
      B: "Both...and",
      C: "Either...or",
      D: "Not only...but also",
    },
    correctAnswer: "Either...or",
    explanation: `"Either...or" presents two alternatives between which a choice must be made.`,
  },
  {
    question: `Which correlative conjunction pair is used to indicate the presence of two opposing ideas or qualities?`,
    options: {
      A: "Either...or",
      B: "Neither...nor",
      C: "Not only...but also",
      D: "Whether...or",
    },
    correctAnswer: "Neither...nor",
    explanation: `"Neither...nor" is used to express that neither of two opposing ideas or qualities applies.`,
  },
  {
    question: `Choose the correct correlative conjunction pair to complete the sentence: "The movie was both thrilling ______ inspiring."`,
    options: {
      A: "Not only...but also",
      B: "Both...and",
      C: "Either...or",
      D: "Neither...nor",
    },
    correctAnswer: "Both...and",
    explanation: `"Both...and" shows that the movie had two positive qualities equally.`,
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

shuffle(correlativeConjunctionsQuiz);

// Display questions dynamically
function display_questions() {
  correlativeConjunctionsQuiz.forEach((element, index) => {
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
  let questions = correlativeConjunctionsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  correlativeConjunctionsQuiz.forEach((element, index) => {
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
