import {
  SimpleTextInput,
  submitValidation,
  addValidationEvents,
} from "./inputValidationHelpers.js";

document.addEventListener("turbolinks:load", () => {
  const EMPLOYEE_FORM = document.querySelector("#employee-form");
  const SUBMIT_BTN = document.querySelector("#submit-btn");

  const FIRST_NAME_INPUT = document.querySelector("#employee_first_name");
  const FIRST_NAME_ERROR_MSG = document.querySelector(
    "#employee_first_name ~ .error"
  );

  const MAIDEN_NAME_INPUT = document.querySelector("#employee_maiden_name");
  const MAIDEN_NAME_ERROR_MSG = document.querySelector(
    "#employee_maiden_name ~ .error"
  );

  const LAST_NAME_INPUT = document.querySelector("#employee_last_name");
  const LAST_NAME_ERROR_MSG = document.querySelector(
    "#employee_last_name ~ .error"
  );

  const RFC_INPUT = document.querySelector("#employee_rfc");
  const RFC_ERROR_MSG = document.querySelector("#employee_rfc ~ .error");

  const POSITION_INPUT = document.querySelector("#employee_position");
  const POSITION_ERROR_MSG = document.querySelector(
    "#employee_position ~ .error"
  );

  const ELEMENTS = [
    new SimpleTextInput(FIRST_NAME_INPUT, FIRST_NAME_ERROR_MSG),
    new SimpleTextInput(MAIDEN_NAME_INPUT, MAIDEN_NAME_ERROR_MSG),
    new SimpleTextInput(LAST_NAME_INPUT, LAST_NAME_ERROR_MSG),
    new SimpleTextInput(POSITION_INPUT, POSITION_ERROR_MSG),
    {
      input: RFC_INPUT,
      errorMsg: RFC_ERROR_MSG,
      error: false,
      validateInput() {
        if (this.input.validity.valueMissing) {
          this.errorMsg.textContent = "This field can't be blank";
        } else if (
          this.input.validity.tooShort ||
          this.input.validity.tooLong
        ) {
          this.errorMsg.textContent = `Should be 12/13 characters long, you entered ${this.input.value.length}.`;
        } else if (this.input.validity.patternMismatch) {
          this.errorMsg.textContent = "Please enter just valid characters.";
        }
      },
    },
  ];

  if (EMPLOYEE_FORM) {
    submitValidation(EMPLOYEE_FORM, SUBMIT_BTN, ELEMENTS);
    addValidationEvents(ELEMENTS);
  }
});
