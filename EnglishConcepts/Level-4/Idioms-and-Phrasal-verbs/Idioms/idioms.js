let idiomsQuiz = [
  {
    question: "What does the idiom 'kick the bucket' mean?",
    options: {
      A: "To start a new project",
      B: "To die",
      C: "To win a prize",
      D: "To make a mistake",
    },
    correctAnswer: "B",
    explanation: "The idiom 'kick the bucket' means to die.",
  },
  {
    question: "What does the idiom 'break the ice' mean?",
    options: {
      A: "To start a conversation in a social setting",
      B: "To physically break ice",
      C: "To fail at something",
      D: "To delay a meeting",
    },
    correctAnswer: "A",
    explanation:
      "The idiom 'break the ice' means to initiate conversation and ease tension in social situations.",
  },
  {
    question: "What does the idiom 'let the cat out of the bag' mean?",
    options: {
      A: "To reveal a secret",
      B: "To clean a room",
      C: "To adopt a pet",
      D: "To start a new project",
    },
    correctAnswer: "A",
    explanation:
      "The idiom 'let the cat out of the bag' means to accidentally reveal a secret.",
  },
  {
    question: "What does the idiom 'hit the nail on the head' mean?",
    options: {
      A: "To achieve a goal",
      B: "To be very accurate or correct",
      C: "To start a new job",
      D: "To solve a puzzle",
    },
    correctAnswer: "B",
    explanation:
      "The idiom 'hit the nail on the head' means to be exactly right or correct about something.",
  },
  {
    question: "What does the idiom 'bite the bullet' mean?",
    options: {
      A: "To endure a painful or difficult situation",
      B: "To make a quick decision",
      C: "To refuse to participate",
      D: "To break a rule",
    },
    correctAnswer: "A",
    explanation:
      "The idiom 'bite the bullet' means to face a difficult or unpleasant situation with courage.",
  },
  {
    question: "What does the idiom 'a blessing in disguise' mean?",
    options: {
      A: "An unexpected benefit or advantage",
      B: "A gift from someone special",
      C: "A bad situation that becomes worse",
      D: "A hidden danger",
    },
    correctAnswer: "A",
    explanation:
      "The idiom 'a blessing in disguise' means something that seems negative at first but turns out to be beneficial.",
  },
  {
    question: "What does the idiom 'spilling the beans' mean?",
    options: {
      A: "To make a mess",
      B: "To reveal confidential information",
      C: "To start a new business",
      D: "To finish a task",
    },
    correctAnswer: "B",
    explanation:
      "The idiom 'spilling the beans' means to disclose information that was meant to be kept secret.",
  },
  {
    question: "What does the idiom 'under the weather' mean?",
    options: {
      A: "Feeling ill or sick",
      B: "Experiencing bad weather",
      C: "Feeling confused or disoriented",
      D: "Being unprepared for an event",
    },
    correctAnswer: "A",
    explanation: "The idiom 'under the weather' means to feel unwell or sick.",
  },
  {
    question: "What does the idiom 'cost an arm and a leg' mean?",
    options: {
      A: "To be very expensive",
      B: "To be physically demanding",
      C: "To be worth a lot emotionally",
      D: "To require a lot of time",
    },
    correctAnswer: "A",
    explanation:
      "The idiom 'cost an arm and a leg' means something is very expensive.",
  },
  {
    question: "What does the idiom 'the ball is in your court' mean?",
    options: {
      A: "It's your turn to take action",
      B: "You need to improve your skills",
      C: "You are in charge of a project",
      D: "You should take a break",
    },
    correctAnswer: "A",
    explanation:
      "The idiom 'the ball is in your court' means it is your responsibility to make the next decision or take action.",
  },
  {
    question: "What does the idiom 'burn the midnight oil' mean?",
    options: {
      A: "To work late into the night",
      B: "To waste time",
      C: "To celebrate something",
      D: "To destroy something quickly",
    },
    correctAnswer: "A",
    explanation:
      "The idiom 'burn the midnight oil' means to work late into the night.",
  },
  {
    question: "What does the idiom 'a piece of cake' mean?",
    options: {
      A: "Something very easy to do",
      B: "A delicious dessert",
      C: "A portion of work",
      D: "A small amount of money",
    },
    correctAnswer: "A",
    explanation:
      "The idiom 'a piece of cake' means something that is very easy to accomplish.",
  },
  {
    question: "What does the idiom 'throw in the towel' mean?",
    options: {
      A: "To give up or surrender",
      B: "To start a new activity",
      C: "To offer help",
      D: "To make a formal complaint",
    },
    correctAnswer: "A",
    explanation:
      "The idiom 'throw in the towel' means to give up or surrender, often after struggling.",
  },
  {
    question: "What does the idiom 'hit the jackpot' mean?",
    options: {
      A: "To win a large prize",
      B: "To start a new venture",
      C: "To encounter a problem",
      D: "To achieve a goal",
    },
    correctAnswer: "A",
    explanation:
      "The idiom 'hit the jackpot' means to win a large prize or achieve a significant success.",
  },
  {
    question: "What does the idiom 'cut to the chase' mean?",
    options: {
      A: "To skip to the important part",
      B: "To make a quick decision",
      C: "To start a conversation",
      D: "To finish something quickly",
    },
    correctAnswer: "A",
    explanation:
      "The idiom 'cut to the chase' means to skip to the main point or important part of a discussion.",
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

shuffle(idiomsQuiz);

// Display questions dynamically
function display_questions() {
  idiomsQuiz.forEach((element, index) => {
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
  let questions = idiomsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  idiomsQuiz.forEach((element, index) => {
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
