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

