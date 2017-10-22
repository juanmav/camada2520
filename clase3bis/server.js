const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Conexion mongodb.
mongoose.connect('mongodb://127.0.0.1:27017/ejemplos2');

// Configuracion
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Configuracion de rutas.

const personasRouter = require('./routes/personas');
const postsRouter = require('./routes/posts');

app.use('/personas/', personasRouter);
app.use('/posts/', postsRouter);


app.listen(4000);
console.log('Express corre en el puerto 4000');