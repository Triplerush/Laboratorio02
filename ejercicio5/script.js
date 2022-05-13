document.addEventListener('DOMContentLoaded', function(){
	const ancho = document.querySelector('#ancho');
	const largo= document.querySelector('#largo');
	const boton = document.querySelector('#enviar');
	boton.disabled = true;
	ancho.onkeyup = () =>{
		if(ancho.value.length > 0 && largo.value.length > 0){
			boton.disabled = false;
		}else{
			boton.disabled = true;
		}
	};
	largo.onkeyup = () =>{
		if(largo.value.length > 0 && ancho.value.length > 0){
			boton.disabled = false;
		}else{
			boton.disabled = true;
		}
	};

	document.querySelector('#form').onsubmit = () =>{
		document.getElementById('tabla').innerHTML = "La tabla va aqui"; 

		return false;
	}
});
