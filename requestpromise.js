const request = require('request');
const requestPromise = require('request-promise');

const POSTURL = 'https://jsonplaceholder.typicode.com/posts/1';
const USERURL = 'https://jsonplaceholder.typicode.com/users/';

/*request(POSTURL, function(err,response, data){
    let post = JSON.parse(data);

    console.log(post);
    console.log(post.userId);

    request(USERURL + post.userId, function(err,response, data2){
        let user = JSON.parse(data2);
        console.log(user.name);
    });
});*/

requestPromise(POSTURL)
    .then(function (data) {
        let post = JSON.parse(data);
        console.log(post);
        console.log(post.id);
        return requestPromise(USERURL + post.userId)
    })
    .then(function (data) {
        let user = JSON.parse(data);
        console.log(user.name);
    });
