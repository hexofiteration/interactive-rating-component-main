let ratingState = document.querySelector(".rating-state");
let radioBtns = ratingState.querySelectorAll('input[name="rating"]');
let btnSubmit = ratingState.querySelector("#submit");
let thankYouState = document.querySelector(".thank-you-state");
let rating = thankYouState.querySelector("#rating");

radioBtns.forEach((element) => {
  element.addEventListener("change", (event) => {
    rating.textContent = event.target.value;
  });
});
