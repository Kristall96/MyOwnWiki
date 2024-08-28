let pronounsQuiz = [
  {
    question: `Which word in this sentence is a pronoun? "She went to the store."`,
    options: {
      A: "Went",
      B: "Store",
      C: "She",
      D: "To",
    },
    correctAnswer: "She",
    explanation: `"She" is a pronoun because it replaces the name of a person.`,
  },
  {
    question: `Identify the pronoun in this sentence: "They are planning a trip."`,
    options: {
      A: "Are",
      B: "They",
      C: "Planning",
      D: "Trip",
    },
    correctAnswer: "They",
    explanation: `"They" is a pronoun because it replaces the names of people or a group of individuals.`,
  },
  {
    question: `Which of the following is a pronoun?`,
    options: {
      A: "John",
      B: "Quickly",
      C: "Him",
      D: "Dog",
    },
    correctAnswer: "Him",
    explanation: `"Him" is a pronoun because it replaces a noun that refers to a male person.`,
  },
  {
    question: `What is the pronoun in this sentence: "We will help you with your project."`,
    options: {
      A: "We",
      B: "Help",
      C: "With",
      D: "Project",
    },
    correctAnswer: "We",
    explanation: `"We" is a pronoun because it refers to a group of people including the speaker.`,
  },
  {
    question: `Which word is a pronoun in this sentence: "The teacher gave him a book."`,
    options: {
      A: "Teacher",
      B: "Him",
      C: "Book",
      D: "Gave",
    },
    correctAnswer: "Him",
    explanation: `"Him" is a pronoun because it replaces a noun referring to a male person.`,
  },
  {
    question: `Identify the pronoun in this sentence: "She and I went to the park."`,
    options: {
      A: "Went",
      B: "Park",
      C: "She",
      D: "To",
    },
    correctAnswer: "She",
    explanation: `"She" is a pronoun because it replaces a noun referring to a female person.`,
  },
  {
    question: `Which of the following is a subject pronoun?`,
    options: {
      A: "Her",
      B: "Them",
      C: "I",
      D: "Their",
    },
    correctAnswer: "I",
    explanation: `"I" is a subject pronoun because it is used as the subject of a sentence.`,
  },
  {
    question: `Which pronoun correctly completes this sentence: "Tom and ___ are going to the movies."`,
    options: {
      A: "Him",
      B: "Me",
      C: "I",
      D: "They",
    },
    correctAnswer: "I",
    explanation: `"I" is the correct subject pronoun when used with "Tom" as the subject of the sentence.`,
  },
  {
    question: `In the sentence "The students completed their homework," which word is a pronoun?`,
    options: {
      A: "Students",
      B: "Completed",
      C: "Homework",
      D: "Their",
    },
    correctAnswer: "Their",
    explanation: `"Their" is a pronoun because it replaces a noun that shows possession or ownership.`,
  },
  {
    question: `Which of the following is a reflexive pronoun?`,
    options: {
      A: "Himself",
      B: "She",
      C: "They",
      D: "Us",
    },
    correctAnswer: "Himself",
    explanation: `"Himself" is a reflexive pronoun because it reflects back to the subject of the sentence.`,
  },
  {
    question: `Identify the object pronoun in this sentence: "The teacher called them after class."`,
    options: {
      A: "Teacher",
      B: "Called",
      C: "Them",
      D: "After",
    },
    correctAnswer: "Them",
    explanation: `"Them" is an object pronoun because it receives the action of the verb "called."`,
  },
  {
    question: `Which of the following is a demonstrative pronoun?`,
    options: {
      A: "This",
      B: "He",
      C: "We",
      D: "They",
    },
    correctAnswer: "This",
    explanation: `"This" is a demonstrative pronoun because it points to a specific object or person.`,
  },
  {
    question: `What is the pronoun in this sentence: "Everyone enjoyed the party."`,
    options: {
      A: "Everyone",
      B: "Enjoyed",
      C: "Party",
      D: "The",
    },
    correctAnswer: "Everyone",
    explanation: `"Everyone" is an indefinite pronoun because it refers to all people without specifying individuals.`,
  },
  {
    question: `Identify the possessive pronoun in this sentence: "That book is mine."`,
    options: {
      A: "That",
      B: "Book",
      C: "Is",
      D: "Mine",
    },
    correctAnswer: "Mine",
    explanation: `"Mine" is a possessive pronoun because it shows ownership of the book.`,
  },
  {
    question: `Which of the following sentences contains a relative pronoun?`,
    options: {
      A: "I know the person who called you.",
      B: "He is taller than me.",
      C: "They are going to the store.",
      D: "She smiled at him.",
    },
    correctAnswer: "I know the person who called you.",
    explanation: `"Who" is a relative pronoun because it introduces a clause that provides more information about the noun "person."`,
  },
];

// Getting references to elements
let quiz_container = document.getElementById("quizContainer");
let result_div = document.getElementById("result");
let result_container = document.getElementById("resultText"); // Ensure this targets the correct ID
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
shuffle(pronounsQuiz);

// Display questions dynamically
function display_questions() {
  pronounsQuiz.forEach((element, index) => {
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
  let questions = pronounsQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  pronounsQuiz.forEach((element, index) => {
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
