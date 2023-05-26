const opcionMultiples = [
  { pregunta: '¿Qué acción llevaron a cabo los hijos de Judá y Simeón en Bezec?', opciones: ['Hirieron a diez mil hombres', 'Pelearon contra Adoni-bezec y derrotaron al cananeo y al ferezeo', 'Cortaron los pulgares de las manos y de los pies de Adoni-bezec', 'Todas las anteriores'], respuesta: 3 },
  { pregunta: '¿Qué ciudad conquistó Otoniel, hijo de Cenaz, después de tomar Quiriat-sefer?', opciones: ['Jerusalén', 'Hebrón', 'Debir', 'Bet-el'], respuesta: 2 },
  { pregunta: '¿cuántos pulgares de las manos y los pies le cortaron a Adoni-bezec?', opciones: ['Pulgares de las manos.', 'Pulgares de los pies.', 'Pulgares de las manos y de los pies', 'No le cortaron los pulgares.'], respuesta: 2 },
  //Hasta aqui llegan las preguntas del capitulo #1

  { pregunta: '¿qué acción desobedecieron los hijos de Israel a pesar de la advertencia de Jehová?', opciones: ['Hacer pacto con los habitantes de la tierra', 'Construir altares en la tierra prometida.', 'Derribar los altares de los habitantes de la tierra.', 'Escuchar la voz de Jehová.'], respuesta: 3 },
  { pregunta: '¿Qué consecuencia enfrentó Israel cuando se apartaron de Jehová y adoraron a otros dioses?', opciones: ['Paz y prosperidad.', 'Desobediencia y aflicción.', 'Salvación y liberación.', 'Celebración y victoria.'], respuesta: 1 },
  { pregunta: '¿Qué sucedió cuando los jueces morían?', opciones: ['Israel alcanzaba la paz y la estabilidad', 'Israel seguía obedeciendo a Jehová sin desviarse', 'Israel caía en corrupción y adoraba a otros dioses', 'Israel continuaba con la misma fe y devoción'], respuesta: 2 },
  //Hasta aqui llegan las preguntas del capitulo #2

  { pregunta: '¿Cuál fue la duración de la paz en la tierra después de la subyugación de Moab por parte de los hijos de Israel?', opciones: ['Veinte años.', 'Cuarenta años.', 'Ochenta años', 'Cien años'], respuesta: 2 },
  { pregunta: '¿Cuál fue la duración del servicio de los hijos de Israel a Eglón, rey de Moab?', opciones: ['Cinco años', 'Diez años.', 'Dieciocho años.', 'Veinte años'], respuesta: 3 },
  { pregunta: '¿Qué objeto utilizó Aod para asesinar a Eglón, rey de Moab?', opciones: ['Un puñal', 'Una espada', 'Un arco y flechas', 'Un hacha'], respuesta: 0 },
  //Hasta aqui llegan las preguntas del capitulo #3

  { pregunta: '¿cuál fue el lugar donde Débora acostumbraba sentarse para administrar justicia?', opciones: ['Bajo una higuera', 'En el monte Tabor.', 'Entre Ramá y Bet-el, en los montes de Efraín.', 'En la ciudad de Cedes.'], respuesta: 3 },
  { pregunta: '¿Cuál fue la duración del reinado opresivo de Jabín, rey de Canaán, sobre los hijos de Israel?', opciones: ['Deiz años', 'Veite años', 'Treinta años', 'Cuarenta años'], respuesta: 1 },
  { pregunta: '¿quién fue el libertador que Jehová levantó para liberar a los hijos de Israel de Jabín, rey de Canaán?', opciones: ['Otoniel', 'Baraac', 'Gedeón', 'Sanson'], respuesta: 1 },
  //Hasta aqui llegan las preguntas del capitulo #4

  { pregunta: '¿quiénes cantaron un cántico después de la victoria sobre Sísara?', opciones: ['Débora y Baraac', 'Baraac y Jael', 'Débora y Samgar', 'Jael y Samgar'], respuesta: 0 },
  { pregunta: '¿Qué tribu descendió a pelear desde los montes?', opciones: ['Efraín', 'Maquir', 'Zabulón', 'Isacar'], respuesta: 2 },
  { pregunta: '¿quiénes fueron maldecidos por el ángel de Jehová por no venir en ayuda del Señor?', opciones: ['Los reyes de Canaan', 'Los moradores de Meroz', 'Los hijos de Israel', 'Los jefes de Isacar'], respuesta: 1 },
  //Hasta aqui llegan las preguntas del capitulo #5

  { pregunta: '¿Cuál fue la respuesta de Jehová cuando los hijos de Israel clamaron a Él?', opciones: ['Envió un profeta.', 'Les entregó en manos de los madianitas.', 'Les dio riquezas y prosperidad.', 'No les prestó atención.'], respuesta: 0 },
  { pregunta: '¿Qué instrucción recibió Gedeón acerca del altar de Baal?', opciones: ['Edificarlo más grande.', 'Conservarlo como símbolo de unidad.', 'Derribarlo.', 'Decorarlo con flores y frutas.'], respuesta: 2 },
  { pregunta: '¿Cuántos años fueron entregados los hijos de Israel en manos de Madián por su maldad ante los ojos de Jehová?', opciones: ['5 años', '7 años', '10 años', '12 años'], respuesta: 1 },
  //Hasta aqui llegan las preguntas del capitulo #6

  { pregunta: '¿Cuál fue la prueba que Jehová le puso a Gedeón para reducir su ejército?', opciones: ['Llevarlos a beber agua.', 'Hacerlos luchar entre ellos.', 'Realizar una competencia de valentia', 'Hacerles una serie de preguntas.'], respuesta: 0 },
  { pregunta: '¿Cuál fue la señal que Jehová dio a Gedeón para confirmar la victoria sobre los madianitas?', opciones: ['El movimiento de las estrellas.', 'Que la esponja amaneciera mojada', 'La caída de un rayo', 'El sueño de un hombre en el campamento enemigo.'], respuesta: 3 },
  { pregunta: '¿Cuántos hombres conformaban los escuadrones de Gedeón en el momento de la batalla?', opciones: ['100', '200', '300', '400'], respuesta: 2 },
  //Hasta aqui llegan las preguntas del capitulo #7
  // Más preguntas...
];

