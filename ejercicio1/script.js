let fechaActual = new Date();
let dia = fechaActual.getDate();
let mes = fechaActual.getMonth();
let year = fechaActual.getFullYear();
diaSemana(dia,mes,year);

function diaSemana(dia,mes,year){
  const yearBase = 1990;
  const diasMeses = [31,28,31,30,31,30,31,31,30,31,30,31];
  let diasPasados = 0; 
  let diasSemana = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
  
  for(let i = yearBase; i < year ; i++){
    diasPasados += 365;
    if(i % 4 ==0){
      diasPasados++;
    }
  }


  if(year % 4==0){
    diasMeses[1] = 29;
  }else
    diasMeses[1] = 28;

  
  for(let i = 0; i< mes ; i++){
    diasPasados +=  diasMeses[i];
  }

  diasPasados += dia;

  const indiceSemana = diasPasados % 7;

  console.log(diasSemana[indiceSemana%7]);
} 




