var mahasiswa =
['Sandhika Galih', true, [2.90, 3.10, 3.25, 2.88, 3.04]];

function IPKumulatif(IPSemester) {
	var total = 0;
	for(var i = 0; i < IPSemester.length; i++) {
		total +=IPSemester[i];
	}
	return total/IPSemester.length;
};

IPKumulatif(mahasiswa[2]);

// PROBLEM : 
// 1. Masih banyak pengulangan baris2 kode
// 2. JS tidak tahu sama sekali dengan propertinya
// 	  (karena ditandai dengan index)