const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which scheduling algorithm can cause starvation if not carefully implemented?",
    correct_answer: "Shortest Job First",
    incorrect_answers: ["Round Robin", "First Come First Served", "Multilevel Queue"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What is the time complexity of inserting an element into a balanced binary search tree?",
    correct_answer: "O(log n)",
    incorrect_answers: ["O(n)", "O(1)", "O(n log n)"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "What does REST stand for?",
    correct_answer: "Representational State Transfer",
    incorrect_answers: ["Remote Execution Service Tool", "Request State Transfer", "Relational State Transfer"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "In TCP, congestion control and flow control are the same mechanism.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which normal form eliminates transitive dependency in relational databases?",
    correct_answer: "Third Normal Form",
    incorrect_answers: ["First Normal Form", "Second Normal Form", "Boyce-Codd Normal Form"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which keyword stops a loop immediately?",
    correct_answer: "break",
    incorrect_answers: ["stop", "exit", "return"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which HTTP status code indicates that the client must authenticate to get the requested response?",
    correct_answer: "401",
    incorrect_answers: ["403", "404", "400"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "In Big-O notation, which function grows the fastest?",
    correct_answer: "O(2^n)",
    incorrect_answers: ["O(n log n)", "O(n^2)", "O(log n)"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "hard",
    question: "In JavaScript, `Object.freeze()` prevents all nested objects from being modified.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "hard",
    question: "Which concept allows a CPU to execute multiple instructions during a single clock cycle?",
    correct_answer: "Instruction-level parallelism",
    incorrect_answers: ["Context switching", "Virtual memory", "Interrupt handling"],
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

const totalTime = 20;
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
