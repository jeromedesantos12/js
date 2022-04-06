var mahasiswa = {
	//properti
	nama : 'Sandhika Galih',
	lulus : true,
	IPSemester : [2.90, 3.10, 3.25, 2.88, 3.04],
	// method
	IPKumulatif : function() {
		var total = 0;
		for(var i = 0; i < IPSemester.length; i++) {
			total +=IPSemester[i];
		}
		return total/IPSemester.length;
	}
}

mahasiswa.IPKumulatif();