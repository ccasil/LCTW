const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEventfulInput(data) {
  let errors = {};

  data.eventtitle = !isEmpty(data.eventtitle) ? data.eventtitle : "";

  if (!Validator.isLength(data.eventtitle, { min: 3, max: 40 })) {
    errors.eventtitle = "Post must be between 3 and 40 characters";
  }

  if (Validator.isEmpty(data.eventtitle)) {
    errors.eventtitle = "Text field is required";
  }

  return {
    errors,
    // isValid: errors
    isValid: isEmpty(errors)
  };
};
