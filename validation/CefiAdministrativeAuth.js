const validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateRegisterInput(data){
  //all the errors put here after checking
  let errors = {};


  //this checks all the data coming from server.js file is empty or not
  data.userName = !isEmpty(data.userName) ? data.userName : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.administratorType = !isEmpty(data.administratorType) ? data.administratorType : '';
  data.userId = !isEmpty(data.userId) ? data.userId : '';


  if(!validator.isLength(data.userName , {min : 3 , max : 15})){
    errors.userName = 'User Name  must be  between 3 and 15 characters';
  }
  if(!validator.isEmail(data.email)){
    errors.email = 'Email is Invalid';
  }
  if(isEmpty(data.password)){
    errors.password = 'Password is Required';
  }
  if(isEmpty(data.administratorType)){
    errors.administratorType = 'Administrator Type is Required';
  }
  if(isEmpty(data.userId)){
    errors.userId = 'User Id is Required';
  }

  
  return {
    errors,
    //if it is true it means errors doesnt occurs
    isValid : isEmpty(errors)
  }
}
