let indicativeMoodQuiz = [
  {
    question: `Which sentence is in the indicative mood?`,
    options: {
      A: "If she sings, she will be happy.",
      B: "She sings well.",
      C: "Sing well if you want to.",
      D: "Would she sing if asked?",
    },
    correctAnswer: "She sings well.",
    explanation: `"She sings well" is in the indicative mood because it states a fact about her ability to sing well.`,
  },
  {
    question: `Identify the sentence that uses the indicative mood.`,
    options: {
      A: "She might sing at the event.",
      B: "She sings every day.",
      C: "If she sings, will she be happy?",
      D: "Would you sing if you had time?",
    },
    correctAnswer: "She sings every day.",
    explanation: `"She sings every day" is in the indicative mood because it states a fact about her routine.`,
  },
  {
    question: `Which of the following sentences is in the indicative mood?`,
    options: {
      A: "If she were to sing, she would be praised.",
      B: "She sings beautifully.",
      C: "Would she sing if asked?",
      D: "If she sings, she might win an award.",
    },
    correctAnswer: "She sings beautifully.",
    explanation: `"She sings beautifully" is in the indicative mood because it states a fact about her singing ability.`,
  },
  {
    question: `Select the sentence that is in the indicative mood.`,
    options: {
      A: "She sings well if she practices.",
      B: "Will she sing at the concert?",
      C: "She sings at the concert.",
      D: "If she sings, she might win an award.",
    },
    correctAnswer: "She sings at the concert.",
    explanation: `"She sings at the concert" is in the indicative mood because it states a fact about her singing schedule.`,
  },
  {
    question: `Which sentence is an example of the indicative mood?`,
    options: {
      A: "She would sing if she could.",
      B: "She sings every Saturday.",
      C: "Would she sing if she had the opportunity?",
      D: "She might sing tomorrow.",
    },
    correctAnswer: "She sings every Saturday.",
    explanation: `"She sings every Saturday" is in the indicative mood because it simply states a fact about her weekly routine.`,
  },
  {
    question: `Identify the indicative mood sentence.`,
    options: {
      A: "She would have sung if she had the chance.",
      B: "She sings very well.",
      C: "If she sings, will she be praised?",
      D: "She might sing tomorrow.",
    },
    correctAnswer: "She sings very well.",
    explanation: `"She sings very well" is in the indicative mood because it states a fact about her singing ability.`,
  },
  {
    question: `Which of these sentences uses the indicative mood?`,
    options: {
      A: "She might have sung at the concert.",
      B: "She sings at the concert.",
      C: "If she sings, she will be proud.",
      D: "She could sing if she wanted to.",
    },
    correctAnswer: "She sings at the concert.",
    explanation: `"She sings at the concert" is in the indicative mood because it describes a fact about her performance.`,
  },
  {
    question: `Choose the sentence that is in the indicative mood.`,
    options: {
      A: "She would sing if invited.",
      B: "She sings beautifully.",
      C: "Will she sing if asked?",
      D: "If she sings, she might win an award.",
    },
    correctAnswer: "She sings beautifully.",
    explanation: `"She sings beautifully" is in the indicative mood because it makes a statement about her singing skill.`,
  },
  {
    question: `Which of these sentences exemplifies the indicative mood?`,
    options: {
      A: "She would have sung if she had the chance.",
      B: "She sings every evening.",
      C: "Would she sing if she could?",
      D: "If she sings, she might feel better.",
    },
    correctAnswer: "She sings every evening.",
    explanation: `"She sings every evening" is in the indicative mood because it states a fact about her daily routine.`,
  },
  {
    question: `Identify the indicative mood example from the following sentences.`,
    options: {
      A: "She might sing at the party.",
      B: "She sings at the party.",
      C: "If she sings, she will feel nervous.",
      D: "Would she sing if invited?",
    },
    correctAnswer: "She sings at the party.",
    explanation: `"She sings at the party" is in the indicative mood because it provides factual information about her actions at the event.`,
  },
  {
    question: `Which sentence is in the indicative mood?`,
    options: {
      A: "She might have sung at the concert.",
      B: "She sings well at the concert.",
      C: "Would she sing if asked?",
      D: "She could sing if she wanted to.",
    },
    correctAnswer: "She sings well at the concert.",
    explanation: `"She sings well at the concert" is in the indicative mood because it states a fact about her performance at the event.`,
  },
  {
    question: `Select the indicative mood sentence.`,
    options: {
      A: "She would have sung if she had the chance.",
      B: "She sings at every event.",
      C: "Will she sing at the event?",
      D: "She could sing if she wanted to.",
    },
    correctAnswer: "She sings at every event.",
    explanation: `"She sings at every event" is in the indicative mood because it provides factual information about her singing schedule.`,
  },
  {
    question: `Which of the following sentences uses the indicative mood?`,
    options: {
      A: "She would have sung if she had the chance.",
      B: "She sings in the choir.",
      C: "Would she sing if asked?",
      D: "If she sings, she might win an award.",
    },
    correctAnswer: "She sings in the choir.",
    explanation: `"She sings in the choir" is in the indicative mood because it states a fact about her singing activities.`,
  },
  {
    question: `Identify the sentence in the indicative mood.`,
    options: {
      A: "She might sing at the concert.",
      B: "She sings at the concert.",
      C: "If she sings, she will feel nervous.",
      D: "Would she sing if invited?",
    },
    correctAnswer: "She sings at the concert.",
    explanation: `"She sings at the concert" is in the indicative mood because it provides a straightforward fact about her performance.`,
  },
  {
    question: `Which sentence represents the indicative mood?`,
    options: {
      A: "She could sing if she practiced more.",
      B: "She sings every evening.",
      C: "Would she sing if she could?",
      D: "If she sings, she might feel better.",
    },
    correctAnswer: "She sings every evening.",
    explanation: `"She sings every evening" is in the indicative mood because it states a fact about her routine.`,
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

shuffle(indicativeMoodQuiz);

// Display questions dynamically
function display_questions() {
  indicativeMoodQuiz.forEach((element, index) => {
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
  let questions = indicativeMoodQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  indicativeMoodQuiz.forEach((element, index) => {
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
