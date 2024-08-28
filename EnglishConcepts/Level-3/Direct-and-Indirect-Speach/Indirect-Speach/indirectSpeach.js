let indirectSpeechQuiz = [
  {
    question: `Complete the indirect speech sentence: "She told me that she ____ leave early."`,
    options: {
      A: "would",
      B: "will",
      C: "can",
      D: "might",
    },
    correctAnswer: "would",
    explanation: `In indirect speech, tense changes to reflect the past context, so "will" changes to "would".`,
  },
  {
    question: `Which of the following is an example of indirect speech?`,
    options: {
      A: "He asked if she was coming.",
      B: "He asked, 'Are you coming?'",
      C: "'Are you coming?' he asked.",
      D: "He said, 'She is coming.'",
    },
    correctAnswer: "He asked if she was coming.",
    explanation: `Indirect speech reports questions without using the exact words, and usually includes "if" or "whether".`,
  },
  {
    question: `Identify the indirect speech in this sentence: "Tom said that he had finished the report."`,
    options: {
      A: "Tom said",
      B: "that he had finished the report",
      C: "he had finished the report",
      D: "Tom said that",
    },
    correctAnswer: "that he had finished the report",
    explanation: `Indirect speech involves reporting the content of the speech without quotation marks.`,
  },
  {
    question: `Which sentence correctly uses indirect speech?`,
    options: {
      A: "She said that she would arrive at three o'clock.",
      B: "She said she would arrive at three o'clock.",
      C: "She said, 'I would arrive at three o'clock.'",
      D: "'I would arrive at three o'clock,' she said.",
    },
    correctAnswer: "She said that she would arrive at three o'clock.",
    explanation: `Indirect speech reports what someone said, often starting with "that" to connect the reporting clause to the reported speech.`,
  },
  {
    question: `Complete the indirect speech sentence: "He explained that the project ____ completed by next week."`,
    options: {
      A: "would be",
      B: "will be",
      C: "has been",
      D: "was",
    },
    correctAnswer: "would be",
    explanation: `In indirect speech, future tenses in the direct speech change to "would" to match the past context.`,
  },
  {
    question: `Which of the following correctly demonstrates indirect speech?`,
    options: {
      A: "She asked me if I could help her.",
      B: "She asked me, 'Can you help me?'",
      C: "She asked, 'I could help her?'",
      D: "'Can you help me?' she asked.",
    },
    correctAnswer: "She asked me if I could help her.",
    explanation: `Indirect speech turns direct questions into statements and uses "if" or "whether" for yes/no questions.`,
  },
  {
    question: `Identify the indirect speech in this sentence: "John said that he was feeling tired."`,
    options: {
      A: "John said",
      B: "he was feeling tired",
      C: "that he was feeling tired",
      D: "John said that",
    },
    correctAnswer: "that he was feeling tired",
    explanation: `Indirect speech reports what was said without quoting it directly, often starting with "that".`,
  },
  {
    question: `Which sentence uses indirect speech correctly?`,
    options: {
      A: "She said that she might go to the party.",
      B: "She said, 'I might go to the party.'",
      C: "She said, 'Might go to the party.'",
      D: "'I might go to the party,' she said.",
    },
    correctAnswer: "She said that she might go to the party.",
    explanation: `Indirect speech reports the content of the original statement without quoting it exactly and often uses "that" to introduce the reported speech.`,
  },
  {
    question: `Complete the indirect speech sentence: "They told us that they ____ finished their homework."`,
    options: {
      A: "had",
      B: "will have",
      C: "are",
      D: "have",
    },
    correctAnswer: "had",
    explanation: `In indirect speech, present perfect tense changes to past perfect tense when reporting past statements.`,
  },
  {
    question: `Which of the following is an example of indirect speech?`,
    options: {
      A: "He told me that he was going to the store.",
      B: "He said, 'I am going to the store.'",
      C: "'I am going to the store,' he said.",
      D: "He said, 'I was going to the store.'",
    },
    correctAnswer: "He told me that he was going to the store.",
    explanation: `Indirect speech reports statements and changes the tense accordingly to fit the context.`,
  },
  {
    question: `Which sentence demonstrates indirect speech?`,
    options: {
      A: "She wondered if he would come.",
      B: "She wondered, 'Will he come?'",
      C: "'Will he come?' she wondered.",
      D: "She wondered, 'He will come?'",
    },
    correctAnswer: "She wondered if he would come.",
    explanation: `Indirect speech converts direct questions into statements and uses "if" or "whether" to introduce the question.`,
  },
  {
    question: `Complete the indirect speech sentence: "He mentioned that he ____ meet us at the café."`,
    options: {
      A: "would",
      B: "will",
      C: "can",
      D: "could",
    },
    correctAnswer: "would",
    explanation: `In indirect speech, future intentions are often reported using "would" to fit the past context.`,
  },
  {
    question: `Which sentence correctly uses indirect speech?`,
    options: {
      A: "She asked if he had seen the movie.",
      B: "She asked, 'Did you see the movie?'",
      C: "'Did you see the movie?' she asked.",
      D: "She asked, 'Had you seen the movie?'",
    },
    correctAnswer: "She asked if he had seen the movie.",
    explanation: `Indirect speech reports questions using "if" or "whether" and changes the tense accordingly.`,
  },
  {
    question: `Identify the indirect speech in this sentence: "He said that they would be arriving soon."`,
    options: {
      A: "He said",
      B: "that they would be arriving soon",
      C: "they would be arriving soon",
      D: "He said that",
    },
    correctAnswer: "that they would be arriving soon",
    explanation: `Indirect speech includes the reported content without quotation marks, often starting with "that".`,
  },
  {
    question: `Which of the following demonstrates correct indirect speech?`,
    options: {
      A: "He said that he could help us.",
      B: "He said, 'I can help us.'",
      C: "He said, 'I could help us.'",
      D: "'I could help us,' he said.",
    },
    correctAnswer: "He said that he could help us.",
    explanation: `Indirect speech adjusts the tense and omits quotation marks to report what was said.`,
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

shuffle(indirectSpeechQuiz);

// Display questions dynamically
function display_questions() {
  indirectSpeechQuiz.forEach((element, index) => {
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
  let questions = indirectSpeechQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  indirectSpeechQuiz.forEach((element, index) => {
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
