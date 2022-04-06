// Manipulasi Array

// 1. Menambah isi array
var arr1 = [];
arr1[0] = "Sandhika";
arr1[1] = "Galih";
arr1[2] = "Nofa";
arr1[6] = "Doddy";

console.log(arr1);

//2. Menghapus isi array
var arr2 = ["Sandhika", "Galih", "Nofa"];
arr2[1] = undefined;
console.log(arr2);

// 3. Menampilkan isi array
var arr3 = ["Sandhika", "Galih", "Nofa", "Doddy"];
for(var i = 0; i < arr3.length; i++) {
	console.log('Mahasiswa ke-' + (i + 1) + ' : ' + arr3[i]);
}