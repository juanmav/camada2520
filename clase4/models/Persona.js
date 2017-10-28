const mongoose = require('mongoose');

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

module.exports = Persona;