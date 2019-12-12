const validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateLoginInput(data){
  //all the errors put here after checking
  let errors = {};


  //this checks all the data coming from server.js file is empty or not
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';


  if(!validator.isEmail(data.email)){
    errors.email = 'Email is Invalid';
  }
  if(isEmpty(data.password)){
    errors.password = 'Password is Required';
  }

  
  return {
    errors,
    //if it is true it means errors doesnt occurs
    isValid : isEmpty(errors)
  }
}
