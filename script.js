let ratingState = document.querySelector(".rating-state");
let radioBtns = ratingState.querySelectorAll('input[name="rating"]');
let btnSubmit = ratingState.querySelector("#submit");
let thankYouState = document.querySelector(".thank-you-state");
let rating = thankYouState.querySelector("#rating");

rating.textContent = 5;

radioBtns.forEach((element) => {
  element.addEventListener("change", (event) => {
    rating.textContent = event.target.value;
  });
});

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  ratingState.style.display = "none";
  thankYouState.style.display = "block";
  console.log("clicked");
});
