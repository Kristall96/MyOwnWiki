let adjectivesQuiz = [
  {
    question: `Which word in this sentence is an adjective? "The blue car sped down the street."`,
    options: {
      A: "Car",
      B: "Sped",
      C: "Street",
      D: "Blue",
    },
    correctAnswer: "Blue",
    explanation: `"Blue" is an adjective because it describes the color of the car.`,
  },
  {
    question: `Identify the adjective in this sentence: "She wore a beautiful dress to the party."`,
    options: {
      A: "Dress",
      B: "Beautiful",
      C: "Party",
      D: "Wore",
    },
    correctAnswer: "Beautiful",
    explanation: `"Beautiful" is an adjective because it describes the appearance of the dress.`,
  },
  {
    question: `Which of the following is an adjective?`,
    options: {
      A: "Quickly",
      B: "Happiness",
      C: "Bright",
      D: "Jump",
    },
    correctAnswer: "Bright",
    explanation: `"Bright" is an adjective because it describes the intensity of light or color.`,
  },
  {
    question: `What is the adjective in this sentence: "The tall man reached the top shelf."`,
    options: {
      A: "Tall",
      B: "Man",
      C: "Reached",
      D: "Top",
    },
    correctAnswer: "Tall",
    explanation: `"Tall" is an adjective because it describes the height of the man.`,
  },
  {
    question: `Which word is an adjective in this sentence: "The cat has soft fur."`,
    options: {
      A: "Cat",
      B: "Has",
      C: "Fur",
      D: "Soft",
    },
    correctAnswer: "Soft",
    explanation: `"Soft" is an adjective because it describes the texture of the fur.`,
  },
  {
    question: `Identify the adjective in this sentence: "The movie was extremely boring."`,
    options: {
      A: "Movie",
      B: "Extremely",
      C: "Boring",
      D: "Was",
    },
    correctAnswer: "Boring",
    explanation: `"Boring" is an adjective because it describes the quality of the movie.`,
  },
  {
    question: `Which of the following is a comparative adjective?`,
    options: {
      A: "Biggest",
      B: "Bigger",
      C: "Big",
      D: "More Big",
    },
    correctAnswer: "Bigger",
    explanation: `"Bigger" is a comparative adjective because it compares the size of two or more things.`,
  },
  {
    question: `Which adjective correctly completes this sentence: "The weather today is ___ than yesterday."`,
    options: {
      A: "Good",
      B: "Better",
      C: "Best",
      D: "Bad",
    },
    correctAnswer: "Better",
    explanation: `"Better" is the correct comparative adjective when comparing today's weather to yesterday's.`,
  },
  {
    question: `In the sentence "The quick fox jumped over the lazy dog," which word is an adjective?`,
    options: {
      A: "Quick",
      B: "Fox",
      C: "Jumped",
      D: "Dog",
    },
    correctAnswer: "Quick",
    explanation: `"Quick" is an adjective because it describes the speed of the fox.`,
  },
  {
    question: `Which of the following is a superlative adjective?`,
    options: {
      A: "More",
      B: "Most",
      C: "Better",
      D: "Good",
    },
    correctAnswer: "Most",
    explanation: `"Most" is a superlative adjective because it indicates the highest degree of comparison.`,
  },
  {
    question: `Which word in this sentence is an adjective? "The small dog barked loudly."`,
    options: {
      A: "Small",
      B: "Dog",
      C: "Barked",
      D: "Loudly",
    },
    correctAnswer: "Small",
    explanation: `"Small" is an adjective because it describes the size of the dog.`,
  },
  {
    question: `Identify the adjective in this sentence: "She is wearing a red dress."`,
    options: {
      A: "Wearing",
      B: "Dress",
      C: "Red",
      D: "She",
    },
    correctAnswer: "Red",
    explanation: `"Red" is an adjective because it describes the color of the dress.`,
  },
  {
    question: `Which of the following is an adjective that describes a number?`,
    options: {
      A: "Seven",
      B: "Huge",
      C: "Happy",
      D: "Quickly",
    },
    correctAnswer: "Seven",
    explanation: `"Seven" is an adjective when it describes the number of items or people.`,
  },
  {
    question: `What is the adjective in this sentence: "The tasty pizza was eaten quickly."`,
    options: {
      A: "Pizza",
      B: "Quickly",
      C: "Eaten",
      D: "Tasty",
    },
    correctAnswer: "Tasty",
    explanation: `"Tasty" is an adjective because it describes the flavor of the pizza.`,
  },
  {
    question: `Which word is an adjective in this sentence: "The beautiful sunset took our breath away."`,
    options: {
      A: "Beautiful",
      B: "Sunset",
      C: "Took",
      D: "Away",
    },
    correctAnswer: "Beautiful",
    explanation: `"Beautiful" is an adjective because it describes the appearance of the sunset.`,
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

shuffle(adjectivesQuiz);

// Display questions dynamically
function display_questions() {
  adjectivesQuiz.forEach((element, index) => {
    let questionNumber = index + 1;
    let question_div = document.createElement("div");
    question_div.id = "questionsDiv";
    question_div.setAttribute("tabindex", "-1"); // Prevent focus

    question_div.innerHTML = `<h2 id="questionNumberAndQuestion">${questionNumber}. ${element.question}</h2>`;

    quiz_container.appendChild(question_div);
    let options_div = document.createElement("div");
    options_div.id = "optionsDiv";
    options_div.setAttribute("tabindex", "-1"); // Prevent focus

    for (const [key, value] of Object.entries(element.options)) {
      let options_inner_div = document.createElement("div");
      options_inner_div.id = "optionsInnerDiv";
      options_inner_div.setAttribute("tabindex", "-1"); // Prevent focus

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
submit_quiz.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Scroll to keep the viewport in place
  window.scrollTo({
    top: window.scrollY,
    behavior: "smooth",
  });

  // Blur all active elements to ensure none of them cause scrolling
  document.activeElement.blur();

  // Blur the submit button as well
  submit_quiz.blur();

  let score = 0;
  let questions = adjectivesQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  adjectivesQuiz.forEach((element, index) => {
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
