var upload = document.querySelector(".upload");
var buttonCrop = upload.querySelector(".upload__tool--crop");
var buttonFill = upload.querySelector(".upload__tool--fill");
var buttonContrast = upload.querySelector(".upload__tool--contrast");
var rangeCrop = upload.querySelector(".upload__range--crop");
var rangeFill = upload.querySelector(".upload__range--fill");
var rangeContrast = upload.querySelector(".upload__range--contrast");

buttonCrop.addEventListener("click", function (evt) {
  evt.preventDefault();
  rangeCrop.classList.remove("upload__range--hidden");
  rangeFill.classList.add("upload__range--hidden");
  rangeContrast.classList.add("upload__range--hidden");
  buttonCrop.classList.add("upload__tool--current");
  buttonFill.classList.remove("upload__tool--current");
  buttonContrast.classList.remove("upload__tool--current");
});

buttonFill.addEventListener("click", function (evt) {
  evt.preventDefault();
  rangeCrop.classList.add("upload__range--hidden");
  rangeFill.classList.remove("upload__range--hidden");
  rangeContrast.classList.add("upload__range--hidden");
  buttonCrop.classList.remove("upload__tool--current");
  buttonFill.classList.add("upload__tool--current");
  buttonContrast.classList.remove("upload__tool--current");
});

buttonContrast.addEventListener("click", function (evt) {
  evt.preventDefault();
  rangeCrop.classList.add("upload__range--hidden");
  rangeFill.classList.add("upload__range--hidden");
  rangeContrast.classList.remove("upload__range--hidden");
  buttonCrop.classList.remove("upload__tool--current");
  buttonFill.classList.remove("upload__tool--current");
  buttonContrast.classList.add("upload__tool--current");
});
