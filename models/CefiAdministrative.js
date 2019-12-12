const mongoose = require('mongoose');

//import schema class in mongoose
const Schema = mongoose.Schema;

//create schema for users 
const apiHitSchema = new Schema({
  date : {
    type  : Date,
    required : true
  },
  
})


//Create a model of name Pharmacy and pass it our schema which is defined above

module.exports = apiHit = mongoose.model('cefiAdministrator' , apiHitSchema);