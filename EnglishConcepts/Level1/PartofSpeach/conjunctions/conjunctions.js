let conjunctionsQuiz = [
  {
    question: `Which word in this sentence is a conjunction? "I wanted to go to the park, but it started raining."`,
    options: {
      A: "Wanted",
      B: "But",
      C: "Park",
      D: "Started",
    },
    correctAnswer: "But",
    explanation: `"But" is a conjunction because it connects two contrasting clauses.`,
  },
  {
    question: `Identify the conjunction in this sentence: "She likes both ice cream and cake."`,
    options: {
      A: "Likes",
      B: "Both",
      C: "And",
      D: "Cake",
    },
    correctAnswer: "And",
    explanation: `"And" is a conjunction because it connects two similar items in a list.`,
  },
  {
    question: `Which of the following is a conjunction?`,
    options: {
      A: "Because",
      B: "Quickly",
      C: "Happiness",
      D: "Running",
    },
    correctAnswer: "Because",
    explanation: `"Because" is a conjunction that connects a reason or cause to an action or event.`,
  },
  {
    question: `What is the conjunction in this sentence: "I will go if you come with me."`,
    options: {
      A: "Go",
      B: "If",
      C: "With",
      D: "Me",
    },
    correctAnswer: "If",
    explanation: `"If" is a conjunction because it introduces a condition for the main clause.`,
  },
  {
    question: `Which word is a conjunction in this sentence: "He studied hard so that he could pass the exam."`,
    options: {
      A: "Studied",
      B: "So that",
      C: "Hard",
      D: "Pass",
    },
    correctAnswer: "So that",
    explanation: `"So that" is a conjunction because it connects the purpose of studying to the action of passing the exam.`,
  },
  {
    question: `Identify the conjunction in this sentence: "You can have tea or coffee."`,
    options: {
      A: "Tea",
      B: "Or",
      C: "Coffee",
      D: "Have",
    },
    correctAnswer: "Or",
    explanation: `"Or" is a conjunction because it offers a choice between two options.`,
  },
  {
    question: `Which of the following is a subordinating conjunction?`,
    options: {
      A: "And",
      B: "But",
      C: "Although",
      D: "For",
    },
    correctAnswer: "Although",
    explanation: `"Although" is a subordinating conjunction because it connects a dependent clause to an independent clause.`,
  },
  {
    question: `Which conjunction correctly completes this sentence: "I am tired, ___ I will still finish my work."`,
    options: {
      A: "But",
      B: "Or",
      C: "So",
      D: "For",
    },
    correctAnswer: "But",
    explanation: `"But" is the correct conjunction because it shows contrast between being tired and still finishing the work.`,
  },
  {
    question: `In the sentence "She went to the store because she needed milk," which word is a conjunction?`,
    options: {
      A: "Went",
      B: "Store",
      C: "Because",
      D: "Needed",
    },
    correctAnswer: "Because",
    explanation: `"Because" is a conjunction that introduces the reason for going to the store.`,
  },
  {
    question: `Which of the following is a coordinating conjunction?`,
    options: {
      A: "Since",
      B: "Yet",
      C: "Unless",
      D: "Although",
    },
    correctAnswer: "Yet",
    explanation: `"Yet" is a coordinating conjunction that connects two contrasting ideas.`,
  },
  {
    question: `Which word in this sentence is a conjunction? "I want to go out, but I have homework to finish."`,
    options: {
      A: "Want",
      B: "But",
      C: "Homework",
      D: "Finish",
    },
    correctAnswer: "But",
    explanation: `"But" is a conjunction because it connects two contrasting clauses in the sentence.`,
  },
  {
    question: `Identify the conjunction in this sentence: "I can either walk or take the bus."`,
    options: {
      A: "Walk",
      B: "Either",
      C: "Or",
      D: "Bus",
    },
    correctAnswer: "Or",
    explanation: `"Or" is a conjunction because it offers a choice between two options.`,
  },
  {
    question: `Which of the following is a correlative conjunction?`,
    options: {
      A: "Neither...nor",
      B: "For",
      C: "So",
      D: "Because",
    },
    correctAnswer: "Neither...nor",
    explanation: `"Neither...nor" is a correlative conjunction because it pairs two conjunctions to connect balanced phrases or clauses.`,
  },
  {
    question: `What is the conjunction in this sentence: "I will go to the concert if I finish my work."`,
    options: {
      A: "Will",
      B: "Go",
      C: "If",
      D: "Finish",
    },
    correctAnswer: "If",
    explanation: `"If" is a conjunction because it introduces a condition for the main clause.`,
  },
  {
    question: `Which word is a conjunction in this sentence: "She studied hard, so she passed the exam."`,
    options: {
      A: "Studied",
      B: "Hard",
      C: "So",
      D: "Passed",
    },
    correctAnswer: "So",
    explanation: `"So" is a conjunction because it shows a cause-and-effect relationship between the two clauses.`,
  },
];

let quiz_container = document.getElementById("quizContainer");
let result_div = document.getElementById("result");
let result_container = document.getElementById("resultText"); // Ensure this targets the correct ID
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

shuffle(conjunctionsQuiz);

// Display questions dynamically
function display_questions() {
  conjunctionsQuiz.forEach((element, index) => {
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
  let questions = conjunctionsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  conjunctionsQuiz.forEach((element, index) => {
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
