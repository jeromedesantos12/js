// Method pada Array

// 1. join
var arr = ['Sandhika', 'Galih', 'Nofa'];
console.log(arr.join(' - '));

// 2. push & pop (elemen terakhir)
arr.push('Doddy');
console.log(arr.join(' - '));

arr.pop();
arr.pop();
console.log(arr.join(' - '));

// 3. unshift & shift (elemen pertama)
arr.unshift('Doddy');
console.log(arr.join(' - '));

arr.shift();
console.log(arr.join(' - '));