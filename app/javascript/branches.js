import {
  SimpleTextInput,
  submitValidation,
  addValidationEvents,
} from "./inputValidationHelpers.js";

document.addEventListener("turbolinks:load", () => {
  const NEW_BRANCH_FORM = document.querySelector("#branch-form");
  const SUBMIT_BTN = document.querySelector("#submit-btn");

  const NAME_INPUT = document.querySelector("#branch_name");
  const NAME_ERROR_MSG = document.querySelector("#branch_name ~ .error");

  const STREET_INPUT = document.querySelector("#branch_street");
  const STREET_ERROR_MSG = document.querySelector("#branch_street ~ .error");

  const NEIGHBORHOOD_INPUT = document.querySelector("#branch_neighborhood");
  const NEIGHBORHOOD_ERROR_MSG = document.querySelector(
    "#branch_neighborhood ~ .error"
  );

  const STREET_NUMBER_INPUT = document.querySelector("#branch_street_number");
  const STREET_NUMBER_ERROR_MSG = document.querySelector(
    "#branch_street_number ~ .error"
  );

  const APARTMENT_NUMBER_INPUT = document.querySelector(
    "#branch_apartment_number"
  );
  const APARTMENT_NUMBER_ERROR_MSG = document.querySelector(
    "#branch_apartment_number ~ .error"
  );

  const CITY_INPUT = document.querySelector("#branch_city");
  const CITY_ERROR_MSG = document.querySelector("#branch_city ~ .error");

  const COUNTRY_INPUT = document.querySelector("#branch_country");
  const COUNTRY_ERROR_MSG = document.querySelector("#branch_country ~ .error");

  const ZIP_INPUT = document.querySelector("#branch_zip_code");
  const ZIP_ERROR_MSG = document.querySelector("#branch_zip_code ~ .error");

  const ELEMENTS = [
    new SimpleTextInput(NAME_INPUT, NAME_ERROR_MSG),
    new SimpleTextInput(STREET_INPUT, STREET_ERROR_MSG),
    new SimpleTextInput(NEIGHBORHOOD_INPUT, NEIGHBORHOOD_ERROR_MSG),
    new SimpleTextInput(CITY_INPUT, CITY_ERROR_MSG),
    new SimpleTextInput(COUNTRY_INPUT, COUNTRY_ERROR_MSG),
    {
      input: STREET_NUMBER_INPUT,
      errorMsg: STREET_NUMBER_ERROR_MSG,
      error: false,
      validateInput() {
        if (this.input.validity.valueMissing) {
          this.errorMsg.textContent = "This field can't be blank";
        } else if (this.input.validity.patternMismatch) {
          this.errorMsg.textContent = "Please enter just numbers.";
        }
      },
    },
    {
      input: APARTMENT_NUMBER_INPUT,
      errorMsg: APARTMENT_NUMBER_ERROR_MSG,
      error: false,
      validateInput() {
        if (this.input.validity.valueMissing) {
          this.errorMsg.textContent = "This field can't be blank";
        } else if (this.input.validity.patternMismatch) {
          this.errorMsg.textContent = "Please enter just numbers.";
        }
      },
    },
    {
      input: ZIP_INPUT,
      errorMsg: ZIP_ERROR_MSG,
      error: false,
      validateInput() {
        if (this.input.validity.valueMissing) {
          this.errorMsg.textContent = "This field can't be blank";
        } else if (
          this.input.validity.tooShort ||
          this.input.validity.tooLong
        ) {
          this.errorMsg.textContent = `Should be ${this.input.minLength} digits, you entered ${this.input.value.length}.`;
        } else if (this.input.validity.patternMismatch) {
          this.errorMsg.textContent = "Please enter just numbers.";
        }
      },
    },
  ];

  if (NEW_BRANCH_FORM) {
    submitValidation(SUBMIT_BTN, ELEMENTS);
    addValidationEvents(ELEMENTS);
  }
});
