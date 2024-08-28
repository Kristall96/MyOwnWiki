let passiveVoiceQuiz = [
  {
    question: `Which sentence is in the passive voice?`,
    options: {
      A: "John kicked the ball.",
      B: "The ball was kicked by John.",
      C: "The ball kicks John.",
      D: "John is kicking the ball.",
    },
    correctAnswer: "The ball was kicked by John.",
    explanation: `"The ball was kicked by John" is in the passive voice because the subject (the ball) receives the action of being kicked by John.`,
  },
  {
    question: `Identify the sentence that correctly uses the passive voice.`,
    options: {
      A: "The student completed the homework.",
      B: "The homework was completed by the student.",
      C: "The student is completing the homework.",
      D: "The homework completes the student.",
    },
    correctAnswer: "The homework was completed by the student.",
    explanation: `"The homework was completed by the student" is in the passive voice because the subject (the homework) receives the action of being completed by the student.`,
  },
  {
    question: `Which of the following sentences is in the passive voice?`,
    options: {
      A: "She baked the cake.",
      B: "The cake was baked by her.",
      C: "The cake bakes her.",
      D: "She is baking the cake.",
    },
    correctAnswer: "The cake was baked by her.",
    explanation: `"The cake was baked by her" is in the passive voice because the subject (the cake) receives the action of being baked by her.`,
  },
  {
    question: `What is the correct passive voice form of this sentence? "He wrote the letter."`,
    options: {
      A: "The letter was written by him.",
      B: "The letter writes him.",
      C: "He is writing the letter.",
      D: "The letter is written by him.",
    },
    correctAnswer: "The letter was written by him.",
    explanation: `"The letter was written by him" is in the passive voice because the subject (the letter) receives the action of being written by him.`,
  },
  {
    question: `Which sentence uses the passive voice correctly?`,
    options: {
      A: "The choir sang the song.",
      B: "The song was sung by the choir.",
      C: "The song sings the choir.",
      D: "The choir is singing the song.",
    },
    correctAnswer: "The song was sung by the choir.",
    explanation: `"The song was sung by the choir" is in the passive voice because the subject (the song) receives the action of being sung by the choir.`,
  },
  {
    question: `Identify the passive voice form of this sentence: "The team organized the meeting."`,
    options: {
      A: "The meeting was organized by the team.",
      B: "The meeting organizes the team.",
      C: "The team is organizing the meeting.",
      D: "The meeting has been organized by the team.",
    },
    correctAnswer: "The meeting was organized by the team.",
    explanation: `"The meeting was organized by the team" is in the passive voice because the subject (the meeting) receives the action of being organized by the team.`,
  },
  {
    question: `Which of the following sentences is in the passive voice?`,
    options: {
      A: "The students read the book.",
      B: "The book was read by the students.",
      C: "The book reads the students.",
      D: "The students are reading the book.",
    },
    correctAnswer: "The book was read by the students.",
    explanation: `"The book was read by the students" is in the passive voice because the subject (the book) receives the action of being read by the students.`,
  },
  {
    question: `What is the correct passive voice form of this sentence? "The mechanic repaired the car."`,
    options: {
      A: "The car was repaired by the mechanic.",
      B: "The car repairs the mechanic.",
      C: "The mechanic is repairing the car.",
      D: "The car has been repaired by the mechanic.",
    },
    correctAnswer: "The car was repaired by the mechanic.",
    explanation: `"The car was repaired by the mechanic" is in the passive voice because the subject (the car) receives the action of being repaired by the mechanic.`,
  },
  {
    question: `Which sentence uses the passive voice correctly?`,
    options: {
      A: "The student wrote the essay.",
      B: "The essay was written by the student.",
      C: "The essay writes the student.",
      D: "The student is writing the essay.",
    },
    correctAnswer: "The essay was written by the student.",
    explanation: `"The essay was written by the student" is in the passive voice because the subject (the essay) receives the action of being written by the student.`,
  },
  {
    question: `Identify the passive voice form of this sentence: "The audience watched the show."`,
    options: {
      A: "The show was watched by the audience.",
      B: "The show watches the audience.",
      C: "The audience is watching the show.",
      D: "The show has been watched by the audience.",
    },
    correctAnswer: "The show was watched by the audience.",
    explanation: `"The show was watched by the audience" is in the passive voice because the subject (the show) receives the action of being watched by the audience.`,
  },
  {
    question: `Which of the following sentences is in the passive voice?`,
    options: {
      A: "The filmmaker directed the movie.",
      B: "The movie was directed by the filmmaker.",
      C: "The movie directs the filmmaker.",
      D: "The filmmaker is directing the movie.",
    },
    correctAnswer: "The movie was directed by the filmmaker.",
    explanation: `"The movie was directed by the filmmaker" is in the passive voice because the subject (the movie) receives the action of being directed by the filmmaker.`,
  },
  {
    question: `What is the correct passive voice form of this sentence? "The chef cooked the meal."`,
    options: {
      A: "The meal was cooked by the chef.",
      B: "The meal cooks the chef.",
      C: "The chef is cooking the meal.",
      D: "The meal has been cooked by the chef.",
    },
    correctAnswer: "The meal was cooked by the chef.",
    explanation: `"The meal was cooked by the chef" is in the passive voice because the subject (the meal) receives the action of being cooked by the chef.`,
  },
  {
    question: `Which sentence uses the passive voice correctly?`,
    options: {
      A: "The student solved the problem.",
      B: "The problem was solved by the student.",
      C: "The problem solves the student.",
      D: "The student is solving the problem.",
    },
    correctAnswer: "The problem was solved by the student.",
    explanation: `"The problem was solved by the student" is in the passive voice because the subject (the problem) receives the action of being solved by the student.`,
  },
  {
    question: `Identify the passive voice form of this sentence: "The teacher praised the student."`,
    options: {
      A: "The student was praised by the teacher.",
      B: "The student praises the teacher.",
      C: "The teacher is praising the student.",
      D: "The student has been praised by the teacher.",
    },
    correctAnswer: "The student was praised by the teacher.",
    explanation: `"The student was praised by the teacher" is in the passive voice because the subject (the student) receives the action of being praised by the teacher.`,
  },
  {
    question: `Which sentence is in the passive voice?`,
    options: {
      A: "The book was published by the author.",
      B: "The author published the book.",
      C: "The book publishes the author.",
      D: "The author is publishing the book.",
    },
    correctAnswer: "The book was published by the author.",
    explanation: `"The book was published by the author" is in the passive voice because the subject (the book) receives the action of being published by the author.`,
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

shuffle(passiveVoiceQuiz);

// Display questions dynamically
function display_questions() {
  passiveVoiceQuiz.forEach((element, index) => {
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
  let questions = passiveVoiceQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  passiveVoiceQuiz.forEach((element, index) => {
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
