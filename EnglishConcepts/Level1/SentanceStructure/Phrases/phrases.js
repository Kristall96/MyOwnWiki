let phrasesQuiz = [
  {
    question: `Which part of the sentence is a phrase? "She walked to the store."`,
    options: {
      A: "She",
      B: "Walked to",
      C: "To the store",
      D: "Walked",
    },
    correctAnswer: "To the store",
    explanation: `"To the store" is a phrase because it is a group of words without a subject and predicate.`,
  },
  {
    question: `Identify the phrase in this sentence: "The book on the table is mine."`,
    options: {
      A: "The book",
      B: "On the table",
      C: "Is mine",
      D: "The table",
    },
    correctAnswer: "On the table",
    explanation: `"On the table" is a prepositional phrase because it describes the location without containing a subject and predicate.`,
  },
  {
    question: `Which of the following is a phrase?`,
    options: {
      A: "She sings",
      B: "During the night",
      C: "He runs fast",
      D: "They are laughing",
    },
    correctAnswer: "During the night",
    explanation: `"During the night" is a phrase because it is a group of words without a subject and predicate.`,
  },
  {
    question: `What is the phrase in this sentence: "We will meet after lunch."`,
    options: {
      A: "We will meet",
      B: "After lunch",
      C: "Will meet",
      D: "Lunch",
    },
    correctAnswer: "After lunch",
    explanation: `"After lunch" is a phrase because it indicates time without a subject and predicate.`,
  },
  {
    question: `Which part of the sentence is a phrase? "She opened the door with a key."`,
    options: {
      A: "She opened",
      B: "The door",
      C: "With a key",
      D: "Opened the door",
    },
    correctAnswer: "With a key",
    explanation: `"With a key" is a prepositional phrase because it describes how the action was performed without containing a subject and predicate.`,
  },
  {
    question: `Identify the phrase in this sentence: "Running through the park, she enjoyed the fresh air."`,
    options: {
      A: "Running through the park",
      B: "She enjoyed",
      C: "The fresh air",
      D: "Enjoyed the fresh air",
    },
    correctAnswer: "Running through the park",
    explanation: `"Running through the park" is a participial phrase because it describes an action without containing a subject and predicate.`,
  },
  {
    question: `Which of the following is a phrase?`,
    options: {
      A: "The cat slept",
      B: "Under the bed",
      C: "They were happy",
      D: "She reads books",
    },
    correctAnswer: "Under the bed",
    explanation: `"Under the bed" is a prepositional phrase because it describes a location without a subject and predicate.`,
  },
  {
    question: `What is the phrase in this sentence: "She left in a hurry."`,
    options: {
      A: "She left",
      B: "In a hurry",
      C: "Left in",
      D: "A hurry",
    },
    correctAnswer: "In a hurry",
    explanation: `"In a hurry" is a phrase because it describes how the action was performed without a subject and predicate.`,
  },
  {
    question: `Which part of the sentence is a phrase? "The car parked near the entrance."`,
    options: {
      A: "The car",
      B: "Parked near",
      C: "Near the entrance",
      D: "Parked near the entrance",
    },
    correctAnswer: "Near the entrance",
    explanation: `"Near the entrance" is a prepositional phrase because it describes the location without containing a subject and predicate.`,
  },
  {
    question: `Identify the phrase in this sentence: "With great excitement, she opened the gift."`,
    options: {
      A: "With great excitement",
      B: "She opened",
      C: "The gift",
      D: "Opened the gift",
    },
    correctAnswer: "With great excitement",
    explanation: `"With great excitement" is a phrase because it describes the manner of the action without a subject and predicate.`,
  },
  {
    question: `Which of the following is a prepositional phrase?`,
    options: {
      A: "She walked home",
      B: "They laughed together",
      C: "After the movie",
      D: "He cooked dinner",
    },
    correctAnswer: "After the movie",
    explanation: `"After the movie" is a prepositional phrase because it indicates time without a subject and predicate.`,
  },
  {
    question: `What is the phrase in this sentence: "Sitting on the bench, he watched the sunset."`,
    options: {
      A: "Sitting on the bench",
      B: "He watched",
      C: "The sunset",
      D: "Watched the sunset",
    },
    correctAnswer: "Sitting on the bench",
    explanation: `"Sitting on the bench" is a participial phrase because it describes an action without a subject and predicate.`,
  },
  {
    question: `Which part of the sentence is a phrase? "She arrived before the meeting."`,
    options: {
      A: "She arrived",
      B: "Before the meeting",
      C: "Arrived before",
      D: "The meeting",
    },
    correctAnswer: "Before the meeting",
    explanation: `"Before the meeting" is a prepositional phrase because it indicates time without a subject and predicate.`,
  },
  {
    question: `Identify the phrase in this sentence: "He left without saying goodbye."`,
    options: {
      A: "He left",
      B: "Without saying goodbye",
      C: "Saying goodbye",
      D: "Left without",
    },
    correctAnswer: "Without saying goodbye",
    explanation: `"Without saying goodbye" is a prepositional phrase because it describes how the action was performed without a subject and predicate.`,
  },
  {
    question: `Which of the following is a noun phrase?`,
    options: {
      A: "The tall building",
      B: "They are leaving",
      C: "She sleeps",
      D: "It was raining",
    },
    correctAnswer: "The tall building",
    explanation: `"The tall building" is a noun phrase because it includes a noun and its modifiers without a predicate.`,
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

shuffle(phrasesQuiz);

// Display questions dynamically
function display_questions() {
  phrasesQuiz.forEach((element, index) => {
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
  let questions = phrasesQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  phrasesQuiz.forEach((element, index) => {
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
