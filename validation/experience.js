const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data) {
  let errors = {};
  data.team = !isEmpty(data.team) ? data.team : '';

  if (Validator.isEmpty(data.team)) {
    errors.team = 'Team field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
