let dependentClauseQuiz = [
  {
    question: `Which part of the sentence is a dependent clause? "When the bell rang, the students left the classroom."`,
    options: {
      A: "The students left the classroom",
      B: "When the bell rang",
      C: "Left the classroom",
      D: "The bell rang",
    },
    correctAnswer: "When the bell rang",
    explanation: `"When the bell rang" is a dependent clause because it cannot stand alone and depends on the main clause to complete its meaning.`,
  },
  {
    question: `Identify the dependent clause in this sentence: "Because it was raining, we canceled the picnic."`,
    options: {
      A: "We canceled the picnic",
      B: "It was raining",
      C: "Because it was raining",
      D: "Canceled the picnic",
    },
    correctAnswer: "Because it was raining",
    explanation: `"Because it was raining" is a dependent clause because it cannot stand alone and depends on the main clause.`,
  },
  {
    question: `Which of the following is a dependent clause?`,
    options: {
      A: "She finished her homework",
      B: "They left early",
      C: "If you study hard",
      D: "I like pizza",
    },
    correctAnswer: "If you study hard",
    explanation: `"If you study hard" is a dependent clause because it cannot stand alone and needs an independent clause to complete the thought.`,
  },
  {
    question: `What is the dependent clause in this sentence: "Although she was tired, she stayed up late."`,
    options: {
      A: "She stayed up late",
      B: "Although she was tired",
      C: "Stayed up late",
      D: "She was tired",
    },
    correctAnswer: "Although she was tired",
    explanation: `"Although she was tired" is a dependent clause because it depends on the main clause to make sense.`,
  },
  {
    question: `Which part of the sentence is a dependent clause? "The game was postponed because it started to rain."`,
    options: {
      A: "The game was postponed",
      B: "Because it started to rain",
      C: "Started to rain",
      D: "Was postponed",
    },
    correctAnswer: "Because it started to rain",
    explanation: `"Because it started to rain" is a dependent clause because it cannot stand alone and depends on the main clause.`,
  },
  {
    question: `Identify the dependent clause in this sentence: "Since she moved to the city, she has made many new friends."`,
    options: {
      A: "She has made many new friends",
      B: "Since she moved to the city",
      C: "Made many new friends",
      D: "She moved to the city",
    },
    correctAnswer: "Since she moved to the city",
    explanation: `"Since she moved to the city" is a dependent clause because it relies on the main clause to make sense.`,
  },
  {
    question: `Which of the following is a dependent clause?`,
    options: {
      A: "We went to the store",
      B: "Although it was cold",
      C: "He likes to swim",
      D: "They are leaving",
    },
    correctAnswer: "Although it was cold",
    explanation: `"Although it was cold" is a dependent clause because it cannot stand alone and depends on the main clause.`,
  },
  {
    question: `What is the dependent clause in this sentence: "After he finished his homework, he watched TV."`,
    options: {
      A: "He watched TV",
      B: "After he finished his homework",
      C: "Finished his homework",
      D: "He finished his homework",
    },
    correctAnswer: "After he finished his homework",
    explanation: `"After he finished his homework" is a dependent clause because it cannot stand alone and depends on the main clause.`,
  },
  {
    question: `Which part of the sentence is a dependent clause? "The car won't start unless you turn the key."`,
    options: {
      A: "The car won't start",
      B: "Unless you turn the key",
      C: "Turn the key",
      D: "Won't start",
    },
    correctAnswer: "Unless you turn the key",
    explanation: `"Unless you turn the key" is a dependent clause because it relies on the main clause to make sense.`,
  },
  {
    question: `Identify the dependent clause in this sentence: "While the children were playing, their parents prepared dinner."`,
    options: {
      A: "Their parents prepared dinner",
      B: "The children were playing",
      C: "While the children were playing",
      D: "Prepared dinner",
    },
    correctAnswer: "While the children were playing",
    explanation: `"While the children were playing" is a dependent clause because it cannot stand alone and depends on the main clause.`,
  },
  {
    question: `Which of the following is a dependent clause?`,
    options: {
      A: "I love reading books",
      B: "She works hard every day",
      C: "Because he was late",
      D: "We are going to the park",
    },
    correctAnswer: "Because he was late",
    explanation: `"Because he was late" is a dependent clause because it cannot stand alone and needs an independent clause to complete the thought.`,
  },
  {
    question: `What is the dependent clause in this sentence: "Before the meeting started, I reviewed my notes."`,
    options: {
      A: "I reviewed my notes",
      B: "Before the meeting started",
      C: "Reviewed my notes",
      D: "The meeting started",
    },
    correctAnswer: "Before the meeting started",
    explanation: `"Before the meeting started" is a dependent clause because it cannot stand alone and relies on the main clause.`,
  },
  {
    question: `Which part of the sentence is a dependent clause? "He will go to the party if he finishes his work."`,
    options: {
      A: "He will go to the party",
      B: "If he finishes his work",
      C: "Finishes his work",
      D: "Go to the party",
    },
    correctAnswer: "If he finishes his work",
    explanation: `"If he finishes his work" is a dependent clause because it depends on the main clause to complete its meaning.`,
  },
  {
    question: `Identify the dependent clause in this sentence: "Whenever she visits, she brings gifts."`,
    options: {
      A: "She brings gifts",
      B: "Whenever she visits",
      C: "Brings gifts",
      D: "She visits",
    },
    correctAnswer: "Whenever she visits",
    explanation: `"Whenever she visits" is a dependent clause because it relies on the main clause to make sense.`,
  },
  {
    question: `Which of the following is a dependent clause in this sentence: "Because the power went out, we had to light candles."`,
    options: {
      A: "Because the power went out",
      B: "We had to light candles",
      C: "Light candles",
      D: "The power went out",
    },
    correctAnswer: "Because the power went out",
    explanation: `"Because the power went out" is a dependent clause because it cannot stand alone and relies on the main clause.`,
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

shuffle(dependentClauseQuiz);

// Display questions dynamically
function display_questions() {
  dependentClauseQuiz.forEach((element, index) => {
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
  let questions = dependentClauseQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  dependentClauseQuiz.forEach((element, index) => {
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
