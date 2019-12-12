const validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function cefiVisitValidation(data){
  let errors = {};
  // We have given this because when user not give any input empty so in case they give error by using this it will not give
  data.userId = !isEmpty(data.userId) ? data.userId : '';
  data.contactId = !isEmpty(data.contactId) ? data.contactId : '';
  data.contractId = !isEmpty(data.contractId) ? data.contractId : '';
  data.reminder = !isEmpty(data.reminder) ? data.reminder : '';
  data.lat = !isEmpty(data.lat) ? data.lat : '';
  data.long = !isEmpty(data.long) ? data.long : '';
  data.address = !isEmpty(data.address) ? data.address : '';
  data.purpose = !isEmpty(data.purpose) ? data.purpose : '';
  data.administratorId = !isEmpty(data.administratorId) ? data.administratorId : '';

  if(validator.isEmpty(data.userId)){
    errors.userId = 'Field is required';
  }
  if(validator.isEmpty(data.contactId)){
    errors.contactId = 'Field is required';
  }
  if(validator.isEmpty(data.contractId)){
    errors.contractId = 'Field is required';
  }
  if(validator.isEmpty(data.reminder)){
    errors.reminder = 'Field is required';
  }
  if(validator.isEmpty(data.purpose)){
    errors.purpose = 'Field is required';
  }
  if(validator.isEmpty(data.administratorId)){
    errors.administratorId = 'Field is required';
  }

  return {
    errors,
    isValid : isEmpty(errors)
    
  }
}