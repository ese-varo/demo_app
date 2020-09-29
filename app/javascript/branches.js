document.addEventListener("turbolinks:load", () => {
  class SimpleTextInput {
    constructor(input, errorMsg, error = false) {
      this.input = input;
      this.errorMsg = errorMsg;
      this.error = error;
    }

    validateInput() {
      if (this.input.validity.valueMissing) {
        this.errorMsg.textContent = "This field can't be blanck";
      } else if (this.input.validity.tooShort) {
        this.errorMsg.textContent = `Should be at least ${this.input.minLength} characters, you entered ${this.input.value.length}.`;
      }
    }
  }
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
    (NAME = new SimpleTextInput(NAME_INPUT, NAME_ERROR_MSG)),
    (STREET = new SimpleTextInput(STREET_INPUT, STREET_ERROR_MSG)),
    (NEIGHBORHOOD = new SimpleTextInput(
      NEIGHBORHOOD_INPUT,
      NEIGHBORHOOD_ERROR_MSG
    )),
    (CITY = new SimpleTextInput(CITY_INPUT, CITY_ERROR_MSG)),
    (COUNTRY = new SimpleTextInput(COUNTRY_INPUT, COUNTRY_ERROR_MSG)),
    (STREET_NUMBER = {
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
    }),
    (APARTMENT_NUMBER = {
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
    }),
    (ZIP = {
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
    }),
  ];

  if (NEW_BRANCH_FORM) {
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
