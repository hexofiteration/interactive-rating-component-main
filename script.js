let ratingState = document.querySelector(".rating-state");
let radioBtns = ratingState.querySelectorAll('input[name="rating"]');
let btnSubmit = ratingState.querySelector("#submit");
let thankYouState = document.querySelector(".thank-you-state");
let rating = thankYouState.querySelector("#rating");
let form = ratingState.querySelector("form");

radioBtns.forEach((element) => {
  element.addEventListener("change", (event) => {
    rating.textContent = event.target.value;
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  ratingState.style.display = "none";
  thankYouState.style.display = "block";
});
