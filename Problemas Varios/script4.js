/*Desafío de programación #4: Imprimí todas las tablas de multiplicación del 1 al 9

 1x0 = 0
 ...
 1x9 = 9
 2x0 = 0
 ...
 2x9 = 18
 ...
 ...
 9x9 = 81*/ 

const multiplicadores2 = [0,1,2,3,4,5,6,7,8,9,10];
const multiplicando2 = [1,2,3,4,5,6,7,8,9];
let producto2 = 0;

for (let i = 0; i < multiplicando2.length; i++) {
	console.log('La tabla del ' + multiplicando2[i] + ' es:')
	for (let j = 0; j < multiplicadores2.length; j++) {
		producto2 = multiplicando2[i] * multiplicadores2[j];
		console.log(producto2);
	}
}
