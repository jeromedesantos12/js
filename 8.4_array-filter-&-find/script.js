// 8. filter
var angka = [1,2,10,5,20,3,6,8,4];

var angka2 = angka.filter(function(x) {
	return x > 5; // menemukan banyak nilai (bentuk array)
});
console.log(angka2.join('-'));

var angka3 = angka.join(function(x) {
	return x > 5;
});
console.log(angka2); // menemukan 1 nilai (bukan array)