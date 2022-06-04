document.write("<h1>Tienda Mis Zapatos</h1>");

var cantCompra = parseInt(prompt("¿Cuánto gastó en la compra?"));
var descuento = cantCompra * 0.5;

function tieneDescuento(cantCompra) {
  if (cantCompra >= 100000) {
    document.write("<p>Su descuento obtiene un 50% de descuento.</p>");
    document.write(`<p>Su total a pagar es de: ${descuento}</p>`);
    return alert(
      `Su compra es de ${cantCompra} y tiene un descuento de ${descuento}`
    );
  } else {
    document.write("<p>Su compra es de : " + cantCompra + "</p>");
    return alert(`Su compra es de ${cantCompra} y no tiene descuento`);
  }
}
tieneDescuento(cantCompra);
