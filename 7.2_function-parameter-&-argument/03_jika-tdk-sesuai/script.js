function tambah1(a,b) {
	return a + b;
}

// nilai 20 akan diabaikan
var coba1 = tambah1(5,10,20);

// KEBALIKAN

function tambah2(a,b,c) {
	return a + b;
}

// nilai dari parameter c adalah undefined 
var coba2 = tambah2(5,10);

console.log(coba1);
console.log(coba2);