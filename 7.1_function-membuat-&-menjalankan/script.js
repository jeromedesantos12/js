/*

var a = 8;
var b = 3;
var volumeA;
var volumeB;
var total;

volumeA = a * a * a;
volumeB = a * a * a;

total = volumeA + volumeB;

console.log(total);

*/

// 1. Ketahui sisi masing2 kubus.
// 2. Hitung volume masing2 kubus.
// 3. Jumlahkan hasilnya.
// 4. Kembalikan nilai jawabannya.

function jumlahVolumeDuaKubus(a, b) {
	var volumeA;
	var volumeB;
	var total;

	volumeA = a * a * a;
	volumeB = b * b * b;
	total = volumeA + volumeB;

	return total;
}

console.log(jumlahVolumeDuaKubus(8, 3));
console.log(jumlahVolumeDuaKubus(10, 15));