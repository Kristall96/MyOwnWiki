document.addEventListener("DOMContentLoaded", function () {
  // Function to toggle submenus
  document.getElementById("css-btn").addEventListener("click", function () {
    const submenu = this.nextElementSibling;
    this.parentElement.classList.toggle("active");

    // Optionally, close other open dropdowns
    closeOtherDropdowns(this.parentElement);
  });

  function closeOtherDropdowns(currentDropdown) {
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((item) => {
      if (item !== currentDropdown) {
        item.classList.remove("active");
      }
    });
  }

  // Function to toggle the theme
  function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-mode");

    // Save the current theme to localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
      document.getElementById("toggle-theme").innerText = "Light Mode";
    } else {
      localStorage.setItem("theme", "light");
      document.getElementById("toggle-theme").innerText = "Dark Mode";
    }
  }

  // Check saved theme on page load
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("toggle-theme").innerText = "Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("toggle-theme").innerText = "Dark Mode";
  }

  // Attach event listener to the toggle button
  document
    .getElementById("toggle-theme")
    .addEventListener("click", toggleTheme);

  // Get buttons for Level 1
  let englishBtn = document.getElementById("english-btn");
  let htmlBtn = document.getElementById("html-btn");
  let cssBtn = document.getElementById("css-sub-btn");
  let jsBtn = document.getElementById("js-btn");
  let reactBtn = document.getElementById("react-btn");
  let nodeJsBtn = document.getElementById("node-btn");
  let tsBtn = document.getElementById("ts-btn");
  let tailwindBtn = document.getElementById("tailwind-btn");
  let scssBtn = document.getElementById("scss-btn");

  // Get menus for Level 1
  let englishMenu = document.getElementById("englishMenu");
  let htmlMenu = document.getElementById("htmlMenu");
  let cssMenu = document.getElementById("cssMenu");
  let jsMenu = document.getElementById("jsMenu");
  let reactMenu = document.getElementById("reactMenu");
  let nodeMenu = document.getElementById("nodeMenu");
  let tsMenu = document.getElementById("tsMenu");
  let tailwindMenu = document.getElementById("tailwindMenu");
  let sassMenu = document.getElementById("sassMenu");

  // Function to show the selected menu and hide others
  function showMenu(menuToShow) {
    let menus = [
      englishMenu,
      htmlMenu,
      cssMenu,
      jsMenu,
      reactMenu,
      nodeMenu,
      tsMenu,
      tailwindMenu,
      sassMenu,
    ];

    // Hide all menus
    menus.forEach((menu) => {
      menu.classList.remove("active");
    });

    // Show the selected menu
    menuToShow.classList.add("active");
  }

  // Event listeners for main menu buttons
  englishBtn.addEventListener("click", () => showMenu(englishMenu));
  htmlBtn.addEventListener("click", () => showMenu(htmlMenu));
  cssBtn.addEventListener("click", () => showMenu(cssMenu));
  jsBtn.addEventListener("click", () => showMenu(jsMenu));
  reactBtn.addEventListener("click", () => showMenu(reactMenu));
  nodeJsBtn.addEventListener("click", () => showMenu(nodeMenu));
  tsBtn.addEventListener("click", () => showMenu(tsMenu));

  // Event listeners for submenu buttons
  tailwindBtn.addEventListener("click", () => showMenu(tailwindMenu));
  scssBtn.addEventListener("click", () => showMenu(sassMenu));

  // Main level buttons for Levels 1-5
  let level1Btn = document.getElementById("level1");
  let level2Btn = document.getElementById("level2");
  let level3Btn = document.getElementById("level3");
  let level4Btn = document.getElementById("level4");
  let level5Btn = document.getElementById("level5");

  // Main level menus for Levels 1-5
  let level_1_quiz = document.getElementById("level-1-quizOptions");
  let level_2_quiz = document.getElementById("level-2-quizOptions");
  let level_3_quiz = document.getElementById("level-3-quizOptions");
  let level_4_quiz = document.getElementById("level-4-quizOptions");
  let level_5_quiz = document.getElementById("level-5-quizOptions");

  // Level 1 buttons
  let posBtn = document.getElementById("pos-btn");
  let ssBtn = document.getElementById("ss-btn");
  let tensesBtn = document.getElementById("tenses-btn");
  let voiceBtn = document.getElementById("voice-btn");
  let moodBtn = document.getElementById("mood-btn");

  // Level 2 buttons
  let articles_btn = document.getElementById("articles-btn");
  let modifiers_btn = document.getElementById("modifiers-btn");
  let pronouns_btn = document.getElementById("pronouns-btn");
  let punctuations_btn = document.getElementById("punctuations-btn");
  let subject_btn = document.getElementById("subject-btn");
  // Level 3 buttons
  let conditionals_btn = document.getElementById("conditionals-btn");
  let conjunctions_btn = document.getElementById("conjunctions-btn");
  let d_and_i_btn = document.getElementById("d-and-i-btn");
  let negation_btn = document.getElementById("negation-btn");
  let questions_btn = document.getElementById("questions-btn");
  // Level 4 buttons
  let ellipsis_btn = document.getElementById("ellipsis-btn");
  let idioms_btn = document.getElementById("idioms-btn");
  let inversion_btn = document.getElementById("inversion-btn");
  let modifiers2_btn = document.getElementById("modifiers2-btn");
  let parallelism_btn = document.getElementById("parallelism-btn");
  // Level 5 buttons
  let appositives_btn = document.getElementById("appositives-btn");
  let gerund_btn = document.getElementById("gerund-btn");
  let non_infinitive_btn = document.getElementById("non-infinitive-btn");
  let relative_btn = document.getElementById("relative-btn");
  let reported_btn = document.getElementById("reported-btn");

  // Level 1 menus
  let partOfSpeech_Quiz = document.getElementById("partOfSpeech-Quiz");
  let sentence_Structure_Quiz = document.getElementById(
    "sentence-Structure-Quiz"
  );
  let tenses_Quiz = document.getElementById("tenses-Quiz");
  let voice_Quiz = document.getElementById("voice-Quiz");
  let mood_Quiz = document.getElementById("mood-Quiz");

  // Level 2 menus
  let article_Quiz = document.getElementById("article-Quiz");
  let modifier_Quiz = document.getElementById("modifier-Quiz");
  let pronoun_Quiz = document.getElementById("pronoun-Quiz");
  let subject_agreement_Quiz = document.getElementById(
    "subject-agreement-Quiz"
  );
  let punctuation_Quiz = document.getElementById("punctuation-Quiz");

  // Level 3 menus
  let conditionals_Quiz = document.getElementById("conditionals-Quiz");
  let conjunctions_Quiz = document.getElementById("conjunctions-Quiz");
  let direct_and_indirect_Quiz = document.getElementById(
    "direct-and-indirect-Quiz"
  );
  let negation_Quiz = document.getElementById("negation-Quiz");
  let question_Quiz = document.getElementById("question-Quiz");
  // Level 4 menus
  let ellipsis_Quiz = document.getElementById("ellipsis-Quiz");
  let idioms_Quiz = document.getElementById("idioms-Quiz");
  let inversion_Quiz = document.getElementById("inversion-Quiz");
  let modifiers2_Quiz = document.getElementById("modifiers2-Quiz");
  let parallelism_Quiz = document.getElementById("parallelism-Quiz");
  // Level 5 menus
  let appositives_Quiz = document.getElementById("appositives-Quiz");
  let gerunds_Quiz = document.getElementById("gerunds-Quiz");
  let non_finite_verbs_Quiz = document.getElementById("non-finite-verbs-Quiz");
  let relative_clauses_Quiz = document.getElementById("relative-clauses-Quiz");
  let reported_speech_Quiz = document.getElementById("reported-speech-Quiz");

  // Function to deactivate all submenus (both Level 1 and Level 2)
  function deactivateAllSubMenus() {
    let mainMenus = [
      level_1_quiz,
      level_2_quiz,
      level_3_quiz,
      level_4_quiz,
      level_5_quiz,
    ];
    let level1SubMenus = [
      partOfSpeech_Quiz,
      sentence_Structure_Quiz,
      tenses_Quiz,
      voice_Quiz,
      mood_Quiz,
    ];
    let level2SubMenus = [
      article_Quiz,
      modifier_Quiz,
      pronoun_Quiz,
      subject_agreement_Quiz,
      punctuation_Quiz,
    ];
    let level3SubMenus = [
      conditionals_Quiz,
      conjunctions_Quiz,
      direct_and_indirect_Quiz,
      negation_Quiz,
      question_Quiz,
    ];
    let level4SubMenus = [
      ellipsis_Quiz,
      idioms_Quiz,
      inversion_Quiz,
      modifiers2_Quiz,
      parallelism_Quiz,
    ];
    let level5SubMenus = [
      appositives_Quiz,
      gerunds_Quiz,
      non_finite_verbs_Quiz,
      relative_clauses_Quiz,
      reported_speech_Quiz,
    ];

    // Deactivate all Main Menus
    mainMenus.forEach((menu) => menu.classList.remove("active"));
    // Deactivate all Level 1 submenus
    level1SubMenus.forEach((menu) => menu.classList.remove("active"));
    // Deactivate all Level 2 submenus
    level2SubMenus.forEach((menu) => menu.classList.remove("active"));
    // Deactivate all Level 3 submenus
    level3SubMenus.forEach((menu) => menu.classList.remove("active"));
    // Deactivate all Level 4 submenus
    level4SubMenus.forEach((menu) => menu.classList.remove("active"));
    // Deactivate all Level 5 submenus
    level5SubMenus.forEach((menu) => menu.classList.remove("active"));
  }

  // Function to show the selected Main menu and hide others
  function showMainMenu(menuToShow) {
    deactivateAllSubMenus(); // Ensure all submenus are deactivated

    // Show the selected main menu
    menuToShow.classList.add("active");
  }

  // Function to show the selected submenu and hide others for Level 1
  function showSubQuiz1Menu(menuToShow) {
    let menus = [
      partOfSpeech_Quiz,
      sentence_Structure_Quiz,
      tenses_Quiz,
      voice_Quiz,
      mood_Quiz,
    ];

    // Hide all Level 1 submenus
    menus.forEach((menu) => menu.classList.remove("active"));
    // Show the selected submenu
    menuToShow.classList.add("active");
  }

  // Function to show the selected submenu and hide others for Level 2
  function showSubQuiz2Menu(menuToShow) {
    let menus = [
      article_Quiz,
      modifier_Quiz,
      pronoun_Quiz,
      subject_agreement_Quiz,
      punctuation_Quiz,
    ];

    // Hide all Level 2 submenus
    menus.forEach((menu) => menu.classList.remove("active"));
    // Show the selected submenu
    menuToShow.classList.add("active");
  }
  function showSubQuiz3Menu(menuToShow) {
    let menus = [
      conditionals_Quiz,
      conjunctions_Quiz,
      direct_and_indirect_Quiz,
      negation_Quiz,
      question_Quiz,
    ];

    // Hide all Level 2 submenus
    menus.forEach((menu) => menu.classList.remove("active"));
    // Show the selected submenu
    menuToShow.classList.add("active");
  }
  function showSubQuiz4Menu(menuToShow) {
    let menus = [
      ellipsis_Quiz,
      idioms_Quiz,
      inversion_Quiz,
      modifiers2_Quiz,
      parallelism_Quiz,
    ];

    // Hide all Level 2 submenus
    menus.forEach((menu) => menu.classList.remove("active"));
    // Show the selected submenu
    menuToShow.classList.add("active");
  }
  function showSubQuiz5Menu(menuToShow) {
    let menus = [
      appositives_Quiz,
      gerunds_Quiz,
      non_finite_verbs_Quiz,
      relative_clauses_Quiz,
      reported_speech_Quiz,
    ];
    // Hide all Level 2 submenus
    menus.forEach((menu) => menu.classList.remove("active"));
    // Show the selected submenu
    menuToShow.classList.add("active");
  }

  // Event listeners for Main Menu
  level1Btn.addEventListener("click", () => showMainMenu(level_1_quiz));
  level2Btn.addEventListener("click", () => showMainMenu(level_2_quiz));
  level3Btn.addEventListener("click", () => showMainMenu(level_3_quiz));
  level4Btn.addEventListener("click", () => showMainMenu(level_4_quiz));
  level5Btn.addEventListener("click", () => showMainMenu(level_5_quiz));

  // Event listeners for Level 1 submenus
  posBtn.addEventListener("click", () => showSubQuiz1Menu(partOfSpeech_Quiz));
  ssBtn.addEventListener("click", () =>
    showSubQuiz1Menu(sentence_Structure_Quiz)
  );
  tensesBtn.addEventListener("click", () => showSubQuiz1Menu(tenses_Quiz));
  voiceBtn.addEventListener("click", () => showSubQuiz1Menu(voice_Quiz));
  moodBtn.addEventListener("click", () => showSubQuiz1Menu(mood_Quiz));

  // Event listeners for Level 2 submenus
  articles_btn.addEventListener("click", () => showSubQuiz2Menu(article_Quiz));
  modifiers_btn.addEventListener("click", () =>
    showSubQuiz2Menu(modifier_Quiz)
  );
  pronouns_btn.addEventListener("click", () => showSubQuiz2Menu(pronoun_Quiz));
  punctuations_btn.addEventListener("click", () =>
    showSubQuiz2Menu(punctuation_Quiz)
  );
  subject_btn.addEventListener("click", () =>
    showSubQuiz2Menu(subject_agreement_Quiz)
  );
  // Event listeners for Level 3 submenus
  conditionals_btn.addEventListener("click", () =>
    showSubQuiz3Menu(conditionals_Quiz)
  );
  conjunctions_btn.addEventListener("click", () =>
    showSubQuiz3Menu(conjunctions_Quiz)
  );
  d_and_i_btn.addEventListener("click", () =>
    showSubQuiz3Menu(direct_and_indirect_Quiz)
  );
  negation_btn.addEventListener("click", () => showSubQuiz3Menu(negation_Quiz));
  questions_btn.addEventListener("click", () =>
    showSubQuiz3Menu(question_Quiz)
  );

  // Event listeners for Level 4 submenus
  ellipsis_btn.addEventListener("click", () => showSubQuiz4Menu(ellipsis_Quiz));
  idioms_btn.addEventListener("click", () => showSubQuiz4Menu(idioms_Quiz));
  inversion_btn.addEventListener("click", () =>
    showSubQuiz4Menu(inversion_Quiz)
  );
  modifiers2_btn.addEventListener("click", () =>
    showSubQuiz4Menu(modifiers2_Quiz)
  );
  parallelism_btn.addEventListener("click", () =>
    showSubQuiz4Menu(parallelism_Quiz)
  );

  // Event listeners for Level 5 submenus
  appositives_btn.addEventListener("click", () =>
    showSubQuiz5Menu(appositives_Quiz)
  );
  gerund_btn.addEventListener("click", () => showSubQuiz5Menu(gerunds_Quiz));
  non_infinitive_btn.addEventListener("click", () =>
    showSubQuiz5Menu(non_finite_verbs_Quiz)
  );
  relative_btn.addEventListener("click", () =>
    showSubQuiz5Menu(relative_clauses_Quiz)
  );
  reported_btn.addEventListener("click", () =>
    showSubQuiz5Menu(reported_speech_Quiz)
  );
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default behavior
    });
  });

  // Dynamic content
  // Object to store paths for different buttons
  const contentPaths = {
    // Level 1
    // Part of Speach
    adjBtn: {
      html: "/EnglishConcepts/Level1/PartofSpeach/adjectives/adjectives.html",
      js: "/EnglishConcepts/Level1/PartofSpeach/adjectives/adjectives.js",
    },
    advBtn: {
      html: "/EnglishConcepts/Level1/PartofSpeach/adverbs/adverbs.html",
      js: "/EnglishConcepts/Level1/PartofSpeach/adverbs/adverbs.js",
    },
    conjBtn: {
      html: "/EnglishConcepts/Level1/PartofSpeach/conjunctions/conjunctions.html",
      js: "/EnglishConcepts/Level1/PartofSpeach/conjunctions/conjunctions.js",
    },
    interBtn: {
      html: "/EnglishConcepts/Level1/PartofSpeach/interjections/interjections.html",
      js: "/EnglishConcepts/Level1/PartofSpeach/interjections/interjections.js",
    },
    nouBtn: {
      html: "/EnglishConcepts/Level1/PartofSpeach/nouns/nouns.html",
      js: "/EnglishConcepts/Level1/PartofSpeach/nouns/nouns.js",
    },
    prepBtn: {
      html: "/EnglishConcepts/Level1/PartofSpeach/prepositions/prepositions.html",
      js: "/EnglishConcepts/Level1/PartofSpeach/prepositions/prepositions.js",
    },
    pronBtn: {
      html: "/EnglishConcepts/Level1/PartofSpeach/pronouns/pronouns.html",
      js: "/EnglishConcepts/Level1/PartofSpeach/pronouns/pronouns.js",
    },
    verBtn: {
      html: "/EnglishConcepts/Level1/PartofSpeach/verbs/verbs.html",
      js: "/EnglishConcepts/Level1/PartofSpeach/verbs/verbs.js",
    },
    // Sentence Structure
    clausesBtn: {
      html: "/EnglishConcepts/Level1/SentanceStructure/Clauses/clauses.html",
      js: "/EnglishConcepts/Level1/SentanceStructure/Clauses/clauses.js",
    },
    d_s_clausesBtn: {
      html: "/EnglishConcepts/Level1/SentanceStructure/DependentSubordinateClause/dependentClause.html",
      js: "/EnglishConcepts/Level1/SentanceStructure/DependentSubordinateClause/dependentClause.js",
    },
    direct_objectBtn: {
      html: "/EnglishConcepts/Level1/SentanceStructure/DirectObject/directObject.html",
      js: "/EnglishConcepts/Level1/SentanceStructure/DirectObject/directObject.js",
    },
    independent_clausesBtn: {
      html: "/EnglishConcepts/Level1/SentanceStructure/IndependentClause/independentClause.html",
      js: "/EnglishConcepts/Level1/SentanceStructure/IndependentClause/independentClause.js",
    },
    indirect_objectBtn: {
      html: "/EnglishConcepts/Level1/SentanceStructure/IndirectObject/indirectObject.html",
      js: "/EnglishConcepts/Level1/SentanceStructure/IndirectObject/indirectObject.js",
    },
    objectBtn: {
      html: "/EnglishConcepts/Level1/SentanceStructure/Object/object.html",
      js: "/EnglishConcepts/Level1/SentanceStructure/Object/object.js",
    },
    phrasesBtn: {
      html: "/EnglishConcepts/Level1/SentanceStructure/Phrases/phrases.html",
      js: "/EnglishConcepts/Level1/SentanceStructure/Phrases/phrases.js",
    },
    predicateBtn: {
      html: "/EnglishConcepts/Level1/SentanceStructure/Predicate/predicate.html",
      js: "/EnglishConcepts/Level1/SentanceStructure/Predicate/predicate.js",
    },
    subjectBtn: {
      html: "/EnglishConcepts/Level1/SentanceStructure/Subject/subject.html",
      js: "/EnglishConcepts/Level1/SentanceStructure/Subject/subject.js",
    },
    // Tenses
    future_continuousBtn: {
      html: "/EnglishConcepts/Level1/Tenses/Future/Future-Continuous/Future-Continuous.html",
      js: "/EnglishConcepts/Level1/Tenses/Future/Future-Continuous/Future-Continuous.js",
    },
    future_perfectBtn: {
      html: "/EnglishConcepts/Level1/Tenses/Future/Future-Perfect/Future-Perfect.html",
      js: "/EnglishConcepts/Level1/Tenses/Future/Future-Perfect/Future-Perfect.js",
    },
    future_perfect_continuousBtn: {
      html: "/EnglishConcepts/Level1/Tenses/Future/Future-Perfect-Continuous/Future-Perfect-Continuous.html",
      js: "/EnglishConcepts/Level1/Tenses/Future/Future-Perfect-Continuous/Future-Perfect-Continuous.js",
    },
    simple_futureBtn: {
      html: "/EnglishConcepts/Level1/Tenses/Future/Simple-Future/Simple-Future.html",
      js: "/EnglishConcepts/Level1/Tenses/Future/Simple-Future/Simple-Future.js",
    },
    past_continuousBtn: {
      html: "/EnglishConcepts/Level1/Tenses/Past/Past-Continuous/pastContinuous.html",
      js: "/EnglishConcepts/Level1/Tenses/Past/Past-Continuous/pastContinuous.js",
    },
    past_perfectBtn: {
      html: "/EnglishConcepts/Level1/Tenses/Past/Past-Pefrect/pastPerfect.html",
      js: "/EnglishConcepts/Level1/Tenses/Past/Past-Pefrect/pastPerfect.js",
    },
    past_perfect_continuousBtn: {
      html: "/EnglishConcepts/Level1/Tenses/Past/Past-Perfect-Continuous/pastPerfectContinuous.html",
      js: "/EnglishConcepts/Level1/Tenses/Past/Past-Perfect-Continuous/pastPerfectContinuous.js",
    },
    past_simpleBtn: {
      html: "/EnglishConcepts/Level1/Tenses/Past/Past-Simple/simplePast.html",
      js: "/EnglishConcepts/Level1/Tenses/Past/Past-Simple/simplePast.js",
    },
    present_continuousBtn: {
      html: "/EnglishConcepts/Level1/Tenses/Present/Present-Continuous/presentContinuous.html",
      js: "/EnglishConcepts/Level1/Tenses/Present/Present-Continuous/presentContinuous.js",
    },
    present_perfectBtn: {
      html: "/EnglishConcepts/Level1/Tenses/Present/Present-Perfect/presentPerfect.html",
      js: "/EnglishConcepts/Level1/Tenses/Present/Present-Perfect/presentPerfect.js",
    },
    present_perfect_continuousBtn: {
      html: "/EnglishConcepts/Level1/Tenses/Present/Present-Perfect-Continuous/presentPerfectContinuous.html",
      js: "/EnglishConcepts/Level1/Tenses/Present/Present-Perfect-Continuous/presentPerfectContinuous.js",
    },
    present_simpleBtn: {
      html: "/EnglishConcepts/Level1/Tenses/Present/Present-Simple/simplePresent.html",
      js: "/EnglishConcepts/Level1/Tenses/Present/Present-Simple/simplePresent.js",
    },
    // Voice
    active_voiceBtn: {
      html: "/EnglishConcepts/Level1/Voice/Active-Voice/Active-Voice.html",
      js: "/EnglishConcepts/Level1/Voice/Active-Voice/Active-Voice.js",
    },
    passive_voiceBtn: {
      html: "/EnglishConcepts/Level1/Voice/Passive-Voice/Passive-Voice.html",
      js: "/EnglishConcepts/Level1/Voice/Passive-Voice/Passive-Voice.js",
    },
    // Mood
    imperative_moodBtn: {
      html: "/EnglishConcepts/Level1/Mood/Imperative-Mood/imperativeMood.html",
      js: "/EnglishConcepts/Level1/Mood/Imperative-Mood/imperativeMood.js",
    },
    indicative_moodBtn: {
      html: "/EnglishConcepts/Level1/Mood/Indicative-Mood/indicativeMood.html",
      js: "/EnglishConcepts/Level1/Mood/Indicative-Mood/indicativeMood.js",
    },
    subjunctive_moodBtn: {
      html: "/EnglishConcepts/Level1/Mood/Subjunctive-Mood/subjunctiveMood.html",
      js: "/EnglishConcepts/Level1/Mood/Subjunctive-Mood/subjunctiveMood.js",
    },
    // Level 2
    // Article
    definite_articleBtn: {
      html: "/EnglishConcepts/Level-2/Articles/Definite-Article/definiteArticle.html",
      js: "/EnglishConcepts/Level-2/Articles/Definite-Article/definiteArticle.js",
    },
    determinersBtn: {
      html: "/EnglishConcepts/Level-2/Articles/Determiners/determiners.html",
      js: "/EnglishConcepts/Level-2/Articles/Determiners/determiners.js",
    },
    indefinite_articleBtn: {
      html: "/EnglishConcepts/Level-2/Articles/Indefinite-Article/indefiniteArticle.html",
      js: "/EnglishConcepts/Level-2/Articles/Indefinite-Article/indefiniteArticle.js",
    },
    // Modifiers
    adjective_adverbsBtn: {
      html: "/EnglishConcepts/Level-2/Modifiers/adjectivesAdverbs.html",
      js: "/EnglishConcepts/Level-2/Modifiers/adjectivesAdverbs.js",
    },
    // Pronouns
    pronounBtn: {
      html: "/EnglishConcepts/Level-2/Pronoun-Antecedent-Agreement/subjectVerbAgreement.html",
      js: "/EnglishConcepts/Level-2/Pronoun-Antecedent-Agreement/subjectVerbAgreement.js",
    },
    // Punctuation
    apostrophesBtn: {
      html: "/EnglishConcepts/Level-2/Punctuation/Apostrophes/apostrophes.html",
      js: "/EnglishConcepts/Level-2/Punctuation/Apostrophes/apostrophes.js",
    },
    colonsBtn: {
      html: "/EnglishConcepts/Level-2/Punctuation/Colons/colons.html",
      js: "/EnglishConcepts/Level-2/Punctuation/Colons/colons.js",
    },
    commasBtn: {
      html: "/EnglishConcepts/Level-2/Punctuation/Commas/commas.html",
      js: "/EnglishConcepts/Level-2/Punctuation/Commas/commas.js",
    },
    dashesBtn: {
      html: "/EnglishConcepts/Level-2/Punctuation/Dashes/dashes.html",
      js: "/EnglishConcepts/Level-2/Punctuation/Dashes/dashes.js",
    },
    exclamation_markBtn: {
      html: "/EnglishConcepts/Level-2/Punctuation/Exclamation Marks/exclamationMarks.html",
      js: "/EnglishConcepts/Level-2/Punctuation/Exclamation Marks/exclamationMarks.js",
    },
    parenthesesBtn: {
      html: "/EnglishConcepts/Level-2/Punctuation/Parentheses/parentheses.html",
      js: "/EnglishConcepts/Level-2/Punctuation/Parentheses/parentheses.js",
    },
    periodsBtn: {
      html: "/EnglishConcepts/Level-2/Punctuation/Periods/periods.html",
      js: "/EnglishConcepts/Level-2/Punctuation/Periods/periods.js",
    },
    question_markBtn: {
      html: "/EnglishConcepts/Level-2/Punctuation/Question Mark/QuestionMark.html",
      js: "/EnglishConcepts/Level-2/Punctuation/Question Mark/QuestionMark.js",
    },
    quotation_markBtn: {
      html: "/EnglishConcepts/Level-2/Punctuation/Quotation Marks/quotationMarks.html",
      js: "/EnglishConcepts/Level-2/Punctuation/Quotation Marks/quotationMarks.js",
    },
    semicolonsBtn: {
      html: "/EnglishConcepts/Level-2/Punctuation/Semicolons/semicolons.html",
      js: "/EnglishConcepts/Level-2/Punctuation/Semicolons/semicolons.js",
    },
    // Subject
    subject_agreementBtn: {
      html: "/EnglishConcepts/Level-2/Subject-Agreement/subjectAgreement.html",
      js: "/EnglishConcepts/Level-2/Subject-Agreement/subjectAgreement.js",
    },
    // Level 3
    // Conditionals
    zero_conditionalBtn: {
      html: "/EnglishConcepts/Level-3/Conditionals/Zero-Conditional/zeroConditional.html",
      js: "/EnglishConcepts/Level-3/Conditionals/Zero-Conditional/zeroConditional.js",
    },
    first_conditionalBtn: {
      html: "/EnglishConcepts/Level-3/Conditionals/First-Conditional/firstConditional.html",
      js: "/EnglishConcepts/Level-3/Conditionals/First-Conditional/firstConditional.js",
    },
    second_conditionalBtn: {
      html: "/EnglishConcepts/Level-3/Conditionals/Second-Conditional/secondConditional.html",
      js: "/EnglishConcepts/Level-3/Conditionals/Second-Conditional/secondConditional.js",
    },
    third_conditionalBtn: {
      html: "/EnglishConcepts/Level-3/Conditionals/Third-Conditional/thirdConditional.html",
      js: "/EnglishConcepts/Level-3/Conditionals/Third-Conditional/thirdConditional.js",
    },
    // Conjunctions
    coordinating_conjunctionsBtn: {
      html: "/EnglishConcepts/Level-3/Conjunctions/Coordinating-Conjunctions/coordinatingConjunctions.html",
      js: "/EnglishConcepts/Level-3/Conjunctions/Coordinating-Conjunctions/coordinatingConjunctions.js",
    },
    correlative_conjunctionsBtn: {
      html: "/EnglishConcepts/Level-3/Conjunctions/Correlative-Conjunctions/correlativeConjunctions.html",
      js: "/EnglishConcepts/Level-3/Conjunctions/Correlative-Conjunctions/correlativeConjunctions.js",
    },
    subordinating_conjunctionsBtn: {
      html: "/EnglishConcepts/Level-3/Conjunctions/Subordinating-Conjunctions/subordinatingConjunctions.html",
      js: "/EnglishConcepts/Level-3/Conjunctions/Subordinating-Conjunctions/subordinatingConjunctions.js",
    },

    // Direct and Indirect Speech
    direct_speechBtn: {
      html: "/EnglishConcepts/Level-3/Direct-and-Indirect-Speach/Direct-Speach/directSpeach.html",
      js: "/EnglishConcepts/Level-3/Direct-and-Indirect-Speach/Direct-Speach/directSpeach.js",
    },
    indirect_speechBtn: {
      html: "/EnglishConcepts/Level-3/Direct-and-Indirect-Speach/Indirect-Speach/indirectSpeach.html",
      js: "/EnglishConcepts/Level-3/Direct-and-Indirect-Speach/Indirect-Speach/indirectSpeach.js",
    },
    // Negation
    negationBtn: {
      html: "/EnglishConcepts/Level-3/Negation/negation.html",
      js: "/EnglishConcepts/Level-3/Negation/negation.js",
    },
    // Questions
    tag_questionBtn: {
      html: "/EnglishConcepts/Level-3/Questions/Tag-Questions/tagQuestions.html",
      js: "/EnglishConcepts/Level-3/Questions/Tag-Questions/tagQuestions.js",
    },
    wh_questionBtn: {
      html: "/EnglishConcepts/Level-3/Questions/WH-Questions/whQuestions.html",
      js: "/EnglishConcepts/Level-3/Questions/WH-Questions/whQuestions.js",
    },
    yes_or_no_questionBtn: {
      html: "/EnglishConcepts/Level-3/Questions/Yes-or-No/yesOrNo.html",
      js: "/EnglishConcepts/Level-3/Questions/Yes-or-No/yesOrNo.js",
    },
    // Level 4
    // Ellipsis
    ellipsisBtn: {
      html: "/EnglishConcepts/Level-4/Ellipsis-and-Substitution/Ellipsis/ellipsis.html",
      js: "/EnglishConcepts/Level-4/Ellipsis-and-Substitution/Ellipsis/ellipsis.js",
    },
    substitutionBtn: {
      html: "/EnglishConcepts/Level-4/Ellipsis-and-Substitution/Substitution/substitution.html",
      js: "/EnglishConcepts/Level-4/Ellipsis-and-Substitution/Substitution/substitution.js",
    },
    // Idioms
    idiomsBtn: {
      html: "/EnglishConcepts/Level-4/Idioms-and-Phrasal-verbs/Idioms/idioms.html",
      js: "/EnglishConcepts/Level-4/Idioms-and-Phrasal-verbs/Idioms/idioms.js",
    },
    phrasal_VerbBtn: {
      html: "/EnglishConcepts/Level-4/Idioms-and-Phrasal-verbs/Phrasal-verb/phrasalVerb.html",
      js: "/EnglishConcepts/Level-4/Idioms-and-Phrasal-verbs/Phrasal-verb/phrasalVerb.js",
    },
    // Inversion
    inversionBtn: {
      html: "/EnglishConcepts/Level-4/Inversion/inversion.html",
      js: "/EnglishConcepts/Level-4/Inversion/inversion.js",
    },
    // Modifiers2
    dangling_modifiersBtn: {
      html: "/EnglishConcepts/Level-4/Modifiers2/Dangling-Modifiers/danglingModifiers.html",
      js: "/EnglishConcepts/Level-4/Modifiers2/Dangling-Modifiers/danglingModifiers.js",
    },
    misplaced_modifiersBtn: {
      html: "/EnglishConcepts/Level-4/Modifiers2/Misplaced-Modifiers/misplacedModifiers.html",
      js: "/EnglishConcepts/Level-4/Modifiers2/Misplaced-Modifiers/misplacedModifiers.js",
    },
    // Parallelism
    parallelism_Btn: {
      html: "/EnglishConcepts/Level-4/Parallelism/parallelism.html",
      js: "/EnglishConcepts/Level-4/Parallelism/parallelism.js",
    },
    // Level 5
    // Appositives
    appositivesBtn: {
      html: "/EnglishConcepts/Level-5/Appositives/appositives.html",
      js: "/EnglishConcepts/Level-5/Appositives/appositives.js",
    },
    // Gerunds and Infinitive Usage
    gerundsBtn: {
      html: "/EnglishConcepts/Level-5/Gerund and Infinitive Usage/gerundAndInfinitive.html",
      js: "/EnglishConcepts/Level-5/Gerund and Infinitive Usage/gerundAndInfinitive.js",
    },
    // Non-Infinitive
    gerundsBtn2: {
      html: "/EnglishConcepts/Level-5/Non-Finite Verbs/Gerunds/gerunds.html",
      js: "/EnglishConcepts/Level-5/Non-Finite Verbs/Gerunds/gerunds.js",
    },
    infinitivesBtn: {
      html: "/EnglishConcepts/Level-5/Non-Finite Verbs/Infinitives/infinitives.html",
      js: "/EnglishConcepts/Level-5/Non-Finite Verbs/Infinitives/infinitives.js",
    },
    participlesBtn: {
      html: "/EnglishConcepts/Level-5/Non-Finite Verbs/Participles/participles.html",
      js: "/EnglishConcepts/Level-5/Non-Finite Verbs/Participles/participles.js",
    },
    // Relative Clauses
    defining_relative_clausesBtn: {
      html: "/EnglishConcepts/Level-5/Relative Clauses/Defining Relative Clauses/definingRelativeClauses.html",
      js: "/EnglishConcepts/Level-5/Relative Clauses/Defining Relative Clauses/definingRelativeClauses.js",
    },
    non_defining_relative_clausesBtn: {
      html: "/EnglishConcepts/Level-5/Relative Clauses/Non-Defining Relative Clauses/nonDefiningRelativeClauses.html",
      js: "/EnglishConcepts/Level-5/Relative Clauses/Non-Defining Relative Clauses/nonDefiningRelativeClauses.js",
    },
    // Reported Speech
    reported_speechBtn: {
      html: "/EnglishConcepts/Level-5/Reported Speach/reportedSpeach.html",
      js: "/EnglishConcepts/Level-5/Reported Speach/reportedSpeach.js",
    },
  };

  // Function to load and inject HTML and JS into the page
  async function loadDynamicContent(buttonId) {
    try {
      const paths = contentPaths[buttonId];

      // Clear existing content
      document.getElementById("dynamicContent").innerHTML = "";

      // Remove any previously injected scripts
      const oldScripts = document.querySelectorAll(
        'script[data-dynamic="true"]'
      );
      oldScripts.forEach((script) => script.remove());

      // Fetch and inject the HTML content
      const htmlResponse = await fetch(paths.html);
      if (!htmlResponse.ok) throw new Error("Failed to load HTML content");
      const htmlContent = await htmlResponse.text();
      document.getElementById("dynamicContent").innerHTML = htmlContent;

      // Fetch and inject the JS content wrapped in an IIFE
      const jsResponse = await fetch(paths.js);
      if (!jsResponse.ok) throw new Error("Failed to load JS content");
      const jsContent = await jsResponse.text();
      const scriptElement = document.createElement("script");
      scriptElement.textContent = `(function() { ${jsContent} })();`;
      scriptElement.setAttribute("data-dynamic", "true"); // Mark the script as dynamic
      document.body.appendChild(scriptElement);
    } catch (error) {
      console.error("Error loading dynamic content:", error);
      document.getElementById("dynamicContent").innerHTML =
        "<p>Failed to load content.</p>";
    }
  }

  // Function to handle button clicks
  function handleButtonClick(event) {
    const buttonId = event.target.id;

    // Load the content associated with the button
    loadDynamicContent(buttonId);
  }

  // Add event listeners to buttons
  // Part of Speech
  document
    .getElementById("adjBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("advBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("conjBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("interBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("nouBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("prepBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("pronBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("verBtn")
    .addEventListener("click", handleButtonClick);

  // Sentence Structure
  document
    .getElementById("clausesBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("d_s_clausesBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("direct_objectBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("independent_clausesBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("indirect_objectBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("objectBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("phrasesBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("predicateBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("subjectBtn")
    .addEventListener("click", handleButtonClick);
  // Tenses
  document
    .getElementById("future_continuousBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("future_perfectBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("future_perfect_continuousBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("simple_futureBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("past_continuousBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("past_perfectBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("past_perfect_continuousBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("past_simpleBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("present_continuousBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("present_perfectBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("present_perfect_continuousBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("present_simpleBtn")
    .addEventListener("click", handleButtonClick);
  // Voice
  document
    .getElementById("active_voiceBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("passive_voiceBtn")
    .addEventListener("click", handleButtonClick);
  // Mood
  document
    .getElementById("imperative_moodBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("indicative_moodBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("subjunctive_moodBtn")
    .addEventListener("click", handleButtonClick);
  // Level 2
  // Articles
  document
    .getElementById("definite_articleBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("determinersBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("indefinite_articleBtn")
    .addEventListener("click", handleButtonClick);
  // Modifiers
  document
    .getElementById("adjective_adverbsBtn")
    .addEventListener("click", handleButtonClick);
  // Pronouns
  document
    .getElementById("pronounBtn")
    .addEventListener("click", handleButtonClick);
  // Punctuation
  document
    .getElementById("apostrophesBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("colonsBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("commasBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("dashesBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("exclamation_markBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("parenthesesBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("periodsBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("question_markBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("quotation_markBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("semicolonsBtn")
    .addEventListener("click", handleButtonClick);
  // Subject
  document
    .getElementById("subject_agreementBtn")
    .addEventListener("click", handleButtonClick);
  // Level 3
  // Conditionals
  document
    .getElementById("zero_conditionalBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("first_conditionalBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("second_conditionalBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("third_conditionalBtn")
    .addEventListener("click", handleButtonClick);
  // Conjunctions
  document
    .getElementById("coordinating_conjunctionsBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("correlative_conjunctionsBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("subordinating_conjunctionsBtn")
    .addEventListener("click", handleButtonClick);
  // Direct and Indirect Speech
  document
    .getElementById("direct_speechBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("indirect_speechBtn")
    .addEventListener("click", handleButtonClick);
  // Negation
  document
    .getElementById("negationBtn")
    .addEventListener("click", handleButtonClick);
  // Questions
  document
    .getElementById("tag_questionBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("wh_questionBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("yes_or_no_questionBtn")
    .addEventListener("click", handleButtonClick);
  // Level 4
  // Ellipsis
  document
    .getElementById("ellipsisBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("substitutionBtn")
    .addEventListener("click", handleButtonClick);
  // Idioms
  document
    .getElementById("idiomsBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("phrasal_VerbBtn")
    .addEventListener("click", handleButtonClick);
  // Inversion
  document
    .getElementById("inversionBtn")
    .addEventListener("click", handleButtonClick);
  // Modifiers2
  document
    .getElementById("dangling_modifiersBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("misplaced_modifiersBtn")
    .addEventListener("click", handleButtonClick);
  // Parallelism
  document
    .getElementById("parallelism_Btn")
    .addEventListener("click", handleButtonClick);
  // Level 5
  // Appositives
  document
    .getElementById("appositivesBtn")
    .addEventListener("click", handleButtonClick);
  // Gerund and Infinitive Usage
  document
    .getElementById("gerundsBtn")
    .addEventListener("click", handleButtonClick);
  // Non-Finite Verbs
  document
    .getElementById("gerundsBtn2")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("infinitivesBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("participlesBtn")
    .addEventListener("click", handleButtonClick);
  // Relative Clauses
  document
    .getElementById("defining_relative_clausesBtn")
    .addEventListener("click", handleButtonClick);
  document
    .getElementById("non_defining_relative_clausesBtn")
    .addEventListener("click", handleButtonClick);
  // Reported Speech
  document
    .getElementById("reported_speechBtn")
    .addEventListener("click", handleButtonClick);
});
