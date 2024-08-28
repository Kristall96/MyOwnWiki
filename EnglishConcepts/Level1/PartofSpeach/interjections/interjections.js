let interjectionsQuiz = [
  {
    question: `Which word in this sentence is an interjection? "Wow! That was an amazing performance."`,
    options: {
      A: "That",
      B: "Was",
      C: "Wow",
      D: "Amazing",
    },
    correctAnswer: "Wow",
    explanation: `"Wow" is an interjection because it expresses sudden emotion or amazement.`,
  },
  {
    question: `Identify the interjection in this sentence: "Oh no! I forgot my keys at home."`,
    options: {
      A: "Forgot",
      B: "Keys",
      C: "At",
      D: "Oh no",
    },
    correctAnswer: "Oh no",
    explanation: `"Oh no" is an interjection because it expresses sudden realization or worry.`,
  },
  {
    question: `Which of the following is an interjection?`,
    options: {
      A: "Quickly",
      B: "Alas",
      C: "Running",
      D: "Because",
    },
    correctAnswer: "Alas",
    explanation: `"Alas" is an interjection because it expresses sorrow or regret.`,
  },
  {
    question: `What is the interjection in this sentence: "Hooray! We won the game."`,
    options: {
      A: "We",
      B: "Won",
      C: "Hooray",
      D: "Game",
    },
    correctAnswer: "Hooray",
    explanation: `"Hooray" is an interjection because it expresses excitement or joy.`,
  },
  {
    question: `Which word is an interjection in this sentence: "Oops! I dropped the plate."`,
    options: {
      A: "Dropped",
      B: "Oops",
      C: "Plate",
      D: "The",
    },
    correctAnswer: "Oops",
    explanation: `"Oops" is an interjection because it expresses a mild exclamation of mistake or surprise.`,
  },
  {
    question: `Identify the interjection in this sentence: "Yikes! That was a close call."`,
    options: {
      A: "Close",
      B: "Was",
      C: "Yikes",
      D: "Call",
    },
    correctAnswer: "Yikes",
    explanation: `"Yikes" is an interjection because it expresses fear or shock.`,
  },
  {
    question: `Which of the following is an interjection that expresses relief?`,
    options: {
      A: "Phew",
      B: "Wow",
      C: "Oops",
      D: "Hooray",
    },
    correctAnswer: "Phew",
    explanation: `"Phew" is an interjection that expresses relief after a stressful situation.`,
  },
  {
    question: `Which interjection correctly completes this sentence: "___! I can't believe I passed the test!"`,
    options: {
      A: "Alas",
      B: "Oops",
      C: "Wow",
      D: "Yikes",
    },
    correctAnswer: "Wow",
    explanation: `"Wow" is the correct interjection because it expresses surprise and excitement.`,
  },
  {
    question: `In the sentence "Aha! I knew you were hiding something," which word is an interjection?`,
    options: {
      A: "Knew",
      B: "Hiding",
      C: "Something",
      D: "Aha",
    },
    correctAnswer: "Aha",
    explanation: `"Aha" is an interjection because it expresses sudden realization or triumph.`,
  },
  {
    question: `Which of the following is an interjection that expresses disappointment?`,
    options: {
      A: "Hooray",
      B: "Oops",
      C: "Alas",
      D: "Wow",
    },
    correctAnswer: "Alas",
    explanation: `"Alas" is an interjection that expresses disappointment or sorrow.`,
  },
  {
    question: `Which word is an interjection in this sentence: "Yay! We finished the project on time."`,
    options: {
      A: "We",
      B: "Finished",
      C: "Project",
      D: "Yay",
    },
    correctAnswer: "Yay",
    explanation: `"Yay" is an interjection because it expresses happiness or excitement.`,
  },
  {
    question: `Identify the interjection in this sentence: "Uh-oh, I think we made a mistake."`,
    options: {
      A: "Uh-oh",
      B: "Think",
      C: "Made",
      D: "Mistake",
    },
    correctAnswer: "Uh-oh",
    explanation: `"Uh-oh" is an interjection because it expresses concern or realization of a mistake.`,
  },
  {
    question: `Which of the following is an interjection that expresses excitement?`,
    options: {
      A: "Oops",
      B: "Wow",
      C: "Yikes",
      D: "Alas",
    },
    correctAnswer: "Wow",
    explanation: `"Wow" is an interjection that expresses excitement or amazement.`,
  },
  {
    question: `What is the interjection in this sentence: "Hey! Watch where you're going!"`,
    options: {
      A: "Watch",
      B: "Hey",
      C: "Going",
      D: "Where",
    },
    correctAnswer: "Hey",
    explanation: `"Hey" is an interjection because it is used to get someone's attention.`,
  },
  {
    question: `Which word is an interjection in this sentence: "Bravo! That was an outstanding performance."`,
    options: {
      A: "That",
      B: "Was",
      C: "Bravo",
      D: "Outstanding",
    },
    correctAnswer: "Bravo",
    explanation: `"Bravo" is an interjection because it expresses approval or praise.`,
  },
];

let quiz_container = document.getElementById("quizContainer");
let result_div = document.getElementById("result");
let result_container = document.getElementById("resultText"); // Ensures this targets the correct ID
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

shuffle(interjectionsQuiz);

// Display questions dynamically
function display_questions() {
  interjectionsQuiz.forEach((element, index) => {
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
  let questions = interjectionsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  interjectionsQuiz.forEach((element, index) => {
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
