import ValidationForm from "../components/validation-form/validation-form";

document.addEventListener("DOMContentLoaded", () => {
  const validationForm = new ValidationForm(
    document.querySelector(".validation-form")
  );

  const button = document.querySelector(".validation-form__btn");
  button.addEventListener("click", (e) => {
    e.preventDefault();

    //проверка валидации карты
    validationForm.checkValid();

    //проверка типа карты
    validationForm.checkType();
  });
});