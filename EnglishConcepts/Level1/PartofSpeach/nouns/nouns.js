let nounsQuiz = [
  {
    question: `Which word in this sentence is a noun? "The teacher explained the lesson."`,
    options: {
      A: "Explained",
      B: "Teacher",
      C: "The",
      D: "Lesson",
    },
    correctAnswer: "Teacher",
    explanation: `"Teacher" is a noun because it represents a person who performs a specific role.`,
  },
  {
    question: `Identify the noun in the following sentence: "The city was bustling with activity."`,
    options: {
      A: "City",
      B: "Was",
      C: "With",
      D: "Activity",
    },
    correctAnswer: "City",
    explanation: `"City" is a noun because it refers to a place.`,
  },
  {
    question: `Which of the following is a noun?`,
    options: {
      A: "Beautiful",
      B: "Running",
      C: "Happiness",
      D: "Quickly",
    },
    correctAnswer: "Happiness",
    explanation: `"Happiness" is a noun because it represents an idea or state of being.`,
  },
  {
    question: `Which word in the sentence is a noun? "She bought a new car."`,
    options: {
      A: "Bought",
      B: "New",
      C: "Car",
      D: "She",
    },
    correctAnswer: "Car",
    explanation: `"Car" is a noun because it represents a physical object, a thing.`,
  },
  {
    question: `Identify the noun in this sentence: "Love conquers all."`,
    options: {
      A: "Conquers",
      B: "All",
      C: "Love",
      D: "The",
    },
    correctAnswer: "Love",
    explanation: `"Love" is a noun because it represents an abstract idea or concept.`,
  },
  {
    question: `Which word is a noun in the sentence: "The park is full of trees."`,
    options: {
      A: "Full",
      B: "Is",
      C: "Park",
      D: "Of",
    },
    correctAnswer: "Park",
    explanation: `"Park" is a noun because it refers to a place.`,
  },
  {
    question: `Which of the following is a noun that refers to a thing?`,
    options: {
      A: "Apple",
      B: "Quick",
      C: "Running",
      D: "Bright",
    },
    correctAnswer: "Apple",
    explanation: `"Apple" is a noun because it is a tangible object, a thing.`,
  },
  {
    question: `In the sentence "The artist created a masterpiece," which word is a noun?`,
    options: {
      A: "Created",
      B: "Artist",
      C: "A",
      D: "Masterpiece",
    },
    correctAnswer: "Artist",
    explanation: `"Artist" is a noun because it represents a person.`,
  },
  {
    question: `Which of the following is a proper noun?`,
    options: {
      A: "Book",
      B: "City",
      C: "New York",
      D: "Dog",
    },
    correctAnswer: "New York",
    explanation: `"New York" is a proper noun because it refers to a specific place and is capitalized.`,
  },
  {
    question: `Which word in the sentence is a noun? "She found peace in the quiet forest."`,
    options: {
      A: "Found",
      B: "Peace",
      C: "Quiet",
      D: "In",
    },
    correctAnswer: "Peace",
    explanation: `"Peace" is a noun because it represents an abstract concept or idea.`,
  },
  {
    question: `Which noun in this sentence refers to a person? "The firefighter rescued the kitten from the tree."`,
    options: {
      A: "Firefighter",
      B: "Kitten",
      C: "Tree",
      D: "Rescued",
    },
    correctAnswer: "Firefighter",
    explanation: `"Firefighter" is a noun because it refers to a person who performs a specific job.`,
  },
  {
    question: `Identify the abstract noun in this sentence: "Her courage inspired everyone."`,
    options: {
      A: "Her",
      B: "Courage",
      C: "Inspired",
      D: "Everyone",
    },
    correctAnswer: "Courage",
    explanation: `"Courage" is an abstract noun because it represents a quality or concept that cannot be physically touched.`,
  },
  {
    question: `Which of the following words is a concrete noun?`,
    options: {
      A: "Hope",
      B: "Happiness",
      C: "Book",
      D: "Idea",
    },
    correctAnswer: "Book",
    explanation: `"Book" is a concrete noun because it refers to a physical object that can be perceived by the senses.`,
  },
  {
    question: `What is the plural noun in this sentence: "The students gathered in the hall for an assembly."`,
    options: {
      A: "Students",
      B: "Hall",
      C: "Assembly",
      D: "Gathered",
    },
    correctAnswer: "Students",
    explanation: `"Students" is a plural noun because it refers to more than one person.`,
  },
  {
    question: `Which of the following is a collective noun?`,
    options: {
      A: "Flock",
      B: "Child",
      C: "Tree",
      D: "Mountain",
    },
    correctAnswer: "Flock",
    explanation: `"Flock" is a collective noun because it refers to a group of birds considered as a single unit.`,
  },
];

let quiz_container = document.getElementById("quizContainer");
let result_div = document.getElementById("result");
let result_container = document.getElementById("resultText"); // Ensures this targets the correct ID
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

shuffle(nounsQuiz);

// Display questions dynamically
function display_questions() {
  nounsQuiz.forEach((element, index) => {
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
  let questions = nounsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  nounsQuiz.forEach((element, index) => {
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
