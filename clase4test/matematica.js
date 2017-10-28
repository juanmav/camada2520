function sumar(a, b) {
    // actualizo sumar...

    if ( a == 2 && b == 2){
        return 5;
    }  else {
        return a + b;
    }
}

function restar(a, b) {
    return a - b;
}

function dividir(a, b) {
    return a / b
}

function multiplicar(a, b) {
    return a * b;
}

function porcentaje(a, b) {
    return a / b * 100;
}

module.exports = {
    sumar,
    restar,
    dividir,
    multiplicar,
    porcentaje
};