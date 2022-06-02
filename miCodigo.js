document.write("<h1>Mi codigo</h1>");

// var nombre = prompt("Ingrese su nombre");
// var num1 = parseInt(prompt("Ingrese un numero"));
// var num2 = parseInt(prompt("Ingrese otro numero"));

// var suma = num1 + num2;

// document.write(`<p>Hola ${nombre}</p>`);
// document.write(`<p>El numero 1 es: ${num1} </p>`);
// document.write(`<p>El numero 2 es : ${num2}</p>`);
// document.write(`<p>La suma es: ${suma}</p>`);


var nota1 = parseInt(prompt("Ingrese la nota 1"));
var nota2 = parseInt(prompt("Ingrese la nota 2"));
var nota3 = parseInt(prompt("Ingrese la nota 3"));

var promedio = (nota1 + nota2 + nota3) / 3;

document.write(`<p>El promedio es: ${promedio}</p>`);