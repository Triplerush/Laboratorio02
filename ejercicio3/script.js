function calcularDiasFaltantes(){
	const fechaActual = new Date();
	const dia = fechaActual.getDate();
	const mes = fechaActual.getMonth();
	const diasMeses = [31,28,31,30,31,30,31,31,30,31,30,31];

	 let diasFaltantes = 0;

	for(let i = mes; i != 7; i++){
	  diasFaltantes += diasMeses[i];
		if(i == 11){
			i = 0;
		}
	}
	
	diasFaltantes += 15 - dia;
	document.getElementById('resultado').innerHTML = "Faltan " +diasFaltantes + " para el día de Arequipa";
}
