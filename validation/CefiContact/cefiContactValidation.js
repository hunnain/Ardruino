const validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function cefiAddContactValidation(data){
  let errors = {};
  // We have given this because when user not give any input empty so in case they give error by using this it will not give
  data.userId = !isEmpty(data.userId) ? data.userId : '';
  data.businessName = !isEmpty(data.businessName) ? data.businessName : '';
  data.contactName = !isEmpty(data.contactName) ? data.contactName : '';
  data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.industryType = !isEmpty(data.industryType) ? data.industryType : '';
  data.contactType = !isEmpty(data.contactType) ? data.contactType : '';
  data.administratorId = !isEmpty(data.administratorId) ? data.administratorId : '';

  if(validator.isEmpty(data.userId)){
    errors.userId = 'Field is required';
  }
  if(validator.isEmpty(data.businessName)){
    errors.businessName = 'Field is required';
  }
  if(validator.isEmpty(data.contactName)){
    errors.contactName = 'Field is required';
  }
  if(validator.isEmpty(data.phoneNumber)){
    errors.phoneNumber = 'Field is required';
  }
  if(validator.isEmpty(data.industryType)){
    errors.industryType = 'Field is required';
  }
  if(!validator.isEmail(data.email)){
    errors.email = 'Email is Invalid';
  }
  if(validator.isEmpty(data.contactType)){
    errors.contactType = 'Field is required';
  }
  if(validator.isEmpty(data.administratorId)){
    errors.administratorId = 'Field is required';
  }

  return {
    errors,
    isValid : isEmpty(errors)
    
  }
}