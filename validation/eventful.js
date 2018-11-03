const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateEventfulInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";

  if (!Validator.isLength(data.title, { min: 3, max: 40 })) {
    errors.title = "Post must be between 3 and 40 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Text field is required";
  }

  return {
    errors,
    // isValid: errors
    isValid: isEmpty(errors)
  };
};
