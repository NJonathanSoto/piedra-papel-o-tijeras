// Código JS 

// Objeto en el que se almacenan las partidas ganadas, perdidas y empatadas

const partidas = {
    ganadas: 0,
    perdidas: 0,
    empatadas: 0
}

// Variables que almacenan cada uno de los resultados que van a ir mutando

const partidasGanadas = document.querySelector('.ganadas');

const partidasPerdidas = document.querySelector('.perdidas');

const partidasEmpatadas = document.querySelector('.empatadas');

const verHistorial = document.querySelector('.resultado-juego');

// Evento que habilita la clase historial y que lo muestra con las diferentes partidas

verHistorial.addEventListener('click', () => {
    document.querySelector('.historial').classList.toggle('habilitar-historial');
});

// Variables con los efectos de sonidos que se van a utilizar dependiendo del resultado de las partidas

const efectoDeSonidoTriunfo = new Audio('./efectos-de-sonido/correct.mp3');

const efectoDeSonidoDerrota = new Audio('./efectos-de-sonido/error.mp3');

const efectoDeSonidoEmpate = new Audio('./efectos-de-sonido/pop.mp3');

// Selección de cada uno de los botones para jugar

const botones = document.querySelectorAll('button');

botones.forEach((boton) => {

    boton.addEventListener('click', function() {

        const juegoPc = Math.floor(Math.random() * 3); // Número al azar contra el que vamos a jugar

        // 0 será igual a piedra, 1 a papel y 2 a tijeras

        // Gana el usuario si...

        if(boton.id == 'piedra' && juegoPc == 2) {

            efectoDeSonidoTriunfo.play(); // Se habilita el efecto de sonido para un triunfo

            partidas.ganadas += 1; // A el objeto "partidas" con el atributo "ganadas", se le suma 1

            partidasGanadas.innerHTML = 'Triunfos: ' + partidas.ganadas; // Se le asigna ese atributo a la etiqueta p

            document.querySelector('.mejilla-uno').style.display = 'block'; // Clase CSS que se habilita si el usuario gana
            document.querySelector('.mejilla-dos').style.display = 'block'; // Clase CSS que se habilita si el usuario gana

            document.querySelector('.resultado-pc').innerHTML = '  ✌️​'; // Resultado de la PC que se va a mostrar 

            setTimeout(() => { // setTimeout que vuelve todo a como estaba
                document.querySelector('.resultado-pc').innerHTML = '⚔️';
                document.querySelector('.mejilla-uno').style.display = 'none'; 
                document.querySelector('.mejilla-dos').style.display = 'none';
            }, 2500);
        }

        else if(boton.id == 'papel' && juegoPc == 0) {

            efectoDeSonidoTriunfo.play();

            partidas.ganadas += 1;

            partidasGanadas.innerHTML = 'Triunfos: ' + partidas.ganadas;

            document.querySelector('.mejilla-uno').style.display = 'block';
            document.querySelector('.mejilla-dos').style.display = 'block';

            document.querySelector('.resultado-pc').innerHTML = '✊';

            setTimeout(() => {
                document.querySelector('.resultado-pc').innerHTML = '⚔️';
                document.querySelector('.mejilla-uno').style.display = 'none';
                document.querySelector('.mejilla-dos').style.display = 'none';
            }, 2500);
        }

        else if(boton.id == 'tijeras' && juegoPc == 1) {

            efectoDeSonidoTriunfo.play();

            partidas.ganadas += 1;

            partidasGanadas.innerHTML = 'Triunfos: ' + partidas.ganadas;

            document.querySelector('.mejilla-uno').style.display = 'block';
            document.querySelector('.mejilla-dos').style.display = 'block';

            document.querySelector('.resultado-pc').innerHTML = '🤚';

            setTimeout(() => {
                document.querySelector('.resultado-pc').innerHTML = '⚔️';
                document.querySelector('.mejilla-uno').style.display = 'none';
                document.querySelector('.mejilla-dos').style.display = 'none';
            }, 2500);
        }

        // Pierde el usuario si...

        else if(boton.id == 'piedra' && juegoPc == 1) {

            efectoDeSonidoDerrota.play();

            partidas.perdidas += 1;

            partidasPerdidas.innerHTML = 'Derrotas: ' + partidas.perdidas;

            document.querySelector('.brillo-dos').style.display = 'block';
            document.querySelector('.brillo-dos-dos').style.display = 'block';
            document.querySelector('.lagrima').style.display = 'block';

            document.querySelector('.resultado-pc').innerHTML = '🤚';

            setTimeout(() => {
                document.querySelector('.resultado-pc').innerHTML = '⚔️';

                document.querySelector('.brillo-dos').style.display = 'none';
                document.querySelector('.brillo-dos-dos').style.display = 'none';
                document.querySelector('.lagrima').style.display = 'none';
            }, 2500);
        }

        else if(boton.id == 'papel' && juegoPc == 2) {

            efectoDeSonidoDerrota.play();

            partidas.perdidas += 1;

            partidasPerdidas.innerHTML = 'Derrotas: ' + partidas.perdidas;

            document.querySelector('.brillo-dos').style.display = 'block';
            document.querySelector('.brillo-dos-dos').style.display = 'block';
            document.querySelector('.lagrima').style.display = 'block';

            document.querySelector('.resultado-pc').innerHTML = '  ✌️​';

            setTimeout(() => {
                document.querySelector('.resultado-pc').innerHTML = '⚔️';

                document.querySelector('.brillo-dos').style.display = 'none';
                document.querySelector('.brillo-dos-dos').style.display = 'none';
                document.querySelector('.lagrima').style.display = 'none';
            }, 2500);
        }

        else if(boton.id == 'tijeras' && juegoPc == 0) {

            efectoDeSonidoDerrota.play();

            partidas.perdidas += 1;

            partidasPerdidas.innerHTML = 'Derrotas: ' + partidas.perdidas;

            document.querySelector('.brillo-dos').style.display = 'block';
            document.querySelector('.brillo-dos-dos').style.display = 'block';
            document.querySelector('.lagrima').style.display = 'block';

            document.querySelector('.resultado-pc').innerHTML = '✊';

            setTimeout(() => {
                document.querySelector('.resultado-pc').innerHTML = '⚔️';

                document.querySelector('.brillo-dos').style.display = 'none';
                document.querySelector('.brillo-dos-dos').style.display = 'none';
                document.querySelector('.lagrima').style.display = 'none';
            }, 2500);
        }

        // Empate si...

        else if(boton.id == 'piedra' && juegoPc == 0) {

            efectoDeSonidoEmpate.play();

            partidas.empatadas += 1;

            partidasEmpatadas.innerHTML = 'Empates: ' + partidas.empatadas;

            document.querySelector('.resultado-pc').innerHTML = '✊';

            setTimeout(() => {
                document.querySelector('.resultado-pc').innerHTML = '⚔️';
            }, 2500);
        }

        else if(boton.id == 'papel' && juegoPc == 1) {

            efectoDeSonidoEmpate.play();

            partidas.empatadas += 1;

            partidasEmpatadas.innerHTML = 'Empates: ' + partidas.empatadas;

            document.querySelector('.resultado-pc').innerHTML = '🤚​';

            setTimeout(() => {
                document.querySelector('.resultado-pc').innerHTML = '⚔️';
            }, 2500);
        }

        else if(boton.id == 'tijeras' && juegoPc == 2) {

            efectoDeSonidoEmpate.play();

            partidas.empatadas += 1;

            partidasEmpatadas.innerHTML = 'Empates: ' + partidas.empatadas;

            document.querySelector('.resultado-pc').innerHTML = '  ✌️​';

            setTimeout(() => {
                document.querySelector('.resultado-pc').innerHTML = '⚔️';
            }, 2500);
        }
    });
});

