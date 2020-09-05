/* Reviews */
var review1 = document.querySelector(".reviews__item--1");
var review2 = document.querySelector(".reviews__item--2");
var review3 = document.querySelector(".reviews__item--3");
var control1 = document.querySelector(".reviews__toggle--1");
var control2 = document.querySelector(".reviews__toggle--2");
var control3 = document.querySelector(".reviews__toggle--3");

control1.addEventListener("click", function (evt) {
  evt.preventDefault();
  review1.classList.add("slider__item--current");
  review2.classList.remove("slider__item--current");
  review3.classList.remove("slider__item--current");
  control1.classList.add("slider__toggle--current");
  control2.classList.remove("slider__toggle--current");
  control3.classList.remove("slider__toggle--current");
});

control2.addEventListener("click", function (evt) {
  evt.preventDefault();
  review1.classList.remove("slider__item--current");
  review2.classList.add("slider__item--current");
  review3.classList.remove("slider__item--current");
  control1.classList.remove("slider__toggle--current");
  control2.classList.add("slider__toggle--current");
  control3.classList.remove("slider__toggle--current");
});

control3.addEventListener("click", function (evt) {
  evt.preventDefault();
  review1.classList.remove("slider__item--current");
  review2.classList.remove("slider__item--current");
  review3.classList.add("slider__item--current");
  control1.classList.remove("slider__toggle--current");
  control2.classList.remove("slider__toggle--current");
  control3.classList.add("slider__toggle--current");
});

/* Price */
var price1 = document.querySelector(".price__item--1");
var price2 = document.querySelector(".price__item--2");
var price3 = document.querySelector(".price__item--3");
var toggle1 = document.querySelector(".price__toggle--1");
var toggle2 = document.querySelector(".price__toggle--2");
var toggle3 = document.querySelector(".price__toggle--3");

toggle1.addEventListener("click", function (evt) {
  evt.preventDefault();
  price1.classList.remove("price__item--hidden");
  price2.classList.add("price__item--hidden");
  price3.classList.add("price__item--hidden");
  toggle1.classList.add("slider__toggle--current");
  toggle2.classList.remove("slider__toggle--current");
  toggle3.classList.remove("slider__toggle--current");
});

toggle2.addEventListener("click", function (evt) {
  evt.preventDefault();
  price1.classList.add("price__item--hidden");
  price2.classList.remove("price__item--hidden");
  price3.classList.add("price__item--hidden");
  toggle1.classList.remove("slider__toggle--current");
  toggle2.classList.add("slider__toggle--current");
  toggle3.classList.remove("slider__toggle--current");
});

toggle3.addEventListener("click", function (evt) {
  evt.preventDefault();
  price3.classList.remove("price__item--hidden");
  price1.classList.add("price__item--hidden");
  price2.classList.add("price__item--hidden");
  toggle3.classList.add("slider__toggle--current");
  toggle1.classList.remove("slider__toggle--current");
  toggle2.classList.remove("slider__toggle--current");
});
