const request = require('request');


console.log('1. Voy a llamar al servidor para pedir los usuarios');

request('https://jsonplaceholder.typicode.com/users/', function(err,response, data){

    console.log('2. Aca obtuve la data del servidor');
    console.log(data.length);

});

request('https://jsonplaceholder.typicode.com/posts/', function(err,response, data){

    console.log('3. Aca obtuve la data del servidor');
    console.log(data.length);

});

console.log('4. Ya pedi los datos al servidor');