const sezione = document.querySelector("footer");
const checkbox = document.getElementById("checkboxValidazione");
const proceed = document.querySelector("button");
const messaggio = document.createElement("p");
messaggio.textContent = "Seleziona la casella per proseguire";
messaggio.classList.add("warning");
messaggio.style.color = "red";

const validazione = () => {
  proceed.addEventListener("click", function () {
    if (!checkbox.checked) {
      sezione.appendChild(messaggio);
    }
  });
};

window.onload = function () {
  validazione();
};
