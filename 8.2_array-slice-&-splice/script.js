/*

// Method pada Array
var arr = ['Sandhika', 'Galih', 'Nofa'];
console.log(arr.join(' - '));

// 4. splice
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
arr.splice(1, 2, 'Doddy', 'Fitri');
console.log(arr.join(' - '));

*/

// 5. slice
// slice(awal, akhir);
var arr = ['Sandhika', 'Galih', 'Nofa', 'Doddy', 'Fitri'];
console.log(arr.join(' - '));

var arr2 = arr.slice(1,3); 

// slice menghasilkan array baru
console.log(arr2.join(' - '));