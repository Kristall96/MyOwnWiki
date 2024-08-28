let directSpeechQuiz = [
  {
    question: `Complete the sentence using direct speech: "She asked me, '_____?'”`,
    options: {
      A: "How are you?",
      B: "How were you?",
      C: "How will you be?",
      D: "How have you been?",
    },
    correctAnswer: "How are you?",
    explanation: `Direct speech quotes exactly what was said, so it retains the original wording and punctuation.`,
  },
  {
    question: `Which of the following correctly uses direct speech?`,
    options: {
      A: "'I can't come today,' she said.",
      B: "She said 'I can't come today'.",
      C: "She said, 'I can't come today.'",
      D: "She said, 'I can't come today.",
    },
    correctAnswer: "She said, 'I can't come today.'",
    explanation: `Direct speech should include quotation marks around the spoken words and a comma before the opening quotation mark if it's preceded by a reporting clause.`,
  },
  {
    question: `Identify the direct speech in the following sentence: "John said, 'I will be late for the meeting.'"`,
    options: {
      A: "John said,",
      B: "I will be late for the meeting",
      C: "'I will be late for the meeting'",
      D: "John said",
    },
    correctAnswer: "'I will be late for the meeting'",
    explanation: `Direct speech is the exact words spoken, enclosed in quotation marks.`,
  },
  {
    question: `Which sentence correctly formats direct speech?`,
    options: {
      A: "He said 'I will call you tomorrow.'",
      B: "He said, 'I will call you tomorrow'.",
      C: "He said, 'I will call you tomorrow.'",
      D: "He said, 'I will call you tomorrow.'",
    },
    correctAnswer: "He said, 'I will call you tomorrow.'",
    explanation: `The comma should be placed before the quotation marks if the reporting clause comes first.`,
  },
  {
    question: `Choose the correct direct speech format: "They shouted, 'Help us!'"`,
    options: {
      A: "They shouted 'Help us!'",
      B: "They shouted, 'Help us!'",
      C: "They shouted, Help us!",
      D: "They shouted, 'Help us'",
    },
    correctAnswer: "They shouted, 'Help us!'",
    explanation: `Direct speech includes exact words in quotation marks, with punctuation inside the quotes.`,
  },
  {
    question: `Which of the following is an example of direct speech?`,
    options: {
      A: "He exclaimed, 'What a beautiful day!'",
      B: "He exclaimed what a beautiful day!",
      C: "He exclaimed, what a beautiful day!",
      D: "He exclaimed 'What a beautiful day!'",
    },
    correctAnswer: "He exclaimed, 'What a beautiful day!'",
    explanation: `Direct speech needs quotation marks around the exact words spoken and proper punctuation.`,
  },
  {
    question: `Complete the direct speech sentence: "Maria said, 'I will arrive at ____.'"`,
    options: {
      A: "three o'clock",
      B: "Three o'clock",
      C: "3 o'clock",
      D: "Three O'clock",
    },
    correctAnswer: "three o'clock",
    explanation: `Direct speech should include the exact wording spoken, and proper nouns and times are capitalized or formatted correctly as needed.`,
  },
  {
    question: `Which sentence uses direct speech correctly?`,
    options: {
      A: "Tom said, 'I am going to the store.'",
      B: "Tom said, 'I am going to the store.",
      C: "Tom said 'I am going to the store.'",
      D: "Tom said 'I am going to the store.",
    },
    correctAnswer: "Tom said, 'I am going to the store.'",
    explanation: `Direct speech must include exact punctuation and quotation marks.`,
  },
  {
    question: `Which of the following demonstrates direct speech?`,
    options: {
      A: "She replied, 'I will be there soon.'",
      B: "She replied I will be there soon.",
      C: "She replied, I will be there soon.",
      D: "She replied 'I will be there soon.'",
    },
    correctAnswer: "She replied, 'I will be there soon.'",
    explanation: `Direct speech uses quotation marks and correct punctuation to enclose the spoken words.`,
  },
  {
    question: `Complete the direct speech sentence: "He asked, '____?'"`,
    options: {
      A: "Have you finished your work",
      B: "Have you finished your work?",
      C: "Have you finish your work?",
      D: "Have you finished your work.",
    },
    correctAnswer: "Have you finished your work?",
    explanation: `Direct speech includes the exact words spoken, including correct punctuation inside the quotation marks.`,
  },
  {
    question: `Which sentence is an example of direct speech?`,
    options: {
      A: "'I will see you later,' she said.",
      B: "She said, 'I will see you later.'",
      C: "She said 'I will see you later.'",
      D: "She said, 'I will see you later",
    },
    correctAnswer: "'I will see you later,' she said.",
    explanation: `Direct speech should include exact words and proper punctuation.`,
  },
  {
    question: `Identify the direct speech in this sentence: "The teacher said, 'Please start your assignments now.'"`,
    options: {
      A: "The teacher said",
      B: "Please start your assignments now",
      C: "'Please start your assignments now'",
      D: "The teacher",
    },
    correctAnswer: "'Please start your assignments now'",
    explanation: `Direct speech is the exact words spoken, enclosed in quotation marks.`,
  },
  {
    question: `Complete the sentence using direct speech: "John whispered, '_____.'"`,
    options: {
      A: "Can you keep a secret",
      B: "Can you keep a secret?",
      C: "Can you keep a secret.",
      D: "Can you keep a secret?",
    },
    correctAnswer: "Can you keep a secret?",
    explanation: `Direct speech retains the original punctuation used in the spoken words.`,
  },
  {
    question: `Which of the following is an example of direct speech?`,
    options: {
      A: "'I'm so excited,' she said.",
      B: "She said 'I'm so excited.'",
      C: "She said, 'I'm so excited.",
      D: "She said, 'I'm so excited'",
    },
    correctAnswer: "'I'm so excited,' she said.",
    explanation: `Direct speech includes exact wording and correct punctuation.`,
  },
  {
    question: `Which sentence correctly uses direct speech?`,
    options: {
      A: "'Where are you going?' he asked.",
      B: "Where are you going, he asked.",
      C: "He asked 'Where are you going?'",
      D: "He asked, 'Where are you going?'",
    },
    correctAnswer: "'Where are you going?' he asked.",
    explanation: `Direct speech must be correctly punctuated with quotation marks and a comma if the reporting clause comes first.`,
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

shuffle(directSpeechQuiz);

// Display questions dynamically
function display_questions() {
  directSpeechQuiz.forEach((element, index) => {
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
  let questions = directSpeechQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  directSpeechQuiz.forEach((element, index) => {
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
