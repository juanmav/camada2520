const fs = require('fs');

console.log('1. voy abrir el archivo');

const fileAsync = fs.readFile('./archivo.txt', function (error, data) {
    console.log('2. muestro la data del archivo');
    console.log(data.toString());
});

console.log('3. mostre la data del archivo');