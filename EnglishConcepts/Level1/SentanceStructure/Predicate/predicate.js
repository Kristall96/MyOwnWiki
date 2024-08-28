let predicateQuiz = [
  {
    question: `Which part of the sentence is the predicate? "The cat slept on the couch."`,
    options: {
      A: "The cat",
      B: "Slept on the couch",
      C: "The couch",
      D: "Slept",
    },
    correctAnswer: "Slept on the couch",
    explanation: `"Slept on the couch" is the predicate because it contains the verb "slept" and tells what the subject (the cat) did.`,
  },
  {
    question: `Identify the predicate in this sentence: "Sarah reads a book every night."`,
    options: {
      A: "Sarah",
      B: "Reads a book every night",
      C: "A book",
      D: "Every night",
    },
    correctAnswer: "Reads a book every night",
    explanation: `"Reads a book every night" is the predicate because it contains the verb and tells what Sarah does.`,
  },
  {
    question: `Which of the following is the predicate of this sentence? "The dog barked loudly."`,
    options: {
      A: "The dog",
      B: "Barked loudly",
      C: "Loudly",
      D: "Barked",
    },
    correctAnswer: "Barked loudly",
    explanation: `"Barked loudly" is the predicate because it contains the verb and describes the action performed by the dog.`,
  },
  {
    question: `What is the predicate in this sentence: "The students studied for the test."`,
    options: {
      A: "The students",
      B: "Studied for the test",
      C: "For the test",
      D: "Studied",
    },
    correctAnswer: "Studied for the test",
    explanation: `"Studied for the test" is the predicate because it tells what the students did.`,
  },
  {
    question: `Which part of the sentence is the predicate? "The cake was delicious."`,
    options: {
      A: "The cake",
      B: "Was delicious",
      C: "Delicious",
      D: "Was",
    },
    correctAnswer: "Was delicious",
    explanation: `"Was delicious" is the predicate because it contains the verb and tells something about the subject (the cake).`,
  },
  {
    question: `Identify the predicate in this sentence: "My friends and I went to the concert."`,
    options: {
      A: "My friends and I",
      B: "Went to the concert",
      C: "The concert",
      D: "Went",
    },
    correctAnswer: "Went to the concert",
    explanation: `"Went to the concert" is the predicate because it tells what the subject (my friends and I) did.`,
  },
  {
    question: `Which of the following is the predicate of this sentence? "The sun rises in the east."`,
    options: {
      A: "The sun",
      B: "Rises in the east",
      C: "In the east",
      D: "Rises",
    },
    correctAnswer: "Rises in the east",
    explanation: `"Rises in the east" is the predicate because it contains the verb and describes the action of the sun.`,
  },
  {
    question: `What is the predicate in this sentence: "The book on the table is mine."`,
    options: {
      A: "The book",
      B: "On the table",
      C: "Is mine",
      D: "Mine",
    },
    correctAnswer: "Is mine",
    explanation: `"Is mine" is the predicate because it tells what is true about the subject (the book).`,
  },
  {
    question: `Which part of the sentence is the predicate? "John and Mary are going to the movies."`,
    options: {
      A: "John and Mary",
      B: "Are going to the movies",
      C: "The movies",
      D: "Are",
    },
    correctAnswer: "Are going to the movies",
    explanation: `"Are going to the movies" is the predicate because it tells what the subject (John and Mary) are doing.`,
  },
  {
    question: `Identify the predicate in this sentence: "The quick brown fox jumps over the lazy dog."`,
    options: {
      A: "The quick brown fox",
      B: "Jumps over the lazy dog",
      C: "The lazy dog",
      D: "Jumps",
    },
    correctAnswer: "Jumps over the lazy dog",
    explanation: `"Jumps over the lazy dog" is the predicate because it describes the action the subject (the fox) is doing.`,
  },
  {
    question: `Which of the following is the predicate of this sentence? "The car was parked outside."`,
    options: {
      A: "The car",
      B: "Was parked outside",
      C: "Parked outside",
      D: "Outside",
    },
    correctAnswer: "Was parked outside",
    explanation: `"Was parked outside" is the predicate because it contains the verb and describes the state of the car.`,
  },
  {
    question: `What is the predicate in this sentence: "The new restaurant opened last week."`,
    options: {
      A: "The new restaurant",
      B: "Opened last week",
      C: "Last week",
      D: "Opened",
    },
    correctAnswer: "Opened last week",
    explanation: `"Opened last week" is the predicate because it tells what the subject (the restaurant) did.`,
  },
  {
    question: `Which part of the sentence is the predicate? "The children played in the park."`,
    options: {
      A: "The children",
      B: "Played in the park",
      C: "In the park",
      D: "Played",
    },
    correctAnswer: "Played in the park",
    explanation: `"Played in the park" is the predicate because it describes the action the children performed.`,
  },
  {
    question: `Identify the predicate in this sentence: "The beautiful flowers bloomed in the garden."`,
    options: {
      A: "The beautiful flowers",
      B: "Bloomed in the garden",
      C: "In the garden",
      D: "Bloomed",
    },
    correctAnswer: "Bloomed in the garden",
    explanation: `"Bloomed in the garden" is the predicate because it tells what the flowers did.`,
  },
  {
    question: `Which of the following is the predicate of this sentence? "The teacher gave a lesson to the class."`,
    options: {
      A: "The teacher",
      B: "Gave a lesson to the class",
      C: "A lesson",
      D: "The class",
    },
    correctAnswer: "Gave a lesson to the class",
    explanation: `"Gave a lesson to the class" is the predicate because it describes the action the teacher performed.`,
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

shuffle(predicateQuiz);

// Display questions dynamically
function display_questions() {
  predicateQuiz.forEach((element, index) => {
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
  let questions = predicateQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  predicateQuiz.forEach((element, index) => {
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
