let gerundsInfinitivesQuiz = [
  {
    question: "Choose the correct sentence:",
    options: {
      A: "I am interested in learning new languages.",
      B: "I am interested to learn new languages.",
      C: "I am interested learning new languages.",
      D: "I am interested in learn new languages.",
    },
    correctAnswer: "A",
    explanation:
      "The phrase 'interested in' is followed by a gerund ('learning').",
  },
  {
    question: "Which form is correct? 'They agreed ___ (meet) at the café.'",
    options: {
      A: "meeting",
      B: "to meet",
      C: "meet",
      D: "meets",
    },
    correctAnswer: "B",
    explanation:
      "The verb 'agree' is followed by an infinitive ('to meet') to indicate the action that was agreed upon.",
  },
  {
    question: "Choose the correct sentence:",
    options: {
      A: "She avoids to speak in public.",
      B: "She avoids speaking in public.",
      C: "She avoids speak in public.",
      D: "She avoids speak to public.",
    },
    correctAnswer: "B",
    explanation: "The verb 'avoid' is followed by a gerund ('speaking').",
  },
  {
    question:
      "Which form is correct? 'I would like ___ (help) with the project.'",
    options: {
      A: "help",
      B: "to help",
      C: "helping",
      D: "helps",
    },
    correctAnswer: "B",
    explanation:
      "The phrase 'would like' is followed by an infinitive ('to help') to express a desire.",
  },
  {
    question: "Select the correct sentence:",
    options: {
      A: "He forgot to call his friend.",
      B: "He forgot calling his friend.",
      C: "He forgot call his friend.",
      D: "He forgot to calling his friend.",
    },
    correctAnswer: "A",
    explanation:
      "The verb 'forget' can be followed by either a gerund or an infinitive, but the meaning changes. Here, 'to call' indicates that he did not remember to make the call.",
  },
  {
    question: "Which form is correct? 'She admitted ___ (make) a mistake.'",
    options: {
      A: "to make",
      B: "making",
      C: "make",
      D: "makes",
    },
    correctAnswer: "B",
    explanation:
      "The verb 'admit' is followed by a gerund ('making') to express acknowledgment of the action.",
  },
  {
    question: "Choose the correct sentence:",
    options: {
      A: "They expect to finish the project by Friday.",
      B: "They expect finishing the project by Friday.",
      C: "They expect finish the project by Friday.",
      D: "They expect finished the project by Friday.",
    },
    correctAnswer: "A",
    explanation:
      "The verb 'expect' is followed by an infinitive ('to finish') to express the anticipated action.",
  },
  {
    question: "Which form is correct? 'I dislike ___ (wait) in long lines.'",
    options: {
      A: "to wait",
      B: "waiting",
      C: "wait",
      D: "waited",
    },
    correctAnswer: "B",
    explanation:
      "The verb 'dislike' is followed by a gerund ('waiting') to express a feeling of aversion.",
  },
  {
    question: "Select the correct sentence:",
    options: {
      A: "She promised to help us with the problem.",
      B: "She promised helping us with the problem.",
      C: "She promised help us with the problem.",
      D: "She promised to helping us with the problem.",
    },
    correctAnswer: "A",
    explanation:
      "The verb 'promise' is followed by an infinitive ('to help') to express a commitment.",
  },
  {
    question: "Which form is correct? 'He can’t stand ___ (be) late.'",
    options: {
      A: "being",
      B: "to be",
      C: "be",
      D: "been",
    },
    correctAnswer: "A",
    explanation:
      "The verb 'can’t stand' is followed by a gerund ('being') to express strong dislike.",
  },
  {
    question: "Choose the correct sentence:",
    options: {
      A: "She prefers to read rather than watch TV.",
      B: "She prefers reading rather than watch TV.",
      C: "She prefers read rather than watching TV.",
      D: "She prefers reading rather than watched TV.",
    },
    correctAnswer: "A",
    explanation:
      "The verb 'prefer' is followed by an infinitive ('to read') or a gerund ('reading'). In this case, the infinitive is used with 'rather than.'",
  },
  {
    question:
      "Which form is correct? 'They discussed ___ (travel) to Europe next summer.'",
    options: {
      A: "to travel",
      B: "traveling",
      C: "travel",
      D: "travels",
    },
    correctAnswer: "B",
    explanation:
      "The verb 'discuss' is followed by a gerund ('traveling') to indicate the topic of discussion.",
  },
  {
    question: "Select the correct sentence:",
    options: {
      A: "I forgot to bring my book.",
      B: "I forgot bringing my book.",
      C: "I forgot bring my book.",
      D: "I forgot to bringing my book.",
    },
    correctAnswer: "A",
    explanation:
      "The verb 'forget' is followed by an infinitive ('to bring') to indicate something he did not remember to do.",
  },
  {
    question: "Which form is correct? 'She stopped ___ (work) at the company.'",
    options: {
      A: "work",
      B: "working",
      C: "to work",
      D: "works",
    },
    correctAnswer: "B",
    explanation:
      "The verb 'stop' is followed by a gerund ('working') to indicate the action she ceased doing.",
  },
  {
    question: "Choose the correct sentence:",
    options: {
      A: "They hope to travel to Japan next year.",
      B: "They hope traveling to Japan next year.",
      C: "They hope travel to Japan next year.",
      D: "They hope to traveling to Japan next year.",
    },
    correctAnswer: "A",
    explanation:
      "The verb 'hope' is followed by an infinitive ('to travel') to express a future desire.",
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

shuffle(gerundsInfinitivesQuiz);

// Display questions dynamically
function display_questions() {
  gerundsInfinitivesQuiz.forEach((element, index) => {
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
  let questions = gerundsInfinitivesQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  gerundsInfinitivesQuiz.forEach((element, index) => {
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
