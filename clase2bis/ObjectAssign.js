let usuario = {
    name: 'Pepe',
    apellido: 'Rodriguez',
    dni: 2020202
};

function copyUser(user){
    return {
        name: user.name,
        apellido: user.apellido,
        dni : user.dni
    }
}

let usuario2 = copyUser(usuario);

usuario2.name = 'Pedro';

console.log(usuario);
console.log(usuario2);

let usuario3 = Object.assign({}, usuario);

usuario3.name = 'Roberto';

console.log(usuario3);