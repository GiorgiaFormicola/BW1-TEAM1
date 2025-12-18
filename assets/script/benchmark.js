const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

const randQuestion = [];

const shuffle = () => {
  const arrayTemp = [];
  questions.forEach((element) => {
    if (!randQuestion.includes(questions.element)) {
      randQuestion.push([element]);
    }
  });
  let i = 0;
  let temp = 0;
  while (arrayTemp.length < randQuestion.length) {
    temp = randQuestion[Math.floor(Math.random() * randQuestion.length)];
    if (!arrayTemp.includes(temp)) {
      arrayTemp.push(temp);
    }

    i++;
  }
  console.log(arrayTemp);
  return arrayTemp;
};

j = 0;
let contatoreDomande = 1;
let contatoreRisposteGiuste = 0;
let contatoreRisposteSbagliate = 0;

arrayOttimizzato = shuffle();

function updateUI() {
  value.textContent = Math.ceil(remaining); // mostra solo secondi interi
  const offset = -(circumference * (1 - remaining / totalTime));
  circle.style.strokeDashoffset = offset;
}

const totalTime = 10;
let remaining = totalTime;

const circle = document.querySelector(".progress-ring__circle");
const value = document.getElementById("timer-value");

const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = 0;

let timerId;

function startTimer() {
  clearInterval(timerId);
  remaining = totalTime;
  updateUI();

  timerId = setInterval(() => {
    remaining -= 0.1; // decimi di secondo
    if (remaining <= 0) {
      remaining = 0;
      clearInterval(timerId);

      // Pulisci DOM
      const questionList = document.querySelector(".question");
      const answersList = document.querySelector(".answers");
      while (answersList.firstChild) {
        questionList.innerHTML = "";
        answersList.removeChild(answersList.firstChild);
      }

      contatoreDomande++;
      contatoreRisposteSbagliate++;
      j++;

      // Controllo ultima domanda
      if (j >= arrayOttimizzato.length) {
        localStorage.setItem("contatoreRisposteGiuste", contatoreRisposteGiuste);
        localStorage.setItem("contatoreRisposteSbagliate", contatoreRisposteSbagliate);
        localStorage.setItem("totaleDomande", j);
        window.location.href = "../results.html";
        return;
      } else {
        attribuisciOggetto(arrayOttimizzato, j);
      }
    }
    updateUI();
  }, 100);
}

const attribuisciOggetto = (array) => {
  if (j >= array.length) {
    console.log(array.length);
    // Quiz finished — redirect
    localStorage.setItem("contatoreRisposteGiuste", contatoreRisposteGiuste);
    localStorage.setItem("contatoreRisposteSbagliate", contatoreRisposteSbagliate);
    localStorage.setItem("totaleDomande", j);
    window.location.href = "../results.html";
    return;
  }
  const domanderisposte = [...array[j][0].incorrect_answers, array[j][0].correct_answer];
  console.log(domanderisposte);
  const questionList = document.querySelector(".question");
  const answersList = document.querySelector(".answers");
  const countQuestions = document.querySelector(".conteggioDomande");
  const totalQuestions = document.querySelector(".totaleDomande");
  console.log(array.length);
  countQuestions.innerHTML = contatoreDomande + "&nbsp";
  totalQuestions.innerHTML = "/ " + array.length;
  for (let i = 0; i < domanderisposte.length; i++) {
    const btn = document.createElement("button");
    btn.classList.add("answer-button-color");
    answersList.appendChild(btn);
    btn.textContent = domanderisposte[i];
    btn.addEventListener("click", function () {
      clearInterval(timerId);

      if (btn.textContent === array[j][0].correct_answer) {
        contatoreRisposteGiuste++;
      } else {
        contatoreRisposteSbagliate++;
      }
      contatoreDomande++;

      while (answersList.firstChild) {
        questionList.innerHTML = "";
        answersList.removeChild(answersList.firstChild);
      }
      console.log(btn.textContent);
      console.log(array[j][0].correct_answer);

      attribuisciOggetto(arrayOttimizzato, j++);
    });
  }

  questionList.innerHTML = array[j][0].question;

  startTimer();

  console.log(contatoreRisposteGiuste);
  console.log(contatoreRisposteSbagliate);
  console.log(j);
};

window.onload = function () {
  attribuisciOggetto(arrayOttimizzato, j);
};
