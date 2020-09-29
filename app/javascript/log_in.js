document.addEventListener("turbolinks:load", () => {
  const NEW_USER_FORM = document.querySelector("#log-in #new_user");
  const SUBMIT_BTN = document.querySelector("#submit-btn");

  const EMAIL_INPUT = document.querySelector("#user_email");
  const EMAIL_ERROR_MSG = document.querySelector("#user_email ~ .error");

  const PASSWORD_INPUT = document.querySelector("#user_password");
  const PASSWORD_ERROR_MSG = document.querySelector("#user_password ~ .error");

  const ELEMENTS = [
    (EMAIL = {
      input: EMAIL_INPUT,
      errorMsg: EMAIL_ERROR_MSG,
      error: false,
      validateInput() {
        if (this.input.validity.valueMissing) {
          this.errorMsg.textContent = "Please enter an email.";
        } else if (this.input.validity.patternMismatch) {
          this.errorMsg.textContent = "Should be a valid email";
        }
      },
    }),
    (PASSWORD = {
      input: PASSWORD_INPUT,
      errorMsg: PASSWORD_ERROR_MSG,
      error: false,
      validateInput() {
        if (this.input.validity.valueMissing) {
          this.errorMsg.textContent = "This field can't be blank";
        } else if (this.input.validity.tooShort) {
          this.errorMsg.textContent = "Please use at least 6 characters";
        }
      },
    }),
  ];

  if (NEW_USER_FORM) {
    SUBMIT_BTN.addEventListener("click", (event) => {
      for (const ELEMENT of ELEMENTS) {
        if (!ELEMENT.input.validity.valid) {
          ELEMENT.error = true;
          ELEMENT.validateInput();
          invalidInput(ELEMENT);
        } else {
          ELEMENT.error = false;
          validInput(ELEMENT);
        }
      }
      if (validateFields()) {
        NEW_USER_FORM.submit();
      }
    });

    for (const ELEMENT of ELEMENTS) {
      ELEMENT.input.addEventListener("blur", (event) => {
        if (ELEMENT.input.validity.valid) {
          validInput(ELEMENT);
        } else {
          ELEMENT.validateInput();
          invalidInput(ELEMENT);
        }
      });
    }
  }

  function validInput(element) {
    element.input.className = "form-control is-valid";
    element.errorMsg.textContent = "Looks good!";
    element.errorMsg.className = "error valid-feedback";
  }

  function invalidInput(element) {
    element.input.className = "form-control is-invalid";
    element.errorMsg.className = "error invalid-feedback";
  }

  function validateFields() {
    let valid = false;
    for (const ELEMENT of ELEMENTS) {
      valid = valid || ELEMENT.error;
    }
    return !valid;
  }
});
