let pastContinuousQuiz = [
  {
    question: `Which sentence is in the past continuous tense?`,
    options: {
      A: "I write letters.",
      B: "I was writing a letter.",
      C: "I wrote a letter.",
      D: "I will write a letter.",
    },
    correctAnswer: "I was writing a letter.",
    explanation: `"I was writing a letter" is in the past continuous tense because it describes an action that was ongoing in the past.`,
  },
  {
    question: `Identify the sentence that correctly uses the past continuous tense.`,
    options: {
      A: "She eats lunch every day.",
      B: "She was eating lunch.",
      C: "She ate lunch.",
      D: "She will eat lunch.",
    },
    correctAnswer: "She was eating lunch.",
    explanation: `"She was eating lunch" is in the past continuous tense because it describes an action that was ongoing in the past.`,
  },
  {
    question: `Which of the following sentences is in the past continuous tense?`,
    options: {
      A: "They play soccer.",
      B: "They were playing soccer.",
      C: "They played soccer.",
      D: "They will play soccer.",
    },
    correctAnswer: "They were playing soccer.",
    explanation: `"They were playing soccer" is in the past continuous tense because it describes an action that was ongoing in the past.`,
  },
  {
    question: `What is the correct past continuous tense form of this sentence? "He ___ to school when it started raining."`,
    options: {
      A: "Goes",
      B: "Was going",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Was going",
    explanation: `"Was going" is the correct past continuous tense form because it describes an action that was ongoing in the past.`,
  },
  {
    question: `Which sentence uses the past continuous tense correctly?`,
    options: {
      A: "I go to the store.",
      B: "I was going to the store.",
      C: "I went to the store.",
      D: "I will go to the store.",
    },
    correctAnswer: "I was going to the store.",
    explanation: `"I was going to the store" is in the past continuous tense because it describes an action that was ongoing in the past.`,
  },
  {
    question: `Identify the past continuous tense form of this sentence: "She ___ her homework when I called her."`,
    options: {
      A: "Does",
      B: "Was doing",
      C: "Did",
      D: "Will do",
    },
    correctAnswer: "Was doing",
    explanation: `"Was doing" is the correct past continuous tense form because it describes an action that was ongoing in the past.`,
  },
  {
    question: `Which of the following sentences is in the past continuous tense?`,
    options: {
      A: "We watch movies every weekend.",
      B: "We were watching a movie when the phone rang.",
      C: "We watched a movie last night.",
      D: "We will watch a movie later.",
    },
    correctAnswer: "We were watching a movie when the phone rang.",
    explanation: `"We were watching a movie" is in the past continuous tense because it describes an action that was ongoing in the past.`,
  },
  {
    question: `What is the correct past continuous tense form of this sentence? "They ___ the bus when they saw their friend."`,
    options: {
      A: "Take",
      B: "Were taking",
      C: "Took",
      D: "Will take",
    },
    correctAnswer: "Were taking",
    explanation: `"Were taking" is the correct past continuous tense form because it describes an action that was ongoing in the past.`,
  },
  {
    question: `Which sentence uses the past continuous tense correctly?`,
    options: {
      A: "She reads books every night.",
      B: "She was reading a book when I arrived.",
      C: "She read a book last night.",
      D: "She will read a book tomorrow.",
    },
    correctAnswer: "She was reading a book when I arrived.",
    explanation: `"She was reading a book" is in the past continuous tense because it describes an action that was ongoing in the past.`,
  },
  {
    question: `Identify the past continuous tense form of this sentence: "He ___ coffee when the meeting started."`,
    options: {
      A: "Drinks",
      B: "Was drinking",
      C: "Drank",
      D: "Will drink",
    },
    correctAnswer: "Was drinking",
    explanation: `"Was drinking" is the correct past continuous tense form because it describes an action that was ongoing in the past.`,
  },
  {
    question: `Which of the following sentences is in the past continuous tense?`,
    options: {
      A: "They study for the test every day.",
      B: "They were studying for the test when I called them.",
      C: "They studied for the test last night.",
      D: "They will study for the test later.",
    },
    correctAnswer: "They were studying for the test when I called them.",
    explanation: `"They were studying for the test" is in the past continuous tense because it describes an action that was ongoing in the past.`,
  },
  {
    question: `What is the correct past continuous tense form of this sentence? "She ___ to the gym when I saw her."`,
    options: {
      A: "Goes",
      B: "Was going",
      C: "Went",
      D: "Will go",
    },
    correctAnswer: "Was going",
    explanation: `"Was going" is the correct past continuous tense form because it describes an action that was ongoing in the past.`,
  },
  {
    question: `Which sentence uses the past continuous tense correctly?`,
    options: {
      A: "He cooks dinner every night.",
      B: "He was cooking dinner when the power went out.",
      C: "He cooked dinner last night.",
      D: "He will cook dinner tomorrow.",
    },
    correctAnswer: "He was cooking dinner when the power went out.",
    explanation: `"He was cooking dinner" is in the past continuous tense because it describes an action that was ongoing in the past.`,
  },
  {
    question: `Identify the past continuous tense form of this sentence: "They ___ in the park when it started raining."`,
    options: {
      A: "Walk",
      B: "Were walking",
      C: "Walked",
      D: "Will walk",
    },
    correctAnswer: "Were walking",
    explanation: `"Were walking" is the correct past continuous tense form because it describes an action that was ongoing in the past.`,
  },
  {
    question: `Which of the following sentences is in the past continuous tense?`,
    options: {
      A: "We plan a trip every summer.",
      B: "We were planning a trip when we got the news.",
      C: "We planned a trip last year.",
      D: "We will plan a trip soon.",
    },
    correctAnswer: "We were planning a trip when we got the news.",
    explanation: `"We were planning a trip" is in the past continuous tense because it describes an action that was ongoing in the past.`,
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

shuffle(pastContinuousQuiz);

// Display questions dynamically
function display_questions() {
  pastContinuousQuiz.forEach((element, index) => {
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
  let questions = pastContinuousQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  pastContinuousQuiz.forEach((element, index) => {
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
