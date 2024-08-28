let yesNoQuestionsQuiz = [
  {
    question: `Complete the Yes/No question: "Did she ____ the email?"`,
    options: {
      A: "send",
      B: "sending",
      C: "sends",
      D: "sent",
    },
    correctAnswer: "send",
    explanation: `In Yes/No questions, the base form of the verb is used with auxiliary verbs like "did".`,
  },
  {
    question: `Which sentence is a Yes/No question?`,
    options: {
      A: "Can you help me with this?",
      B: "What help do you need?",
      C: "Why do you need help?",
      D: "How can I help you?",
    },
    correctAnswer: "Can you help me with this?",
    explanation: `Yes/No questions ask whether something is true or not, and are answered with "yes" or "no".`,
  },
  {
    question: `Identify the Yes/No question:`,
    options: {
      A: "Is the meeting at 10 a.m.?",
      B: "What time is the meeting?",
      C: "Where is the meeting?",
      D: "Who is attending the meeting?",
    },
    correctAnswer: "Is the meeting at 10 a.m.?",
    explanation: `Yes/No questions are designed to be answered with a simple "yes" or "no".`,
  },
  {
    question: `Which sentence correctly forms a Yes/No question?`,
    options: {
      A: "Will you join us for dinner?",
      B: "When will you join us for dinner?",
      C: "Why will you join us for dinner?",
      D: "How will you join us for dinner?",
    },
    correctAnswer: "Will you join us for dinner?",
    explanation: `Yes/No questions typically start with auxiliary verbs such as "will", "can", "do", etc.`,
  },
  {
    question: `Complete the Yes/No question: "Have they ____ the report?"`,
    options: {
      A: "finished",
      B: "finishes",
      C: "finish",
      D: "finishing",
    },
    correctAnswer: "finished",
    explanation: `In Yes/No questions using "have", the past participle form of the verb is used.`,
  },
  {
    question: `Which of the following is an example of a Yes/No question?`,
    options: {
      A: "Is it raining today?",
      B: "What is the weather like today?",
      C: "How is the weather today?",
      D: "Why is it raining today?",
    },
    correctAnswer: "Is it raining today?",
    explanation: `Yes/No questions are answered with "yes" or "no" and often begin with auxiliary verbs.`,
  },
  {
    question: `Identify the Yes/No question:`,
    options: {
      A: "Are you coming to the meeting?",
      B: "What time is the meeting?",
      C: "Who is leading the meeting?",
      D: "How long will the meeting last?",
    },
    correctAnswer: "Are you coming to the meeting?",
    explanation: `Yes/No questions typically require a response of "yes" or "no".`,
  },
  {
    question: `Which sentence correctly forms a Yes/No question?`,
    options: {
      A: "Can she speak Spanish?",
      B: "What languages can she speak?",
      C: "How can she speak Spanish?",
      D: "Why does she speak Spanish?",
    },
    correctAnswer: "Can she speak Spanish?",
    explanation: `Yes/No questions are structured to receive a "yes" or "no" answer.`,
  },
  {
    question: `Complete the Yes/No question: "Does he ____ to the gym regularly?"`,
    options: {
      A: "go",
      B: "goes",
      C: "going",
      D: "went",
    },
    correctAnswer: "go",
    explanation: `In Yes/No questions with "does", the base form of the verb is used.`,
  },
  {
    question: `Which of the following is a Yes/No question?`,
    options: {
      A: "Have you finished your homework?",
      B: "What homework did you finish?",
      C: "How did you finish your homework?",
      D: "Why did you finish your homework?",
    },
    correctAnswer: "Have you finished your homework?",
    explanation: `Yes/No questions are designed to be answered with "yes" or "no".`,
  },
  {
    question: `Identify the Yes/No question:`,
    options: {
      A: "Is she arriving on time?",
      B: "When is she arriving?",
      C: "Where is she arriving?",
      D: "Why is she arriving late?",
    },
    correctAnswer: "Is she arriving on time?",
    explanation: `Yes/No questions require a simple affirmative or negative response.`,
  },
  {
    question: `Which sentence correctly forms a Yes/No question?`,
    options: {
      A: "Will they be able to attend?",
      B: "What time will they attend?",
      C: "How will they attend?",
      D: "Why will they attend?",
    },
    correctAnswer: "Will they be able to attend?",
    explanation: `Yes/No questions are formed with auxiliary verbs at the beginning of the sentence.`,
  },
  {
    question: `Complete the Yes/No question: "Is she ____ the correct answer?"`,
    options: {
      A: "giving",
      B: "gives",
      C: "give",
      D: "given",
    },
    correctAnswer: "giving",
    explanation: `In Yes/No questions with "is", the present participle form of the verb is used.`,
  },
  {
    question: `Which of the following demonstrates a Yes/No question?`,
    options: {
      A: "Do you like chocolate?",
      B: "What do you like?",
      C: "How do you like chocolate?",
      D: "Why do you like chocolate?",
    },
    correctAnswer: "Do you like chocolate?",
    explanation: `Yes/No questions seek a simple "yes" or "no" answer and often begin with an auxiliary verb.`,
  },
  {
    question: `Identify the Yes/No question:`,
    options: {
      A: "Can you speak French?",
      B: "What languages do you speak?",
      C: "How do you speak French?",
      D: "Why do you speak French?",
    },
    correctAnswer: "Can you speak French?",
    explanation: `Yes/No questions are answered with "yes" or "no" and usually start with a modal or auxiliary verb.`,
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

shuffle(yesNoQuestionsQuiz);

// Display questions dynamically
function display_questions() {
  yesNoQuestionsQuiz.forEach((element, index) => {
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
  let questions = yesNoQuestionsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  yesNoQuestionsQuiz.forEach((element, index) => {
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
