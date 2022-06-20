let valorPasaje = 10000 
let porc = 0.9
let nombre = prompt(`Hola, ¿podrías indicarnos cuál es tu nombre?`)
alert(`Tu valor de pasaje para el año 2022 es de:\nARS $${valorPasaje}\n\nProgramando a partir del 2024 podrás obtener descuentos.`)

function fecha(dd,mm,yy){
    let date = dd + "/" + mm + "/" + yy
    alert(`Tu viaje será el ${date}.`)
}
let dia = parseInt(prompt(`Ingresa el día de viaje.`))
let mes = parseInt(prompt(`Ingresa el mes de viaje.`))
let anio = parseInt(prompt(`Ingresa el año de viaje.`))

if (dia === 0 || dia >= 32) {
    alert(`Ingresa un día válido`)
    dia = parseInt(prompt(`Ingresa nuevamente el día de viaje.`))
}
else if (mes === 0 || mes >= 13 ){
    alert(`Ingresa un mes válido`)
    mes = parseInt(prompt(`Ingresa nuevamente el mes de viaje.`))
}
else if(anio === 0 || anio < 2022){
    alert(`Ingresa un mes válido`)
    anio = parseInt(prompt(`Ingresa nuevamente el año de viaje.`))
}

function descuento(valor1, valor2){
    let discount = valor1 * valor2
    let total = discount*cantidad 
    if(anio >= 2024){
        alert(`Aplicando un descuento del 10% por tiempo de programación, el valor total por ${cantidad} personas es de:\n\nARS $${total}.`)
    }
}

let cantidad = parseInt(prompt(`Ingresa por favor la cantidad de personas que viajarán con vos`))

for (let index = 1; index <= cantidad; index++) {
    let nombres = prompt(`Ingresa por favor el nombre de la persona ${index}`)

    if(nombres == 0){
        alert(`No ingresaste ningún nombre.`)
    }
}

fecha(dia, mes, anio)
descuento(valorPasaje, porc)
alert(`¡Gracias por elegirnos y viajar con nosotros, ${nombre}!`)