function crearTabla(ancho,largo){
	let numRandom;
	let html = '<table border="2">';

	for(let i=0;i<ancho;i++){
		html += '\n  <tr>';
		for(let j=0;j<largo;j++){
			numRandom = Math.ceil(Math.random()*(100));
		  html += '\n    <th>' + numRandom+ '</th>';
		}

		html += '\n  </tr>';
	}

	html +='\n</table>\n<button type="button" onclick="">Calcular</button>'

	return html;
}

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
		document.getElementById('tabla').innerHTML = crearTabla(ancho.value,largo.value); 

		return false;
	}
});
