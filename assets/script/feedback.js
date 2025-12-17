// Selects all elements in stars class with tag i in a NodeList calles "stars"
const stars = document.querySelectorAll(".stars i");

// Prendo parente Stelline e lo trasformo in un NopdeList e con un clic controllo che indice ha quella stellina dell'array

// Function to Loop throught the Stars NodeList
stars.forEach((star, index1) => {
  // Event listener for each star
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});
