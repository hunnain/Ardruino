const validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function cefiAdminMessagesValidation(data){
  let errors = {};
  // We have given this because when user not give any input empty so in case they give error by using this it will not give
  data.messageString = !isEmpty(data.messageString) ? data.messageString : '';
  data.administratorId = !isEmpty(data.administratorId) ? data.administratorId : '';

  if(validator.isEmpty(data.messageString)){
    errors.messageString = 'Field is required';
  }
  if(validator.isEmpty(data.administratorId)){
    errors.administratorId = 'Field is required';
  }

  return {
    errors,
    isValid : isEmpty(errors)
    
  }
}