const verdaderoFalso = [
  { pregunta: 'Los hijos de Judá conquistaron la ciudad de Gaza durante sus campañas.', opciones: ['Verdadero', 'Falso'], respuesta: 0 },
  { pregunta: 'Caleb ofreció a su hija Acsa en matrimonio a quien lograra tomar Quiriat-sefer.', opciones: ['Verdadero', 'Falso'], respuesta: 0 },
  { pregunta: 'Judá subió primero a pelear contra los cananeos porque Jehová entregó la tierra en sus manos.' , opciones: ['Verdadero', 'Falso'], respuesta: 0 }, 
  //Hasta aqui llegan las preguntas del capitulo #1

  { pregunta: 'El ángel de Jehová les recordó a los hijos de Israel que los había sacado de Egipto y los había llevado a la tierra prometida.', opciones: ['Verdadero', 'Falso'], respuesta: 0 },
  { pregunta: 'Josué fue sepultado en su heredad en los montes de Judá.', opciones: ['Verdadero', 'Falso'], respuesta: 1 },
  { pregunta: 'Jehová decidió expulsar a todas las naciones de la tierra después de la muerte de Josué.', opciones: ['Verdadero', 'Falso'], respuesta: 1 },
  //Hasta aqui llegan las preguntas del capitulo #2

  { pregunta: 'Jehová dejó a los pueblos en la tierra para evitar que el linaje de los hijos de Israel aprendiera a hacer la guerra', opciones: ['Verdadero', 'Falso'], respuesta: 1 },
  { pregunta: 'Otoniel fue el libertador que Jehová levantó para liberar a los hijos de Israel de los filisteos', opciones: ['Verdadero', 'Falso'], respuesta: 1 },
  { pregunta: 'Después de la subyugación de Moab, la paz en la tierra duró cincuenta años', opciones: ['Verdadero', 'Falso'], respuesta: 1 },
  //Hasta aqui llegan las preguntas del capitulo #3

  { pregunta: 'Después de la muerte de Aod, los hijos de Israel siguieron haciendo lo malo ante los ojos de Jehová.', opciones: ['Verdadero', 'Falso'], respuesta: 0 },
  { pregunta: 'Débora, la profetisa, envió a llamar a Barac para luchar contra Sísara, capitán del ejército de Jabín.', opciones: ['Verdadero', 'Falso'], respuesta: 0 },
  { pregunta: 'Sísara fue asesinado por Jael, mujer de Heber, mientras descansaba en su tienda.', opciones: ['Verdadero', 'Falso'], respuesta: 0 },
  //Hasta aqui llegan las preguntas del capitulo #4

  { pregunta: 'El pueblo de Zabulón y Neftalí fueron los primeros en unirse a Barac para luchar contra Sísara.', opciones: ['Verdadero', 'Falso'], respuesta: 1 },
  { pregunta: 'Sísara murió a manos de Débora en el valle de Zaanaim.', opciones: ['Verdadero', 'Falso'], respuesta: 1 },
  { pregunta: 'Débora era una profetisa y líder en Israel.', opciones: ['Verdadero', 'Falso'], respuesta: 0 },
  //Hasta aqui llegan las preguntas del capitulo #5

  { pregunta: 'Los hijos de Israel se escondieron en cuevas para protegerse de los madianitas.', opciones: ['Verdadero', 'Falso'], respuesta: 0 },
  { pregunta: 'El ángel de Jehová le dijo a Gedeón que su familia era la más rica en Manasés.', opciones: ['Verdadero', 'Falso'], respuesta: 1 },
  { pregunta: 'Jehová respondió a Gedeón que esperaría hasta que él volviera con una ofrenda.', opciones: ['Verdadero', 'Falso'], respuesta: 0 },
  //Hasta aqui llegan las preguntas del capitulo #6

  { pregunta: 'Gedeón lideró un ejército de mil hombres en la batalla contra los madianitas.', opciones: ['Verdadero', 'Falso'], respuesta: 1 },
  { pregunta: 'Gedeón capturó a dos príncipes amalecitas llamados Oreb y Zeeb.', opciones: ['Verdadero', 'Falso'], respuesta: 1 },
  { pregunta: 'Los madianitas y amalecitas se habían dispersado por el desierto como una plaga de langostas.', opciones: ['Verdadero', 'Falso'], respuesta: 1 },
  // Más preguntas...
];


