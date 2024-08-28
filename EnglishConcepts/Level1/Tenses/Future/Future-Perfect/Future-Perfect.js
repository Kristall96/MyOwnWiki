let futurePerfectQuiz = [
  {
    question: `Which sentence is in the future perfect tense?`,
    options: {
      A: "I write letters.",
      B: "I have written a letter.",
      C: "I will have written a letter.",
      D: "I will be writing a letter.",
    },
    correctAnswer: "I will have written a letter.",
    explanation: `"I will have written a letter" is in the future perfect tense because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `Identify the sentence that correctly uses the future perfect tense.`,
    options: {
      A: "She eats lunch every day.",
      B: "She will have eaten lunch by noon.",
      C: "She ate lunch.",
      D: "She will be eating lunch.",
    },
    correctAnswer: "She will have eaten lunch by noon.",
    explanation: `"She will have eaten lunch by noon" is in the future perfect tense because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `Which of the following sentences is in the future perfect tense?`,
    options: {
      A: "They play soccer.",
      B: "They will have played soccer by the time you arrive.",
      C: "They played soccer.",
      D: "They will be playing soccer.",
    },
    correctAnswer: "They will have played soccer by the time you arrive.",
    explanation: `"They will have played soccer by the time you arrive" is in the future perfect tense because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `What is the correct future perfect tense form of this sentence? "He ___ to school by 8 AM tomorrow."`,
    options: {
      A: "Goes",
      B: "Has gone",
      C: "Will have gone",
      D: "Will be going",
    },
    correctAnswer: "Will have gone",
    explanation: `"Will have gone" is the correct future perfect tense form because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `Which sentence uses the future perfect tense correctly?`,
    options: {
      A: "I go to the store.",
      B: "I will have gone to the store by the time you arrive.",
      C: "I went to the store.",
      D: "I will be going to the store.",
    },
    correctAnswer: "I will have gone to the store by the time you arrive.",
    explanation: `"I will have gone to the store" is in the future perfect tense because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `Identify the future perfect tense form of this sentence: "She ___ her homework by 6 PM."`,
    options: {
      A: "Does",
      B: "Will have done",
      C: "Did",
      D: "Will do",
    },
    correctAnswer: "Will have done",
    explanation: `"Will have done" is the correct future perfect tense form because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `Which of the following sentences is in the future perfect tense?`,
    options: {
      A: "We watch movies every weekend.",
      B: "We will have watched the movie by the time you arrive.",
      C: "We watched a movie last night.",
      D: "We will be watching a movie.",
    },
    correctAnswer: "We will have watched the movie by the time you arrive.",
    explanation: `"We will have watched the movie" is in the future perfect tense because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `What is the correct future perfect tense form of this sentence? "They ___ the bus by 9 AM tomorrow."`,
    options: {
      A: "Take",
      B: "Will have taken",
      C: "Took",
      D: "Will be taking",
    },
    correctAnswer: "Will have taken",
    explanation: `"Will have taken" is the correct future perfect tense form because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `Which sentence uses the future perfect tense correctly?`,
    options: {
      A: "She reads books every night.",
      B: "She will have read the book by tomorrow.",
      C: "She read a book last night.",
      D: "She will be reading a book.",
    },
    correctAnswer: "She will have read the book by tomorrow.",
    explanation: `"She will have read the book by tomorrow" is in the future perfect tense because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `Identify the future perfect tense form of this sentence: "He ___ coffee by the time you arrive."`,
    options: {
      A: "Drinks",
      B: "Will have drunk",
      C: "Drank",
      D: "Will be drinking",
    },
    correctAnswer: "Will have drunk",
    explanation: `"Will have drunk" is the correct future perfect tense form because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `Which of the following sentences is in the future perfect tense?`,
    options: {
      A: "They study for the test every day.",
      B: "They will have studied for the test by the time it starts.",
      C: "They studied for the test last night.",
      D: "They will be studying for the test.",
    },
    correctAnswer: "They will have studied for the test by the time it starts.",
    explanation: `"They will have studied for the test" is in the future perfect tense because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `What is the correct future perfect tense form of this sentence? "She ___ to the gym by 5 PM tomorrow."`,
    options: {
      A: "Goes",
      B: "Will have gone",
      C: "Went",
      D: "Will be going",
    },
    correctAnswer: "Will have gone",
    explanation: `"Will have gone" is the correct future perfect tense form because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `Which sentence uses the future perfect tense correctly?`,
    options: {
      A: "He cooks dinner every night.",
      B: "He will have cooked dinner by the time they arrive.",
      C: "He cooked dinner last night.",
      D: "He will be cooking dinner.",
    },
    correctAnswer: "He will have cooked dinner by the time they arrive.",
    explanation: `"He will have cooked dinner" is in the future perfect tense because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `Identify the future perfect tense form of this sentence: "They ___ in the park by the time you get here."`,
    options: {
      A: "Walk",
      B: "Will have walked",
      C: "Walked",
      D: "Will be walking",
    },
    correctAnswer: "Will have walked",
    explanation: `"Will have walked" is the correct future perfect tense form because it describes an action that will be completed before a specific time in the future.`,
  },
  {
    question: `Which of the following sentences is in the future perfect tense?`,
    options: {
      A: "We plan a trip every summer.",
      B: "We will have planned the trip by next week.",
      C: "We planned a trip last year.",
      D: "We will be planning a trip.",
    },
    correctAnswer: "We will have planned the trip by next week.",
    explanation: `"We will have planned the trip by next week" is in the future perfect tense because it describes an action that will be completed before a specific time in the future.`,
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

shuffle(futurePerfectQuiz);

// Display questions dynamically
function display_questions() {
  futurePerfectQuiz.forEach((element, index) => {
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
  let questions = futurePerfectQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  futurePerfectQuiz.forEach((element, index) => {
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
