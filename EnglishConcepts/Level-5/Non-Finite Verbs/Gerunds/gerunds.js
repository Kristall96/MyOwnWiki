let gerundsQuiz = [
  {
    question: "Which sentence uses a gerund correctly?",
    options: {
      A: "She enjoys reading books.",
      B: "She enjoys read books.",
      C: "She enjoys to read books.",
      D: "She enjoys readed books.",
    },
    correctAnswer: "A",
    explanation:
      "The gerund 'reading' is used correctly after 'enjoys' to describe what she likes doing.",
  },
  {
    question: "Select the sentence where 'running' is used as a gerund:",
    options: {
      A: "Running helps to clear my mind.",
      B: "He is running in the park.",
      C: "Running faster is his goal.",
      D: "She runs every morning.",
    },
    correctAnswer: "A",
    explanation:
      "In this sentence, 'Running' is a gerund acting as the subject of the sentence.",
  },
  {
    question: "Which of the following contains a gerund phrase?",
    options: {
      A: "Reading books in the evening is relaxing.",
      B: "I read books in the evening.",
      C: "I have read many books.",
      D: "Books are relaxing to read.",
    },
    correctAnswer: "A",
    explanation:
      "The gerund phrase is 'Reading books in the evening,' where 'Reading' is the gerund followed by the rest of the phrase.",
  },
  {
    question: "Choose the sentence where the gerund is used as an object:",
    options: {
      A: "They discussed going to the new restaurant.",
      B: "They discussed go to the new restaurant.",
      C: "They discuss to go to the new restaurant.",
      D: "They discusses going to the new restaurant.",
    },
    correctAnswer: "A",
    explanation:
      "In this sentence, 'going' is the gerund used as the object of the verb 'discussed.'",
  },
  {
    question: "Which sentence contains a gerund used as a subject?",
    options: {
      A: "Skiing is a popular winter sport.",
      B: "He enjoys skiing on the weekends.",
      C: "She is skiing right now.",
      D: "They are skiing in the snow.",
    },
    correctAnswer: "A",
    explanation: "The gerund 'Skiing' is used as the subject of the sentence.",
  },
  {
    question: "Select the correct usage of a gerund in this sentence:",
    options: {
      A: "His favorite hobby is painting landscapes.",
      B: "His favorite hobby is paint landscapes.",
      C: "His favorite hobby is to paint landscapes.",
      D: "His favorite hobby is painted landscapes.",
    },
    correctAnswer: "A",
    explanation:
      "The gerund 'painting' is used correctly after 'is' to describe his favorite hobby.",
  },
  {
    question: "Which of these sentences includes a gerund phrase as an object?",
    options: {
      A: "I look forward to meeting you.",
      B: "I look forward to meet you.",
      C: "I look forward meet you.",
      D: "I look forward met you.",
    },
    correctAnswer: "A",
    explanation:
      "The gerund phrase 'to meeting you' acts as the object of the verb 'look forward to.'",
  },
  {
    question:
      "Identify the gerund in this sentence: 'Her hobbies include gardening and cooking.'",
    options: {
      A: "Gardening",
      B: "Cooking",
      C: "Include",
      D: "Hobbies",
    },
    correctAnswer: "A",
    explanation:
      "Both 'gardening' and 'cooking' are gerunds used as objects of the verb 'include.'",
  },
  {
    question: "Which sentence uses a gerund as part of a compound subject?",
    options: {
      A: "Running and swimming are great exercises.",
      B: "Running and swim are great exercises.",
      C: "Run and swimming are great exercises.",
      D: "Running and swam are great exercises.",
    },
    correctAnswer: "A",
    explanation:
      "In this sentence, 'Running and swimming' are gerunds used together as a compound subject.",
  },
  {
    question: "Choose the correct gerund use in this sentence:",
    options: {
      A: "I dislike waiting in long lines.",
      B: "I dislike wait in long lines.",
      C: "I dislike waited in long lines.",
      D: "I dislikes waiting in long lines.",
    },
    correctAnswer: "A",
    explanation:
      "The gerund 'waiting' is used correctly after 'dislike' to indicate what is disliked.",
  },
  {
    question:
      "Identify the gerund phrase in the sentence: 'Swimming in the lake is refreshing.'",
    options: {
      A: "Swimming in the lake",
      B: "Is refreshing",
      C: "In the lake",
      D: "Refreshing",
    },
    correctAnswer: "A",
    explanation:
      "The gerund phrase 'Swimming in the lake' functions as the subject of the sentence.",
  },
  {
    question: "Which sentence contains a gerund used as a subject complement?",
    options: {
      A: "Her favorite activity is baking.",
      B: "Her favorite activity bakes.",
      C: "Her favorite activity bake.",
      D: "Her favorite activity is baked.",
    },
    correctAnswer: "A",
    explanation:
      "The gerund 'baking' acts as the subject complement after 'is' in the sentence.",
  },
  {
    question:
      "Select the sentence where the gerund is used correctly after a preposition:",
    options: {
      A: "He is interested in learning new languages.",
      B: "He is interested to learn new languages.",
      C: "He is interested learn new languages.",
      D: "He is interested learned new languages.",
    },
    correctAnswer: "A",
    explanation:
      "The gerund 'learning' follows the preposition 'in' to indicate what he is interested in.",
  },
  {
    question:
      "Which of these sentences includes a gerund phrase as the direct object?",
    options: {
      A: "She enjoys painting landscapes.",
      B: "She enjoys paint landscapes.",
      C: "She enjoys painted landscapes.",
      D: "She enjoys to paint landscapes.",
    },
    correctAnswer: "A",
    explanation:
      "The gerund phrase 'painting landscapes' is used as the direct object of 'enjoys.'",
  },
  {
    question:
      "Identify the gerund in this sentence: 'Cooking requires patience.'",
    options: {
      A: "Cooking",
      B: "Requires",
      C: "Patience",
      D: "Requires patience",
    },
    correctAnswer: "A",
    explanation:
      "'Cooking' is the gerund functioning as the subject of the sentence.",
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

shuffle(gerundsQuiz);

// Display questions dynamically
function display_questions() {
  gerundsQuiz.forEach((element, index) => {
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
  let questions = gerundsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  gerundsQuiz.forEach((element, index) => {
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
