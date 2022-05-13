function quitarGuiones(texto){
	let textoSinGuiones = '';
	let letraActual;
	let signoInicial = 0;
	let signoFinal = true;

	for(let i = 0; i<texto.length;i++){
		letraActual = texto.charAt(i);

		if(letraActual == '/'){
			signoInicial++;
			continue;
		}
		if(letraActual == '?'){
			signoFinal = false;
		}
		if(letraActual != '-' && signoInicial == 3 && signoFinal){
			textoSinGuiones += letraActual;
		}
	}

	return textoSinGuiones;
}

document.addEventListener('DOMContentLoaded', function(){
	const texto = document.querySelector('#texto');
	const boton = document.querySelector('#enviar');
	boton.disabled = true;
	texto.onkeyup = () =>{
		if(texto.value.length > 0){
			boton.disabled = false;
		}else{
			boton.disabled = true;
		}
	};

	document.querySelector('#form').onsubmit = () =>{
		document.getElementById('resultado').innerHTML = quitarGuiones(texto.value); 
		return false;
	}
})

