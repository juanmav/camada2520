const fs = require('fs');

console.log('1. Voy abrir el archivo');

let file = fs.readFileSync('./archivo.txt');

console.log('2. abri el archivo y muestto la data');
console.log(file.toString());