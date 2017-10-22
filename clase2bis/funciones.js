function Persona(name, lastname) {
    this.name = name;
    this.lastname = lastname;

    this.getFullname = () => this.name + ' ' + this.lastname;

    this.getName = function(){
        return this.name
    }.bind(this)
}

let persona = new Persona('pepito', 'rodriguez');

console.log(persona.getFullname());