// 6. foreach
var angka = [1,2,3,4,5,6,7,8];
var nama = ['Sandhika', 'Galih', 'Nofa'];
/*
for(var i = 0; i < angka.length; i++) {
	console.log(angka[i]);
}
*/
angka.forEach(function(e) {
	console.log(e);
});
/*
var cetak = function(e) {
	console.log(e);
}

angka.forEach(cetak);
*/

console.log(' ');

nama.forEach(function(e,i) {
	console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e);
});

console.log(' ');

// 7. map
var angka1 = [1,2,5,3,6,8,4];
var angka2 = angka.map(function(e) {
	return e * 2;
});
console.log(angka2.join(' - '));

console.log(' ');

// 8. sort
var angka3 = [1,2,10,5,20,3,6,8,4];
console.log(angka3.join(' - '));
angka3.sort(function(a,b) {
	return a-b;
});
console.log(angka3.join(' - '));