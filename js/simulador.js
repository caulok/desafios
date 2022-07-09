/*RESERVA ONLINE DE PAQUETES DE VIAJES:

    Una reserva que está compuesta de 1 paquete y personas. Los usuarios pueden elegir cualquiera de los 3 paquetes (Madrid, Toledo y Aranjuez). Cada uno definido en una fecha determinada y una cantidad de días establecidos. Luego el objetivo es mostrar un resumen de la reserva.*/

/* CLASES */

class Reserva {
    constructor(id, generacion, paquete, persona){
        this.id = id;
        this.generacion_de_ticket = generacion;
        this.paquete = paquete;
        this.persona = persona;
    }
}
class Paquete {
    constructor(id, ubicacion, fecha, dias, hospedaje, precio){
        this.id = id;
        this.ubicacion = ubicacion;
        this.fecha_contratada = fecha;
        this.dias = dias;
        this.hospedaje = hospedaje;
        this.precio = precio;
    }
}
class Persona {
    constructor(id, nombre, apellido, nacionalidad, pasaporte) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.pasaporte = pasaporte;
    }
}

/* FUNCIONES */

/*Validar si es un string*/
const validarIsNotString = (dato) => {
    let datoParseado = parseInt(dato);
    if(isNaN(datoParseado)) {
        return false;
    }
    return true;
}
// let agregarPersonas = document.querySelector("#agregarPersonas");
// function agregarFormulario(){
// let crearColumna = document.createElement("div");
//     crearColumna.className = "col-md-3";
//     crearColumna.id = `formularioReserva`;
//     crearColumna.innerHTML = `
//     <h3>Agrega personas:</h3>
//             <form class="form-floating mb-3" id="formulario">
//               <div class="form-floating mb-3">
//                 <input type="text" class="form-control" id="nombreInput" placeholder="Nombre">
//                 <label for="nombre">Nombre</label>
//               </div>
//               <div class="form-floating mb-3">
//                 <input type="text" class="form-control" id="apellidoInput" placeholder="Apellido">
//                 <label for="apellido">Apellido</label>
//               </div>
//               <div class="form-floating mb-3">
//                 <input type="text" class="form-control" id="pasaporteInput" placeholder="Pasaporte">
//                 <label for="pasaporte">Pasaporte</label>
//               </div>
//               <div class="form-floating mb-3">
//                 <input type="text" class="form-control" id="nacionalidadInput" placeholder="Nacionalidad">
//                 <label for="nacionalidad">Nacionalidad</label>
//               </div>
//               <input class="btn btn-primary" type="submit" value="Agregar viajero">
//             </form>
//             <input class="btn btn-success mt-4" id="finalizarReserva" type="button" value="Finalizar reserva">
//     `;
//     agregarPersonas.append(crearColumna);
// }

/* VARIABLES GLOBALES */

let personas = [];
let paquetes = [];
let reservas = [];
let contadorDeReservas = 1;
let contadorPersonas = 1;

/* DOM */



/* Paquetes */
botonReservaUno = document.querySelector("#boton-reserva1");
botonReservaDos = document.querySelector("#boton-reserva2");
botonReservaTres = document.querySelector("#boton-reserva3");

botonReservaUno.addEventListener('click', ()=> {
    botonReservaUno.classList.remove("btn-primary");
    botonReservaUno.classList.add("btn-secondary");
    let paqueteMadrid = new Paquete(1, "Madrid", new Date("2024-11-24"), 7, "Hilton Hotel", 13000);
    paquetes.push(paqueteMadrid);
    // agregarFormulario();
})

botonReservaDos.addEventListener('click', ()=> {
    botonReservaDos.classList.remove("btn-primary");
    botonReservaDos.classList.add("btn-secondary");
    let paqueteToledo = new Paquete(2, "Toledo", new Date("2024-3-14"), 10, "Nuestro Camino Hotel", 6000);
    paquetes.push(paqueteToledo);
    // agregarFormulario();
})
botonReservaTres.addEventListener('click', ()=> {
    botonReservaTres.classList.remove("btn-primary");
    botonReservaTres.classList.add("btn-secondary");
    let paqueteAranjuez = new Paquete(3, "Aranjuez", new Date("2024-05-12"), 10, "BlueStar Aparts", 7000);
    paquetes.push(paqueteAranjuez);
    // agregarFormulario();
})

/* Formulario */
let formulario = document.querySelector("#formulario");
let nombreInput = document.querySelector("#nombreInput");
let apellidoInput = document.querySelector("#apellidoInput");
let pasaporteInput = document.querySelector("#pasaporteInput");
let nacionalidadInput = document.querySelector("#nacionalidadInput");

formulario.onsubmit = (event) => validarFormulario(event);
function validarFormulario(event){
    event.preventDefault();
    id = contadorPersonas++;
    nombre = nombreInput.value;
    apellido = apellidoInput.value;
    pasaporte = pasaporteInput.value;
    nacionalidad = nacionalidadInput.value;
    
    let persona = new Persona(id, nombre, apellido, pasaporte, nacionalidad);
    personas.push(persona);
    alert(`¡Agregaste exitosamente a ${nombre}!`)
    formulario.reset();
}

/* Reserva */
let finalizarReserva = document.querySelector("#finalizarReserva");

finalizarReserva.addEventListener('click', ()=> {
    let reserva = new Reserva(contadorDeReservas, Date(), paquetes, personas);
    contadorDeReservas++;
    reservas.push(reserva);
    alert(`¡Finalizaste la reserva! En la consola tenés el resumen`)
    console.log(reservas);
});

