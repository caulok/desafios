let usuario = prompt(`Hola, ¿podrías indicarnos cuál es tu nombre?`)
while(usuario == 0){
    alert(`No has ingresado tu nombre`)
    usuario = prompt(`Por favor informanos tu nombre`)
}

class Paquete {
    constructor(nombre, dia, mes, anio, aerolinea, comida, precioVenta){
        this.nombre = nombre.toUpperCase()
        this.dia = dia
        this.mes = mes
        this.anio = anio
        this.aerolinea = aerolinea
        this.comida = comida
        this.precioVenta = precioVenta
    }
}

function agregarPaquetes(){
    let personas = parseInt(prompt(`¿Cuántas personas viajarán a Madrid?`))
    while(personas == 0){
        alert(`No has ingresado un número de personas`)
        personas = prompt(`Por favor ingresa un número`)
    }

    let paquete = []

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

        let aerolinea = parseInt(prompt(`Ingresa la aerolinea con la que viajas:\n\n1.Aerolineas Argentinas\n2.LATAM\n3.Iberia\n4.KLM\n5.Qatar Airways`))
        if (aerolinea < 3) {
            precioVenta = 500
        } else if (aerolinea === 3) {
            precioVenta = 750
        } else {
            precioVenta = 1200
        }
        while(aerolinea == 0){
            alert(`No has ingresado la aerolinea`)
            aerolinea = prompt(`Por favor informanos el número de aerolinea`)
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

        let nuevoPaquete = new Paquete(nombre, dia, mes, anio, aerolinea, comida, precioVenta)
        paquete.push(nuevoPaquete)
    }
    console.log(paquete)
    
    // Esta parte de abajo sinceramente la busqué en internet ya que desconocía cómo sumar elementos de un array en un ciclo FOR.
    const total = paquete.map(item => item.precioVenta).reduce((prev, curr) => prev + curr, 0);

    alert(`El valor total del paquete para ${personas} personas a Madrid es de US$${total}`);
    alert(`¡Gracias por tu compra ${usuario}! Nos vemos pronto`)
}

agregarPaquetes()