//{ pregunta: '' , opciones: , respuesta: 0 }, 

const preguntasAbiertas = [
  { pregunta: '¿Cuántos hombres fueron heridos en Bezec durante la batalla?', respuesta: '10000' },
  { pregunta: '¿Quién conquistó Quiriat-sefer?', respuesta: 'otoniel' },
  { pregunta: '¿Cuántos reyes recogían migajas debajo de la mesa de Adoni-bezec?', respuesta: '70' },
  { pregunta: '¿Qué ciudad fue conquistada por los hijos de Judá?', respuesta: 'jerusalen' },
  { pregunta: '¿Qué tribu subió contra Bet-el?', respuesta: 'la casa de jose' },
  //Hasta aqui llegan las preguntas del capitulo #1

  { pregunta: '¿Cómo se llamó el lugar donde los hijos de Israel ofrecieron sacrificios a Jehová?', respuesta: 'Boquim' },
  { pregunta: '¿En qué montes fue sepultado Josué?', respuesta: 'montes de efraín' },
  { pregunta: '¿Cuál fue la edad de Josué al momento de su muerte?', respuesta: '110' },
  { pregunta: '¿Qué provocó la aflicción y la ira de Jehová contra Israel?', respuesta: 'desobediencia' },
  { pregunta: '¿A quiénes adoraron los hijos de Israel cuando se apartaron de Jehová?', respuesta: 'baal y astarot' },
  //Hasta aqui llegan las preguntas del capitulo #2

  { pregunta: '¿Cuál era el propósito de Jehová al dejar a ciertos pueblos en la tierra de Israel?', respuesta: 'probar a israel' },
  { pregunta: '¿Cuál fue el nombre del libertador que Jehová levantó para liberar a los hijos de Israel de Cusan-risataim?', respuesta: 'otoniel' },
  { pregunta: '¿Qué objeto llevó Aod como parte de un engaño hacia Eglón, rey de Moab?', respuesta: 'un presente' },
  { pregunta: '¿cuál fue la reacción de Eglón cuando Aod le dijo que tenía una palabra de Dios para él?', respuesta: 'se levanto de la silla' },
  { pregunta: '¿Cuántos hombres filisteos mató Samgar con una aguijada de bueyes?', respuesta: '600' },
  //Hasta aqui llegan las preguntas del capitulo #3

  { pregunta: '¿Quién era el rey de Canaán durante el tiempo en que los hijos de Israel clamaron a Jehová?', respuesta: 'jabin' },
  { pregunta: '¿Quién fue el responsable de la muerte de Sísara, capitán del ejército de Jabín?', respuesta: 'jael' },
  { pregunta: '¿Que objeto utilizo Jael para matar a Sísara?', respuesta: 'una estaca' },
  { pregunta: '¿Cuál era la función de Débora en Israel además de ser profetisa?', respuesta: 'gobernaba a israel' },
  { pregunta: '¿Cuál fue la duración del reinado opresivo de Jabín, rey de Canaán, sobre los hijos de Israel?', respuesta: '20 años' },
  //Hasta aqui llegan las preguntas del capitulo #4

  { pregunta: '¿Quién fue el líder del ejército de Jabín, rey de Canaán?', respuesta: 'sisara' },
  { pregunta: '¿Cuánto tiempo duró la paz en la tierra después de la derrota de Sísara?', respuesta: '40' },
  { pregunta: '¿A quién se dirige Débora al comienzo del cántico?', respuesta: 'a los reyes y principes' },
  { pregunta: '¿Cuál fue el pedido de agua de Sísara y qué recibió en su lugar?', respuesta: 'pidio agua y recibio leche' },
  { pregunta: '¿Cuántos años duró la paz en la tierra después de los eventos descritos?', respuesta: '90 años' },
  //Hasta aqui llegan las preguntas del capitulo #5

  { pregunta: '¿Cómo se describió a Gedeón?', respuesta: 'hombre esforzado y valiente' },
  { pregunta: '¿Qué ofreció Gedeón como ofrenda?', respuesta: 'un cabrito y unos panes sin levadura' },
  { pregunta: 'Qué construyó Gedeón después de la señal?', respuesta: 'un altar' },
  { pregunta: '¿Qué le ordenó Jehová a Gedeón que derribara?', respuesta: 'el altar a baal' },
  { pregunta: '¿Cuál fue el nombre dado a Gedeón después de derribar el altar de Baal?', respuesta: 'jerobaal' },
  //Hasta aqui llegan las preguntas del capitulo #6
  // Más preguntas...
];

