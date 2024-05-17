

let mensaje1 = ("ingresa un numero")
let numero = prompt(mensaje1)
let mensaje2 = ("ingresa un numero")
let numero2 = prompt(mensaje2)

function multiplicar(numero, numero2) {
    let resultado = numero * numero2;
    return `El resultado de multiplicar ${numero} y ${numero2} es: ${resultado}`;
}

console.log(multiplicar(numero, numero2));
