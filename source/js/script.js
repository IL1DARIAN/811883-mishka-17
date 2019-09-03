if (document.querySelector('.catalog-main')) {
  var baskets = document.querySelectorAll(".catalog-product__basket");
  var popupContainer = document.querySelector(".buy-form");
  var popup = popupContainer.querySelector('.buy-form__wrapper');

  const closePopup = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      popupContainer.classList.remove("buy-form--open");
      window.removeEventListener('keydown', closePopup);
    }
  }

  const closePopupOutside = (evt) => {
    if (!popup.contains(evt.target)) {
      popupContainer.classList.remove("buy-form--open");
      document.removeEventListener('click', closePopupOutside);
    }
  }

  const openBasket = (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    if (!popupContainer.classList.contains("buy-form--open")) {
      popupContainer.classList.add("buy-form--open");
      window.addEventListener("keydown", closePopup);
      document.addEventListener('click', closePopupOutside);
    }
  }

  baskets.forEach(basket => {
    basket.addEventListener("click", openBasket);
  });
}
