(function () {
    var actualizarHora = function () {
        var fecha = new Date(),
            diaSemana = fecha.getDay(),
            hora = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaMes = fecha.getDate(),
            mes = fecha.getMonth(),
            anio = fecha.getFullYear();

        var pDiaSemana = document.getElementById('diaSemana'),
            pHora = document.getElementById('horas'),
            pMinutos = document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaMes = document.getElementById('diaMes'),
            pMes = document.getElementById('mes'),
            pAnio = document.getElementById('anio');
        if (segundos < 10) {
            segundos = '0' + segundos;
        }


        if (minutos < 10) {
            minutos = '0' + minutos;
        }

        if (hora < 10) {
            hora = '0' + hora;
        }

        if (diaMes < 10) {
            diaMes = '0' + diaMes;
        }


        if (horas == 0) {
            horas = 12;
        }


        var semana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

        pDiaSemana.textContent = semana[diaSemana];
        pDiaMes.textContent = diaMes;
        pMes.textContent = meses[mes];
        pAnio.textContent = anio;
        pHora.textContent = hora;
        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;

    }

    var interval = setInterval(actualizarHora, 1000);

}())