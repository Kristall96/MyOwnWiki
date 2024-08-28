let definiteArticleQuiz = [
  {
    question: `Identify the sentence that correctly uses the definite article.`,
    options: {
      A: "The book on the table is mine.",
      B: "A book on a table is mine.",
      C: "Books on tables are mine.",
      D: "Some book on some table is mine.",
    },
    correctAnswer: "The book on the table is mine.",
    explanation: `"The" specifies particular nouns, "book" and "table," indicating that specific items are being referred to.`,
  },
  {
    question: `Which sentence uses the definite article appropriately?`,
    options: {
      A: "The children are playing outside.",
      B: "Children are playing outside.",
      C: "Some children are playing outside.",
      D: "A child is playing outside.",
    },
    correctAnswer: "The children are playing outside.",
    explanation: `"The" specifies particular children, making the reference specific rather than general.`,
  },
  {
    question: `Select the sentence that uses the definite article correctly.`,
    options: {
      A: "I saw the movie you recommended.",
      B: "I saw a movie you recommended.",
      C: "I saw movies you recommended.",
      D: "I saw some movie you recommended.",
    },
    correctAnswer: "I saw the movie you recommended.",
    explanation: `"The" refers to a specific movie that was recommended, making it particular.`,
  },
  {
    question: `Which of these sentences correctly uses the definite article?`,
    options: {
      A: "The apple on the counter is red.",
      B: "An apple on a counter is red.",
      C: "Apples on counters are red.",
      D: "Some apple on some counter is red.",
    },
    correctAnswer: "The apple on the counter is red.",
    explanation: `"The" specifies a particular apple and counter, making the sentence specific.`,
  },
  {
    question: `Identify the sentence that uses the definite article correctly.`,
    options: {
      A: "The teacher explained the lesson.",
      B: "A teacher explained a lesson.",
      C: "Teachers explained lessons.",
      D: "Some teacher explained some lesson.",
    },
    correctAnswer: "The teacher explained the lesson.",
    explanation: `"The" refers to a specific teacher and lesson, indicating particular entities.`,
  },
  {
    question: `Which sentence uses the definite article correctly?`,
    options: {
      A: "The sun is shining brightly today.",
      B: "Sun is shining brightly today.",
      C: "Some sun is shining brightly today.",
      D: "A sun is shining brightly today.",
    },
    correctAnswer: "The sun is shining brightly today.",
    explanation: `"The" specifies a particular noun, "sun," which is unique and specific.`,
  },
  {
    question: `Choose the sentence that correctly uses the definite article.`,
    options: {
      A: "The dog barked all night.",
      B: "A dog barked all night.",
      C: "Dogs barked all night.",
      D: "Some dog barked all night.",
    },
    correctAnswer: "The dog barked all night.",
    explanation: `"The" specifies a particular dog, making the reference specific to that one dog.`,
  },
  {
    question: `Which sentence uses the definite article appropriately?`,
    options: {
      A: "I went to the park near my house.",
      B: "I went to a park near my house.",
      C: "I went to parks near my house.",
      D: "I went to some park near my house.",
    },
    correctAnswer: "I went to the park near my house.",
    explanation: `"The" refers to a specific park that is known to both the speaker and listener.`,
  },
  {
    question: `Identify the sentence that correctly uses the definite article.`,
    options: {
      A: "The flowers in the garden are beautiful.",
      B: "Flowers in a garden are beautiful.",
      C: "Some flowers in some garden are beautiful.",
      D: "A flower in a garden is beautiful.",
    },
    correctAnswer: "The flowers in the garden are beautiful.",
    explanation: `"The" specifies particular flowers and garden, making the reference specific.`,
  },
  {
    question: `Which of these sentences uses the definite article correctly?`,
    options: {
      A: "The phone is on the desk.",
      B: "A phone is on a desk.",
      C: "Phones are on desks.",
      D: "Some phone is on some desk.",
    },
    correctAnswer: "The phone is on the desk.",
    explanation: `"The" refers to a specific phone and desk, indicating exact items.`,
  },
  {
    question: `Select the sentence that uses the definite article correctly.`,
    options: {
      A: "I met the author of the book.",
      B: "I met an author of a book.",
      C: "I met authors of books.",
      D: "I met some author of some book.",
    },
    correctAnswer: "I met the author of the book.",
    explanation: `"The" specifies particular author and book, making the reference specific.`,
  },
  {
    question: `Which sentence uses the definite article appropriately?`,
    options: {
      A: "The computer is not working.",
      B: "A computer is not working.",
      C: "Computers are not working.",
      D: "Some computer is not working.",
    },
    correctAnswer: "The computer is not working.",
    explanation: `"The" refers to a specific computer, indicating which one is not working.`,
  },
  {
    question: `Identify the sentence with the correct use of the definite article.`,
    options: {
      A: "The window is open.",
      B: "A window is open.",
      C: "Windows are open.",
      D: "Some window is open.",
    },
    correctAnswer: "The window is open.",
    explanation: `"The" specifies a particular window, making it clear which window is open.`,
  },
  {
    question: `Which of the following sentences uses the definite article correctly?`,
    options: {
      A: "I enjoyed the concert last night.",
      B: "I enjoyed a concert last night.",
      C: "I enjoyed concerts last night.",
      D: "I enjoyed some concert last night.",
    },
    correctAnswer: "I enjoyed the concert last night.",
    explanation: `"The" refers to a specific concert, indicating which one was enjoyed.`,
  },
  {
    question: `Choose the sentence that uses the definite article correctly.`,
    options: {
      A: "The restaurant we went to was excellent.",
      B: "A restaurant we went to was excellent.",
      C: "Restaurants we went to were excellent.",
      D: "Some restaurant we went to was excellent.",
    },
    correctAnswer: "The restaurant we went to was excellent.",
    explanation: `"The" specifies a particular restaurant that is known to the speaker and listener.`,
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

shuffle(definiteArticleQuiz);

// Display questions dynamically
function display_questions() {
  definiteArticleQuiz.forEach((element, index) => {
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
  let questions = definiteArticleQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  definiteArticleQuiz.forEach((element, index) => {
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
