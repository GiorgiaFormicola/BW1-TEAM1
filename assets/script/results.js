const sezioneCorrette = document.querySelector("#correct-score").querySelector(".score");
const sezioneErrate = document.querySelector("#wrong-score").querySelector(".score");
const descSezioneCorrette = document.querySelector("#correct-score").querySelector(".questions");
const descSezioneErrate = document.querySelector("#wrong-score").querySelector(".questions");
const messaggio = document.querySelector(".messaggio");
const descMessaggio = document.querySelector(".descMessaggio");
const pieChart = document.querySelector("#pie-chart");

const risposteCorrette = localStorage.getItem("contatoreRisposteGiuste");
const risposteErrate = localStorage.getItem("contatoreRisposteSbagliate");
const contatoreDomande = localStorage.getItem("totaleDomande");
const certificato = document.querySelector("#contenitore");

console.log(contatoreDomande);

let percentualeGiusta = 0;
let percentualeSbagliata = 0;
const calcoloPercentuale = (risposteGiuste, risposteSbagliate, risposteTotali) => {
  console.log(risposteTotali);
  percentualeGiusta = Math.floor((risposteGiuste / risposteTotali) * 100) + "%";
  percentualeSbagliata = Math.floor((risposteSbagliate / risposteTotali) * 100) + "%";
  sezioneCorrette.textContent = percentualeGiusta;
  sezioneErrate.textContent = percentualeSbagliata;
  descSezioneCorrette.innerHTML = risposteGiuste.toString() + "/" + risposteTotali.toString() + " questions";
  descSezioneErrate.innerHTML = risposteSbagliate.toString() + "/" + risposteTotali.toString() + " questions";

  if (risposteErrate > contatoreDomande / 2) {
    certificato.innerHTML = "";

    const contenitore1 = document.createElement("div");
    const primoMessaggio1 = document.createElement("h4");
    primoMessaggio1.textContent = "We're sorry";
    const secondoMessaggio1 = document.createElement("h4");
    secondoMessaggio1.textContent = "You did not pass the exam.";
    secondoMessaggio1.classList.add("accent-color2");

    const contenitore2 = document.createElement("div");
    const primoMessaggio2 = document.createElement("p");
    primoMessaggio2.textContent = "Unfortunately, you did not achieve the minimum required score.";
    const secondoMessaggio2 = document.createElement("p");
    secondoMessaggio2.textContent = "Please review the material.";

    certificato.appendChild(contenitore1);
    certificato.appendChild(contenitore2);
    contenitore1.appendChild(primoMessaggio1);
    contenitore1.appendChild(secondoMessaggio1);
    contenitore2.appendChild(primoMessaggio2);
    contenitore2.appendChild(secondoMessaggio2);

    const correct = percentualeGiusta;
    const wrong = 100 - percentualeSbagliata;

    
  }

};

function mostraRisultati(risposteGiuste, risposteTotali) {

      const percentuale = (risposteGiuste / risposteTotali) * 100;
      const gradi = (risposteGiuste / risposteTotali) * 360;

      const chart = document.getElementById("pie-chart");

      chart.style.background = `conic-gradient(
    #00ffff 0deg ${gradi}deg, 
    #d20094 ${gradi}deg 360deg
  )`;
    }

window.onload = function () {
  calcoloPercentuale(risposteCorrette, risposteErrate, contatoreDomande);
    mostraRisultati(risposteCorrette,contatoreDomande);
};
