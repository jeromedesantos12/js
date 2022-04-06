// LOOPING
function faktorial(n) {
	var hasil = 1;
	for(var i = n; i > 0; i--) {
		hasil *= i;
	}

	return hasil;
}

// REKURSIF
function faktorial(n) {
	if(n == 0) return 1;
	return n * faktorial(n-1);
}