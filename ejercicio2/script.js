function invertirTexto(texto){
	let textoReves = '';
	for(let i = texto.length-1; i>=0;i--){
		textoReves += texto.charAt(i);
	}

	return textoReves;
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
		document.getElementById('resultado').innerHTML = invertirTexto(texto.value);
		return false;
	}
})


