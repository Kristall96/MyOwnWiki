let questionMarksQuiz = [
  {
    question: `Identify the sentence that uses a question mark correctly.`,
    options: {
      A: `Are we meeting at noon?`,
      B: `Are we meeting at noon.`,
      C: `Are we meeting at noon,`,
      D: `Are we meeting at noon!`,
    },
    correctAnswer: `Are we meeting at noon?`,
    explanation: `Question marks end sentences that are posed as questions.`,
  },
  {
    question: `Choose the correct use of a question mark in the following sentence.`,
    options: {
      A: `What time does the movie start?`,
      B: `What time does the movie start.`,
      C: `What time does the movie start,`,
      D: `What time does the movie start!`,
    },
    correctAnswer: `What time does the movie start?`,
    explanation: `Use a question mark at the end of a sentence that asks a question.`,
  },
  {
    question: `Which sentence correctly uses a question mark to indicate a question?`,
    options: {
      A: `Can you help me with this?`,
      B: `Can you help me with this.`,
      C: `Can you help me with this,`,
      D: `Can you help me with this!`,
    },
    correctAnswer: `Can you help me with this?`,
    explanation: `A question mark is used to end interrogative sentences.`,
  },
  {
    question: `Which of the following sentences is punctuated correctly with a question mark?`,
    options: {
      A: `What is your favorite color?`,
      B: `What is your favorite color.`,
      C: `What is your favorite color,`,
      D: `What is your favorite color!`,
    },
    correctAnswer: `What is your favorite color?`,
    explanation: `A question mark is used to close sentences that ask questions.`,
  },
  {
    question: `Choose the sentence with the correct use of a question mark.`,
    options: {
      A: `Have you seen my keys?`,
      B: `Have you seen my keys.`,
      C: `Have you seen my keys,`,
      D: `Have you seen my keys!`,
    },
    correctAnswer: `Have you seen my keys?`,
    explanation: `Use a question mark to end a sentence that is an inquiry.`,
  },
  {
    question: `Identify the correctly punctuated sentence with a question mark.`,
    options: {
      A: `Do you know where she went?`,
      B: `Do you know where she went.`,
      C: `Do you know where she went,`,
      D: `Do you know where she went!`,
    },
    correctAnswer: `Do you know where she went?`,
    explanation: `A question mark indicates that the sentence is a question.`,
  },
  {
    question: `Which sentence uses a question mark correctly?`,
    options: {
      A: `Are you coming to the party?`,
      B: `Are you coming to the party.`,
      C: `Are you coming to the party,`,
      D: `Are you coming to the party!`,
    },
    correctAnswer: `Are you coming to the party?`,
    explanation: `A question mark should be used at the end of interrogative sentences.`,
  },
  {
    question: `Select the sentence that correctly ends with a question mark.`,
    options: {
      A: `What are you doing?`,
      B: `What are you doing.`,
      C: `What are you doing,`,
      D: `What are you doing!`,
    },
    correctAnswer: `What are you doing?`,
    explanation: `Use a question mark to end sentences that ask questions.`,
  },
  {
    question: `Which sentence correctly uses a question mark to indicate a question?`,
    options: {
      A: `Where did you put my book?`,
      B: `Where did you put my book.`,
      C: `Where did you put my book,`,
      D: `Where did you put my book!`,
    },
    correctAnswer: `Where did you put my book?`,
    explanation: `A question mark is used to end a sentence that asks something.`,
  },
  {
    question: `Identify the correct sentence with a question mark.`,
    options: {
      A: `Why is the sky blue?`,
      B: `Why is the sky blue.`,
      C: `Why is the sky blue,`,
      D: `Why is the sky blue!`,
    },
    correctAnswer: `Why is the sky blue?`,
    explanation: `Use a question mark at the end of a sentence that asks a question.`,
  },
  {
    question: `Choose the correctly punctuated question.`,
    options: {
      A: `Do you understand the instructions?`,
      B: `Do you understand the instructions.`,
      C: `Do you understand the instructions,`,
      D: `Do you understand the instructions!`,
    },
    correctAnswer: `Do you understand the instructions?`,
    explanation: `A question mark indicates the end of an interrogative sentence.`,
  },
  {
    question: `Which sentence correctly ends with a question mark?`,
    options: {
      A: `Have you finished your homework?`,
      B: `Have you finished your homework.`,
      C: `Have you finished your homework,`,
      D: `Have you finished your homework!`,
    },
    correctAnswer: `Have you finished your homework?`,
    explanation: `Use a question mark to end sentences that are questions.`,
  },
  {
    question: `Identify the sentence that correctly uses a question mark. `,
    options: {
      A: `Are we leaving soon?`,
      B: `Are we leaving soon.`,
      C: `Are we leaving soon,`,
      D: `Are we leaving soon!`,
    },
    correctAnswer: `Are we leaving soon?`,
    explanation: `Question marks are used at the end of sentences that ask a question.`,
  },
  {
    question: `Which sentence uses a question mark appropriately?`,
    options: {
      A: `Can you pass me the salt?`,
      B: `Can you pass me the salt.`,
      C: `Can you pass me the salt,`,
      D: `Can you pass me the salt!`,
    },
    correctAnswer: `Can you pass me the salt?`,
    explanation: `A question mark is used to end sentences that ask something.`,
  },
  {
    question: `Select the sentence that ends correctly with a question mark.`,
    options: {
      A: `What is your plan for the weekend?`,
      B: `What is your plan for the weekend.`,
      C: `What is your plan for the weekend,`,
      D: `What is your plan for the weekend!`,
    },
    correctAnswer: `What is your plan for the weekend?`,
    explanation: `Use a question mark to end sentences that are inquiries.`,
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

shuffle(questionMarksQuiz);

// Display questions dynamically
function display_questions() {
  questionMarksQuiz.forEach((element, index) => {
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
  let questions = questionMarksQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  questionMarksQuiz.forEach((element, index) => {
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
