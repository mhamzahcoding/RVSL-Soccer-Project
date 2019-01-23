const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateFreeagentInput(data) {
  let errors = {};

  data.skills = !isEmpty(data.skills) ? data.skills : '';
  data.description = !isEmpty(data.description) ? data.description : '';
  data.from = !isEmpty(data.from) ? data.from : '';

  if (Validator.isEmpty(data.skills)) {
    errors.skills = 'Job skills field is required';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'description field is required';
  }

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
