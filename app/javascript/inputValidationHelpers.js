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

const validInput = (element) => {
  element.input.className = "form-control is-valid";
  element.errorMsg.textContent = "Looks good!";
  element.errorMsg.className = "error valid-feedback";
};

const invalidInput = (element) => {
  element.input.className = "form-control is-invalid";
  element.errorMsg.className = "error invalid-feedback";
};

const validateFields = (ELEMENTS) => {
  let valid = false;
  for (const ELEMENT of ELEMENTS) {
    valid = valid || ELEMENT.error;
  }
  return !valid;
};

const submitValidation = (SUBMIT_BTN, ELEMENTS) => {
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
    if (validateFields(ELEMENTS)) {
      NEW_USER_FORM.submit();
    }
  });
};

const addValidationEvents = (ELEMENTS) => {
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
};

export {
  SimpleTextInput,
  validInput,
  invalidInput,
  validateFields,
  submitValidation,
  addValidationEvents,
};
