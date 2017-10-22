const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/ejemplos2');

let personaSchema = mongoose.Schema({
    name: String,
    dni: Number,
    lastname: String,
    nationality: String
});

personaSchema.methods.getFullName = function () {
    return this.name + ' ' + this.lastname; // this se refiere a la persona particular.
};

let Persona = mongoose.model('Persona', personaSchema);

/*let pedro = new Persona({
    name: 'Pedro',
    lastname: 'Rodriguez',
    dni : 11222333,
    nationality: 'Argentina'
});

pedro.save();*/

/*let juan = new Persona({
    name: 'Juan',
    lastname: 'Perez',
    dni : 11222334,
    nationality: 'Argentina'
});

juan.save();*/

Persona
    .find({})
    .then(function(personas){
        //console.log(personas);
        personas.forEach( p => console.log(p.dni + ' ' + p._id ));
    })
    .catch(function (err) {
        console.log(err)
    });

Persona
    .findById('59eb827e787f0f38590adb92')
    .then(function (persona) {
        console.log(persona.dni);
        persona.dni = persona.dni +1;
        persona.save();
    });//*/

Persona
    .findById('59eb827e787f0f38590adb92')
    .then(function (persona) {
        persona.remove();
    });//*/

//Persona.remove({ dni : 11222334}).then()

Persona
    .findOne({ dni: 11222334 })
    .then(function (persona) {
        console.log(persona.name +' '+ persona.lastname );
        console.log(persona.getFullName());
    });