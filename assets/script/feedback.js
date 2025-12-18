// Selects all elements in stars class with tag i in a NodeList calles "stars"
const stars = document.querySelectorAll(".stars i");
let selectedReview = 0;

// Prendo parente Stelline e lo trasformo in un NopdeList e con un clic controllo che indice ha quella stellina dell'array

// Function to Loop throught the Stars NodeList
stars.forEach((star, index1) => {
  // Event listener for each star
  star.addEventListener("click", () => {
    selectedReview = index1 + 1; // Per vedere poi se le stelline sono state selezionate
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

const feedbackDissapears = () => {
  const form = document.querySelector(".feedback-form");
  const main = document.querySelector("main");
  const error = document.querySelector(".error");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (selectedReview !== 0) {
      main.replaceChildren();

      const box = document.createElement("div");
      box.textContent = "Thank you for your feedback";

      main.appendChild(box);
    } else {
      while (error.firstChild) {
        error.removeChild(error.firstChild);
      }
      const divUnderInput = document.createElement("div");
      divUnderInput.classList.add("alert");
      divUnderInput.textContent = "Devi Selezionare ALMENO una Stella per continuare";

      error.appendChild(divUnderInput);
    }
  });
};

feedbackDissapears();
