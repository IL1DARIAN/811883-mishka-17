var popup = document.querySelector(".buy-form");

onload = function() {
	var basket = document.querySelectorAll(".catalog-product__basket");
  alert(basket[3].href);

  basket.onclick = function (evt) {
    evt.preventDefault();
    popup.classList.add("buy-form--open");
  }
}
