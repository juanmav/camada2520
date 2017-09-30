const http = require('http');
const fs = require('fs');

const server = http.createServer(function (request, response) {

    fs.readFile('./temperatura.txt', function (err, data) {
        response.write('Servicio de clima en Bs As: \n');
        response.write('La temperatura es: '+ data.toString() +' \n');
        fs.readFile('./humedad.txt', function (err, data2) {
            response.write('La Humedad es: '+ data2.toString() +' \n');
            fs.readFile('./uv.txt', function (err, data3) {
                response.write('los uv son: '+ data3.toString() +' \n');
                response.end();
            });
        });
    });

});

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

server.listen(4000);
console.log('Levante mi servidor de nodejs en el puerto 4000');