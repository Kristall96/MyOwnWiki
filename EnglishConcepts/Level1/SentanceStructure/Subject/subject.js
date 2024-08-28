let subjectQuiz = [
  {
    question: `Which word is the subject in this sentence? "The cat chased the mouse."`,
    options: {
      A: "Chased",
      B: "Mouse",
      C: "The",
      D: "Cat",
    },
    correctAnswer: "Cat",
    explanation: `"Cat" is the subject because it is the person, place, thing, or idea doing the action.`,
  },
  {
    question: `Identify the subject in this sentence: "Sarah reads a book every night."`,
    options: {
      A: "Reads",
      B: "Book",
      C: "Sarah",
      D: "Night",
    },
    correctAnswer: "Sarah",
    explanation: `"Sarah" is the subject because she is the one doing the action.`,
  },
  {
    question: `Which of the following is the subject of this sentence? "The dog barked loudly."`,
    options: {
      A: "Dog",
      B: "Barked",
      C: "Loudly",
      D: "The",
    },
    correctAnswer: "Dog",
    explanation: `"Dog" is the subject because it is the one performing the action of barking.`,
  },
  {
    question: `What is the subject in this sentence: "The students studied for the test."`,
    options: {
      A: "Studied",
      B: "Test",
      C: "For",
      D: "Students",
    },
    correctAnswer: "Students",
    explanation: `"Students" is the subject because they are the ones performing the action of studying.`,
  },
  {
    question: `Which word is the subject in this sentence: "The cake was delicious."`,
    options: {
      A: "Cake",
      B: "Delicious",
      C: "Was",
      D: "The",
    },
    correctAnswer: "Cake",
    explanation: `"Cake" is the subject because it is being described.`,
  },
  {
    question: `Identify the subject in this sentence: "My friends and I went to the concert."`,
    options: {
      A: "Friends",
      B: "Went",
      C: "Concert",
      D: "I",
    },
    correctAnswer: "Friends and I",
    explanation: `"Friends and I" is the subject because they are the ones doing the action of going to the concert.`,
  },
  {
    question: `Which of the following is the subject of this sentence? "The sun rises in the east."`,
    options: {
      A: "Rises",
      B: "East",
      C: "Sun",
      D: "In",
    },
    correctAnswer: "Sun",
    explanation: `"Sun" is the subject because it is the one performing the action of rising.`,
  },
  {
    question: `What is the subject in this sentence: "The book on the table is mine."`,
    options: {
      A: "Book",
      B: "Table",
      C: "Mine",
      D: "Is",
    },
    correctAnswer: "Book",
    explanation: `"Book" is the subject because it is the one being referred to in the sentence.`,
  },
  {
    question: `Which word is the subject in this sentence: "John and Mary are going to the movies."`,
    options: {
      A: "John and Mary",
      B: "Going",
      C: "Movies",
      D: "To",
    },
    correctAnswer: "John and Mary",
    explanation: `"John and Mary" is the subject because they are the ones performing the action of going to the movies.`,
  },
  {
    question: `Identify the subject in this sentence: "The quick brown fox jumps over the lazy dog."`,
    options: {
      A: "Fox",
      B: "Dog",
      C: "Jumps",
      D: "Over",
    },
    correctAnswer: "Fox",
    explanation: `"Fox" is the subject because it is the one performing the action of jumping.`,
  },
  {
    question: `Which of the following is the subject of this sentence? "The car was parked outside."`,
    options: {
      A: "Parked",
      B: "Car",
      C: "Outside",
      D: "Was",
    },
    correctAnswer: "Car",
    explanation: `"Car" is the subject because it is the one being described.`,
  },
  {
    question: `What is the subject in this sentence: "The new restaurant opened last week."`,
    options: {
      A: "Restaurant",
      B: "New",
      C: "Opened",
      D: "Week",
    },
    correctAnswer: "Restaurant",
    explanation: `"Restaurant" is the subject because it is the one performing the action of opening.`,
  },
  {
    question: `Which word is the subject in this sentence: "The children played in the park."`,
    options: {
      A: "Children",
      B: "Played",
      C: "Park",
      D: "In",
    },
    correctAnswer: "Children",
    explanation: `"Children" is the subject because they are the ones performing the action of playing.`,
  },
  {
    question: `Identify the subject in this sentence: "The beautiful flowers bloomed in the garden."`,
    options: {
      A: "Flowers",
      B: "Bloomed",
      C: "Garden",
      D: "Beautiful",
    },
    correctAnswer: "Flowers",
    explanation: `"Flowers" is the subject because they are the ones performing the action of blooming.`,
  },
  {
    question: `Which of the following is the subject of this sentence? "The teacher gave a lesson to the class."`,
    options: {
      A: "Teacher",
      B: "Lesson",
      C: "Class",
      D: "Gave",
    },
    correctAnswer: "Teacher",
    explanation: `"Teacher" is the subject because they are the ones performing the action of giving a lesson.`,
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

shuffle(subjectQuiz);

// Display questions dynamically
function display_questions() {
  subjectQuiz.forEach((element, index) => {
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
  let questions = subjectQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  subjectQuiz.forEach((element, index) => {
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