let preguntas = [...opcionMultiples, ...verdaderoFalso, ...preguntasAbiertas]; 
preguntas.sort(() => Math.random() - 0.5); // Para mezclar las preguntas de forma aleatoria
let puntosGanados = 0;
let puntosPerdidos = 0;
let indicePreguntaActual = 0;
let temporizador = null;

function mostrarPregunta() {
  const pregunta = preguntas[indicePreguntaActual];
  const quizContainer = document.getElementById('quizContainer');
  const nextButton = document.getElementById('nextButton');

  quizContainer.innerHTML = ''; 
  const preguntaElemento = document.createElement('p');
  preguntaElemento.textContent = pregunta.pregunta;
  quizContainer.appendChild(preguntaElemento);

  if(pregunta === preguntasAbiertas[indicePreguntaActual]) {
    nextButton.style.display = "block";
  } else {
    nextButton.style.display = "none";
  }

  if(pregunta.opciones) {
    for(let i=0; i<pregunta.opciones.length; i++) {
      const opcionElemento = document.createElement('button');
      opcionElemento.textContent = pregunta.opciones[i];

      // Añade estilo para mostrar el botón como bloque
      opcionElemento.style.display = 'block';
    
      opcionElemento.onclick = function() {
        checkAnswer(i);
        clearTimeout(temporizador);
        showNextQuestion();
      };
      quizContainer.appendChild(opcionElemento);
    }
  } else {
    const inputElemento = document.createElement('input');
    inputElemento.onchange = function() {
      checkAnswer(inputElemento.value);
      clearTimeout(temporizador);
      showNextQuestion();
    };
    quizContainer.appendChild(inputElemento);
  }

  // Inicia el temporizador
  temporizador = setTimeout(showNextQuestion, 100000);
}


function checkAnswer(respuesta) {
  const mensaje = document.getElementById('mensaje');
  if(respuesta === preguntas[indicePreguntaActual].respuesta) {
    puntosGanados += 1;
    mensaje.textContent = "¡Acertaste la respuesta!";
  } else {
    puntosPerdidos += 1;
    mensaje.textContent = "Te has equivocado.";
  }
  document.getElementById('puntosGanados').textContent = puntosGanados;
  document.getElementById('puntosPerdidos').textContent = puntosPerdidos;
}

function showNextQuestion() {
  indicePreguntaActual += 1;
  if(indicePreguntaActual < preguntas.length) {
    mostrarPregunta();
  } else {
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = '¡Juego terminado!';
  }
}

mostrarPregunta(); // Mostrar la primera pregunta
