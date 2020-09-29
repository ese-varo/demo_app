import {
  submitValidation,
  addValidationEvents,
} from "./inputValidationHelpers.js";

document.addEventListener("turbolinks:load", () => {
  const NEW_USER_FORM = document.querySelector("#sign-up #new_user");
  const SUBMIT_BTN = document.querySelector("#submit-btn");

  const FIRST_NAME_INPUT = document.querySelector("#user_first_name");
  const FIRST_NAME_ERROR_MSG = document.querySelector(
    "#user_first_name ~ .error"
  );

  const LAST_NAME_INPUT = document.querySelector("#user_last_name");
  const LAST_NAME_ERROR_MSG = document.querySelector(
    "#user_last_name ~ .error"
  );

  const MAIDEN_NAME_INPUT = document.querySelector("#user_maiden_name");
  const MAIDEN_NAME_ERROR_MSG = document.querySelector(
    "#user_maiden_name ~ .error"
  );

  const EMAIL_INPUT = document.querySelector("#user_email");
  const EMAIL_ERROR_MSG = document.querySelector("#user_email ~ .error");

  const COMPANY_INPUT = document.querySelector("#user_company");
  const COMPANY_ERROR_MSG = document.querySelector("#user_company ~ .error");

  const RFC_INPUT = document.querySelector("#user_rfc");
  const RFC_ERROR_MSG = document.querySelector("#user_rfc ~ .error");

  const PASSWORD_INPUT = document.querySelector("#user_password");
  const PASSWORD_ERROR_MSG = document.querySelector("#user_password ~ .error");

  const PASSWORD_CONFIRM_INPUT = document.querySelector(
    "#user_password_confirmation"
  );
  const PASSWORD_CONFIRM_ERROR_MSG = document.querySelector(
    "#user_password_confirmation ~ .error"
  );

  const ELEMENTS = [
    {
      input: FIRST_NAME_INPUT,
      errorMsg: FIRST_NAME_ERROR_MSG,
      error: false,
      validateInput() {
        if (this.input.validity.valueMissing) {
          this.errorMsg.textContent = "Please enter your first name";
        } else if (this.input.validity.tooShort) {
          this.errorMsg.textContent = `Should be at least ${this.input.minLength} characters, you entered ${this.input.value.length}.`;
        } else if (this.input.validity.patternMismatch) {
          this.errorMsg.textContent =
            "Enter a valid name (just valid uppercase and lowercase alphabet chars).";
        }
      },
    },
    {
      input: LAST_NAME_INPUT,
      errorMsg: LAST_NAME_ERROR_MSG,
      error: false,
      validateInput() {
        if (this.input.validity.valueMissing) {
          this.errorMsg.textContent = "Please enter your last name";
        } else if (this.input.validity.tooShort) {
          this.errorMsg.textContent = `Should be at least ${this.input.minLength} characters, you entered ${this.input.value.length}.`;
        } else if (this.input.validity.patternMismatch) {
          this.errorMsg.textContent =
            "Enter a valid last name (just valid uppercase and lowercase alphabet chars).";
        }
      },
    },
    {
      input: MAIDEN_NAME_INPUT,
      errorMsg: MAIDEN_NAME_ERROR_MSG,
      error: false,
      validateInput() {
        if (this.input.validity.valueMissing) {
          this.errorMsg.textContent = "Please enter your maiden name";
        } else if (this.input.validity.tooShort) {
          this.errorMsg.textContent = `Should be at least ${this.input.minLength} characters, you entered ${this.input.value.length}.`;
        } else if (this.input.validity.patternMismatch) {
          this.errorMsg.textContent =
            "Enter a valid maiden name (just valid uppercase and lowercase alphabet chars).";
        }
      },
    },
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
      input: COMPANY_INPUT,
      errorMsg: COMPANY_ERROR_MSG,
      error: false,
      validateInput() {
        if (this.input.validity.valueMissing) {
          this.errorMsg.textContent = "Please enter a company name";
        } else if (this.input.validity.tooShort) {
          this.errorMsg.textContent = `Should be at least ${this.input.minLength} characters, you entered ${this.input.value.length}.`;
        }
      },
    },
    {
      input: RFC_INPUT,
      errorMsg: RFC_ERROR_MSG,
      error: false,
      validateInput() {
        if (this.input.validity.valueMissing) {
          this.errorMsg.textContent = "Please enter your RFC";
        } else if (this.input.validity.tooShort) {
          this.errorMsg.textContent = `It should be at least ${this.input.minLength} characters, you entered ${this.input.value.length}.`;
        } else if (this.input.validity.tooLong) {
          this.errorMsg.textContent = `It should be maximum ${this.input.minLength} characters, you entered ${this.input.value.length}.`;
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
    {
      input: PASSWORD_CONFIRM_INPUT,
      errorMsg: PASSWORD_CONFIRM_ERROR_MSG,
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
    submitValidation(SUBMIT_BTN, ELEMENTS);
    addValidationEvents(ELEMENTS);
  }
});
