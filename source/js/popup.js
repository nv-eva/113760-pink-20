var form = document.querySelector(".form");
var buttonSend = form.querySelector(".form__button--send");
var popupFailure = document.querySelector(".popup--failure");
var popupSuccess = document.querySelector(".popup--success");
var buttonFailure = popupFailure.querySelector(".popup__button--failure");
var buttonSuccess = popupSuccess.querySelector(".popup__button--success");

/* Inputs */
var formSurname = form.querySelector(".form__text-input--surname");
var formName = form.querySelector(".form__text-input--name");
var formEmail = form.querySelector(".form__text-input--email");

/* Popup open */
buttonSend.addEventListener("click", function (evt) {
  if (!formSurname.value || !formName.value || !formEmail.value) {
    evt.preventDefault();
    popupFailure.classList.add("popup--show");
    formSurname.classList.add("form__text-input--error");
    formName.classList.add("form__text-input--error");
    formEmail.classList.add("form__text-input--error");
  } else {
    popupSuccess.classList.add("popup--show");
    formSurname.classList.remove("form__text-input--error");
    formName.classList.remove("form__text-input--error");
    formEmail.classList.remove("form__text-input--error");
  }
});

/* Popup failure close */
buttonFailure.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupFailure.classList.remove("popup--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupFailure.classList.contains("popup--show")) {
      evt.preventDefault();
      popupFailure.classList.remove("popup--show");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    if (popupFailure.classList.contains("popup--show")) {
      evt.preventDefault();
      popupFailure.classList.remove("popup--show");
    }
  }
});

/* Popup success close */
buttonSuccess.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupSuccess.classList.remove("popup--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popupSuccess.classList.contains("popup--show")) {
      evt.preventDefault();
      popupSuccess.classList.remove("popup--show");
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 13) {
    if (popupSuccess.classList.contains("popup--show")) {
      evt.preventDefault();
      popupSuccess.classList.remove("popup--show");
    }
  }
});
