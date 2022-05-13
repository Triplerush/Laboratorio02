let fechaActual = new Date();
let dia = fechaActual.getDate();

diaSemana(dia);


function diaSemana(numeroDia){
  let diasSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
  if(numeroDia > 31) 
    console.log('Número de dia equivocado');
  else
    console.log(diasSemana[numeroDia%7]);
} 




