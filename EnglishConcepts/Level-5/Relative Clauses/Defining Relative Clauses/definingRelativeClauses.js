let definingRelativeClausesQuiz = [
  {
    question: "Which sentence contains a defining relative clause?",
    options: {
      A: "The teacher who gave the lecture is very knowledgeable.",
      B: "My brother, who is a doctor, lives in New York.",
      C: "The car, which is very old, needs repairs.",
      D: "The film, which was released last year, won an award.",
    },
    correctAnswer: "A",
    explanation:
      "The defining relative clause 'who gave the lecture' specifies which teacher is being referred to.",
  },
  {
    question:
      "Select the defining relative clause in the sentence: 'The house where I grew up is for sale.'",
    options: {
      A: "The house",
      B: "Where I grew up",
      C: "Is for sale",
      D: "The house where",
    },
    correctAnswer: "B",
    explanation:
      "The defining relative clause 'where I grew up' provides crucial information about the noun 'house.'",
  },
  {
    question:
      "Choose the sentence that uses a defining relative clause correctly:",
    options: {
      A: "The artist who painted this picture is famous.",
      B: "The artist, who painted this picture, is famous.",
      C: "The artist painting this picture is famous.",
      D: "The artist that painted this picture is famous.",
    },
    correctAnswer: "A",
    explanation:
      "The defining relative clause 'who painted this picture' tells us which artist is being referred to.",
  },
  {
    question:
      "Which sentence includes a defining relative clause modifying the noun 'students'?",
    options: {
      A: "The students who study hard usually get good grades.",
      B: "The students, who study hard, usually get good grades.",
      C: "The students studying hard usually get good grades.",
      D: "The students, studying hard, usually get good grades.",
    },
    correctAnswer: "A",
    explanation:
      "The defining relative clause 'who study hard' provides essential information about 'students.'",
  },
  {
    question:
      "Identify the defining relative clause in this sentence: 'The restaurant where we had dinner is closing down.'",
    options: {
      A: "The restaurant",
      B: "Where we had dinner",
      C: "Is closing down",
      D: "The restaurant where",
    },
    correctAnswer: "B",
    explanation:
      "The defining relative clause 'where we had dinner' tells us more about the restaurant.",
  },
  {
    question:
      "Which of the following sentences contains a defining relative clause?",
    options: {
      A: "The book which I borrowed is on the table.",
      B: "The book, which I borrowed, is on the table.",
      C: "The book that I borrowed is on the table.",
      D: "The book, that I borrowed, is on the table.",
    },
    correctAnswer: "C",
    explanation:
      "The defining relative clause 'that I borrowed' provides essential information about 'book.'",
  },
  {
    question:
      "Select the defining relative clause in the sentence: 'The car which broke down last night was towed away.'",
    options: {
      A: "The car",
      B: "Which broke down last night",
      C: "Was towed away",
      D: "The car which",
    },
    correctAnswer: "B",
    explanation:
      "The defining relative clause 'which broke down last night' specifies which car is being discussed.",
  },
  {
    question:
      "Which sentence uses a defining relative clause to provide essential information about 'the movie'?",
    options: {
      A: "The movie that won the award was excellent.",
      B: "The movie, which won the award, was excellent.",
      C: "The movie winning the award was excellent.",
      D: "The movie, winning the award, was excellent.",
    },
    correctAnswer: "A",
    explanation:
      "The defining relative clause 'that won the award' tells us which movie is being referred to.",
  },
  {
    question:
      "Choose the sentence that includes a defining relative clause modifying 'the city':",
    options: {
      A: "The city where I was born is beautiful.",
      B: "The city, where I was born, is beautiful.",
      C: "The city born where I am is beautiful.",
      D: "The city being born is beautiful.",
    },
    correctAnswer: "A",
    explanation:
      "The defining relative clause 'where I was born' provides crucial information about 'the city.'",
  },
  {
    question:
      "Identify the defining relative clause in the sentence: 'The person who called me yesterday is my friend.'",
    options: {
      A: "The person",
      B: "Who called me yesterday",
      C: "Is my friend",
      D: "The person who",
    },
    correctAnswer: "B",
    explanation:
      "The defining relative clause 'who called me yesterday' specifies which person is being talked about.",
  },
  {
    question:
      "Which sentence contains a defining relative clause that modifies 'the novel'?",
    options: {
      A: "The novel that she wrote is being adapted into a film.",
      B: "The novel, which she wrote, is being adapted into a film.",
      C: "The novel writing she is adapted into a film.",
      D: "The novel, writing she is being adapted into a film.",
    },
    correctAnswer: "A",
    explanation:
      "The defining relative clause 'that she wrote' tells us which novel is being referred to.",
  },
  {
    question:
      "Choose the sentence where the defining relative clause is correctly used:",
    options: {
      A: "The company that he works for is expanding.",
      B: "The company, that he works for, is expanding.",
      C: "The company working for he is expanding.",
      D: "The company, working for he is expanding.",
    },
    correctAnswer: "A",
    explanation:
      "The defining relative clause 'that he works for' provides essential information about the company.",
  },
  {
    question:
      "Which of these sentences includes a defining relative clause modifying 'the book'?",
    options: {
      A: "The book which you recommended is on the shelf.",
      B: "The book, which you recommended, is on the shelf.",
      C: "The book recommending you is on the shelf.",
      D: "The book, recommending you is on the shelf.",
    },
    correctAnswer: "A",
    explanation:
      "The defining relative clause 'which you recommended' specifies which book is being discussed.",
  },
  {
    question:
      "Identify the defining relative clause in the sentence: 'The musician who played at the concert is my cousin.'",
    options: {
      A: "The musician",
      B: "Who played at the concert",
      C: "Is my cousin",
      D: "The musician who",
    },
    correctAnswer: "B",
    explanation:
      "The defining relative clause 'who played at the concert' provides crucial information about 'the musician.'",
  },
  {
    question: "Which sentence contains a defining relative clause?",
    options: {
      A: "The restaurant that we visited was amazing.",
      B: "The restaurant, which we visited, was amazing.",
      C: "The restaurant visiting we was amazing.",
      D: "The restaurant, visiting we was amazing.",
    },
    correctAnswer: "A",
    explanation:
      "The defining relative clause 'that we visited' specifies which restaurant is being referred to.",
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

shuffle(definingRelativeClausesQuiz);

// Display questions dynamically
function display_questions() {
  definingRelativeClausesQuiz.forEach((element, index) => {
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
  let questions = definingRelativeClausesQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  definingRelativeClausesQuiz.forEach((element, index) => {
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
