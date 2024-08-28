let imperativeMoodQuiz = [
  {
    question: `Identify the imperative mood sentence.`,
    options: {
      A: "You will sit down.",
      B: "Sit down now.",
      C: "Did you sit down?",
      D: "You should sit down.",
    },
    correctAnswer: "Sit down now.",
    explanation: `"Sit down now" is in the imperative mood because it gives a direct command.`,
  },
  {
    question: `Which of the following sentences uses the imperative mood?`,
    options: {
      A: "You are sitting down.",
      B: "Please sit down.",
      C: "Will you sit down?",
      D: "You should sit down.",
    },
    correctAnswer: "Please sit down.",
    explanation: `"Please sit down" is in the imperative mood because it makes a polite request.`,
  },
  {
    question: `Select the sentence that is in the imperative mood.`,
    options: {
      A: "You should sit down.",
      B: "Sit down quietly.",
      C: "Are you sitting down?",
      D: "If you sit down, you will be more comfortable.",
    },
    correctAnswer: "Sit down quietly.",
    explanation: `"Sit down quietly" is in the imperative mood because it gives a clear instruction.`,
  },
  {
    question: `Which sentence exemplifies the imperative mood?`,
    options: {
      A: "You might sit down.",
      B: "Sit down and relax.",
      C: "Did you sit down?",
      D: "If you sit down, you will be able to focus.",
    },
    correctAnswer: "Sit down and relax.",
    explanation: `"Sit down and relax" is in the imperative mood because it issues a command.`,
  },
  {
    question: `Identify the imperative mood example.`,
    options: {
      A: "You will sit down soon.",
      B: "Please sit down.",
      C: "Are you sitting down?",
      D: "You should sit down now.",
    },
    correctAnswer: "Please sit down.",
    explanation: `"Please sit down" is in the imperative mood because it is a polite request or command.`,
  },
  {
    question: `Which of these sentences is in the imperative mood?`,
    options: {
      A: "If you sit down, you will be more comfortable.",
      B: "You must sit down.",
      C: "Sit down immediately.",
      D: "Did you sit down?",
    },
    correctAnswer: "Sit down immediately.",
    explanation: `"Sit down immediately" is in the imperative mood because it directs someone to do something.`,
  },
  {
    question: `Choose the sentence that uses the imperative mood.`,
    options: {
      A: "You are sitting down.",
      B: "Sit down and listen.",
      C: "Will you sit down?",
      D: "You should sit down.",
    },
    correctAnswer: "Sit down and listen.",
    explanation: `"Sit down and listen" is in the imperative mood because it commands someone to take action.`,
  },
  {
    question: `Which sentence is in the imperative mood?`,
    options: {
      A: "You might sit down soon.",
      B: "Sit down now.",
      C: "Are you sitting down?",
      D: "You should sit down.",
    },
    correctAnswer: "Sit down now.",
    explanation: `"Sit down now" is in the imperative mood because it is a direct command.`,
  },
  {
    question: `Select the imperative mood sentence.`,
    options: {
      A: "You could sit down.",
      B: "Sit down and be quiet.",
      C: "Did you sit down?",
      D: "You will sit down soon.",
    },
    correctAnswer: "Sit down and be quiet.",
    explanation: `"Sit down and be quiet" is in the imperative mood because it issues multiple commands.`,
  },
  {
    question: `Which of the following sentences uses the imperative mood?`,
    options: {
      A: "You might want to sit down.",
      B: "Sit down and take a seat.",
      C: "Will you sit down now?",
      D: "You should sit down and rest.",
    },
    correctAnswer: "Sit down and take a seat.",
    explanation: `"Sit down and take a seat" is in the imperative mood because it gives a direct order.`,
  },
  {
    question: `Identify the sentence that is in the imperative mood.`,
    options: {
      A: "You will need to sit down.",
      B: "Sit down and wait here.",
      C: "Did you sit down?",
      D: "If you sit down, you will feel better.",
    },
    correctAnswer: "Sit down and wait here.",
    explanation: `"Sit down and wait here" is in the imperative mood because it gives a command with specific instructions.`,
  },
  {
    question: `Which sentence represents the imperative mood?`,
    options: {
      A: "You should sit down.",
      B: "Sit down right now.",
      C: "Will you sit down?",
      D: "You could sit down if you want.",
    },
    correctAnswer: "Sit down right now.",
    explanation: `"Sit down right now" is in the imperative mood because it issues a direct command.`,
  },
  {
    question: `Which of these sentences is in the imperative mood?`,
    options: {
      A: "You are sitting down.",
      B: "Please sit down.",
      C: "Are you sitting down?",
      D: "You should sit down.",
    },
    correctAnswer: "Please sit down.",
    explanation: `"Please sit down" is in the imperative mood because it is a polite command or request.`,
  },
  {
    question: `Choose the sentence in the imperative mood.`,
    options: {
      A: "You will sit down.",
      B: "Sit down and enjoy the show.",
      C: "Did you sit down?",
      D: "You should sit down now.",
    },
    correctAnswer: "Sit down and enjoy the show.",
    explanation: `"Sit down and enjoy the show" is in the imperative mood because it gives a direct command with additional instruction.`,
  },
  {
    question: `Which sentence is in the imperative mood?`,
    options: {
      A: "You might want to sit down.",
      B: "Sit down here.",
      C: "Will you sit down?",
      D: "If you sit down, you will be more relaxed.",
    },
    correctAnswer: "Sit down here.",
    explanation: `"Sit down here" is in the imperative mood because it directly instructs someone to take action.`,
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

shuffle(imperativeMoodQuiz);

// Display questions dynamically
function display_questions() {
  imperativeMoodQuiz.forEach((element, index) => {
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
  let questions = imperativeMoodQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  imperativeMoodQuiz.forEach((element, index) => {
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
