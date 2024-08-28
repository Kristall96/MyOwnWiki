let parenthesesQuiz = [
  {
    question: `Identify the sentence that correctly uses parentheses for a side note.`,
    options: {
      A: `Please send the documents (by the end of the day).`,
      B: `Please send the documents (by the end of the day.`,
      C: `Please send the documents by the end of the day).`,
      D: `Please send the documents by the end of the day.`,
    },
    correctAnswer: `Please send the documents (by the end of the day).`,
    explanation: `Parentheses are used to include supplementary information or clarifications within a sentence.`,
  },
  {
    question: `Choose the correct usage of parentheses in the following sentence.`,
    options: {
      A: `Our meeting (which is scheduled for 2 PM) might be delayed.`,
      B: `Our meeting, (which is scheduled for 2 PM) might be delayed.`,
      C: `Our meeting (which is scheduled for 2 PM might be delayed.`,
      D: `Our meeting (which is scheduled for 2 PM) might be delayed.`,
    },
    correctAnswer: `Our meeting (which is scheduled for 2 PM) might be delayed.`,
    explanation: `Parentheses should enclose additional information that is supplementary to the main sentence.`,
  },
  {
    question: `Which sentence uses parentheses correctly to include an aside?`,
    options: {
      A: `The festival (held annually in June) attracts many visitors.`,
      B: `The festival held annually (in June) attracts many visitors.`,
      C: `The festival (held annually in June attracts many visitors).`,
      D: `The festival (held annually in June) attracts many visitors.`,
    },
    correctAnswer: `The festival (held annually in June) attracts many visitors.`,
    explanation: `Parentheses enclose information that adds extra detail or clarification to the main sentence.`,
  },
  {
    question: `Identify the sentence that correctly uses parentheses to add a brief explanation.`,
    options: {
      A: `The manager (who was promoted last year) will give the speech.`,
      B: `The manager (who was promoted last year will give the speech).`,
      C: `The manager who was promoted last year (will give the speech).`,
      D: `The manager (who was promoted last year) will give the speech.`,
    },
    correctAnswer: `The manager (who was promoted last year) will give the speech.`,
    explanation: `Parentheses are used to insert additional explanations or clarifications without interrupting the main message.`,
  },
  {
    question: `Which sentence correctly uses parentheses to enclose an example?`,
    options: {
      A: `He enjoys many hobbies (e.g., cycling, swimming, and painting).`,
      B: `He enjoys many hobbies e.g., (cycling, swimming, and painting).`,
      C: `He enjoys many hobbies (e.g. cycling, swimming, and painting).`,
      D: `He enjoys many hobbies (e.g., cycling, swimming, and painting.`,
    },
    correctAnswer: `He enjoys many hobbies (e.g., cycling, swimming, and painting).`,
    explanation: `Parentheses are used to include examples or additional information that supports the main sentence.`,
  },
  {
    question: `Choose the sentence that uses parentheses to include a reference correctly.`,
    options: {
      A: `The study (Smith, 2020) provides valuable insights.`,
      B: `The study Smith, (2020) provides valuable insights.`,
      C: `The study (Smith, 2020 provides valuable insights).`,
      D: `The study (Smith, 2020) provides valuable insights.`,
    },
    correctAnswer: `The study (Smith, 2020) provides valuable insights.`,
    explanation: `Parentheses can enclose references or citations to provide additional information.`,
  },
  {
    question: `Which sentence correctly uses parentheses to include a clarifying statement?`,
    options: {
      A: `The event (originally planned for July) has been moved to August.`,
      B: `The event originally planned (for July) has been moved to August.`,
      C: `The event (originally planned for July has been moved to August).`,
      D: `The event (originally planned for July) has been moved to August.`,
    },
    correctAnswer: `The event (originally planned for July) has been moved to August.`,
    explanation: `Parentheses are used to provide clarifying or additional information about the main clause.`,
  },
  {
    question: `Identify the sentence that uses parentheses correctly to add a note. `,
    options: {
      A: `Please review the document (attached below) for more details.`,
      B: `Please review the document attached below (for more details).`,
      C: `Please review the document (attached below for more details).`,
      D: `Please review the document (attached below) for more details.`,
    },
    correctAnswer: `Please review the document (attached below) for more details.`,
    explanation: `Parentheses enclose additional notes or comments that help clarify or provide extra details.`,
  },
  {
    question: `Which sentence correctly uses parentheses for supplementary information?`,
    options: {
      A: `Our new office (located in the downtown area) opens next month.`,
      B: `Our new office located (in the downtown area) opens next month.`,
      C: `Our new office (located in the downtown area opens next month).`,
      D: `Our new office (located in the downtown area) opens next month.`,
    },
    correctAnswer: `Our new office (located in the downtown area) opens next month.`,
    explanation: `Parentheses are used to provide additional details or clarifications in a sentence.`,
  },
  {
    question: `Choose the sentence that uses parentheses to include a clarifying remark. `,
    options: {
      A: `Her car (a red sedan) is parked outside.`,
      B: `Her car a red sedan (is parked outside).`,
      C: `Her car (a red sedan is parked outside).`,
      D: `Her car (a red sedan) is parked outside.`,
    },
    correctAnswer: `Her car (a red sedan) is parked outside.`,
    explanation: `Parentheses should enclose additional remarks that provide extra information about the main clause.`,
  },
  {
    question: `Which sentence uses parentheses correctly for a brief explanation?`,
    options: {
      A: `The report (due tomorrow) needs to be reviewed.`,
      B: `The report due tomorrow (needs to be reviewed).`,
      C: `The report (due tomorrow needs to be reviewed).`,
      D: `The report (due tomorrow) needs to be reviewed.`,
    },
    correctAnswer: `The report (due tomorrow) needs to be reviewed.`,
    explanation: `Parentheses are used to insert explanations or clarifications that are supplementary to the main statement.`,
  },
  {
    question: `Identify the sentence with the correct use of parentheses for an additional detail. `,
    options: {
      A: `The team (consisting of five members) won the championship.`,
      B: `The team consisting of five members (won the championship).`,
      C: `The team (consisting of five members won the championship).`,
      D: `The team (consisting of five members) won the championship.`,
    },
    correctAnswer: `The team (consisting of five members) won the championship.`,
    explanation: `Parentheses are used to add extra details that clarify or enhance the meaning of the sentence.`,
  },
  {
    question: `Which sentence correctly uses parentheses to add a reference note?`,
    options: {
      A: `The guidelines (see Appendix A) should be followed.`,
      B: `The guidelines see Appendix A (should be followed).`,
      C: `The guidelines (see Appendix A should be followed).`,
      D: `The guidelines (see Appendix A) should be followed.`,
    },
    correctAnswer: `The guidelines (see Appendix A) should be followed.`,
    explanation: `Parentheses are used to include reference notes or supplementary information that supports the main text.`,
  },
  {
    question: `Choose the sentence that correctly uses parentheses for an additional comment. `,
    options: {
      A: `The new policy (which takes effect next month) will impact everyone.`,
      B: `The new policy (which takes effect next month will impact everyone).`,
      C: `The new policy which takes effect next month (will impact everyone).`,
      D: `The new policy (which takes effect next month) will impact everyone.`,
    },
    correctAnswer: `The new policy (which takes effect next month) will impact everyone.`,
    explanation: `Parentheses enclose additional comments that add context or clarification to the main sentence.`,
  },
  {
    question: `Which of these sentences correctly uses parentheses to include extra information?`,
    options: {
      A: `The team members (John, Alice, and Steve) attended the conference.`,
      B: `The team members John, (Alice, and Steve) attended the conference.`,
      C: `The team members (John, Alice, and Steve attended the conference).`,
      D: `The team members (John, Alice, and Steve) attended the conference.`,
    },
    correctAnswer: `The team members (John, Alice, and Steve) attended the conference.`,
    explanation: `Parentheses are used to insert extra information about the subject without interrupting the main sentence flow.`,
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

shuffle(parenthesesQuiz);

// Display questions dynamically
function display_questions() {
  parenthesesQuiz.forEach((element, index) => {
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
  let questions = parenthesesQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  parenthesesQuiz.forEach((element, index) => {
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
