let pDiaSemana = document.getElementById("diaSemana"),
  pDia = document.getElementById("dia"),
  pMes = document.getElementById("mes"),
  pYear = document.getElementById("year"),
  pHora = document.getElementById("hora"),
  pMinutos = document.getElementById("minutos"),
  pSegundos = document.getElementById("segundos"),
  pAMPM = document.getElementById("ampm");

// console.log(pDiaSemana)
// console.log(pDia)
         hora = 12;
// console.log(pYear)
// console.log(pHora)
// console.log(pMinutos)
// console.log(pSegundos)
// console.log(pAMPM)

(function () {
  let actualizarRelog = () => {
    let fecha = new Date(),
      diaSemana = fecha.getDay(),
      dia = fecha.getDate(),
      mes = fecha.getMonth(),
      year = fecha.getFullYear(),
      hora = fecha.getHours(),
      minutos = fecha.getMinutes(),
      segundos = fecha.getSeconds(),
      ampm;

    let semana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado",
    ];

    pDiaSemana.textContent = semana[`${diaSemana}`];
    pDia.textContent = dia;

    let meses = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];

    pMes.textContent = meses[`${mes}`];
    pYear.textContent = year;

    if (hora >= 12) {
      hora -= 12;
      ampm = "PM";
    } else {
      ampm = "AM";
    }

    if (hora == 0) {
      hora = 12;
    }

    if (hora < 10) {
      hora = "0" + hora;
    }

    pHora.textContent = hora;
     pAMPM.textContent = ampm;

      if( minutos < 10 ) {
      minutos = "0" +  minutos;
      }

     if(segundos < 10){
         segundos = "0" + segundos;
     }


     pMinutos.textContent = minutos;
     pSegundos.textContent = segundos;


     
  };

  actualizarRelog();
   setInterval(actualizarRelog, 1000)
})();
