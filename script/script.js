const searchButton = document.querySelector(".hotel-search-btn");
const modal = document.querySelector(".modal");
const closeButton = document.querySelector(".modal-closing-button");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.add("modal-show");
  document.body.classList.add("modal-opened");
});

closeButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modal.classList.remove("modal-show");
  document.body.classList.remove("modal-opened");
});
