const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

// configuracion.
mongoose.connect('mongodb://127.0.0.1:27017/twitterclon');
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({extended : false}));


// Routes
const registerRouter = require('./routes/register');
const loginRouter =require('./routes/login');
const tweetsRouter = require('./routes/tweets');
const authValidator = require('./routes/middlewares/authvalidator');

app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/tweets', authValidator, tweetsRouter);

app.listen(4000);

console.log('Twitter clon corriendo en puerto 4000');