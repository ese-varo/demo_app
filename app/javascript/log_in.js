import {
  submitValidation,
  addValidationEvents,
} from "./inputValidationHelpers.js";

document.addEventListener("turbolinks:load", () => {
  const NEW_USER_FORM = document.querySelector("#log-in #new_user");
  const SUBMIT_BTN = document.querySelector("#submit-btn");

  const EMAIL_INPUT = document.querySelector("#user_email");
  const EMAIL_ERROR_MSG = document.querySelector("#user_email ~ .error");

  const PASSWORD_INPUT = document.querySelector("#user_password");
  const PASSWORD_ERROR_MSG = document.querySelector("#user_password ~ .error");

  const ELEMENTS = [
    {
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
    },
    {
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
    },
  ];

  if (NEW_USER_FORM) {
    submitValidation(NEW_USER_FORM, SUBMIT_BTN, ELEMENTS);
    addValidationEvents(ELEMENTS);
  }
});
