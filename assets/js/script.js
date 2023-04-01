document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("input");
  const nameInput = document.querySelector("#first-Name");
  const lastNameInput = document.querySelector("#last-Name");
  const emailInput = document.querySelector("#e-mail");
  const phoneInput = document.querySelector("#phone-number");
  const passwordInput = document.querySelector("#pass");
  const confirmPasswordInput = document.querySelector("#confirm-pass");
  const submitButton = document.querySelector("#submit");
  const form = document.querySelector("form");
  const showPasswordButton = document.querySelector("#password-button");
  const showConfirmPasswordButton = document.querySelector(
    "#confirm-password-button"
  );

  showPasswordButton.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      showPasswordButton.childNodes.item(3).classList.remove("hidden");
      showPasswordButton.childNodes.item(1).classList.add("hidden");
    } else {
      passwordInput.type = "password";
      showPasswordButton.childNodes.item(1).classList.remove("hidden");
      showPasswordButton.childNodes.item(3).classList.add("hidden");
    }
  });

  showConfirmPasswordButton.addEventListener("click", () => {
    if (confirmPasswordInput.type === "password") {
      confirmPasswordInput.type = "text";
      showConfirmPasswordButton.childNodes.item(3).classList.remove("hidden");
      showConfirmPasswordButton.childNodes.item(1).classList.add("hidden");
    } else {
      confirmPasswordInput.type = "password";
      showConfirmPasswordButton.childNodes.item(1).classList.remove("hidden");
      showConfirmPasswordButton.childNodes.item(3).classList.add("hidden");
    }
  });

  submitButton.addEventListener("click", () => {
    let validation = true;
    if (!nameValidator(nameInput)) {
      showValidationMessage(nameValidator(nameInput), nameInput);
      activeBottomBorderColor(nameValidator(nameInput), nameInput);
      validation = false;
    }

    if (!lastNameValidator(lastNameInput)) {
      showValidationMessage(lastNameValidator(lastNameInput), lastNameInput);
      activeBottomBorderColor(lastNameValidator(lastNameInput), lastNameInput);
      validation = false;
    }

    if (!emailValidator(emailInput)) {
      showValidationMessage(emailValidator(emailInput), emailInput);
      activeBottomBorderColor(emailValidator(emailInput), emailInput);
      validation = false;
    }

    if (!phoneValidator(phoneInput)) {
      showValidationMessage(phoneValidator(phoneInput), phoneInput);
      activeBottomBorderColor(phoneValidator(phoneInput), phoneInput);
      validation = false;
    }
    if (!passwordValidator(passwordInput)) {
      showValidationMessage(passwordValidator(passwordInput), passwordInput);
      activeBottomBorderColor(passwordValidator(passwordInput), passwordInput);
      validation = false;
    }
    if (!confirmPasswordValidator(confirmPasswordInput, passwordInput)) {
      showValidationMessage(
        confirmPasswordValidator(confirmPasswordInput, passwordInput),
        confirmPasswordInput
      );
      activeBottomBorderColor(
        confirmPasswordValidator(confirmPasswordInput, passwordInput),
        confirmPasswordInput
      );
      validation = false;
    }
    if (validation) {
      console.log("entre");
      form.submit();
    }
  });

  nameInput.addEventListener("blur", () => {
    showValidationMessage(nameValidator(nameInput), nameInput);
    activeBottomBorderColor(nameValidator(nameInput), nameInput);
  });
  nameInput.addEventListener("input", () => {
    activeBottomBorderColor(nameValidator(nameInput), nameInput);
    if (nameValidator(nameInput)) {
      showValidationMessage(nameValidator(nameInput), nameInput);
    }
  });

  lastNameInput.addEventListener("blur", () => {
    showValidationMessage(lastNameValidator(lastNameInput), lastNameInput);
    activeBottomBorderColor(lastNameValidator(lastNameInput), lastNameInput);
  });
  lastNameInput.addEventListener("input", () => {
    activeBottomBorderColor(lastNameValidator(lastNameInput), lastNameInput);
    if (lastNameValidator(lastNameInput)) {
      showValidationMessage(lastNameValidator(lastNameInput), lastNameInput);
    }
  });

  emailInput.addEventListener("blur", () => {
    showValidationMessage(emailValidator(emailInput), emailInput);
    activeBottomBorderColor(emailValidator(emailInput), emailInput);
  });
  emailInput.addEventListener("input", () => {
    activeBottomBorderColor(emailValidator(emailInput), emailInput);
    if (emailValidator(emailInput)) {
      showValidationMessage(emailValidator(emailInput), emailInput);
    }
  });

  phoneInput.addEventListener("blur", () => {
    showValidationMessage(phoneValidator(phoneInput), phoneInput);
    activeBottomBorderColor(phoneValidator(phoneInput), phoneInput);
  });
  phoneInput.addEventListener("input", () => {
    activeBottomBorderColor(phoneValidator(phoneInput), phoneInput);
    if (phoneValidator(phoneInput)) {
      showValidationMessage(phoneValidator(phoneInput), phoneInput);
    }
  });
  passwordInput.addEventListener("focus", () => {
    showValidationMessage(passwordValidator(passwordInput), passwordInput);
  });
  passwordInput.addEventListener("blur", () => {
    showValidationMessage(passwordValidator(passwordInput), passwordInput);
    activeBottomBorderColor(passwordValidator(passwordInput), passwordInput);
  });
  passwordInput.addEventListener("input", () => {
    activeBottomBorderColor(passwordValidator(passwordInput), passwordInput);
    displayPassValidation(passwordInput);
    showValidationMessage(passwordValidator(passwordInput), passwordInput);
    if (confirmPasswordInput.value.trim() != "") {
      activeBottomBorderColor(
        confirmPasswordValidator(confirmPasswordInput, passwordInput),
        confirmPasswordInput
      );
      showValidationMessage(
        confirmPasswordValidator(confirmPasswordInput, passwordInput),
        confirmPasswordInput
      );
    }
  });

  confirmPasswordInput.addEventListener("blur", () => {
    showValidationMessage(
      confirmPasswordValidator(confirmPasswordInput, passwordInput),
      confirmPasswordInput
    );
    activeBottomBorderColor(
      confirmPasswordValidator(confirmPasswordInput, passwordInput),
      confirmPasswordInput
    );
  });
  confirmPasswordInput.addEventListener("input", () => {
    activeBottomBorderColor(
      confirmPasswordValidator(confirmPasswordInput, passwordInput),
      confirmPasswordInput
    );
    if (confirmPasswordValidator(confirmPasswordInput, passwordInput)) {
      showValidationMessage(
        confirmPasswordValidator(confirmPasswordInput, passwordInput),
        confirmPasswordInput
      );
    }
  });

  inputs.forEach((input) => {
    input.onfocus = () => {
      input.previousElementSibling.classList.add("top");
      input.previousElementSibling.classList.add("focus");
      input.parentNode.classList.add("focus");

      if (input.parentNode.classList.contains("invalid")) {
        input.previousElementSibling.classList.remove("invalid");
        input.parentNode.classList.remove("invalid");
      }
      if (input.parentNode.classList.contains("valid")) {
        input.previousElementSibling.classList.remove("valid");
        input.parentNode.classList.remove("valid");
      }
    };

    input.onblur = () => {
      input.value = input.value.trim();
      if (input.value.trim().length == 0) {
        input.previousElementSibling.classList.remove("top");
        input.parentNode.nextSibling.nextSibling.classList.add("hidden");
        input.parentNode.classList.remove("invalid");
        input.parentNode.classList.remove("valid");
      }
      input.previousElementSibling.classList.remove("focus");
      input.parentNode.classList.remove("focus");
    };
  });

  // Validation Functions

  function activeBottomBorderColor(validation, inputToActive) {
    if (validation) {
      inputToActive.previousElementSibling.classList.add("valid");
      inputToActive.parentNode.classList.add("valid");
      inputToActive.previousElementSibling.classList.remove("invalid");
      inputToActive.parentNode.classList.remove("invalid");
    } else {
      inputToActive.previousElementSibling.classList.remove("valid");
      inputToActive.parentNode.classList.remove("valid");
      inputToActive.previousElementSibling.classList.add("invalid");
      inputToActive.parentNode.classList.add("invalid");
    }
  }

  function showValidationMessage(validation, inputToCorrect) {
    if (validation) {
      inputToCorrect.parentNode.nextSibling.nextSibling.classList.add("hidden");
    } else {
      inputToCorrect.parentNode.nextSibling.nextSibling.classList.remove(
        "hidden"
      );
    }
  }

  // Name validator
  function nameValidator(name) {
    return !(name.value.trim().length <= 1 || /\d/.test(name.value));
  }

  //LastName Validator
  function lastNameValidator(lastName) {
    return !(lastName.value.trim().length <= 1 || /\d/.test(lastName.value));
  }

  // email validation
  function emailValidator(email) {
    return email.checkValidity();
  }

  // phone validation
  function phoneValidator(phone) {
    let stringPhone;
    if (phone.value.trim().indexOf("+") === 0) {
      stringPhone = phone.value.trim().substring(1);
    } else {
      stringPhone = phone.value;
    }
    return !(
      stringPhone.length <= 5 ||
      /[a-zA-Z]/.test(stringPhone) ||
      /[!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?]/.test(stringPhone) ||
      stringPhone.indexOf("+") != -1
    );
  }

  //Password Validation
  function passwordValidator(password) {
    return (
      /\d/.test(password.value) &&
      password.value.trim().length >= 8 &&
      /[A-Z]/.test(password.value) &&
      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password.value)
    );
  }

  //Confirm Password Validation
  function confirmPasswordValidator(confirmPassword, password) {
    return (
      confirmPassword.value.trim() === password.value.trim() &&
      confirmPassword.value.trim() !== ""
    );
  }

  //Password conditions in the auxiliary window
  function displayPassValidation(password) {
    let eightCharCondition =
      passwordInput.parentNode.nextSibling.nextSibling.childNodes.item(1);
    let capCharCondition =
      passwordInput.parentNode.nextSibling.nextSibling.childNodes.item(5);
    let specialCharCondition =
      passwordInput.parentNode.nextSibling.nextSibling.childNodes.item(9);
    let numberCharCondition =
      passwordInput.parentNode.nextSibling.nextSibling.childNodes.item(13);

    if (password.value.trim().length >= 8) {
      eightCharCondition.textContent = "✓";
      eightCharCondition.classList.add("pass");
    } else {
      eightCharCondition.textContent = "🗴";
      eightCharCondition.classList.remove("pass");
    }

    if (/\d/.test(password.value)) {
      numberCharCondition.textContent = "✓";
      numberCharCondition.classList.add("pass");
    } else {
      numberCharCondition.textContent = "🗴";
      numberCharCondition.classList.remove("pass");
    }

    if (/[A-Z]/.test(password.value)) {
      capCharCondition.textContent = "✓";
      capCharCondition.classList.add("pass");
    } else {
      capCharCondition.textContent = "🗴";
      capCharCondition.classList.remove("pass");
    }

    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password.value)) {
      specialCharCondition.textContent = "✓";
      specialCharCondition.classList.add("pass");
    } else {
      specialCharCondition.textContent = "🗴";
      specialCharCondition.classList.remove("pass");
    }
  }

  // responsive designe

  // const divElement = document.querySelector(".container");
  // const height = divElement.clientHeight;
  // const width = height * 0.51; // Calculamos el ancho como el 51% de la altura
  // divElement.style.width = `${width}px`; // Establecemos el ancho del div en píxeles
});
