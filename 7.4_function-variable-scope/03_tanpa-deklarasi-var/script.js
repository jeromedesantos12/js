// otomatis dibuatkan var a; (var global)
// sehingga mengotori lingkup globalnya

"use strict"; // solusi

function tes() {
	a = 2;	
}

tes();
console.log(a);