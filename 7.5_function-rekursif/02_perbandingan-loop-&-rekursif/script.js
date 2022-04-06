// mencetak nilai ke layar dari 10 sampai 1 (mundur)

// LOOPING
/*

for(var i = 10; i >= 1; i--) {
	console.log(i);
}

*/

// REKURSIF
function tampilAngka(n) {
	if(n == 0) return; // base case
	console.log(n);
	return tampilAngka(n-1);
}

tampilAngka(10);