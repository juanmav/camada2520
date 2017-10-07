// Programacion funcional.

// Una funcion es un valor
// Y a una funcion le podemos pasar otra function.

let mifuncion = function(){
    return 'hola';
};

console.log(mifuncion);
console.log(mifuncion());

let altoOrder = function (fn) {
    return fn() + '!!!!!';
};

let valor = altoOrder(mifuncion);

console.log(valor);

// los valores no se mutan no se cambian sino que se generan nuevos valores.

function suma(a,b){
    return a + b;
}

let a = 5;
let b = 8;
let c = suma(a, b);

console.log(a, b, c);

let z = 10;
z = z + 1;
console.log(z);


// Arrays.


let numeros = [1,3,5,4,6,9];

console.log('Con for');
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

console.log('con ForEach');
numeros.forEach( n => {
    console.log(n);
});

console.log('Con for x 2');
let doble = [];
for(let i = 0; i < numeros.length; i++){
    doble.push(numeros[i] * 2);
}
console.log(doble);

console.log('Con Map x 2');
let dobleMap = numeros.map(n => {
    return n * 2
});

console.log(dobleMap);

let personas = [
    {
        id: 1,
        name: 'Juan',
        edad: 20
    },
    {
        id: 5,
        name: 'Gaston',
        edad: 25
    },
    {
        id: 30,
        name: 'Natalia',
        edad: 30
    },
    {
        id: 2,
        name: 'Damian',
        edad: 5
    }
];

// Devuelve solamente uno.
let encontrado = personas.find( function (p) {
    return p.id == 2;
});

console.log(encontrado);

// forEach, Map, find

// filter, reduce.
console.log('Personas mayores a 24 años');
// devuelve una coleccion.
let mayoresDe24 = personas.filter(function (p) {
    return p.edad > 24;
});

console.log(mayoresDe24);
console.log(personas);

// Del listado de personas, quiero un listado de nombres.

let nombres = personas.map( p => p.name );

console.log(nombres);

console.log('Reduce');
//let numeros = [1,3,5,4,6,9];
// 0 +1 = 1 + 3 = 4 + 5 = 9;
let sum = numeros.reduce(function (acc, n) {
    return acc + n;
}, 0);

console.log(sum);

let todojunto = nombres.reduce(function (acc, nom) {
    return acc + nom;
}, '');

console.log(todojunto);

let actualizado = personas.map( p => {
    let aux = Object.assign({},p); // p.edad = p.edad + 1; return p;
    aux.edad = p.edad + 1;
    return aux;
});

console.log(personas);
console.log(actualizado);