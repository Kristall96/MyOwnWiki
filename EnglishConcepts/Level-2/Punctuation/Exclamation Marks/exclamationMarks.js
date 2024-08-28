let exclamationMarksQuiz = [
  {
    question: `Choose the sentence that correctly uses an exclamation mark to show excitement.`,
    options: {
      A: `I can't believe we won the game!`,
      B: `I can't believe we won the game.`,
      C: `I can't believe we won the game?`,
      D: `I can't believe we won the game!!`,
    },
    correctAnswer: `I can't believe we won the game!`,
    explanation: `An exclamation mark is used to show excitement or disbelief. Using more than one exclamation mark is usually considered incorrect.`,
  },
  {
    question: `Which of these sentences uses an exclamation mark correctly?`,
    options: {
      A: `Help! I need assistance immediately!`,
      B: `Help, I need assistance immediately!`,
      C: `Help I need assistance immediately!`,
      D: `Help! I need assistance immediately!!`,
    },
    correctAnswer: `Help! I need assistance immediately!`,
    explanation: `An exclamation mark is used to express urgency or strong emotion. Multiple exclamation marks are generally avoided.`,
  },
  {
    question: `Identify the sentence that correctly uses an exclamation mark for emphasis.`,
    options: {
      A: `What a beautiful day!`,
      B: `What a beautiful day.`,
      C: `What a beautiful day?`,
      D: `What a beautiful day!!`,
    },
    correctAnswer: `What a beautiful day!`,
    explanation: `An exclamation mark emphasizes strong feelings or excitement. Using one exclamation mark is standard practice.`,
  },
  {
    question: `Choose the sentence with the correct use of an exclamation mark to express surprise.`,
    options: {
      A: `You won the lottery!`,
      B: `You won the lottery?`,
      C: `You won the lottery.`,
      D: `You won the lottery!!`,
    },
    correctAnswer: `You won the lottery!`,
    explanation: `An exclamation mark is used to show surprise or excitement. Multiple exclamation marks are typically not used.`,
  },
  {
    question: `Which sentence uses an exclamation mark to convey a strong command?`,
    options: {
      A: `Stop right there!`,
      B: `Stop right there.`,
      C: `Stop right there?`,
      D: `Stop right there!!`,
    },
    correctAnswer: `Stop right there!`,
    explanation: `An exclamation mark is used to give strong commands or instructions.`,
  },
  {
    question: `Identify the sentence that correctly uses an exclamation mark to show enthusiasm.`,
    options: {
      A: `I can’t wait for the concert!`,
      B: `I can’t wait for the concert?`,
      C: `I can’t wait for the concert.`,
      D: `I can’t wait for the concert!!`,
    },
    correctAnswer: `I can’t wait for the concert!`,
    explanation: `An exclamation mark expresses enthusiasm or excitement.`,
  },
  {
    question: `Which sentence uses an exclamation mark to express joy?`,
    options: {
      A: `We’re having a party tonight!`,
      B: `We’re having a party tonight.`,
      C: `We’re having a party tonight?`,
      D: `We’re having a party tonight!!`,
    },
    correctAnswer: `We’re having a party tonight!`,
    explanation: `An exclamation mark conveys strong feelings of joy or excitement.`,
  },
  {
    question: `Choose the correct use of an exclamation mark in a sentence expressing frustration.`,
    options: {
      A: `This is so frustrating!`,
      B: `This is so frustrating.`,
      C: `This is so frustrating?`,
      D: `This is so frustrating!!`,
    },
    correctAnswer: `This is so frustrating!`,
    explanation: `An exclamation mark is used to show frustration or strong emotion.`,
  },
  {
    question: `Which sentence correctly uses an exclamation mark to indicate amazement?`,
    options: {
      A: `You did an excellent job!`,
      B: `You did an excellent job.`,
      C: `You did an excellent job?`,
      D: `You did an excellent job!!`,
    },
    correctAnswer: `You did an excellent job!`,
    explanation: `An exclamation mark is used to show amazement or strong approval.`,
  },
  {
    question: `Identify the sentence that uses an exclamation mark to express a warning.`,
    options: {
      A: `Beware of the dog!`,
      B: `Beware of the dog.`,
      C: `Beware of the dog?`,
      D: `Beware of the dog!!`,
    },
    correctAnswer: `Beware of the dog!`,
    explanation: `An exclamation mark can be used to convey a warning or urgent notice.`,
  },
  {
    question: `Which sentence uses an exclamation mark for expressing excitement?`,
    options: {
      A: `This is going to be fun!`,
      B: `This is going to be fun.`,
      C: `This is going to be fun?`,
      D: `This is going to be fun!!`,
    },
    correctAnswer: `This is going to be fun!`,
    explanation: `An exclamation mark is used to express excitement about something.`,
  },
  {
    question: `Choose the sentence that uses an exclamation mark correctly to show an exclamation of surprise.`,
    options: {
      A: `I can’t believe it worked!`,
      B: `I can’t believe it worked.`,
      C: `I can’t believe it worked?`,
      D: `I can’t believe it worked!!`,
    },
    correctAnswer: `I can’t believe it worked!`,
    explanation: `An exclamation mark is used to express surprise or disbelief.`,
  },
  {
    question: `Which sentence uses an exclamation mark to indicate a strong emotion?`,
    options: {
      A: `Fantastic job on the project!`,
      B: `Fantastic job on the project.`,
      C: `Fantastic job on the project?`,
      D: `Fantastic job on the project!!`,
    },
    correctAnswer: `Fantastic job on the project!`,
    explanation: `An exclamation mark expresses strong emotion or enthusiasm.`,
  },
  {
    question: `Identify the sentence that uses an exclamation mark for an urgent request.`,
    options: {
      A: `Please help me!`,
      B: `Please help me.`,
      C: `Please help me?`,
      D: `Please help me!!`,
    },
    correctAnswer: `Please help me!`,
    explanation: `An exclamation mark conveys urgency or a strong request.`,
  },
  {
    question: `Which sentence correctly uses an exclamation mark to convey a strong feeling of happiness?`,
    options: {
      A: `I’m so excited for the weekend!`,
      B: `I’m so excited for the weekend.`,
      C: `I’m so excited for the weekend?`,
      D: `I’m so excited for the weekend!!`,
    },
    correctAnswer: `I’m so excited for the weekend!`,
    explanation: `An exclamation mark is used to show strong feelings of happiness or excitement.`,
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

shuffle(exclamationMarksQuiz);

// Display questions dynamically
function display_questions() {
  exclamationMarksQuiz.forEach((element, index) => {
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
  let questions = exclamationMarksQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  exclamationMarksQuiz.forEach((element, index) => {
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
