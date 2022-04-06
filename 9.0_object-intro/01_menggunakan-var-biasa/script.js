var namaMhs = 'Sandhika Galih';
var umurMhs = 31;
var lulus = true;
var IPSemester = [2.90, 3.10, 3.25, 2.88, 3.04];

function IPKumulatif(IPSemester) {
	var total = 0;
	for(var i = 0; i < IPSemester.length; i++) {
		total +=IPSemester[i];
	}
	return total/IPSemester.length;
};

// PROBLEM : "Bagaimana jika ada mhs yg ke-2?"