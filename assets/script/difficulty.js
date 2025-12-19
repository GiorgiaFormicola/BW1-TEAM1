/*
const answers = document.querySelector(".answers");
const confirmBtn = document.querySelector("a")
const btnEasy = document.querySelector(".easy-button-color");
const btnHard = document.querySelector(".hard-button-color");
const difficultySelector = function () {
  btnEasy.addEventListener("click", function {
    return confirmBtn
  
})}; if else {
    return confirmBtn.href = "benchmarkHard.html"
}
else {

}
    */
// il bottone start dovrà avere un href vuoto.

const btnEasy = document.querySelector(".easy-button-color");
const btnHard = document.querySelector(".hard-button-color");
const confirmBtn = document.querySelector("footer a");

btnEasy.addEventListener("click", function () {
  confirmBtn.href = "../benchmark.html";
  btnEasy.style.background = " linear-gradient(180deg, #00ffff 0%, #039b9b 80%)";
  btnHard.style.background = "";
});
btnHard.addEventListener("click", function () {
  confirmBtn.href = "../benchmarkHard.html";
  btnHard.style.background = "linear-gradient(180deg, #ca0191 0%, #8a007a 80%)";
  btnEasy.style.background = "";
});
