const express = require('express');
const app = express();
const bodyParse = require('body-parser');
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectID;

// Ver QueryString

// Configuracion MongoClient
let db;
MongoClient.connect('mongodb://127.0.0.1:27017/ejemplos', function (err, database) {

    if (err){
        throw err;
    }
    db = database;
    console.log('conexion a mongodb con exito!');

});

// Configuracion
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    db.collection('personas').find({}).toArray(function (err, users) {

        if (err){
            res.status(503).json(err);
        } else {
            res.status(200).json(users);
        }
    });
});

app.get('/:userId', function (req, res) {
    let userId = req.params.userId;
    try {
        let o_userId = new ObjectID(userId);
        db.collection('personas').findOne({ _id: o_userId }, function (err, user) {

            if (err){
                res.status(503).json(err);
            } else if (user){
                res.status(200).json(user);
            } else {
                res.status(404).json({ message : 'usuario no existe'});
            }
        })
    } catch (error) {
        res.status(503).json({ message: 'hubo un error'});
    }


});

app.post('/', function (req, res) {
    let data = req.body; // aca viene la data del usuario.

    // Aca validar si los datos estan bien.

    db.collection('personas').insertOne(data, function (err, result) {
       if (err){
           res.status(503).json(err);
       } else {
           res.status(201).json(result);
       }
    })

});

app.put('/:userId', function (req, res) {
    let userId = req.params.userId;
    let data = req.body;
    let o_userId = new ObjectID(userId);

    // salvedad.
    delete data._id;

    db.collection('personas').updateOne({_id: o_userId}, { $set: data }, function (err, result) {
        if (err){
            res.status(503).json(err);
        } else {
            res.status(202).json(result);
        }

    })

});

app.delete('/:userId', function (req, res) {
    let userId = req.params.userId;
    let o_userId = new ObjectID(userId);

    db.collection('personas').deleteOne({ _id: o_userId }, function (err, result) {

        // Chequear el error (503)
        // Chequear el resultado. Si estaba o no (404)
        // Se borro (202)

        if(err){
            res.status(503)
        } else {
            if (result.result.n == 0){
                res.status(404).json( { message: 'el usuario no existe'})
            } else {
                res.status(200).json(result);
            }
        }
    })
});

app.listen(4000);
console.log('Levante mi servidor de express en 4000');