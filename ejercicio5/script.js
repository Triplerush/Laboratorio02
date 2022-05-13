function crearTabla(ancho,largo){
	let numRandom;
	let sumaTotal = 0;
	let html = '<table border="2">';

	for(let i=0;i<ancho;i++){
		html += '\n  <tr>';
		for(let j=0;j<largo;j++){
			numRandom = Math.ceil(Math.random()*(100));
			sumaTotal += numRandom;
		  html += '\n    <th>' + numRandom+ '</th>';
		}

		html += '\n  </tr>';
	}

	html +='\n</table>\n<button type="button" onclick=mostrarSuma('+sumaTotal+')>Calcular</button>'

	document.getElementById('resultado').innerHTML = '';
	return html;
}

function mostrarSuma(sumaTotal){
	document.getElementById('resultado').innerHTML = "La suma total es: " + sumaTotal;
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
