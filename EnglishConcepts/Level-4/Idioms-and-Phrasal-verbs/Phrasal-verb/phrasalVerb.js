let phrasalVerbsQuiz = [
  {
    question: "What does the phrasal verb 'look after' mean?",
    options: {
      A: "To search for something",
      B: "To take care of someone or something",
      C: "To observe from a distance",
      D: "To make a decision about something",
    },
    correctAnswer: "B",
    explanation:
      "The phrasal verb 'look after' means to take care of someone or something.",
  },
  {
    question: "What does the phrasal verb 'run into' mean?",
    options: {
      A: "To collide with something",
      B: "To encounter someone unexpectedly",
      C: "To manage to finish something",
      D: "To escape from a place",
    },
    correctAnswer: "B",
    explanation:
      "The phrasal verb 'run into' means to meet someone unexpectedly.",
  },
  {
    question: "What does the phrasal verb 'bring up' mean?",
    options: {
      A: "To mention or introduce a topic",
      B: "To lift something to a higher place",
      C: "To raise an issue in a discussion",
      D: "To care for something from a young age",
    },
    correctAnswer: "A",
    explanation:
      "The phrasal verb 'bring up' means to start discussing a topic.",
  },
  {
    question: "What does the phrasal verb 'take off' mean?",
    options: {
      A: "To remove something",
      B: "To leave the ground (for an aircraft)",
      C: "To start a journey",
      D: "To put on a piece of clothing",
    },
    correctAnswer: "B",
    explanation:
      "The phrasal verb 'take off' means for an aircraft to leave the ground and begin flight.",
  },
  {
    question: "What does the phrasal verb 'call off' mean?",
    options: {
      A: "To end or cancel something",
      B: "To contact someone by phone",
      C: "To announce something publicly",
      D: "To criticize someone harshly",
    },
    correctAnswer: "A",
    explanation:
      "The phrasal verb 'call off' means to cancel or stop something that was planned.",
  },
  {
    question: "What does the phrasal verb 'put up with' mean?",
    options: {
      A: "To tolerate or endure something",
      B: "To install something",
      C: "To store something in a safe place",
      D: "To decorate something",
    },
    correctAnswer: "A",
    explanation:
      "The phrasal verb 'put up with' means to tolerate or endure something unpleasant.",
  },
  {
    question: "What does the phrasal verb 'find out' mean?",
    options: {
      A: "To discover or learn information",
      B: "To escape from a situation",
      C: "To give up a task",
      D: "To discuss something with others",
    },
    correctAnswer: "A",
    explanation:
      "The phrasal verb 'find out' means to learn or discover information.",
  },
  {
    question: "What does the phrasal verb 'give in' mean?",
    options: {
      A: "To surrender or admit defeat",
      B: "To hand something to someone",
      C: "To start a new project",
      D: "To make a formal complaint",
    },
    correctAnswer: "A",
    explanation:
      "The phrasal verb 'give in' means to surrender or admit defeat after resisting.",
  },
  {
    question: "What does the phrasal verb 'pick up' mean?",
    options: {
      A: "To lift something",
      B: "To start a new hobby",
      C: "To continue from a certain point",
      D: "To clean or tidy up",
    },
    correctAnswer: "A",
    explanation:
      "The phrasal verb 'pick up' means to lift something from a surface.",
  },
  {
    question: "What does the phrasal verb 'come across' mean?",
    options: {
      A: "To find or encounter by chance",
      B: "To physically approach someone",
      C: "To represent something symbolically",
      D: "To manage to finish something",
    },
    correctAnswer: "A",
    explanation:
      "The phrasal verb 'come across' means to encounter or discover something by chance.",
  },
  {
    question: "What does the phrasal verb 'turn down' mean?",
    options: {
      A: "To reject or refuse something",
      B: "To lower something (like volume)",
      C: "To turn something physically downward",
      D: "To arrive at a location",
    },
    correctAnswer: "A",
    explanation:
      "The phrasal verb 'turn down' means to refuse or reject something offered.",
  },
  {
    question: "What does the phrasal verb 'run out of' mean?",
    options: {
      A: "To deplete a supply of something",
      B: "To escape quickly from somewhere",
      C: "To lose interest in something",
      D: "To return something to its original place",
    },
    correctAnswer: "A",
    explanation:
      "The phrasal verb 'run out of' means to exhaust the supply of something.",
  },
  {
    question: "What does the phrasal verb 'show up' mean?",
    options: {
      A: "To arrive at a place",
      B: "To reveal something hidden",
      C: "To perform in front of an audience",
      D: "To display something visually",
    },
    correctAnswer: "A",
    explanation:
      "The phrasal verb 'show up' means to arrive at a location or event.",
  },
  {
    question: "What does the phrasal verb 'take over' mean?",
    options: {
      A: "To assume control or responsibility",
      B: "To remove something from a place",
      C: "To accept a challenge",
      D: "To start a new activity",
    },
    correctAnswer: "A",
    explanation:
      "The phrasal verb 'take over' means to assume control or responsibility for something.",
  },
  {
    question: "What does the phrasal verb 'run after' mean?",
    options: {
      A: "To chase or pursue something",
      B: "To continue an activity after a break",
      C: "To look for something carefully",
      D: "To manage to finish something",
    },
    correctAnswer: "A",
    explanation:
      "The phrasal verb 'run after' means to chase or pursue something or someone.",
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

shuffle(phrasalVerbsQuiz);

// Display questions dynamically
function display_questions() {
  phrasalVerbsQuiz.forEach((element, index) => {
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
  let questions = phrasalVerbsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  phrasalVerbsQuiz.forEach((element, index) => {
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
