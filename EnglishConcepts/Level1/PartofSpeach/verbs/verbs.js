let verbsQuiz = [
  {
    question: `Which word in this sentence is a verb? "The dog runs fast."`,
    options: {
      A: "Dog",
      B: "Fast",
      C: "Runs",
      D: "The",
    },
    correctAnswer: "Runs",
    explanation: `"Runs" is a verb because it describes an action performed by the dog.`,
  },
  {
    question: `Identify the verb in this sentence: "She is a talented singer."`,
    options: {
      A: "Talented",
      B: "She",
      C: "Singer",
      D: "Is",
    },
    correctAnswer: "Is",
    explanation: `"Is" is a verb because it indicates a state of being.`,
  },
  {
    question: `Which of the following is an action verb?`,
    options: {
      A: "Quickly",
      B: "Jump",
      C: "Him",
      D: "Beautiful",
    },
    correctAnswer: "Jump",
    explanation: `"Jump" is an action verb because it describes a physical action.`,
  },
  {
    question: `What is the verb in this sentence: "They danced all night."`,
    options: {
      A: "Danced",
      B: "They",
      C: "All",
      D: "Night",
    },
    correctAnswer: "Danced",
    explanation: `"Danced" is a verb because it describes an action performed by "they."`,
  },
  {
    question: `Which word is a verb in this sentence: "He becomes very excited during games."`,
    options: {
      A: "He",
      B: "Becomes",
      C: "Excited",
      D: "Games",
    },
    correctAnswer: "Becomes",
    explanation: `"Becomes" is a verb because it describes a change in state or being.`,
  },
  {
    question: `Identify the verb in this sentence: "The flowers bloom in spring."`,
    options: {
      A: "Flowers",
      B: "Bloom",
      C: "In",
      D: "Spring",
    },
    correctAnswer: "Bloom",
    explanation: `"Bloom" is a verb because it describes the action of the flowers.`,
  },
  {
    question: `Which of the following is a linking verb?`,
    options: {
      A: "Run",
      B: "Is",
      C: "Jump",
      D: "Quickly",
    },
    correctAnswer: "Is",
    explanation: `"Is" is a linking verb because it connects the subject with more information about the subject.`,
  },
  {
    question: `Which verb correctly completes this sentence: "They ___ to the store every morning."`,
    options: {
      A: "Go",
      B: "Goes",
      C: "Going",
      D: "Gone",
    },
    correctAnswer: "Go",
    explanation: `"Go" is the correct verb because it describes the action in the present tense.`,
  },
  {
    question: `In the sentence "The chef cooked a delicious meal," which word is a verb?`,
    options: {
      A: "Chef",
      B: "Cooked",
      C: "Delicious",
      D: "Meal",
    },
    correctAnswer: "Cooked",
    explanation: `"Cooked" is a verb because it describes the action performed by the chef.`,
  },
  {
    question: `Which of the following is an auxiliary (helping) verb?`,
    options: {
      A: "Has",
      B: "Run",
      C: "Quickly",
      D: "Beautiful",
    },
    correctAnswer: "Has",
    explanation: `"Has" is an auxiliary verb because it helps to form the perfect tense in a sentence.`,
  },
  {
    question: `What is the verb in this sentence: "She sings beautifully."`,
    options: {
      A: "She",
      B: "Sings",
      C: "Beautifully",
      D: "Music",
    },
    correctAnswer: "Sings",
    explanation: `"Sings" is a verb because it describes an action performed by "she."`,
  },
  {
    question: `Identify the verb in this sentence: "They are building a new house."`,
    options: {
      A: "Are",
      B: "Building",
      C: "New",
      D: "House",
    },
    correctAnswer: "Building",
    explanation: `"Building" is a verb because it describes the action of constructing something.`,
  },
  {
    question: `Which of the following is a transitive verb?`,
    options: {
      A: "Sleep",
      B: "Run",
      C: "Kick",
      D: "Exist",
    },
    correctAnswer: "Kick",
    explanation: `"Kick" is a transitive verb because it requires an object to complete its meaning, such as "kick the ball."`,
  },
  {
    question: `Which verb correctly completes this sentence: "She ___ reading a book when you called."`,
    options: {
      A: "Was",
      B: "Is",
      C: "Will",
      D: "Has",
    },
    correctAnswer: "Was",
    explanation: `"Was" is the correct verb because it indicates the past continuous tense.`,
  },
  {
    question: `In the sentence "The children played happily in the park," which word is a verb?`,
    options: {
      A: "Children",
      B: "Played",
      C: "Happily",
      D: "Park",
    },
    correctAnswer: "Played",
    explanation: `"Played" is a verb because it describes the action performed by the children.`,
  },
];

// Getting references to elements
let quiz_container = document.getElementById("quizContainer");
let result_div = document.getElementById("result");
let result_container = document.getElementById("resultText");
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

// Shuffle the questions
shuffle(verbsQuiz);

// Display questions dynamically
function display_questions() {
  verbsQuiz.forEach((element, index) => {
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
  let questions = verbsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  verbsQuiz.forEach((element, index) => {
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
