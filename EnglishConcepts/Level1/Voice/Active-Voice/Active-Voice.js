let activeVoiceQuiz = [
  {
    question: `Which sentence is in the active voice?`,
    options: {
      A: "The ball was kicked by John.",
      B: "John kicked the ball.",
      C: "The ball was being kicked.",
      D: "The ball is kicked.",
    },
    correctAnswer: "John kicked the ball.",
    explanation: `"John kicked the ball" is in the active voice because the subject (John) performs the action of kicking the ball.`,
  },
  {
    question: `Identify the sentence that correctly uses the active voice.`,
    options: {
      A: "The homework was completed by the student.",
      B: "The student completed the homework.",
      C: "The homework is being completed.",
      D: "The homework has been completed.",
    },
    correctAnswer: "The student completed the homework.",
    explanation: `"The student completed the homework" is in the active voice because the subject (the student) performs the action of completing the homework.`,
  },
  {
    question: `Which of the following sentences is in the active voice?`,
    options: {
      A: "The cake was baked by her.",
      B: "She baked the cake.",
      C: "The cake is being baked.",
      D: "The cake will be baked.",
    },
    correctAnswer: "She baked the cake.",
    explanation: `"She baked the cake" is in the active voice because the subject (she) performs the action of baking the cake.`,
  },
  {
    question: `What is the correct active voice form of this sentence? "The letter was written by him."`,
    options: {
      A: "He wrote the letter.",
      B: "The letter was written.",
      C: "The letter has been written.",
      D: "The letter is being written.",
    },
    correctAnswer: "He wrote the letter.",
    explanation: `"He wrote the letter" is the correct active voice form because the subject (he) performs the action of writing the letter.`,
  },
  {
    question: `Which sentence uses the active voice correctly?`,
    options: {
      A: "The song was sung by the choir.",
      B: "The choir sang the song.",
      C: "The song is being sung.",
      D: "The song has been sung.",
    },
    correctAnswer: "The choir sang the song.",
    explanation: `"The choir sang the song" is in the active voice because the subject (the choir) performs the action of singing the song.`,
  },
  {
    question: `Identify the active voice form of this sentence: "The meeting was organized by the team."`,
    options: {
      A: "The team organized the meeting.",
      B: "The meeting was organized.",
      C: "The meeting has been organized.",
      D: "The meeting is being organized.",
    },
    correctAnswer: "The team organized the meeting.",
    explanation: `"The team organized the meeting" is in the active voice because the subject (the team) performs the action of organizing the meeting.`,
  },
  {
    question: `Which of the following sentences is in the active voice?`,
    options: {
      A: "The book was read by the students.",
      B: "The students read the book.",
      C: "The book is being read.",
      D: "The book has been read.",
    },
    correctAnswer: "The students read the book.",
    explanation: `"The students read the book" is in the active voice because the subject (the students) performs the action of reading the book.`,
  },
  {
    question: `What is the correct active voice form of this sentence? "The house was built by the workers."`,
    options: {
      A: "The workers built the house.",
      B: "The house was built.",
      C: "The house has been built.",
      D: "The house is being built.",
    },
    correctAnswer: "The workers built the house.",
    explanation: `"The workers built the house" is in the active voice because the subject (the workers) performs the action of building the house.`,
  },
  {
    question: `Which sentence uses the active voice correctly?`,
    options: {
      A: "The project was completed by the team.",
      B: "The team completed the project.",
      C: "The project is being completed.",
      D: "The project has been completed.",
    },
    correctAnswer: "The team completed the project.",
    explanation: `"The team completed the project" is in the active voice because the subject (the team) performs the action of completing the project.`,
  },
  {
    question: `Identify the active voice form of this sentence: "The presentation was given by the speaker."`,
    options: {
      A: "The speaker gave the presentation.",
      B: "The presentation was given.",
      C: "The presentation has been given.",
      D: "The presentation is being given.",
    },
    correctAnswer: "The speaker gave the presentation.",
    explanation: `"The speaker gave the presentation" is in the active voice because the subject (the speaker) performs the action of giving the presentation.`,
  },
  {
    question: `Which of the following sentences is in the active voice?`,
    options: {
      A: "The meal was cooked by the chef.",
      B: "The chef cooked the meal.",
      C: "The meal is being cooked.",
      D: "The meal has been cooked.",
    },
    correctAnswer: "The chef cooked the meal.",
    explanation: `"The chef cooked the meal" is in the active voice because the subject (the chef) performs the action of cooking the meal.`,
  },
  {
    question: `What is the correct active voice form of this sentence? "The car was repaired by the mechanic."`,
    options: {
      A: "The mechanic repaired the car.",
      B: "The car was repaired.",
      C: "The car has been repaired.",
      D: "The car is being repaired.",
    },
    correctAnswer: "The mechanic repaired the car.",
    explanation: `"The mechanic repaired the car" is in the active voice because the subject (the mechanic) performs the action of repairing the car.`,
  },
  {
    question: `Which sentence uses the active voice correctly?`,
    options: {
      A: "The essay was written by the student.",
      B: "The student wrote the essay.",
      C: "The essay is being written.",
      D: "The essay has been written.",
    },
    correctAnswer: "The student wrote the essay.",
    explanation: `"The student wrote the essay" is in the active voice because the subject (the student) performs the action of writing the essay.`,
  },
  {
    question: `Identify the active voice form of this sentence: "The show was watched by the audience."`,
    options: {
      A: "The audience watched the show.",
      B: "The show was watched.",
      C: "The show has been watched.",
      D: "The show is being watched.",
    },
    correctAnswer: "The audience watched the show.",
    explanation: `"The audience watched the show" is in the active voice because the subject (the audience) performs the action of watching the show.`,
  },
  {
    question: `Which of the following sentences is in the active voice?`,
    options: {
      A: "The movie was directed by the filmmaker.",
      B: "The filmmaker directed the movie.",
      C: "The movie is being directed.",
      D: "The movie has been directed.",
    },
    correctAnswer: "The filmmaker directed the movie.",
    explanation: `"The filmmaker directed the movie" is in the active voice because the subject (the filmmaker) performs the action of directing the movie.`,
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

shuffle(activeVoiceQuiz);

// Display questions dynamically
function display_questions() {
  activeVoiceQuiz.forEach((element, index) => {
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
  let questions = activeVoiceQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  activeVoiceQuiz.forEach((element, index) => {
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
