let clausesQuiz = [
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
    question: `Identify the dependent clause in this sentence: "When the rain started, we went inside."`,
    options: {
      A: "We went inside",
      B: "When the rain started",
      C: "The rain started",
      D: "Went inside",
    },
    correctAnswer: "When the rain started",
    explanation: `"When the rain started" is a dependent clause because it cannot stand alone as a complete sentence and depends on the main clause.`,
  },
  {
    question: `Which of the following is an independent clause?`,
    options: {
      A: "Although it was raining",
      B: "Because she was late",
      C: "She finished her homework",
      D: "While he was sleeping",
    },
    correctAnswer: "She finished her homework",
    explanation: `"She finished her homework" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `What is the dependent clause in this sentence: "If you study hard, you will pass the exam."`,
    options: {
      A: "You will pass the exam",
      B: "If you study hard",
      C: "Pass the exam",
      D: "Study hard",
    },
    correctAnswer: "If you study hard",
    explanation: `"If you study hard" is a dependent clause because it cannot stand alone and depends on the main clause.`,
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
    question: `Identify the dependent clause in this sentence: "Although she was tired, she finished the project."`,
    options: {
      A: "She finished the project",
      B: "Although she was tired",
      C: "The project",
      D: "She was tired",
    },
    correctAnswer: "Although she was tired",
    explanation: `"Although she was tired" is a dependent clause because it depends on the main clause to make sense.`,
  },
  {
    question: `Which of the following is a dependent clause?`,
    options: {
      A: "She is going to the store",
      B: "They left early",
      C: "Because he was late",
      D: "He likes pizza",
    },
    correctAnswer: "Because he was late",
    explanation: `"Because he was late" is a dependent clause because it cannot stand alone and needs an independent clause to complete the thought.`,
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
    question: `Which part of the sentence is a dependent clause? "She will succeed if she works hard."`,
    options: {
      A: "She will succeed",
      B: "If she works hard",
      C: "Works hard",
      D: "Succeed",
    },
    correctAnswer: "If she works hard",
    explanation: `"If she works hard" is a dependent clause because it relies on the independent clause to make sense.`,
  },
  {
    question: `Identify the independent clause in this sentence: "When I was younger, I loved to play soccer."`,
    options: {
      A: "When I was younger",
      B: "I loved to play soccer",
      C: "Loved to play soccer",
      D: "Younger",
    },
    correctAnswer: "I loved to play soccer",
    explanation: `"I loved to play soccer" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Which of the following is a compound sentence with two independent clauses?`,
    options: {
      A: "She went to the park because she wanted to relax.",
      B: "He didn't like the movie, but he stayed until the end.",
      C: "While it was raining, they stayed inside.",
      D: "If you finish your homework, you can go outside.",
    },
    correctAnswer: "He didn't like the movie, but he stayed until the end.",
    explanation: `"He didn't like the movie" and "he stayed until the end" are both independent clauses connected by the conjunction "but."`,
  },
  {
    question: `What is the dependent clause in this sentence: "Because the weather was bad, the event was canceled."`,
    options: {
      A: "The event was canceled",
      B: "Because the weather was bad",
      C: "Was canceled",
      D: "The weather was bad",
    },
    correctAnswer: "Because the weather was bad",
    explanation: `"Because the weather was bad" is a dependent clause because it cannot stand alone and depends on the main clause.`,
  },
  {
    question: `Which part of the sentence is an independent clause? "She studied for the test, and she passed it easily."`,
    options: {
      A: "She studied for the test",
      B: "And she passed",
      C: "Passed it easily",
      D: "For the test",
    },
    correctAnswer: "She studied for the test",
    explanation: `"She studied for the test" is an independent clause because it can stand alone as a complete sentence.`,
  },
  {
    question: `Identify the dependent clause in this sentence: "I will call you when I arrive home."`,
    options: {
      A: "I will call you",
      B: "When I arrive home",
      C: "Call you",
      D: "Arrive home",
    },
    correctAnswer: "When I arrive home",
    explanation: `"When I arrive home" is a dependent clause because it relies on the main clause to make sense.`,
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

shuffle(clausesQuiz);

// Display questions dynamically
function display_questions() {
  clausesQuiz.forEach((element, index) => {
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
  let questions = clausesQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  clausesQuiz.forEach((element, index) => {
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
