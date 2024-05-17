

let nacion = prompt("Ingrese su nacionalidad")
let prof = prompt("cual es tu profesion?")
let kmsRecorridos = prompt("Cuantos kilometros caminas por dia?")

function filosofoHipster(nacion, prof, kmsRecorridos) {
    if (nacion.toLowerCase() === "argentino" && prof.toLowerCase() === "músico" && kmsRecorridos > 2) {
        return "Soy un filósofo hipster";
    } else {
        return "Aún no soy filósofo hipster";
    }
}
let resultado = filosofoHipster(nacion, prof, kmsRecorridos);
console.log(resultado);


