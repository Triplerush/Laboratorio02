function calcularDiasFaltantes(){
	const fechaActual = new Date();
	const dia = 16;
	let mes = 7;
	const diasMeses = [31,28,31,30,31,30,31,31,30,31,30,31];

	let diasFaltantes = 0;
	let diasExtra;

	if(mes == 7 && dia> 15){
		mes = 8;
    diasExtra = 31 + 15 - dia;
  }else{
 		diasExtra = 15 - dia;
 	}

	for(let i = mes; i != 7; i++){
		console.log(diasMeses[i]);
	  diasFaltantes += diasMeses[i];
		if(i == 11){
			i = -1;
		}
	}
	console.log(diasFaltantes)
	console.log(diasExtra)
	
	diasFaltantes += diasExtra;
	document.getElementById('resultado').innerHTML = "Faltan " +diasFaltantes + " para el día de Arequipa";
}
