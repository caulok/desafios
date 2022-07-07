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
    constructor(id, name, nacionalidad, pasaporte) {
        this.id = id;
        this.nombre = name;
        this.nacionalidad = nacionalidad;
        this.pasaporte = pasaporte;
    }
}

/* FUNCIONES */
function agregarPersona(i) {
    let mainName = prompt(`Ingrese el nombre de la persona Nro ${i}`);
    while(mainName === "" || validarIsNotString(mainName) || usuario.length < 2){
        alert(`No has ingresado un nombre o es demasiado corto`);
        mainName = prompt(`Por favor informanos el nombre de la persona Nro ${i}`);
    }
    let passport = parseInt(prompt(`Ingrese el pasaporte de la persona Nro ${i}`));
    while(passport === "" || passport.toString().length < 6){
        alert(`No has ingresado un pasaporte o colocaste un número menor a 6 dígitos`);
        passport = prompt(`Por favor informanos el pasaporte de la persona Nro ${i}`);
    }
    let nacionalidad = prompt(`Ingrese la nacionalidad de la persona Nro ${i}`)
    while(nacionalidad === "" || validarIsNotString(nacionalidad)){
        alert(`No has ingresado una nacionalidad`);
        nacionalidad = prompt(`Por favor informanos la nacionalidad de la persona Nro ${i}`);
    }
    let persona = new Persona(contadorPersonas, mainName, nacionalidad, passport);
    return persona;
}

/*Validar si es un string*/
const validarIsNotString = (dato) => {
    let datoParseado = parseInt(dato);
    if(isNaN(datoParseado)) {
        return false;
    }
    return true;
}

/* VARIABLES GLOBALES */
let personas = [];
let paquetes = [];
let reservas = [];
let contadorDeReservas = 1;
let contadorPersonas = 1;

let paqueteMadrid = new Paquete(1, "Madrid", new Date("2024-11-24"), 7, "Hilton Hotel", 13000);
let paqueteToledo = new Paquete(2, "Toledo", new Date("2024-3-14"), 10, "Nuestro Camino Hotel", 6000);
let paqueteAranjuez = new Paquete(3, "Aranjuez", new Date("2024-05-12"), 10, "BlueStar Aparts", 7000);

paquetes.push(paqueteMadrid);
paquetes.push(paqueteToledo);
paquetes.push(paqueteAranjuez);


/* INGRESO DE LOS DATOS */
    
    /* Ingreso usuario */
let usuario = prompt(`Hola, ¿podrías indicarnos cuál es tu nombre?`);
while(usuario === "" || validarIsNotString(usuario) || usuario.length < 2){
    alert(`No has ingresado tu nombre o es demasiado corto`);
    usuario = prompt(`Por favor informanos tu nombre`);
}
    /* Elección de paquete */
let elegirPaquete = parseInt(prompt(`Elegí por favor un paquete:\n\n1.Madrid\n2.Toledo\n3.Aranjuez`));
while(elegirPaquete === "" || isNaN(elegirPaquete)){
    alert(`No has ingresado un número`);
    elegirPaquete = prompt(`Por favor selecciona un número de paquete:\n\n1.Madrid\n2.Toledo\n3.Aranjuez`);
}
let paqueteElegido = paquetes.find(paquete => paquete.id == elegirPaquete);

    /* Elección de personas */
let cantidad = parseInt(prompt(`¿Cuántas personas viajarán?`));
while(cantidad === "" || isNaN(cantidad)){
    alert(`No has ingresado una cantidad`);
    cantidad = prompt(`Por favor selecciona una cantidad`);
}
for(let i = 1; i <= cantidad; i++) {
    personas.push(agregarPersona(i));
    contadorPersonas++;
}

    /* RESERVA */
let reserva = new Reserva(contadorDeReservas, Date(), paqueteElegido, personas);
contadorDeReservas++;
reservas.push(reserva);

/* DOM */
let mostrarNombre = document.getElementById("nombre");
mostrarNombre.innerText = usuario.toUpperCase();
let mostrarPaquete = document.getElementById("paquete");
mostrarPaquete.innerText = paqueteElegido['ubicacion'];
let mostrarCantidad = document.getElementById("cantidad");
mostrarCantidad.innerText = cantidad;
let mostrarFecha = document.getElementById("fecha");
mostrarFecha.innerText = `${paqueteElegido['fecha_contratada'].getDate()}/${paqueteElegido['fecha_contratada'].getMonth()+1}/${paqueteElegido['fecha_contratada'].getFullYear()}`;

/*3ro la ejecución de funciones*/
console.log(reserva);
alert(`¡Gracias por reservar con nosotros!`)

