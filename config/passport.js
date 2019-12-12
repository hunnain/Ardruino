//passport contains different strategy but we want jwt bcx we use jwt
const JwtStrategy = require('passport-jwt').Strategy;
//this is for extract the data from jwt-token
const ExtractJwt = require('passport-jwt').ExtractJwt;

//this is for validate user information
const mongoose = require('mongoose');
// const Pharmacy = mongoose.model('pharmacies');
//this is also for valodate token
const keys = require('./keys');

//this is the requirement of passport strategy we used 
const opts = {};

//extract and put data in options
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;
