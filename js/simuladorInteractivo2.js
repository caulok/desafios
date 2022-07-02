// Reserva online de paquetes de viaje

/* Clases */
class Paquete {
    constructor(nombre, dia, mes, anio, aerolinea, precioVenta){
        this.nombre = nombre.toUpperCase();
        this.dia = dia;
        this.mes = mes;
        this.anio = anio;
        this.aerolinea = aerolinea;
        this.comida;
        this.personas;
        this.precioVenta = precioVenta;
    }
}

class Aerolinea {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
}


// class Persona {
//     constructor(nombre, dni) {
//         this.dni = dni;
//         this.nombre = nombre;
//     }
// }

// class Comida {
//     constructor(nombre, precio) {
//         this.nombre = nombre;
//         this.precio = precio;
//     }
// }

// let comida1 = new Comida("pollo", 3000);
// let paquete1 = new Paquete("Madrid", 30, 3, 2023, "AA", 8000);

// paquete1.comida = comida1;
// console.log(paquete1);

/* Variables Globales */
let paquete = [];
let aerolineas = [];

let aerolinea1 = new Aerolinea(1, "Aerolineas Argentinas");
let aerolinea2 = new Aerolinea(2, "LATAM");
let aerolinea3 = new Aerolinea(3, "Iberia");
let aerolinea4 = new Aerolinea(4, "KLM");
let aerolinea5 = new Aerolinea(5, "Qatar Airways");

aerolineas.push(aerolinea1);
aerolineas.push(aerolinea2);
aerolineas.push(aerolinea3);
aerolineas.push(aerolinea4);
aerolineas.push(aerolinea5);


/* Bloque de funciones */

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
    alert(`No has ingresado tu nombre`)
    usuario = prompt(`Por favor informanos tu nombre`)
}


function agregarPaquetes(){
    let aerolineaSeleccionada;
    let personas = parseInt(prompt(`¿Cuántas personas viajarán a Madrid?`))
    while(personas == 0){
        alert(`No has ingresado un número de personas`)
        personas = prompt(`Por favor ingresa un número`)
    }

    for(i=1; i<=personas; i++){
        let nombre = prompt(`¿Cual es el nombre de la persona ${i}?`)
        let dia = parseInt(prompt(`Ingrese el día de vuelo`))
        while(dia == 0 || dia >= 32){
            alert(`No has ingresado un día válido`)
            dia = prompt(`Por favor informanos un día válido`)
        }

        let mes = parseInt(prompt(`Ingrese el mes de vuelo`))
        while(mes == 0 || mes >= 13){
            alert(`No has ingresado un mes válido`)
            mes = prompt(`Por favor informanos un mes válido`)
        }
        let anio = parseInt(prompt(`Ingrese el año de vuelo`))
        while(anio == 0 || anio < 2022){
            alert(`No has ingresado un año válido`)
            anio = prompt(`Por favor informanos un año válido`)
        }

        let aerolineaId = parseInt(prompt(`Ingresa la aerolinea con la que viajas:\n\n1.Aerolineas Argentinas\n2.LATAM\n3.Iberia\n4.KLM\n5.Qatar Airways`))
        // En este punto aerolinea tiene un número
        aerolineaSeleccionada = aerolineas.find(aerolinea => aerolinea.id == aerolineaId);

        if (aerolineaId < 3) {
            precioVenta = 500
        } else if (aerolineaId === 3) {
            precioVenta = 750
        } else {
            precioVenta = 1200
        }
        while(aerolineaId == 0){
            alert(`No has ingresado la aerolinea`)
            aerolineaId = prompt(`Por favor informanos el número de aerolinea`)
        }
        
        let comida = parseInt(prompt(`¿Sigues alguna dieta en particular?\n\n1.No\n2.Celíaco\n3.Kosher\n4.Vegano/Vegetariano`))
        switch(comida) {
            case 1: 
                alert(`Seleccionaste que no tienes que seguir una dieta`)
                break
            case 2: 
                alert(`Seleccionaste que necesitas comida celíaca`)
                break
            case 3: 
                alert(`Seleccionaste que necesitas comida kosher`)
                break
            case 4: 
                alert(`Seleccionaste que necesitas comida vegana/vegetariana`)
                break
            default:
                alert(`Se seleccionó por defecto que no tienes que seguir ninguna dieta`)
                break
        }

        let nuevoPaquete = new Paquete(nombre, dia, mes, anio, aerolineaId, precioVenta)
        paquete.push(nuevoPaquete)
    }
    console.log(paquete)
    
    // Suma del total de los paquetes
    const total = paquete.map(item => item.precioVenta).reduce((prev, curr) => prev + curr, 0);

    alert(`Seleccionaste la aerolinea: ${aerolineaSeleccionada.nombre}`);
    alert(`El valor total del paquete para ${personas} personas a Madrid es de US$${total}`);
    alert(`¡Gracias por tu compra ${usuario}! Nos vemos pronto`)
}

agregarPaquetes()




//
//
//
//
//
//