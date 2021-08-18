 // Ejercicio de variables y condiciones JS

// 5.  Un supermercado ha puesto en oferta la venta al por mayor de cierto
//    producto, ofreciendo un descuento del 15% por la compra de más de 3 docenas
//    y 10% en caso contrario.

//    Además por la compra de más de 3 docenas se obsequia
//    una unidad del producto por cada docena en exceso sobre 3.

//    Diseñe un algoritmo que determine el monto de la compra
//    el monto del descuento, el monto a pagar y el número de unidades
//    de obsequio por la compra de cierta cantidad de docenas del producto. 

const prompt = require('prompt');
prompt.start();

var x = ['precio', 'docenas', 'montoCompra', 'montoApagar','descuento', 'docenasRegaladas']

var docenas = 4
var precio = 200
var descuento = precio * 0.15


console.log('El monto de la compra es de: ' , montoCompra = docenas * precio)

if (docenas > 3) {
    console.log('Al comprar más de 3 docenas obtienes un descuento de: ', precio * 0.15, 'dólares.' , 'Precio con descuento: ', precio - descuento,  'y docenas de obsequio: ', docenas - 3 )
} 

else if (docenas < 3) {
    console.log('Con un descuento de: ' , descuento = 0.10 * precio)
}

else {
    console.log(descuento = 0.10 * montoCompra, 'Sin obsequio')
}