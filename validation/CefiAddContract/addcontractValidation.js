const validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function cefiAddContractValidation(data){
  let errors = {};
  // We have given this because when user not give any input empty so in case they give error by using this it will not give
  data.userId = !isEmpty(data.userId) ? data.userId : '';
  data.contactId = !isEmpty(data.contactId) ? data.contactId : '';
  data.contractStatus = !isEmpty(data.contractStatus) ? data.contractStatus : '';
  data.projectedPurchaseDate = !isEmpty(data.projectedPurchaseDate) ? data.projectedPurchaseDate : '';
  data.equipmentDetails = !isEmpty(data.equipmentDetails) ? data.equipmentDetails : '';
  data.equipmentCost = !isEmpty(data.equipmentCost) ? data.equipmentCost : '';
  data.rating = !isEmpty(data.rating) ? data.rating : '';
  data.contractNumber = !isEmpty(data.contractNumber) ? data.contractNumber : '';
  data.administratorId = !isEmpty(data.administratorId) ? data.administratorId : '';

  if(validator.isEmpty(data.userId)){
    errors.userId = 'Field is required';
  }
  if(validator.isEmpty(data.contactId)){
    errors.contactId = 'Field is required';
  }
  if(validator.isEmpty(data.contractStatus)){
    errors.contractStatus = 'Field is required';
  }
  if(validator.isEmpty(data.projectedPurchaseDate)){
    errors.projectedPurchaseDate = 'Field is required';
  }
  if(validator.isEmpty(data.equipmentCost)){
    errors.equipmentCost = 'Field is required';
  }
  if(!data.equipmentDetails.length){
    errors.equipmentDetails = 'Field is required';
  }
  if(validator.isEmpty(data.rating)){
    errors.rating = 'Field is required';
  }
  if(validator.isEmpty(data.contractNumber)){
    errors.contractNumber = 'contractNumber is required';
  }
  if(validator.isEmpty(data.administratorId)){
    errors.administratorId = 'administratorId is required';
  }

  return {
    errors,
    isValid : isEmpty(errors)
    
  }
}