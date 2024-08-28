let apostrophesQuiz = [
  {
    question: `Which sentence correctly uses an apostrophe to show plural possession?`,
    options: {
      A: `The teachers' lounge is on the second floor.`,
      B: `The teacher's lounge is on the second floor.`,
      C: `The teachers lounge is on the second floor.`,
      D: `The teacher lounge's is on the second floor.`,
    },
    correctAnswer: `The teachers' lounge is on the second floor.`,
    explanation: `When showing possession for a plural noun ending in "s," the apostrophe is placed after the "s."`,
  },
  {
    question: `Identify the correct use of an apostrophe in a contraction.`,
    options: {
      A: `She's going to the store.`,
      B: `Shes going to the store.`,
      C: `She is going to the store.`,
      D: `She' going to the store.`,
    },
    correctAnswer: `She's going to the store.`,
    explanation: `The apostrophe in "She's" contracts "she is."`,
  },
  {
    question: `Which sentence shows the correct use of an apostrophe for showing possession?`,
    options: {
      A: `The dog's collar is red.`,
      B: `The dogs collar is red.`,
      C: `The dogs' collar is red.`,
      D: `The dog collar's is red.`,
    },
    correctAnswer: `The dog's collar is red.`,
    explanation: `The apostrophe in "dog's" shows that the collar belongs to the dog.`,
  },
  {
    question: `Choose the correct use of an apostrophe for a contraction.`,
    options: {
      A: `We can't wait for the weekend.`,
      B: `We cant wait for the weekend.`,
      C: `We can’t wait for the weekend.`,
      D: `We can' wait for the weekend.`,
    },
    correctAnswer: `We can't wait for the weekend.`,
    explanation: `The apostrophe in "can't" contracts "cannot."`,
  },
  {
    question: `Which sentence correctly uses an apostrophe to show possession for a singular noun?`,
    options: {
      A: `The child's toys are scattered.`,
      B: `The childs toys are scattered.`,
      C: `The childrens toys are scattered.`,
      D: `The child toys are scattered.`,
    },
    correctAnswer: `The child's toys are scattered.`,
    explanation: `The apostrophe in "child's" shows possession for a singular noun.`,
  },
  {
    question: `Identify the correct use of an apostrophe for a contraction.`,
    options: {
      A: `They’re going to the park.`,
      B: `Theyre going to the park.`,
      C: `They' re going to the park.`,
      D: `They are going to the park.`,
    },
    correctAnswer: `They’re going to the park.`,
    explanation: `The apostrophe in "They’re" contracts "They are."`,
  },
  {
    question: `Which sentence shows the correct use of an apostrophe to indicate possession?`,
    options: {
      A: `The women's meeting is at noon.`,
      B: `The womens meeting is at noon.`,
      C: `The womens' meeting is at noon.`,
      D: `The woman’s meeting is at noon.`,
    },
    correctAnswer: `The women's meeting is at noon.`,
    explanation: `The apostrophe in "women's" shows possession for a plural noun that is not simply pluralized with "s."`,
  },
  {
    question: `Choose the sentence that correctly uses an apostrophe for a contraction.`,
    options: {
      A: `He doesn't like spicy food.`,
      B: `He dont like spicy food.`,
      C: `He does'nt like spicy food.`,
      D: `He does'nt like spicy food.`,
    },
    correctAnswer: `He doesn't like spicy food.`,
    explanation: `The apostrophe in "doesn't" contracts "does not."`,
  },
  {
    question: `Which sentence correctly uses an apostrophe to show possession for a plural noun?`,
    options: {
      A: `The cats' toys are everywhere.`,
      B: `The cat's toys are everywhere.`,
      C: `The cats toys are everywhere.`,
      D: `The cat toys are everywhere.`,
    },
    correctAnswer: `The cats' toys are everywhere.`,
    explanation: `For plural nouns ending in "s," the apostrophe is placed after the "s" to show possession.`,
  },
  {
    question: `Identify the correct use of an apostrophe in the following sentence.`,
    options: {
      A: `The team's performance was excellent.`,
      B: `The teams performance was excellent.`,
      C: `The team performance's was excellent.`,
      D: `The teams' performance was excellent.`,
    },
    correctAnswer: `The team's performance was excellent.`,
    explanation: `The apostrophe in "team's" shows possession for a singular noun.`,
  },
  {
    question: `Which sentence uses an apostrophe correctly for a contraction?`,
    options: {
      A: `I’ll call you later.`,
      B: `Ill call you later.`,
      C: `I'l call you later.`,
      D: `I l'll call you later.`,
    },
    correctAnswer: `I’ll call you later.`,
    explanation: `The apostrophe in "I’ll" contracts "I will."`,
  },
  {
    question: `Which sentence correctly uses an apostrophe to show possession for a singular noun?`,
    options: {
      A: `The car's engine is loud.`,
      B: `The cars engine is loud.`,
      C: `The car engine's is loud.`,
      D: `The cars' engine is loud.`,
    },
    correctAnswer: `The car's engine is loud.`,
    explanation: `The apostrophe in "car's" shows possession for a singular noun.`,
  },
  {
    question: `Choose the correct sentence with an apostrophe indicating possession.`,
    options: {
      A: `The doctor's advice was helpful.`,
      B: `The doctors advice was helpful.`,
      C: `The doctors' advice was helpful.`,
      D: `The doctor advice's was helpful.`,
    },
    correctAnswer: `The doctor's advice was helpful.`,
    explanation: `The apostrophe in "doctor's" shows that the advice belongs to the doctor.`,
  },
  {
    question: `Which sentence uses an apostrophe correctly for a contraction?`,
    options: {
      A: `We’re going to the beach.`,
      B: `Were going to the beach.`,
      C: `We’ re going to the beach.`,
      D: `We’ re going to the beach.`,
    },
    correctAnswer: `We’re going to the beach.`,
    explanation: `The apostrophe in "We’re" contracts "We are."`,
  },
  {
    question: `Identify the sentence that correctly uses an apostrophe for a contraction.`,
    options: {
      A: `You’ll love this movie.`,
      B: `Youll love this movie.`,
      C: `Youl love this movie.`,
      D: `You' ll love this movie.`,
    },
    correctAnswer: `You’ll love this movie.`,
    explanation: `The apostrophe in "You’ll" contracts "You will."`,
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

shuffle(apostrophesQuiz);

// Display questions dynamically
function display_questions() {
  apostrophesQuiz.forEach((element, index) => {
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
  let questions = apostrophesQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  apostrophesQuiz.forEach((element, index) => {
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
