let negativeSentencesQuiz = [
  {
    question: `Form the negative sentence: "I have finished my homework."`,
    options: {
      A: "I haven't finished my homework.",
      B: "I not have finished my homework.",
      C: "I have not finished my homework.",
      D: "I didn't finish my homework.",
    },
    correctAnswer: "I haven't finished my homework.",
    explanation: `In negative sentences with present perfect, use "haven't" or "hasn't" with the past participle.`,
  },
  {
    question: `Complete the negative sentence: "We __ going to the park."`,
    options: {
      A: "are not",
      B: "don't",
      C: "wasn't",
      D: "aren't",
    },
    correctAnswer: "are not",
    explanation: `In negative sentences with future forms, use "are not" or "aren't" with the -ing form or "will not" for simple future.`,
  },
  {
    question: `Which of the following is the correct negative form? "He had left before I arrived."`,
    options: {
      A: "He hadn't left before I arrived.",
      B: "He not had left before I arrived.",
      C: "He hadn't leave before I arrived.",
      D: "He didn't had left before I arrived.",
    },
    correctAnswer: "He hadn't left before I arrived.",
    explanation: `In negative sentences with past perfect, use "hadn't" with the past participle.`,
  },
  {
    question: `Form the negative sentence: "She will finish the project."`,
    options: {
      A: "She will not finish the project.",
      B: "She won't finished the project.",
      C: "She not will finish the project.",
      D: "She will not finished the project.",
    },
    correctAnswer: "She will not finish the project.",
    explanation: `In negative sentences with future simple, use "will not" or "won't" with the base form of the verb.`,
  },
  {
    question: `Complete the negative sentence: "I am __ ready yet."`,
    options: {
      A: "not",
      B: "no",
      C: "n't",
      D: "never",
    },
    correctAnswer: "not",
    explanation: `To form negative sentences with "am," "is," or "are," simply add "not" after the verb.`,
  },
  {
    question: `Which is the correct negative form of this sentence? "They were happy with the results."`,
    options: {
      A: "They were not happy with the results.",
      B: "They wasn't happy with the results.",
      C: "They were not happy with results.",
      D: "They weren't happy with results.",
    },
    correctAnswer: "They were not happy with the results.",
    explanation: `In negative sentences with past simple, use "were not" or "weren't" with the adjective or noun.`,
  },
  {
    question: `Form the negative sentence: "You have seen that movie."`,
    options: {
      A: "You haven't seen that movie.",
      B: "You not have seen that movie.",
      C: "You hasn't seen that movie.",
      D: "You didn't seen that movie.",
    },
    correctAnswer: "You haven't seen that movie.",
    explanation: `In negative sentences with present perfect, use "haven't" or "hasn't" with the past participle.`,
  },
  {
    question: `Complete the negative sentence: "We __ met before."`,
    options: {
      A: "have not",
      B: "hadn't",
      C: "didn't",
      D: "not have",
    },
    correctAnswer: "have not",
    explanation: `In negative sentences with present perfect, use "have not" or "has not" with the past participle.`,
  },
  {
    question: `Which of the following is the correct negative form? "She was studying last night."`,
    options: {
      A: "She was not studying last night.",
      B: "She wasn't study last night.",
      C: "She didn't was studying last night.",
      D: "She was studying not last night.",
    },
    correctAnswer: "She was not studying last night.",
    explanation: `In negative sentences with past continuous, use "was not" or "wasn't" with the -ing form of the verb.`,
  },
  {
    question: `Form the negative sentence: "They will be attending the conference."`,
    options: {
      A: "They will not be attending the conference.",
      B: "They won't be attended the conference.",
      C: "They not will be attending the conference.",
      D: "They will not attending the conference.",
    },
    correctAnswer: "They will not be attending the conference.",
    explanation: `In negative sentences with future continuous, use "will not" or "won't" with the -ing form of the verb.`,
  },
  {
    question: `Complete the negative sentence: "I __ like the new policy."`,
    options: {
      A: "do not",
      B: "not",
      C: "don't",
      D: "didn't",
    },
    correctAnswer: "do not",
    explanation: `To form negative sentences with present simple, use "do not" or "don't" with the base form of the verb.`,
  },
  {
    question: `Which is the correct negative form of this sentence? "We have been waiting for an hour."`,
    options: {
      A: "We have not been waiting for an hour.",
      B: "We haven't been wait for an hour.",
      C: "We not have been waiting for an hour.",
      D: "We haven't waited for an hour.",
    },
    correctAnswer: "We have not been waiting for an hour.",
    explanation: `In negative sentences with present perfect continuous, use "have not been" or "has not been" with the -ing form of the verb.`,
  },
  {
    question: `Form the negative sentence: "He had called me yesterday."`,
    options: {
      A: "He had not called me yesterday.",
      B: "He hadn't called me yesterday.",
      C: "He didn't had called me yesterday.",
      D: "He not had called me yesterday.",
    },
    correctAnswer: "He had not called me yesterday.",
    explanation: `In negative sentences with past perfect, use "had not" or "hadn't" with the past participle.`,
  },
  {
    question: `Complete the negative sentence: "I __ finish the book on time."`,
    options: {
      A: "did not",
      B: "do not",
      C: "didn't",
      D: "not",
    },
    correctAnswer: "did not",
    explanation: `In negative sentences with past simple, use "did not" or "didn't" with the base form of the verb.`,
  },
  {
    question: `Which of the following is the correct negative form? "She will have completed the project."`,
    options: {
      A: "She will not have completed the project.",
      B: "She won't have complete the project.",
      C: "She not will have completed the project.",
      D: "She will not completed the project.",
    },
    correctAnswer: "She will not have completed the project.",
    explanation: `In negative sentences with future perfect, use "will not have" or "won't have" with the past participle.`,
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

shuffle(negativeSentencesQuiz);

// Display questions dynamically
function display_questions() {
  negativeSentencesQuiz.forEach((element, index) => {
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
  let questions = negativeSentencesQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  negativeSentencesQuiz.forEach((element, index) => {
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
