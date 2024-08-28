let whQuestionsQuiz = [
  {
    question: `Complete the WH-Question: "____ are you going to the store?"`,
    options: {
      A: "Why",
      B: "When",
      C: "How",
      D: "Who",
    },
    correctAnswer: "When",
    explanation: `WH-Questions can ask for specific information about time, reason, manner, or people.`,
  },
  {
    question: `Which sentence is a WH-Question?`,
    options: {
      A: "How do you make a cake?",
      B: "Do you make cakes?",
      C: "Making cakes is fun.",
      D: "You make cakes often.",
    },
    correctAnswer: "How do you make a cake?",
    explanation: `WH-Questions typically begin with question words like "how", "what", "where", etc.`,
  },
  {
    question: `Identify the WH-Question:`,
    options: {
      A: "Where is the nearest gas station?",
      B: "Is the gas station near?",
      C: "The gas station is near.",
      D: "How is the gas station?",
    },
    correctAnswer: "Where is the nearest gas station?",
    explanation: `WH-Questions seek detailed information and use question words to begin the query.`,
  },
  {
    question: `Complete the WH-Question: "____ is your favorite book?"`,
    options: {
      A: "What",
      B: "Is",
      C: "Do",
      D: "When",
    },
    correctAnswer: "What",
    explanation: `WH-Questions often use words like "what" to ask about things or choices.`,
  },
  {
    question: `Which sentence correctly forms a WH-Question?`,
    options: {
      A: "Who is your favorite author?",
      B: "Do you have a favorite author?",
      C: "Your favorite author is unknown.",
      D: "How does your favorite author write?",
    },
    correctAnswer: "Who is your favorite author?",
    explanation: `WH-Questions are used to gather specific information and start with words like "who", "what", etc.`,
  },
  {
    question: `Complete the WH-Question: "____ did you choose that option?"`,
    options: {
      A: "Why",
      B: "Where",
      C: "What",
      D: "When",
    },
    correctAnswer: "Why",
    explanation: `WH-Questions starting with "why" seek reasons or explanations.`,
  },
  {
    question: `Which of the following is a WH-Question?`,
    options: {
      A: "What is the weather like today?",
      B: "The weather is nice today.",
      C: "Is the weather nice today?",
      D: "How nice is the weather today?",
    },
    correctAnswer: "What is the weather like today?",
    explanation: `WH-Questions ask for detailed information and start with question words like "what" or "how".`,
  },
  {
    question: `Identify the WH-Question:`,
    options: {
      A: "How did you get to the party?",
      B: "Did you get to the party?",
      C: "You got to the party.",
      D: "When did you get to the party?",
    },
    correctAnswer: "How did you get to the party?",
    explanation: `WH-Questions seek detailed answers and use words like "how" to start the question.`,
  },
  {
    question: `Complete the WH-Question: "____ are you feeling today?"`,
    options: {
      A: "How",
      B: "Where",
      C: "Who",
      D: "What",
    },
    correctAnswer: "How",
    explanation: `WH-Questions using "how" inquire about states or conditions.`,
  },
  {
    question: `Which sentence correctly forms a WH-Question?`,
    options: {
      A: "What is your plan for the weekend?",
      B: "Is your plan for the weekend clear?",
      C: "Your plan for the weekend is clear.",
      D: "How is your plan for the weekend?",
    },
    correctAnswer: "What is your plan for the weekend?",
    explanation: `WH-Questions gather specific details and start with question words like "what".`,
  },
  {
    question: `Complete the WH-Question: "____ is your best friend?"`,
    options: {
      A: "Who",
      B: "What",
      C: "How",
      D: "Where",
    },
    correctAnswer: "Who",
    explanation: `WH-Questions starting with "who" ask about people.`,
  },
  {
    question: `Identify the WH-Question:`,
    options: {
      A: "Why did you choose that restaurant?",
      B: "Did you choose that restaurant?",
      C: "That restaurant is nice.",
      D: "When did you choose that restaurant?",
    },
    correctAnswer: "Why did you choose that restaurant?",
    explanation: `WH-Questions ask for reasons and start with "why" for explanations.`,
  },
  {
    question: `Which of the following demonstrates a WH-Question?`,
    options: {
      A: "Where did you leave your keys?",
      B: "You left your keys somewhere.",
      C: "Did you leave your keys somewhere?",
      D: "How did you leave your keys?",
    },
    correctAnswer: "Where did you leave your keys?",
    explanation: `WH-Questions are used to ask for specific information and start with question words like "where".`,
  },
  {
    question: `Complete the WH-Question: "____ did you buy that shirt?"`,
    options: {
      A: "Where",
      B: "Who",
      C: "When",
      D: "Why",
    },
    correctAnswer: "Where",
    explanation: `WH-Questions using "where" ask about locations or places.`,
  },
  {
    question: `Identify the WH-Question:`,
    options: {
      A: "What did you eat for breakfast?",
      B: "Did you eat breakfast?",
      C: "Eating breakfast is important.",
      D: "When did you eat breakfast?",
    },
    correctAnswer: "What did you eat for breakfast?",
    explanation: `WH-Questions seek specific details and start with words like "what" to inquire about things or actions.`,
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

shuffle(whQuestionsQuiz);

// Display questions dynamically
function display_questions() {
  whQuestionsQuiz.forEach((element, index) => {
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
  let questions = whQuestionsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  whQuestionsQuiz.forEach((element, index) => {
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
