// 1)Hacer un algoritmo que valide si una persona es mayor de edad o no.

// var edad = prompt("Ingrese su edad");
// function pedirEdad(edad) {
//   if (edad >= 18) {
//     alert("Sos mayor de edad");
//   } else {
//     alert("Sos menor de edad");
//   }
// }
// pedirEdad(edad);

// 2)Hacer un algoritmo que imprima los primeros 10 numeros de la tabla del 3.

// var tablaDelTres = 3;

// function laTableTres(tablaDelTres) {
//   for (var i = 0; i <= 10; i++) {
//     document.write(i + "*" * tablaDelTres + " = " + "<br>");
//   }
// }
// laTableTres(tablaDelTres);

// 3)Cree un algoritmo que lea dos numeros reales y determine cuál de ellos es el mayor, cuál el menor y cuáles son iguales.

// var numero1 = prompt("Ingrese el primer numero");
// var numero2 = prompt("Ingrese el segundo numero");

// function cualEsMayor(numero1, numero2) {
//   if (numero1 == numero2) {
//     document.write("Los numeros" + numero1 + " y " + numero2 + "son iguales");
//   } else if (numero1 > numero2 || numero2 > numero1) {
//     document.write("El numero 1: " + numero1 + " es mayor");
//   } else {
//     document.write("El numero 2: " + numero2 + " es mayor");
//   }
// }
// cualEsMayor(numero1, numero2);

//* 4)Algoritmo que basado en operaciones matemáticas, sume, reste, multiplique y divida dos numeros.
//El sistema se debe repetir las veces que el usuario lo desee.

var numero1 = prompt("Ingrese el primer numero");
var numero2 = prompt("Ingrese el segundo numero");

if (numero1 !== 0 && numero2 !== 0) {

  do {
    var operacion = prompt(
      "Digite el numero de operacion a realizar: 1: suma, 2: resta, 3: multiplicacion, 4: division"
    );

    switch (operacion) {
      case "1":
        alert(numero1 + numero2);
        break;
      case "2":
        alert(numero1 - numero2);
        break;
      case "3":
        alert(numero1 * numero2);
        break;
      case "4":
        alert(numero1 / numero2);
        break;
      default:
        alert("Presione 1: suma, 2: resta, 3: multiplicacion, 4: division. O, '0' para salir");
    }
  } while (operacion != 0);

  alert("Gracias por usar nuestro sistema");
}
//VERSION 2

// function calcular(numero1, numero2) {
//   var suma = numero1 + numero2;
//   var resta = numero1 - numero2;
//   var multiplicacion = numero1 * numero2;
//   var division = numero1 / numero2;
//   document.write("La suma es: " + suma + "<br>");
//   document.write("La resta es: " + resta + "<br>");
//   document.write("La multiplicacion es: " + multiplicacion + "<br>");
//   document.write("La division es: " + division + "<br>");
// }
// calcular(numero1, numero2);