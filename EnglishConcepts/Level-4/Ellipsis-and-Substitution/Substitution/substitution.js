let substitutionQuiz = [
  {
    question:
      "In 'John loves pizza, but Mary prefers pasta,' what does 'pasta' substitute for?",
    options: {
      A: "Pizza",
      B: "John",
      C: "Mary",
      D: "Food",
    },
    correctAnswer: "D",
    explanation:
      "'Pasta' substitutes for 'pizza' in the context of preferred food.",
  },
  {
    question:
      "In the sentence 'I have three apples and she has two more,' what does 'more' replace?",
    options: {
      A: "Apples",
      B: "Three",
      C: "Two",
      D: "She",
    },
    correctAnswer: "A",
    explanation:
      "'More' substitutes for 'apples' to indicate additional quantity.",
  },
  {
    question:
      "What does 'this' replace in the sentence 'The book is interesting. This is why I read it.'?",
    options: {
      A: "Book",
      B: "Interesting",
      C: "I",
      D: "Read",
    },
    correctAnswer: "A",
    explanation:
      "'This' substitutes for 'book' to refer back to the previously mentioned item.",
  },
  {
    question:
      "In 'The dog barked loudly, and it scared the cat,' what does 'it' substitute for?",
    options: {
      A: "Dog",
      B: "Bark",
      C: "Sound",
      D: "Cat",
    },
    correctAnswer: "C",
    explanation:
      "'It' substitutes for the sound of the barking, which scared the cat.",
  },
  {
    question:
      "What does 'their' replace in 'Tom and Jerry have a big house. Their house is beautiful.'?",
    options: {
      A: "Tom and Jerry",
      B: "House",
      C: "Big",
      D: "Beautiful",
    },
    correctAnswer: "B",
    explanation: "'Their' substitutes for 'house' to avoid repeating the noun.",
  },
  {
    question:
      "In the sentence 'I like apples, and so does she,' what does 'so' refer to?",
    options: {
      A: "Apples",
      B: "Like",
      C: "I",
      D: "She",
    },
    correctAnswer: "B",
    explanation:
      "'So' refers to the action 'like' in the context of what both people enjoy.",
  },
  {
    question:
      "What does 'they' replace in the sentence 'My friends went to the cinema. They enjoyed the movie.'?",
    options: {
      A: "Cinema",
      B: "Friends",
      C: "Movie",
      D: "Enjoyed",
    },
    correctAnswer: "B",
    explanation: "'They' substitutes for 'friends' to avoid repetition.",
  },
  {
    question:
      "In 'She wore a red dress and I wore a blue one,' what does 'one' replace?",
    options: {
      A: "Dress",
      B: "Red",
      C: "Blue",
      D: "Wore",
    },
    correctAnswer: "A",
    explanation: "'One' substitutes for 'dress' to avoid repeating the noun.",
  },
  {
    question:
      "What does 'us' replace in 'She invited me and my brother to her party. She invited us over.'?",
    options: {
      A: "Party",
      B: "Brother",
      C: "She",
      D: "Me and my brother",
    },
    correctAnswer: "D",
    explanation:
      "'Us' substitutes for 'me and my brother' to avoid repetition.",
  },
  {
    question:
      "In the sentence 'The teacher asked the students to write a paper. The teacher expects it by Friday,' what does 'it' substitute for?",
    options: {
      A: "Students",
      B: "Paper",
      C: "Friday",
      D: "Asked",
    },
    correctAnswer: "B",
    explanation: "'It' substitutes for 'paper' to avoid repeating the noun.",
  },
  {
    question:
      "What does 'his' replace in 'John forgot his keys at home. He needs them urgently.'?",
    options: {
      A: "John",
      B: "Keys",
      C: "Home",
      D: "He",
    },
    correctAnswer: "B",
    explanation: "'His' substitutes for 'keys' to avoid repetition.",
  },
  {
    question:
      "In 'The cat slept on the couch. It was very comfortable,' what does 'It' refer to?",
    options: {
      A: "Cat",
      B: "Couch",
      C: "Sleep",
      D: "Comfortable",
    },
    correctAnswer: "B",
    explanation: "'It' refers to 'couch,' which was described as comfortable.",
  },
  {
    question:
      "What does 'some' replace in 'I bought several books. Some are for my friends.'?",
    options: {
      A: "Books",
      B: "Friends",
      C: "Bought",
      D: "Several",
    },
    correctAnswer: "A",
    explanation: "'Some' substitutes for 'books' to avoid repetition.",
  },
  {
    question:
      "In 'They went to the museum, and we followed them later,' what does 'them' refer to?",
    options: {
      A: "Museum",
      B: "We",
      C: "They",
      D: "Followed",
    },
    correctAnswer: "C",
    explanation: "'Them' substitutes for 'they' to avoid repetition.",
  },
  {
    question:
      "What does 'that' replace in 'I need a pen. Do you have one of that kind?'",
    options: {
      A: "Pen",
      B: "Kind",
      C: "Need",
      D: "Have",
    },
    correctAnswer: "A",
    explanation:
      "'That' replaces 'pen' to avoid repetition in specifying the type.",
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

shuffle(substitutionQuiz);

// Display questions dynamically
function display_questions() {
  substitutionQuiz.forEach((element, index) => {
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
  let questions = substitutionQuiz.length;
  result_container.innerHTML = ""; // Clear previous results

  substitutionQuiz.forEach((element, index) => {
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
