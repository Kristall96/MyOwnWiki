let indirectObjectQuiz = [
  {
    question: `Which word is the indirect object in this sentence? "She gave me a gift."`,
    options: {
      A: "She",
      B: "Me",
      C: "Gift",
      D: "Gave",
    },
    correctAnswer: "Me",
    explanation: `"Me" is the indirect object because it receives the direct object "gift."`,
  },
  {
    question: `Identify the indirect object in this sentence: "He sent his friend a letter."`,
    options: {
      A: "He",
      B: "Friend",
      C: "Letter",
      D: "Sent",
    },
    correctAnswer: "Friend",
    explanation: `"Friend" is the indirect object because it receives the direct object "letter."`,
  },
  {
    question: `Which of the following is the indirect object in this sentence? "They offered the visitors some refreshments."`,
    options: {
      A: "They",
      B: "Visitors",
      C: "Refreshments",
      D: "Offered",
    },
    correctAnswer: "Visitors",
    explanation: `"Visitors" is the indirect object because they receive the direct object "refreshments."`,
  },
  {
    question: `What is the indirect object in this sentence: "The teacher showed the students a video."`,
    options: {
      A: "Teacher",
      B: "Students",
      C: "Video",
      D: "Showed",
    },
    correctAnswer: "Students",
    explanation: `"Students" is the indirect object because they receive the direct object "video."`,
  },
  {
    question: `Which word is the indirect object in this sentence: "I told him a secret."`,
    options: {
      A: "I",
      B: "Him",
      C: "Secret",
      D: "Told",
    },
    correctAnswer: "Him",
    explanation: `"Him" is the indirect object because he receives the direct object "secret."`,
  },
  {
    question: `Identify the indirect object in this sentence: "She brought her mother some flowers."`,
    options: {
      A: "She",
      B: "Mother",
      C: "Flowers",
      D: "Brought",
    },
    correctAnswer: "Mother",
    explanation: `"Mother" is the indirect object because she receives the direct object "flowers."`,
  },
  {
    question: `Which of the following is the indirect object in this sentence? "They gave the children some toys."`,
    options: {
      A: "They",
      B: "Children",
      C: "Toys",
      D: "Gave",
    },
    correctAnswer: "Children",
    explanation: `"Children" is the indirect object because they receive the direct object "toys."`,
  },
  {
    question: `What is the indirect object in this sentence: "He handed the waiter a tip."`,
    options: {
      A: "He",
      B: "Waiter",
      C: "Tip",
      D: "Handed",
    },
    correctAnswer: "Waiter",
    explanation: `"Waiter" is the indirect object because they receive the direct object "tip."`,
  },
  {
    question: `Which word is the indirect object in this sentence: "She told her brother a story."`,
    options: {
      A: "She",
      B: "Brother",
      C: "Story",
      D: "Told",
    },
    correctAnswer: "Brother",
    explanation: `"Brother" is the indirect object because he receives the direct object "story."`,
  },
  {
    question: `Identify the indirect object in this sentence: "The coach gave the team some advice."`,
    options: {
      A: "Coach",
      B: "Team",
      C: "Advice",
      D: "Gave",
    },
    correctAnswer: "Team",
    explanation: `"Team" is the indirect object because they receive the direct object "advice."`,
  },
  {
    question: `Which of the following is the indirect object in this sentence? "She sent her friend a postcard."`,
    options: {
      A: "She",
      B: "Friend",
      C: "Postcard",
      D: "Sent",
    },
    correctAnswer: "Friend",
    explanation: `"Friend" is the indirect object because they receive the direct object "postcard."`,
  },
  {
    question: `What is the indirect object in this sentence: "They made their parents a cake."`,
    options: {
      A: "They",
      B: "Parents",
      C: "Cake",
      D: "Made",
    },
    correctAnswer: "Parents",
    explanation: `"Parents" is the indirect object because they receive the direct object "cake."`,
  },
  {
    question: `Which word is the indirect object in this sentence: "He bought his sister a gift."`,
    options: {
      A: "He",
      B: "Sister",
      C: "Gift",
      D: "Bought",
    },
    correctAnswer: "Sister",
    explanation: `"Sister" is the indirect object because she receives the direct object "gift."`,
  },
  {
    question: `Identify the indirect object in this sentence: "The librarian gave the student a book."`,
    options: {
      A: "Librarian",
      B: "Student",
      C: "Book",
      D: "Gave",
    },
    correctAnswer: "Student",
    explanation: `"Student" is the indirect object because they receive the direct object "book."`,
  },
  {
    question: `Which of the following is the indirect object in this sentence? "She read the children a story."`,
    options: {
      A: "She",
      B: "Children",
      C: "Story",
      D: "Read",
    },
    correctAnswer: "Children",
    explanation: `"Children" is the indirect object because they receive the direct object "story."`,
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

shuffle(indirectObjectQuiz);

// Display questions dynamically
function display_questions() {
  indirectObjectQuiz.forEach((element, index) => {
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
  let questions = indirectObjectQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  indirectObjectQuiz.forEach((element, index) => {
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
