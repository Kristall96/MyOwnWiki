let futureContinuousQuiz = [
  {
    question: `Which sentence is in the future continuous tense?`,
    options: {
      A: "I write letters.",
      B: "I have written a letter.",
      C: "I will be writing a letter.",
      D: "I wrote a letter.",
    },
    correctAnswer: "I will be writing a letter.",
    explanation: `"I will be writing a letter" is in the future continuous tense because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `Identify the sentence that correctly uses the future continuous tense.`,
    options: {
      A: "She eats lunch every day.",
      B: "She will be eating lunch at noon.",
      C: "She ate lunch.",
      D: "She will eat lunch.",
    },
    correctAnswer: "She will be eating lunch at noon.",
    explanation: `"She will be eating lunch at noon" is in the future continuous tense because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `Which of the following sentences is in the future continuous tense?`,
    options: {
      A: "They play soccer.",
      B: "They will be playing soccer at 5 PM.",
      C: "They played soccer.",
      D: "They will play soccer.",
    },
    correctAnswer: "They will be playing soccer at 5 PM.",
    explanation: `"They will be playing soccer at 5 PM" is in the future continuous tense because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `What is the correct future continuous tense form of this sentence? "He ___ to school at this time tomorrow."`,
    options: {
      A: "Goes",
      B: "Has gone",
      C: "Will be going",
      D: "Went",
    },
    correctAnswer: "Will be going",
    explanation: `"Will be going" is the correct future continuous tense form because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `Which sentence uses the future continuous tense correctly?`,
    options: {
      A: "I go to the store.",
      B: "I will be going to the store at 4 PM.",
      C: "I went to the store.",
      D: "I have gone to the store.",
    },
    correctAnswer: "I will be going to the store at 4 PM.",
    explanation: `"I will be going to the store at 4 PM" is in the future continuous tense because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `Identify the future continuous tense form of this sentence: "She ___ her homework tonight."`,
    options: {
      A: "Does",
      B: "Will be doing",
      C: "Did",
      D: "Will do",
    },
    correctAnswer: "Will be doing",
    explanation: `"Will be doing" is the correct future continuous tense form because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `Which of the following sentences is in the future continuous tense?`,
    options: {
      A: "We watch movies every weekend.",
      B: "We will be watching a movie tonight.",
      C: "We watched a movie last night.",
      D: "We will watch a movie.",
    },
    correctAnswer: "We will be watching a movie tonight.",
    explanation: `"We will be watching a movie tonight" is in the future continuous tense because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `What is the correct future continuous tense form of this sentence? "They ___ the bus to work at this time tomorrow."`,
    options: {
      A: "Take",
      B: "Will be taking",
      C: "Took",
      D: "Will take",
    },
    correctAnswer: "Will be taking",
    explanation: `"Will be taking" is the correct future continuous tense form because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `Which sentence uses the future continuous tense correctly?`,
    options: {
      A: "She reads books every night.",
      B: "She will be reading a book at 8 PM.",
      C: "She read a book last night.",
      D: "She will read a book.",
    },
    correctAnswer: "She will be reading a book at 8 PM.",
    explanation: `"She will be reading a book at 8 PM" is in the future continuous tense because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `Identify the future continuous tense form of this sentence: "He ___ coffee at this time tomorrow."`,
    options: {
      A: "Drinks",
      B: "Will be drinking",
      C: "Drank",
      D: "Will drink",
    },
    correctAnswer: "Will be drinking",
    explanation: `"Will be drinking" is the correct future continuous tense form because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `Which of the following sentences is in the future continuous tense?`,
    options: {
      A: "They study for the test every day.",
      B: "They will be studying for the test tomorrow at 3 PM.",
      C: "They studied for the test last night.",
      D: "They will study for the test.",
    },
    correctAnswer: "They will be studying for the test tomorrow at 3 PM.",
    explanation: `"They will be studying for the test tomorrow at 3 PM" is in the future continuous tense because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `What is the correct future continuous tense form of this sentence? "She ___ to the gym at this time tomorrow."`,
    options: {
      A: "Goes",
      B: "Will be going",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Will be going",
    explanation: `"Will be going" is the correct future continuous tense form because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `Which sentence uses the future continuous tense correctly?`,
    options: {
      A: "He cooks dinner every night.",
      B: "He will be cooking dinner at 6 PM.",
      C: "He cooked dinner last night.",
      D: "He will cook dinner.",
    },
    correctAnswer: "He will be cooking dinner at 6 PM.",
    explanation: `"He will be cooking dinner at 6 PM" is in the future continuous tense because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `Identify the future continuous tense form of this sentence: "They ___ in the park tomorrow at noon."`,
    options: {
      A: "Walk",
      B: "Will be walking",
      C: "Walked",
      D: "Will walk",
    },
    correctAnswer: "Will be walking",
    explanation: `"Will be walking" is the correct future continuous tense form because it describes an action that will be ongoing at a specific time in the future.`,
  },
  {
    question: `Which of the following sentences is in the future continuous tense?`,
    options: {
      A: "We plan a trip every summer.",
      B: "We will be planning a trip next week.",
      C: "We planned a trip last year.",
      D: "We will plan a trip soon.",
    },
    correctAnswer: "We will be planning a trip next week.",
    explanation: `"We will be planning a trip next week" is in the future continuous tense because it describes an action that will be ongoing at a specific time in the future.`,
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

shuffle(futureContinuousQuiz);

// Display questions dynamically
function display_questions() {
  futureContinuousQuiz.forEach((element, index) => {
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
  let questions = futureContinuousQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  futureContinuousQuiz.forEach((element, index) => {
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
