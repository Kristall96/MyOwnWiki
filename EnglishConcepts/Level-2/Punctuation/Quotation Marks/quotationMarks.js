let quotationMarksQuiz = [
  {
    question: `Which sentence correctly uses quotation marks to indicate a quote within a quote?`,
    options: {
      A: `He said, "When she told me, 'I will be late,' I was relieved."`,
      B: `He said, "When she told me, 'I will be late' I was relieved."`,
      C: `He said, "When she told me 'I will be late,' I was relieved."`,
      D: `He said, "When she told me, 'I will be late,' I was relieved."`,
    },
    correctAnswer: `He said, "When she told me, 'I will be late,' I was relieved."`,
    explanation: `Use single quotation marks inside double quotation marks for a quote within a quote.`,
  },
  {
    question: `Choose the sentence that correctly uses quotation marks for a direct quote.`,
    options: {
      A: `"I will call you later," she promised.`,
      B: `"I will call you later she promised."`,
      C: `I will call you later "she promised."`,
      D: `I will call you later, "she promised."`,
    },
    correctAnswer: `"I will call you later," she promised.`,
    explanation: `The exact words spoken are enclosed in quotation marks, with the comma inside the quotes.`,
  },
  {
    question: `Which sentence correctly uses quotation marks to highlight a title?`,
    options: {
      A: `I just finished reading "The Great Gatsby."`,
      B: `I just finished reading "The Great Gatsby`,
      C: `I just finished reading The Great Gatsby"`,
      D: `I just finished reading "The Great Gatsby`,
    },
    correctAnswer: `I just finished reading "The Great Gatsby."`,
    explanation: `Quotation marks are used around the title of a work, with punctuation inside the quotes.`,
  },
  {
    question: `Identify the correct use of quotation marks for a single quote in direct speech.`,
    options: {
      A: `"Did you hear her say, 'I'll be there soon'?" he asked.`,
      B: `"Did you hear her say 'I'll be there soon'?" he asked.`,
      C: `"Did you hear her say, 'I'll be there soon' he asked."`,
      D: `"Did you hear her say 'I'll be there soon' he asked"?`,
    },
    correctAnswer: `"Did you hear her say, 'I'll be there soon'?" he asked.`,
    explanation: `Use single quotation marks inside double quotation marks for quotes within direct speech.`,
  },
  {
    question: `Which sentence uses quotation marks correctly for a quote at the beginning and end?`,
    options: {
      A: `She said, "I am excited about the trip!"`,
      B: `She said, "I am excited about the trip!`,
      C: `She said "I am excited about the trip!`,
      D: `She said, I am excited about the trip!"`,
    },
    correctAnswer: `She said, "I am excited about the trip!"`,
    explanation: `Quotation marks are used at both the beginning and end of the spoken words, with punctuation inside.`,
  },
  {
    question: `Choose the correct sentence using quotation marks for dialogue punctuation.`,
    options: {
      A: `"Can you help me with this?" she asked.`,
      B: `"Can you help me with this" she asked?`,
      C: `"Can you help me with this," she asked?`,
      D: `"Can you help me with this" she asked?`,
    },
    correctAnswer: `"Can you help me with this?" she asked.`,
    explanation: `Quotation marks enclose the spoken words, with the question mark inside if it is part of the speech.`,
  },
  {
    question: `Which sentence correctly uses quotation marks to enclose a quote that includes a comma?`,
    options: {
      A: `"Let's go to the park," he said, "it's a beautiful day."`,
      B: `"Let's go to the park," he said "it's a beautiful day."`,
      C: `"Let's go to the park," he said "it's a beautiful day,."`,
      D: `"Let's go to the park" he said, "it's a beautiful day."`,
    },
    correctAnswer: `"Let's go to the park," he said, "it's a beautiful day."`,
    explanation: `Quotation marks enclose the quote, with commas inside the quotes as needed.`,
  },
  {
    question: `Identify the sentence that uses quotation marks correctly for a quote within a quote.`,
    options: {
      A: `"I heard her say, 'I'll be there soon,' and then she hung up," he recounted.`,
      B: `"I heard her say, 'I'll be there soon,' and then she hung up" he recounted.`,
      C: `"I heard her say 'I'll be there soon,' and then she hung up" he recounted.`,
      D: `"I heard her say, 'I'll be there soon' and then she hung up," he recounted.`,
    },
    correctAnswer: `"I heard her say, 'I'll be there soon,' and then she hung up," he recounted.`,
    explanation: `Use single quotation marks for the embedded quote within double quotation marks.`,
  },
  {
    question: `Which sentence correctly uses quotation marks to enclose a title?`,
    options: {
      A: `I enjoyed reading "To Kill a Mockingbird."`,
      B: `I enjoyed reading "To Kill a Mockingbird`,
      C: `I enjoyed reading To Kill a Mockingbird"`,
      D: `I enjoyed reading "To Kill a Mockingbird`,
    },
    correctAnswer: `I enjoyed reading "To Kill a Mockingbird."`,
    explanation: `Quotation marks are used around the title of a work, with punctuation inside the quotes.`,
  },
  {
    question: `Choose the correct sentence using quotation marks to enclose a direct quotation. `,
    options: {
      A: `"She said, 'I will meet you at the station.'"`,
      B: `"She said, 'I will meet you at the station'."`,
      C: `"She said 'I will meet you at the station'."`,
      D: `"She said, 'I will meet you at the station.'"`,
    },
    correctAnswer: `"She said, 'I will meet you at the station.'"`,
    explanation: `Use single quotation marks for a quote within a quote, and ensure punctuation is correctly placed.`,
  },
  {
    question: `Identify the correct use of quotation marks in dialogue. `,
    options: {
      A: `"I don't understand," he said, "Can you explain it?"`,
      B: `"I don't understand" he said, "Can you explain it?"`,
      C: `"I don't understand," he said "Can you explain it?"`,
      D: `"I don't understand" he said "Can you explain it?"`,
    },
    correctAnswer: `"I don't understand," he said, "Can you explain it?"`,
    explanation: `Quotation marks enclose the dialogue, with punctuation inside the quotes and correct placement for dialogue tags.`,
  },
  {
    question: `Which sentence uses quotation marks correctly for an interrupted quote?`,
    options: {
      A: `"I was surprised," she said, "when I heard the news."`,
      B: `"I was surprised she said, when I heard the news."`,
      C: `"I was surprised," she said "when I heard the news."`,
      D: `"I was surprised" she said, "when I heard the news."`,
    },
    correctAnswer: `"I was surprised," she said, "when I heard the news."`,
    explanation: `Quotation marks enclose the interrupted quote, with commas and periods placed inside the quotes as needed.`,
  },
  {
    question: `Which sentence uses quotation marks correctly to denote a quote in a research paper?`,
    options: {
      A: `"According to the study, 'The results were conclusive.'"`,
      B: `"According to the study 'The results were conclusive.'"`,
      C: `"According to the study, 'The results were conclusive'."`,
      D: `"According to the study, 'The results were conclusive'."`,
    },
    correctAnswer: `"According to the study, 'The results were conclusive.'"`,
    explanation: `Use single quotation marks for the quote within double quotation marks, and ensure proper punctuation.`,
  },
  {
    question: `Which sentence correctly uses quotation marks for an exact quote?`,
    options: {
      A: `She said, "I need help with this project."`,
      B: `She said, "I need help with this project"`,
      C: `She said "I need help with this project."`,
      D: `She said "I need help with this project"`,
    },
    correctAnswer: `She said, "I need help with this project."`,
    explanation: `The quote is enclosed in quotation marks with the period inside.`,
  },
  {
    question: `Choose the correct use of quotation marks in a sentence.`,
    options: {
      A: `"He said, 'Let's meet at noon.'"`,
      B: `"He said, 'Let's meet at noon."`,
      C: `"He said 'Let's meet at noon.' "`,
      D: `"He said, 'Let's meet at noon.'`,
    },
    correctAnswer: `"He said, 'Let's meet at noon.'"`,
    explanation: `Single quotation marks are used for the inner quote, while double quotation marks are used for the outer quote, with punctuation correctly placed.`,
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

shuffle(quotationMarksQuiz);

// Display questions dynamically
function display_questions() {
  quotationMarksQuiz.forEach((element, index) => {
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
  let questions = quotationMarksQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  quotationMarksQuiz.forEach((element, index) => {
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
