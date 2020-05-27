/* Desafío de programación #3: Imprimí la tabla de multiplicación del 7

 7x0 = 0
 7x1 = 7
 ...
 7x9 = 63*/

const multiplicadores = [0,1,2,3,4,5,6,7,8,9,10];
const multiplicando = 7;
let producto = 0;

for (let i = 0; i < multiplicadores.length; i++) {
	producto = multiplicando * multiplicadores[i];
	console.log(producto);
}