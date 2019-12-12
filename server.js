const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path =require('path');
var cors = require('cors')

//this MODULES container all our routes logic

const cefiAdminitrationAuth  = require('./routes/api/cefiAdminitrationAuth');


//Initialize axpress server 
const app = express();

// Allow CORS
app.use(cors())

//bodyParser middleware 
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

//this is database key which is in config/keys file with name mongoURI
const db = require('./config/keys').mongoURI

//Connect to mongosdb database by giving URI which returns a promise

mongoose.connect(db , { useNewUrlParser: true })
.then(() => console.log('Mongodb is conected'))
.catch((err) => console.log(err));

//passport middleware itis the initialization step of passport
app.use(passport.initialize())

//passport config as any jwt req comes i will send it to config folder
//where all logic defines 
//we import function from config/passport folder ana pass passport as a arg  below


app.use('/api', cefiAdminitrationAuth);

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError) return res.status(400).send(JSON.stringify({
        err: "The body of your request is not valid json!"
    }))

    console.error(err);
    res.status(500).send();
});

//save deployment port or local port in PORT variable
//this is standard to deploy api on heroku or other server
const PORT = process.env.PORT || 3000;

process.env.NODE_ENV = 'production';

//this is for start the server
app.listen(PORT , () => console.log(`server is running on port ${PORT}`));