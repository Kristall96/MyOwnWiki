let adverbsQuiz = [
  {
    question: `Which word in this sentence is an adverb? "She sings beautifully."`,
    options: {
      A: "Sings",
      B: "Beautifully",
      C: "She",
      D: "Song",
    },
    correctAnswer: "Beautifully",
    explanation: `"Beautifully" is an adverb because it describes how she sings, modifying the verb "sings."`,
  },
  {
    question: `Identify the adverb in this sentence: "The cat ran quickly across the yard."`,
    options: {
      A: "Cat",
      B: "Ran",
      C: "Quickly",
      D: "Yard",
    },
    correctAnswer: "Quickly",
    explanation: `"Quickly" is an adverb because it modifies the verb "ran" by describing how the cat ran.`,
  },
  {
    question: `Which of the following is an adverb?`,
    options: {
      A: "Happy",
      B: "Quickly",
      C: "Bright",
      D: "Beautiful",
    },
    correctAnswer: "Quickly",
    explanation: `"Quickly" is an adverb because it modifies a verb by describing how an action is performed.`,
  },
  {
    question: `What is the adverb in this sentence: "He spoke very softly."`,
    options: {
      A: "Spoke",
      B: "Very",
      C: "He",
      D: "Softly",
    },
    correctAnswer: "Softly",
    explanation: `"Softly" is an adverb because it describes how he spoke, modifying the verb "spoke."`,
  },
  {
    question: `Which word is an adverb in this sentence: "The child played happily with her toys."`,
    options: {
      A: "Child",
      B: "Played",
      C: "Happily",
      D: "Toys",
    },
    correctAnswer: "Happily",
    explanation: `"Happily" is an adverb because it modifies the verb "played" by describing how the child played.`,
  },
  {
    question: `Identify the adverb in this sentence: "The teacher explained the lesson very clearly."`,
    options: {
      A: "Teacher",
      B: "Lesson",
      C: "Clearly",
      D: "Very",
    },
    correctAnswer: "Clearly",
    explanation: `"Clearly" is an adverb because it describes how the teacher explained the lesson, modifying the verb "explained."`,
  },
  {
    question: `Which of the following is an adverb that modifies an adjective?`,
    options: {
      A: "Quickly",
      B: "Extremely",
      C: "Softly",
      D: "Brightly",
    },
    correctAnswer: "Extremely",
    explanation: `"Extremely" is an adverb that modifies an adjective, such as in the phrase "extremely happy."`,
  },
  {
    question: `Which adverb correctly completes this sentence: "The weather today is ___ cold."`,
    options: {
      A: "Too",
      B: "Very",
      C: "Extremely",
      D: "All of the above",
    },
    correctAnswer: "All of the above",
    explanation: `"Too," "Very," and "Extremely" are all adverbs that can modify the adjective "cold."`,
  },
  {
    question: `In the sentence "She danced incredibly well," which word is an adverb?`,
    options: {
      A: "Danced",
      B: "Incredibly",
      C: "She",
      D: "Well",
    },
    correctAnswer: "Incredibly",
    explanation: `"Incredibly" is an adverb because it modifies another adverb "well," describing how she danced.`,
  },
  {
    question: `Which of the following is an adverb that modifies another adverb?`,
    options: {
      A: "Very",
      B: "Quickly",
      C: "Slowly",
      D: "Happily",
    },
    correctAnswer: "Very",
    explanation: `"Very" is an adverb that can modify another adverb, such as in the phrase "very quickly."`,
  },
  {
    question: `Which word in this sentence is an adverb? "He arrived late to the meeting."`,
    options: {
      A: "Arrived",
      B: "Late",
      C: "Meeting",
      D: "To",
    },
    correctAnswer: "Late",
    explanation: `"Late" is an adverb because it describes when the action of arriving took place.`,
  },
  {
    question: `Identify the adverb in this sentence: "The children played outside after school."`,
    options: {
      A: "Children",
      B: "Played",
      C: "Outside",
      D: "School",
    },
    correctAnswer: "Outside",
    explanation: `"Outside" is an adverb because it describes where the action of playing took place.`,
  },
  {
    question: `Which of the following is an adverb that modifies a verb?`,
    options: {
      A: "Quickly",
      B: "Happy",
      C: "Bright",
      D: "Beautiful",
    },
    correctAnswer: "Quickly",
    explanation: `"Quickly" is an adverb because it modifies the verb by describing how an action is performed.`,
  },
  {
    question: `What is the adverb in this sentence: "The train moved slowly through the town."`,
    options: {
      A: "Train",
      B: "Moved",
      C: "Slowly",
      D: "Town",
    },
    correctAnswer: "Slowly",
    explanation: `"Slowly" is an adverb because it describes how the train moved.`,
  },
  {
    question: `Which word is an adverb in this sentence: "She almost missed the bus."`,
    options: {
      A: "Almost",
      B: "Missed",
      C: "Bus",
      D: "The",
    },
    correctAnswer: "Almost",
    explanation: `"Almost" is an adverb because it modifies the verb "missed" by indicating how close the action was to happening.`,
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

shuffle(adverbsQuiz);

// Display questions dynamically
function display_questions() {
  adverbsQuiz.forEach((element, index) => {
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
  let questions = adverbsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  adverbsQuiz.forEach((element, index) => {
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
