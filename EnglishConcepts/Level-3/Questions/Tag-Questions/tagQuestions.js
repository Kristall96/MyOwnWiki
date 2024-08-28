let tagQuestionsQuiz = [
  {
    question: `Which tag question correctly follows the statement? "You can drive, ____?"`,
    options: {
      A: "can you",
      B: "can't you",
      C: "do you",
      D: "don't you",
    },
    correctAnswer: "can you",
    explanation: `The tag question mirrors the auxiliary verb of the main sentence and switches its polarity.`,
  },
  {
    question: `Complete the tag question: "We should leave now, ____?"`,
    options: {
      A: "shouldn't we",
      B: "should we",
      C: "do we",
      D: "don't we",
    },
    correctAnswer: "shouldn't we",
    explanation: `Tag questions are formed by using the auxiliary verb of the main clause and changing its polarity.`,
  },
  {
    question: `Which tag question correctly follows the statement? "They haven't arrived yet, ____?"`,
    options: {
      A: "have they",
      B: "haven't they",
      C: "did they",
      D: "don't they",
    },
    correctAnswer: "have they",
    explanation: `For negative statements, the tag question is positive and uses the auxiliary verb from the main statement.`,
  },
  {
    question: `Complete the tag question: "You won't be late, ____?"`,
    options: {
      A: "will you",
      B: "won't you",
      C: "do you",
      D: "don't you",
    },
    correctAnswer: "will you",
    explanation: `The tag question mirrors the auxiliary verb of the main sentence and changes its polarity.`,
  },
  {
    question: `Which of the following is a correct tag question?`,
    options: {
      A: "She can sing, can't she?",
      B: "He doesn't like it, does he?",
      C: "We are ready, aren't we?",
      D: "They have finished, haven't they?",
    },
    correctAnswer: "He doesn't like it, does he?",
    explanation: `Tag questions are used to confirm statements and require the auxiliary verb to match the statement's polarity.`,
  },
  {
    question: `Complete the tag question: "It was a great movie, ____?"`,
    options: {
      A: "wasn't it",
      B: "was it",
      C: "did it",
      D: "wasn't that",
    },
    correctAnswer: "wasn't it",
    explanation: `Tag questions are formed by using the auxiliary verb from the main clause and changing its polarity.`,
  },
  {
    question: `Which tag question correctly follows the statement? "You're coming to the party, ____?"`,
    options: {
      A: "aren't you",
      B: "are you",
      C: "don't you",
      D: "do you",
    },
    correctAnswer: "aren't you",
    explanation: `The tag question matches the auxiliary verb of the main clause and inverts its polarity.`,
  },
  {
    question: `Complete the tag question: "She should be on time, ____?"`,
    options: {
      A: "shouldn't she",
      B: "should she",
      C: "is she",
      D: "doesn't she",
    },
    correctAnswer: "shouldn't she",
    explanation: `Tag questions use the auxiliary verb from the main clause, with polarity reversed.`,
  },
  {
    question: `Which of the following is a correct tag question?`,
    options: {
      A: "They were excited, weren't they?",
      B: "He is late, isn't he?",
      C: "You don't mind, do you?",
      D: "It doesn't matter, does it?",
    },
    correctAnswer: "You don't mind, do you?",
    explanation: `Tag questions are used to confirm or clarify statements by matching the auxiliary verb from the main clause.`,
  },
  {
    question: `Complete the tag question: "We haven't met before, ____?"`,
    options: {
      A: "have we",
      B: "haven't we",
      C: "did we",
      D: "don't we",
    },
    correctAnswer: "have we",
    explanation: `For negative statements, the tag question is positive and uses the auxiliary verb from the main clause.`,
  },
  {
    question: `Which tag question correctly follows the statement? "You enjoyed the movie, ____?"`,
    options: {
      A: "didn't you",
      B: "did you",
      C: "don't you",
      D: "didn't it",
    },
    correctAnswer: "didn't you",
    explanation: `Tag questions match the auxiliary verb of the statement and switch its polarity.`,
  },
  {
    question: `Complete the tag question: "They aren't finished yet, ____?"`,
    options: {
      A: "are they",
      B: "aren't they",
      C: "were they",
      D: "will they",
    },
    correctAnswer: "are they",
    explanation: `The tag question is formed by inverting the polarity of the auxiliary verb used in the main sentence.`,
  },
  {
    question: `Which of the following is a correct tag question?`,
    options: {
      A: "You know the answer, don't you?",
      B: "He wasn't sure, was he?",
      C: "We will go, won't we?",
      D: "They had arrived, hadn't they?",
    },
    correctAnswer: "He wasn't sure, was he?",
    explanation: `Tag questions use the auxiliary verb from the main clause, with its polarity changed.`,
  },
  {
    question: `Complete the tag question: "You haven't seen my keys, ____?"`,
    options: {
      A: "have you",
      B: "haven't you",
      C: "did you",
      D: "don't you",
    },
    correctAnswer: "have you",
    explanation: `Tag questions are formed by using the auxiliary verb from the main clause and changing its polarity.`,
  },
  {
    question: `Which tag question correctly follows the statement? "He should have called, ____?"`,
    options: {
      A: "shouldn't he",
      B: "should he",
      C: "didn't he",
      D: "does he",
    },
    correctAnswer: "shouldn't he",
    explanation: `Tag questions reflect the auxiliary verb of the main clause and invert its polarity.`,
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

shuffle(tagQuestionsQuiz);

// Display questions dynamically
function display_questions() {
  tagQuestionsQuiz.forEach((element, index) => {
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
  let questions = tagQuestionsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  tagQuestionsQuiz.forEach((element, index) => {
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
