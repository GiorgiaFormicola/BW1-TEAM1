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
  const footer = document.querySelector("footer");
  const main = document.querySelector("main");
  const error = document.querySelector(".error");
  const comment = document.querySelector("#commentText");
  const moreInfo = document.querySelector("a");

  moreInfo.addEventListener("click", function (event) {
    event.preventDefault();

    const storeFeedback = comment.value.trim(); 

    if (selectedReview !== 0 && storeFeedback !== "") {
      main.replaceChildren();
      footer.replaceChildren();

      const box = document.createElement("div");
      box.textContent = "Thank you \n for your feedback!";
      box.classList.add("thankYouBox");
      window.open("https://epicode.com/it/", "_blank").focus();
      main.appendChild(box);
    } else {
      error.replaceChildren();

      const divUnderInput = document.createElement("div");
      divUnderInput.classList.add("alert");
      divUnderInput.textContent = "Devi selezionare almeno una stella e inserire un commento";

      error.appendChild(divUnderInput);
    }
  });
};

feedbackDissapears();
