var sueldo = parseFloat(prompt("Ingrese su sueldo"));
var cantHoras = parseInt(prompt("Ingrese la cantidad de horas extras trabajadas"));
var cantExtras = 3000;

function miSueldo(sueldo, cantHoras){
    var sueldoFinal = sueldo + (cantHoras * cantExtras);
    return sueldoFinal;
}

document.write(`<p>Sueldo: ${sueldo}</p>`);
document.write(`<p>Horas extras: ${cantHoras}</p>`);
document.write(`<p>Valor de las horas extras: ${cantExtras}</p>`);
document.write(`<p>El sueldo final es: ${miSueldo(sueldo, cantHoras)}</p>`);
