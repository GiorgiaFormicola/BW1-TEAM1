const sezioneCorrette = document.querySelector(".corretto");
const sezioneErrate = document.querySelector(".errato");
const messaggio = document.querySelector(".messaggio");
const descMessaggio = document.querySelector(".descMessaggio");

const risposteCorrette = localStorage.getItem("contatoreRisposteGiuste");
const risposteErrate = localStorage.getItem("contatoreRisposteSbagliate");
const contatoreDomande = localStorage.getItem("totaleDomande");

console.log(contatoreDomande);

sezioneCorrette.innerHTML = "risposte corrette " + risposteCorrette;
sezioneErrate.innerHTML = "risposte errate " + risposteErrate;
sezioneErrate.innerHTML = "risposte errate " + risposteErrate;

let percentualeGiusta = 0;
let percentualeSbagliata = 0;
const calcoloPercentuale = (risposteGiuste, risposteSbagliate, risposteTotali) => {
  console.log(risposteTotali);
  percentualeGiusta = Math.floor((risposteGiuste / risposteTotali) * 100) + "%";
  percentualeSbagliata = Math.floor((risposteSbagliate / risposteTotali) * 100) + "%";
};
window.onload = function () {
  calcoloPercentuale(risposteCorrette, risposteErrate, contatoreDomande);
};
