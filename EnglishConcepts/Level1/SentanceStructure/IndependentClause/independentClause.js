let independentClauseQuiz = [
  {
    question: `Which part of the sentence is an independent clause? "I went to the store, and I bought some groceries."`,
    options: {
      A: "I went to the store",
      B: "And I bought",
      C: "Bought some groceries",
      D: "To the store",
    },
    correctAnswer: "I went to the store",
    explanation: `"I went to the store" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Identify the independent clause in this sentence: "Although it was raining, we went for a walk."`,
    options: {
      A: "Although it was raining",
      B: "We went for a walk",
      C: "For a walk",
      D: "It was raining",
    },
    correctAnswer: "We went for a walk",
    explanation: `"We went for a walk" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Which of the following is an independent clause?`,
    options: {
      A: "While he was sleeping",
      B: "She enjoys reading",
      C: "Because she was late",
      D: "If you finish your work",
    },
    correctAnswer: "She enjoys reading",
    explanation: `"She enjoys reading" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `What is the independent clause in this sentence: "After the movie ended, we went out for dinner."`,
    options: {
      A: "After the movie ended",
      B: "We went out for dinner",
      C: "Went out for dinner",
      D: "The movie ended",
    },
    correctAnswer: "We went out for dinner",
    explanation: `"We went out for dinner" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Which part of the sentence is an independent clause? "He likes to read, but he doesn't have much time."`,
    options: {
      A: "He likes to read",
      B: "But he doesn't have much time",
      C: "Doesn't have much time",
      D: "He likes",
    },
    correctAnswer: "He likes to read",
    explanation: `"He likes to read" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Identify the independent clause in this sentence: "Even though she was tired, she finished the project."`,
    options: {
      A: "Even though she was tired",
      B: "She finished the project",
      C: "The project",
      D: "She was tired",
    },
    correctAnswer: "She finished the project",
    explanation: `"She finished the project" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Which of the following is an independent clause?`,
    options: {
      A: "While he was cooking",
      B: "Because it was raining",
      C: "She went to the store",
      D: "If you arrive early",
    },
    correctAnswer: "She went to the store",
    explanation: `"She went to the store" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `What is the independent clause in this sentence: "Before she left, she locked the door."`,
    options: {
      A: "Before she left",
      B: "She locked the door",
      C: "Locked the door",
      D: "She left",
    },
    correctAnswer: "She locked the door",
    explanation: `"She locked the door" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Which part of the sentence is an independent clause? "We will go to the park if it stops raining."`,
    options: {
      A: "We will go to the park",
      B: "If it stops raining",
      C: "Stops raining",
      D: "Go to the park",
    },
    correctAnswer: "We will go to the park",
    explanation: `"We will go to the park" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Identify the independent clause in this sentence: "Although it was cold, they continued playing outside."`,
    options: {
      A: "Although it was cold",
      B: "They continued playing outside",
      C: "Playing outside",
      D: "It was cold",
    },
    correctAnswer: "They continued playing outside",
    explanation: `"They continued playing outside" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Which of the following is an independent clause in this sentence: "Since it was late, we decided to leave."`,
    options: {
      A: "Since it was late",
      B: "We decided to leave",
      C: "Decided to leave",
      D: "It was late",
    },
    correctAnswer: "We decided to leave",
    explanation: `"We decided to leave" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `What is the independent clause in this sentence: "If you study hard, you will pass the exam."`,
    options: {
      A: "If you study hard",
      B: "You will pass the exam",
      C: "Pass the exam",
      D: "Study hard",
    },
    correctAnswer: "You will pass the exam",
    explanation: `"You will pass the exam" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Which part of the sentence is an independent clause? "They went to the beach after the meeting ended."`,
    options: {
      A: "After the meeting ended",
      B: "They went to the beach",
      C: "Went to the beach",
      D: "The meeting ended",
    },
    correctAnswer: "They went to the beach",
    explanation: `"They went to the beach" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Identify the independent clause in this sentence: "Even if it rains, the event will go on."`,
    options: {
      A: "Even if it rains",
      B: "The event will go on",
      C: "It rains",
      D: "Will go on",
    },
    correctAnswer: "The event will go on",
    explanation: `"The event will go on" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Which of the following is an independent clause in this sentence: "Although she was nervous, she performed well."`,
    options: {
      A: "Although she was nervous",
      B: "She performed well",
      C: "Performed well",
      D: "She was nervous",
    },
    correctAnswer: "She performed well",
    explanation: `"She performed well" is an independent clause because it can stand alone as a complete sentence.`,
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

shuffle(independentClauseQuiz);

// Display questions dynamically
function display_questions() {
  independentClauseQuiz.forEach((element, index) => {
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
  let questions = independentClauseQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  independentClauseQuiz.forEach((element, index) => {
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
