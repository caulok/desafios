/*RESERVA ONLINE DE PAQUETES DE VIAJES:

    Una reserva que está compuesta de 1 paquete y personas. Los usuarios pueden elegir cualquiera de los 3 paquetes (Madrid, Toledo y Aranjuez). Cada uno definido en una fecha determinada y una cantidad de días establecidos. Luego el objetivo es mostrar un resumen de la reserva.*/

/* CLASES */

class Reserva {
    constructor(generacion, paquete, persona){
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
        this.nombre = name;
        this.pasaporte = pasaporte;
    }
}

/*2do las variables globales*/
let personas = [];
let paquetes = [];
let reservas = [];

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

/* INGRESO DE LOS DATOS */
    
    /* Ingreso usuario */
let usuario = prompt(`Hola, ¿podrías indicarnos cuál es tu nombre?`);
while(usuario === "" || validarIsNotString(usuario) || usuario.length < 2){
    alert(`No has ingresado tu nombre o es demasiado corto`);
    usuario = prompt(`Por favor informanos tu nombre`);
}
    /* Elección de paquete */
let elegirPaquete = parseInt(prompt(`Elegí por favor un paquete:\n\n1.Madrid\n2.Toledo\n3.Aranjuez`));
paqueteElegido = paquetes.find(paquete => paquete.id == elegirPaquete);

    /* Elección de personas */
let cantidad = parseInt(prompt(`¿Cuántas personas viajarán?`));

let names = prompt(`Ingresa el nombre de la persona`);
    while(names === "" || validarIsNotString(names) || usuario.length < 2){
        alert(`No has ingresado un nombre o es demasiado corto`);
        names = prompt(`Por favor informanos el nombre de la persona`);
    }
let passports = parseInt(prompt(`Ingresa tu pasaporte`));
    while(passports === "" || passports.toString().length < 6){
        alert(`No has ingresado tu pasaporte o colocaste un número menor a 6 dígitos`);
        passports = prompt(`Por favor informanos tu pasaporte`);
    }

let people = new Persona(names, passports);
personas.push(people);

    /* RESERVA */
let reserva = new Reserva(Date(), paqueteElegido, people);
reservas.push(reserva);


/* DOM */
let mostrarNombre = document.getElementById("nombre");
mostrarNombre.innerText = usuario;

/*3ro la ejecución de funciones*/
console.log(reserva);
alert(`En la consola están los resultados de tu reserva. Sugerimos que te fijes allí ${usuario}.\n\nTIP: Podés desplegar la reserva para ver el paquete y tus datos.`)

