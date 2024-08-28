let directObjectQuiz = [
  {
    question: `Which word is the direct object in this sentence? "The cat chased the mouse."`,
    options: {
      A: "Cat",
      B: "Chased",
      C: "Mouse",
      D: "The",
    },
    correctAnswer: "Mouse",
    explanation: `"Mouse" is the direct object because it receives the action of the verb "chased."`,
  },
  {
    question: `Identify the direct object in this sentence: "Sarah reads a book every night."`,
    options: {
      A: "Sarah",
      B: "Reads",
      C: "Book",
      D: "Night",
    },
    correctAnswer: "Book",
    explanation: `"Book" is the direct object because it receives the action of the verb "reads."`,
  },
  {
    question: `Which of the following is the direct object of this sentence? "The dog found a bone."`,
    options: {
      A: "Dog",
      B: "Found",
      C: "Bone",
      D: "A",
    },
    correctAnswer: "Bone",
    explanation: `"Bone" is the direct object because it receives the action of the verb "found."`,
  },
  {
    question: `What is the direct object in this sentence: "The teacher gave a lesson."`,
    options: {
      A: "Teacher",
      B: "Lesson",
      C: "Gave",
      D: "A",
    },
    correctAnswer: "Lesson",
    explanation: `"Lesson" is the direct object because it receives the action of the verb "gave."`,
  },
  {
    question: `Which word is the direct object in this sentence: "The children ate ice cream."`,
    options: {
      A: "Children",
      B: "Ate",
      C: "Ice cream",
      D: "The",
    },
    correctAnswer: "Ice cream",
    explanation: `"Ice cream" is the direct object because it receives the action of the verb "ate."`,
  },
  {
    question: `Identify the direct object in this sentence: "She kicked the ball."`,
    options: {
      A: "She",
      B: "Kicked",
      C: "Ball",
      D: "The",
    },
    correctAnswer: "Ball",
    explanation: `"Ball" is the direct object because it receives the action of the verb "kicked."`,
  },
  {
    question: `Which of the following is the direct object of this sentence? "They bought new shoes."`,
    options: {
      A: "They",
      B: "Bought",
      C: "Shoes",
      D: "New",
    },
    correctAnswer: "Shoes",
    explanation: `"Shoes" is the direct object because it receives the action of the verb "bought."`,
  },
  {
    question: `What is the direct object in this sentence: "The man built a house."`,
    options: {
      A: "Man",
      B: "Built",
      C: "House",
      D: "A",
    },
    correctAnswer: "House",
    explanation: `"House" is the direct object because it receives the action of the verb "built."`,
  },
  {
    question: `Which word is the direct object in this sentence: "She found her keys."`,
    options: {
      A: "She",
      B: "Found",
      C: "Keys",
      D: "Her",
    },
    correctAnswer: "Keys",
    explanation: `"Keys" is the direct object because they receive the action of the verb "found."`,
  },
  {
    question: `Identify the direct object in this sentence: "The chef cooked a delicious meal."`,
    options: {
      A: "Chef",
      B: "Cooked",
      C: "Meal",
      D: "Delicious",
    },
    correctAnswer: "Meal",
    explanation: `"Meal" is the direct object because it receives the action of the verb "cooked."`,
  },
  {
    question: `Which of the following is the direct object of this sentence? "The bird built a nest."`,
    options: {
      A: "Bird",
      B: "Built",
      C: "Nest",
      D: "A",
    },
    correctAnswer: "Nest",
    explanation: `"Nest" is the direct object because it receives the action of the verb "built."`,
  },
  {
    question: `What is the direct object in this sentence: "The students completed their homework."`,
    options: {
      A: "Students",
      B: "Completed",
      C: "Homework",
      D: "Their",
    },
    correctAnswer: "Homework",
    explanation: `"Homework" is the direct object because it receives the action of the verb "completed."`,
  },
  {
    question: `Which word is the direct object in this sentence: "He borrowed my pen."`,
    options: {
      A: "He",
      B: "Borrowed",
      C: "Pen",
      D: "My",
    },
    correctAnswer: "Pen",
    explanation: `"Pen" is the direct object because it receives the action of the verb "borrowed."`,
  },
  {
    question: `Identify the direct object in this sentence: "The artist painted a beautiful picture."`,
    options: {
      A: "Artist",
      B: "Painted",
      C: "Picture",
      D: "Beautiful",
    },
    correctAnswer: "Picture",
    explanation: `"Picture" is the direct object because it receives the action of the verb "painted."`,
  },
  {
    question: `Which of the following is the direct object of this sentence? "She fixed the broken chair."`,
    options: {
      A: "She",
      B: "Fixed",
      C: "Chair",
      D: "Broken",
    },
    correctAnswer: "Chair",
    explanation: `"Chair" is the direct object because it receives the action of the verb "fixed."`,
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

shuffle(directObjectQuiz);

// Display questions dynamically
function display_questions() {
  directObjectQuiz.forEach((element, index) => {
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
  let questions = directObjectQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  directObjectQuiz.forEach((element, index) => {
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
