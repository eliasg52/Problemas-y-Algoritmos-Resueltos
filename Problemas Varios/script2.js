/*Desafìo de programación  #2: Imprimí los números impares del 1 al 100

 1 3 5 ... 99*/

//SIN LOGICA

for (let i = 1; i <= 100; i += 2) {
	console.log(i);
 }

//CON LOGICA

for (let n = 1; n <= 100; n++) {
	if (n%2 === 1 ) {
		console.log(n)
	}
}