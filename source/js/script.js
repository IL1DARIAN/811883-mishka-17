var basket = document.querySelector(".catalog-product__basket");
var popup = document.querySelector(".buy-form");

basket.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("buy-form--open");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("buy-form--open")) {
      popup.classList.remove("buy-form--open");
    }
  }
});
