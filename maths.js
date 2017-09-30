function sum(a, b ) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function resta(a, b) {
    return a - b;
}

function div(a, b) {
    return a /b;
}

// No exponemos la funcion pi hacia afuera
// es de uso interno de nuestro modulo.
function pi(){
    return 3.1416
}

module.exports = {
    sum: sum,
    mul: mul,
    resta: resta,
    div: div
};