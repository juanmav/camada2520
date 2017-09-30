const request = require('request');

const POSTURL = 'https://jsonplaceholder.typicode.com/posts/1';
const USERURL = 'https://jsonplaceholder.typicode.com/users/';

const requestPromise = function (url){
    return new Promise(function(resolve, reject){ // Creo una promesa nueva y le digo como funciona.
        request(url, function (err, response, data) { // Hago una llamada afuera y llama un callback
            if (err){
                reject(err) // Fallo rechazo la promesa
            } else {
                resolve(data); // Exito! devuelvo la promesa.
            }
        })
    });
};

requestPromise(POSTURL)
    .then(function (data) {
        let post = JSON.parse(data);
        console.log(post.userId);
        console.log(post);
        return requestPromise(USERURL + post.userId)
    })
    .then(function (data2) {
        let user = JSON.parse(data2);
        console.log(user.name);
    })
    .catch(function (err) {
        console.log('explotooooooooooo!');
        console.log(err)
    });
