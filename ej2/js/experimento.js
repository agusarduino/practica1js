

let mensaje = "Ingresa tu nombre"
let nombre = prompt(mensaje)
console.log(nombre)

let mensaje2 = "Ingresa tu edad"
let edad = prompt(mensaje2)
console.log(edad)

let mensaje3 = "Te gustan los deportes?"
let fanDeportes = confirm(mensaje3)
console.log(fanDeportes)


let total = alert(`Muchas Gracias ${nombre} por responder a nuestras preguntas`)

let usuario ={
    nombre: nombre,
    edad: edad,
    deportistaProfesional: function(x){
        if (fanDeportes){
            console.log("Si, soy fan de los deportes")
        }
        else{"No soy tan fan aún de los deportes"
        }
    }
}
console.log(usuario.deportistaProfesional(fanDeportes))

