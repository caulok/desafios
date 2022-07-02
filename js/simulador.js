/*RESERVA ONLINE DE PAQUETES DE VIAJES:

    Una reserva que está compuesta de 1 paquete y personas. Los usuarios pueden elegir cualquiera de los 3 paquetes (Madrid, Toledo y Aranjuez). Cada uno definido en una fecha determinada y una cantidad de días establecidos. Luego el objetivo es mostrar un resumen de la reserva.*/

/*1ro las clases*/

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
    constructor(name, pasaporte) {
        this.nombre = prompt(name);
        this.pasaporte = parseInt(pasaporte);
    }
}

/*2do las variables globales*/
let personas = [];
let paquetes = [];
let reservas = [];

// let persona = new Persona() ----- ACÁ SE COMPLICA, NO ESTÁ CORRECTO,NO?

let paqueteMadrid = new Paquete(1, "Madrid", new Date("2024-11-24"), 7, "Hilton Hotel", 13000);
let paqueteToledo = new Paquete(2, "Toledo", new Date("2024-3-14"), 10, "Nuestro Camino Hotel", 6000);
let paqueteAranjuez = new Paquete(3, "Aranjuez", new Date("2024-05-12"), 10, "BlueStar Aparts", 7000);

paquetes.push(paqueteMadrid);
paquetes.push(paqueteToledo);
paquetes.push(paqueteAranjuez);

/*Validar si es un string*/
const validarIsNotString = (dato) => {
    let datoParseado = parseInt(dato);
    if(isNaN(datoParseado)) {
        return false;
    }
    return true;
}

/* Ingreso de los datos */
let usuario = prompt(`Hola, ¿podrías indicarnos cuál es tu nombre?`);
while(usuario === "" || validarIsNotString(usuario)){
    alert(`No has ingresado tu nombre`);
    usuario = prompt(`Por favor informanos tu nombre`);
}
let elegirPaquete = parseInt(prompt(`Elegí por favor un paquete:\n\n1.Madrid\n2.Toledo\n3.Aranjuez`))
paqueteElegido = paquetes.find(paquete => paquete.id == elegirPaquete);

let reserva = new Reserva(1, Date(), paqueteElegido, Persona)

reservas.push(reserva)


/*3ro laejecución de funciones*/
console.log(reserva);
console.log(reserva.paquete);
alert(`En la consola están los resultados de tu reserva ${usuario}`)

