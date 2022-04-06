// global scope / window scope
var a = 1;

function tes() {
	var b = 2;
	// di dalam function bisa akses var global
	console.log(a);
}

tes();
// var b nggak kebaca karena ada di function scope
console.log(b);

// di dalam function bisa ngitip keluar tapi dari luar nggak bisa lihat ke dalam (illustrasi kaca mobil)