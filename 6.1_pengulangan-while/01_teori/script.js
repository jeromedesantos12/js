// Infinite Loop (Looping Forever)

/* 
while(true) {
 	console.log('Hello World');
 }
*/

// dihentikan oleh user
var ulang = true;
while(ulang) {
	console.log('Hello World');
	ulang = confirm('lagi?');
}

// dihentikan oleh program
var nilaiAwal = 1;
while(nilaiAwal <= 5) {
	console.log('hello world');
	nilaiAwal++;
}