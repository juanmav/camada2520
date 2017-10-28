const test = require('tape');
const mat = require('./matematica');


test('Probar la suma', function (t) {
    t.equal(mat.sumar(3,5), 8);
    t.equal(mat.sumar(10,10), 20);
    t.isNotEqual(mat.sumar(10,10), 21);
    t.equal(mat.sumar(2,2), 5);
    t.end();
});

test('Probar la resta', function (t) {
    t.equal(mat.restar(5,5), 0);
    t.equal(mat.restar(10, 5), 5);
    t.equal(mat.restar(5, 10), -5);
    t.end();
});

function borrarPost(postId, userId){
    // Lo borre 1
    // No lo borre 2
    // No sos el usuario 3
    // Logica.
}

test('Probar borrar post', function (t) {

    t.equal(borrarPost(1,2), 1);
    t.equal(borrarPost(2,4), 3);

});

