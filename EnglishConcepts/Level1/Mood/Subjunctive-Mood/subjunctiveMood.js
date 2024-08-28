let subjunctiveMoodQuiz = [
  {
    question: `Identify the sentence that uses the subjunctive mood.`,
    options: {
      A: "I wish she were here.",
      B: "She is here now.",
      C: "She was here yesterday.",
      D: "She will be here soon.",
    },
    correctAnswer: "I wish she were here.",
    explanation: `"I wish she were here" uses the subjunctive mood to express a wish that is contrary to the current fact.`,
  },
  {
    question: `Which of the following sentences is in the subjunctive mood?`,
    options: {
      A: "If he were taller, he could reach the shelf.",
      B: "He is tall enough to reach the shelf.",
      C: "He reached the shelf.",
      D: "He will reach the shelf later.",
    },
    correctAnswer: "If he were taller, he could reach the shelf.",
    explanation: `"If he were taller, he could reach the shelf" uses the subjunctive mood to express a hypothetical situation.`,
  },
  {
    question: `Select the sentence that is in the subjunctive mood.`,
    options: {
      A: "I would go if I were invited.",
      B: "I am going if I am invited.",
      C: "I went if I was invited.",
      D: "I will go if I am invited.",
    },
    correctAnswer: "I would go if I were invited.",
    explanation: `"I would go if I were invited" uses the subjunctive mood to express a condition contrary to fact.`,
  },
  {
    question: `Which sentence exemplifies the subjunctive mood?`,
    options: {
      A: "If she were to study harder, she might pass the exam.",
      B: "She studies hard for the exam.",
      C: "She passed the exam.",
      D: "She will study for the exam.",
    },
    correctAnswer: "If she were to study harder, she might pass the exam.",
    explanation: `"If she were to study harder, she might pass the exam" uses the subjunctive mood to suggest a hypothetical condition.`,
  },
  {
    question: `Identify the sentence in the subjunctive mood.`,
    options: {
      A: "If I were rich, I would travel the world.",
      B: "I am rich and travel the world.",
      C: "I traveled the world last year.",
      D: "I will travel the world soon.",
    },
    correctAnswer: "If I were rich, I would travel the world.",
    explanation: `"If I were rich, I would travel the world" uses the subjunctive mood to describe a hypothetical situation.`,
  },
  {
    question: `Which of these sentences uses the subjunctive mood?`,
    options: {
      A: "If she were here, she would know what to do.",
      B: "She is here and knows what to do.",
      C: "She knew what to do.",
      D: "She will know what to do.",
    },
    correctAnswer: "If she were here, she would know what to do.",
    explanation: `"If she were here, she would know what to do" uses the subjunctive mood to talk about a hypothetical condition.`,
  },
  {
    question: `Choose the sentence that is in the subjunctive mood.`,
    options: {
      A: "I wish he were more considerate.",
      B: "He is very considerate.",
      C: "He was considerate yesterday.",
      D: "He will be considerate tomorrow.",
    },
    correctAnswer: "I wish he were more considerate.",
    explanation: `"I wish he were more considerate" uses the subjunctive mood to express a wish contrary to the current reality.`,
  },
  {
    question: `Which sentence represents the subjunctive mood?`,
    options: {
      A: "If it were sunny, we could go to the beach.",
      B: "It is sunny today.",
      C: "It was sunny yesterday.",
      D: "It will be sunny tomorrow.",
    },
    correctAnswer: "If it were sunny, we could go to the beach.",
    explanation: `"If it were sunny, we could go to the beach" uses the subjunctive mood to express a hypothetical situation.`,
  },
  {
    question: `Which of these sentences is in the subjunctive mood?`,
    options: {
      A: "I would buy the car if I had enough money.",
      B: "I bought the car yesterday.",
      C: "I am buying the car now.",
      D: "I will buy the car next week.",
    },
    correctAnswer: "I would buy the car if I had enough money.",
    explanation: `"I would buy the car if I had enough money" uses the subjunctive mood to describe a hypothetical condition.`,
  },
  {
    question: `Identify the sentence that uses the subjunctive mood.`,
    options: {
      A: "If they were to win the lottery, they would travel.",
      B: "They won the lottery last year.",
      C: "They are traveling now.",
      D: "They will travel next year.",
    },
    correctAnswer: "If they were to win the lottery, they would travel.",
    explanation: `"If they were to win the lottery, they would travel" uses the subjunctive mood to describe an imagined scenario.`,
  },
  {
    question: `Which sentence is in the subjunctive mood?`,
    options: {
      A: "If you were here, you would understand.",
      B: "You are here now.",
      C: "You understood the lesson.",
      D: "You will understand the lesson.",
    },
    correctAnswer: "If you were here, you would understand.",
    explanation: `"If you were here, you would understand" uses the subjunctive mood to discuss a hypothetical situation.`,
  },
  {
    question: `Select the sentence in the subjunctive mood.`,
    options: {
      A: "I wish it were not raining.",
      B: "It is raining outside.",
      C: "It rained yesterday.",
      D: "It will rain tomorrow.",
    },
    correctAnswer: "I wish it were not raining.",
    explanation: `"I wish it were not raining" uses the subjunctive mood to express a desire contrary to the current weather condition.`,
  },
  {
    question: `Which of the following sentences uses the subjunctive mood?`,
    options: {
      A: "If she were here, she would help us.",
      B: "She is here now and helping us.",
      C: "She helped us last week.",
      D: "She will help us later.",
    },
    correctAnswer: "If she were here, she would help us.",
    explanation: `"If she were here, she would help us" uses the subjunctive mood to describe a hypothetical situation.`,
  },
  {
    question: `Choose the sentence that is in the subjunctive mood.`,
    options: {
      A: "I would be happy if she were here.",
      B: "I am happy because she is here.",
      C: "I was happy when she was here.",
      D: "I will be happy if she comes.",
    },
    correctAnswer: "I would be happy if she were here.",
    explanation: `"I would be happy if she were here" uses the subjunctive mood to express a wish or hypothetical scenario.`,
  },
  {
    question: `Which sentence exemplifies the subjunctive mood?`,
    options: {
      A: "If I were a bird, I would fly.",
      B: "I am a person who cannot fly.",
      C: "I was a bird in my dream.",
      D: "I will be a bird in the future.",
    },
    correctAnswer: "If I were a bird, I would fly.",
    explanation: `"If I were a bird, I would fly" uses the subjunctive mood to express a hypothetical situation that is contrary to fact.`,
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

shuffle(subjunctiveMoodQuiz);

// Display questions dynamically
function display_questions() {
  subjunctiveMoodQuiz.forEach((element, index) => {
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
  let questions = subjunctiveMoodQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  subjunctiveMoodQuiz.forEach((element, index) => {
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
