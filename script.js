const opcionMultiples = [
  //Preguntas del capitulo 1
  { pregunta: '¿Qué acción llevaron a cabo los hijos de Juda y Simeón?', opciones: ['Hirieron a mil hombres', 'Pelearon contra Adoni-bezec y derrotaron a los cananeos y el ferezeo', 'Cortaron los pulgares de las manos y de los pies de Adoni-bezec', 'todas las anteriores'], respuesta: 3, cita: 'Jueces 1:4-6' },
  { pregunta: '¿Qué ciudad conquistó Otoniel, hijo de Cenaz, después de tomar Quiriat-sefer?', opciones: ['Jerusalen', 'Hebrón', 'Debir', 'Bet-el'], respuesta: 2, cita: 'Jueces 1: 11-14' },
  { pregunta: 'Selecciona la opción correcta', opciones: ['Otoniel hijo de Bejamín, hermano menor de Cenaz', 'Otoniel hijo de Cenaz, hermano menor de caleb', 'Otoniel hijo de Simeon, hermano menor de Caleb', 'Otoniel hijo de  Cenaz, hermano menor de Simeon'], respuesta: 1, cita: 'Jueces 1:13' },
  //Preguntas del capitulo 2
  { pregunta: '¿A qué edad José murió?', opciones: ['100', '110', '111', 'Ninguna de las anteriores'], respuesta: 1, cita: 'Jueces 2:8'},
  { pregunta: '¿En que lugar fue sepultado José?', opciones: ['En Quiriat-sefer, en los montes de Gilgal, al sur del monte de Boquim', 'En Quiriat-sefer, en los montes de Efraín, al sur del monte de Gaas', 'La biblia no especifica en que lugar fue enterrado :0', 'En Timnat-sera, en los montes de Efraín, al norte del monte de Gaas'], respuesta: 3, cita: 'Jueces 2:9'},
  { pregunta: '¿Qué ocurrió después de la muerte de José?', opciones: ['Los hijos de Israel hicieron lo malo ante los ojos de Dios.', 'Todos los hijos de Israel dieron voces y lloraron.', 'Fueron a conquistar nuevas tierras.', 'Cumplieron el mandato de Jehová.'], respuesta: 0, cita: 'Jueces 2:11' },
  //Preguntas del capitulo 3
  { pregunta: '¿Quiénes habitaban en el monte Líbano?', opciones: ['Los amorreos y jebuseos', 'Los heveos y sidonios', 'Los filisteos y cananeos', 'Los heteos y ferezeos'], respuesta: 1, cita: 'Jueces 3:3' },
  { pregunta: '¿Cuánto tiempo sirvieron los hijos de Israel a Eglon, rey de los moabitas?', opciones: ['Ocho años', 'Dieciocho años', 'Cuarenta años', 'Ochenta años'], respuesta: 1, cita: 'Jueces 3:14' },
  { pregunta: '¿Quién mató a seiscientos hombres de los filisteos con una aguijada de bueyes?', opciones: ['Aod', 'Otoniel', 'Samgar', 'Eglón'], respuesta: 2, cita: 'Jueces 3:31' },
  //Preguntas del capitulo 4
  { pregunta: 'Según el capitulo 4 de jueces ¿Quién gobernaba Israel en aquel tiempo?', opciones: ['Sísara', 'Débora', 'Jabín', 'Barac'], respuesta: 1, cita: 'Jueces4:4' },
  { pregunta: '¿Quién fue convocado por Débora para luchar contra Sísara?', opciones: ['Haber', 'Barac', 'Jabin', 'Lapidot'], respuesta: 1, cita: 'Jueces 4:6-7' },
  { pregunta: '¿Cómo murió Sísara?', opciones: ['Fue asesinado en la batalla', 'Fue asesinado mientras dormía', 'Murió de hambre y sed', 'Murió de viejo'], respuesta: 1, cita: 'Jueces 4:21' },
  //Preguntas del capitulo 5
  { pregunta: 'Según el capitulo 5 de jueces ¿Quiénes cantaron?', opciones: ['Barac y Jael', 'Débora y Barac ', 'Jehová y Débora', 'Los hijos de Israel'], respuesta: 1, cita: 'Jueces 5:1' },
  { pregunta: '¿Qué sucedió cuando Jehová salió de Seir, según el texto?', opciones: ['Los cielos se oscurecieron', 'La tierra tembló y las nubes gotearon aguas', 'Los montes se aplastaron', 'Se produjo un gran fuego'], respuesta: 1, cita: 'Jueces 5:4-5' },
  { pregunta: '¿Quién no ayudó a Jehová contra los fuertes?', opciones: ['Heber, el ceneo', 'Barac hijo de Abinoam', 'Los habitantes de Meroz', 'La tribu de Rubén'], respuesta: 2, cita: 'Jueces 5:23' },
  //Preguntas del capitulo 6
  { pregunta: '¿Quién oprimió a los hijos de Israel por siete años según Jueces 6?', opciones: ['Los egipcios', 'Los madianitas', 'Los amalecitas', 'Los amorreos'], respuesta: 1, cita: 'Jueces 6:1' },
  { pregunta: '¿Quién le dijo a Gedeón que Jehová estaba con él?', opciones: ['Un profeta', 'Los hijos de israel', 'El angel de Jehova', 'Jehova mismo'], respuesta: 2, cita: 'Jueces 6:12' },
  { pregunta: '¿Cómo confirmó Gedeón que Jehová lo salvaría?', opciones: ['Por la voz del angel', 'Por una señal de un vellón de lana', 'Por la derrota de los madianitas', 'Por la liberación de los egipcios'], respuesta: 1, cita: 'Jueces 6:37' },
  //Preguntas del capitulo 7
  { pregunta: '¿Por qué Jehová redujo el número de hombres con Gedeón?', opciones: ['Para que los hombres no se cansaran en la batalla', 'Para evitar que Israel se jactara de haber logrado la victoria por sí mismo', 'Porque los madianitas también tenían un número reducido de hombres', 'Para demostrar su desagrado con los hombres de Gedeón'], respuesta: 1, cita: 'Jueces 7:2' },
  { pregunta: '¿Cómo seleccionó Jehová a los hombres que irían a la batalla con Gedeón?', opciones: ['Por sorteo', 'Por su habilidad en la batalla', 'Por la forma en que bebían agua', 'Por su lealtad a Gedeón'], respuesta: 2, cita: 'Jueces 7:5' },
  //Preguntas del capitulo 8
  { pregunta: '¿Cómo respondieron los hombres de Sucot y Peniel cuando Gedeón les pidió provisiones para sus hombres?', opciones: ['Proporcionaron las provisiones de inmediato.', 'Negaron el suministro de provisiones hasta que Gedeón derrotara a los reyes de Madián', 'Ignoraron la solicitud de Gedeón', 'Lucharon contra Gedeón y sus hombres'], respuesta: 1, cita: 'Jueces 8:6-9' },
  { pregunta: '¿Qué hizo Gedeón con Zeba y Zalmuna, los reyes de Madián, después de capturarlos?', opciones: ['Los libero', 'Los usó como rehenes para negociar.', 'Los mato', 'Los llevó a Israel como trofeos'], respuesta: 1, cita: 'Jueces 8:21' },
  //Preguntas del capitulo 9
  { pregunta: ' ¿Cómo consiguió Abimelec el apoyo de los hombres de Siquem para gobernar sobre ellos?', opciones: ['Prometió compartir con ellos su riqueza', 'Les recordó su parentesco, ya que era de su misma carne y hueso.', 'Derrotó a los setenta hijos de Jerobaal en combate.', 'Se casó con la hija del líder de Siquem.'], respuesta: 1, cita: 'Jueces 9:2' },/*
  { pregunta: '', opciones: ['', '', '', ''], respuesta: 3, cita: '' },
  //Preguntas del capitulo 10
  { pregunta: '', opciones: ['', '', '', ''], respuesta: 3, cita: '' },
  { pregunta: '', opciones: ['', '', '', ''], respuesta: 3, cita: '' },
  //Preguntas del capitulo 11
  { pregunta: '', opciones: ['', '', '', ''], respuesta: 3, cita: '' },
  { pregunta: '', opciones: ['', '', '', ''], respuesta: 3, cita: '' },*/
  // Más preguntas...
];

const verdaderoFalso = [
  //Preguntas del capitulo 1
  { pregunta: 'Juda tomo a Gaza como territorio.', opciones: ['Verdadero', 'Falso'], respuesta: 0, cita: 'Jueces 1:18'},
  { pregunta: 'Juda tenia un hermano llamado simeon', opciones: ['Verdadero', 'Falso'], respuesta: 0, cita: 'Jueces 1:3'},
  //Preguntas del capitulo 2
  { pregunta: '¿El ángel de Jehová subió de Gilgal a Boquim para dar un mensaje a los hijos de Israel?', opciones: ['Verdadero', 'Falso'], respuesta: 0, cita: 'Jueces 2:1'},
  { pregunta: '¿Los hijos de Israel siempre obedecieron a los mandamientos de Jehová, incluso después de la muerte de los jueces?', opciones: ['Verdadero', 'Falso'], respuesta: 2, cita: 'Jueces 2:19'},
  //Preguntas del capitulo 3
  { pregunta: 'Los hijos de Israel clamaron a Jehová, y Jehová levantó un libertador a los hijos de Israel; esto es, a Otoniel hijo de Cenaz, hermano menor de Caleb', opciones: ['Verdadero', 'Falso'], respuesta: 0, cita:'Jueces 3:9' },
  { pregunta: 'Aod asesinó a Eglón, rey de Moab, con un puñal de dos filos.', opciones: ['Verdadero', 'Falso'], respuesta: 0, cita:'Jueces 3: 21-22' },
  //Preguntas del capitulo 4
  { pregunta: 'Los hijos de Israel sirvieron a los baales y a las imágenes de Asera después de ser liberados de Eglón, rey de Moab.', opciones: ['Verdadero', 'Falso'], respuesta: 1, cita: 'Jueces 3:7-8'},
  { pregunta: 'Sísara, capitán del ejército, era el rey de Canaán', opciones: ['Verdadero', 'Falso'], respuesta: 1, cita: 'Jueces 4:2'},
  //Preguntas del capitulo 5
  { pregunta: 'Según Jueces 5, los caminos quedaron abandonados en los días de Jael.', opciones: ['Verdadero', 'Falso'], respuesta: 0, cita:'Jueces 5:6' },
  { pregunta: 'En jueces 5 menciona que el pueblo de Zabulón se quedó al margen del conflicto', opciones: ['Verdadero', 'Falso'], respuesta: 1, cita:'Jueces 5:18' },
  //Preguntas del capitulo 6
  { pregunta: 'Gedeón era el hijo mayor de su padre.', opciones: ['Verdadero', 'Falso'], respuesta: 1, cita:'Jueces 6:15' },
  { pregunta: 'Gedeón destruyó el altar de Baal en el día', opciones: ['Verdadero', 'Falso'], respuesta: 1, cita:'Jueces 6:27' },
  //Preguntas del capitulo 7
  { pregunta: 'El campamento de los madianitas se ubicaba al sur de la fuente Harod', opciones: ['Verdadero', 'Falso'], respuesta: 1, cita:'Jueces 7:1' },
  { pregunta: 'Los hombres que se quedaron con Gedeón para pelear contra los madianitas eran aquellos que bebieron agua doblando sus rodillas', opciones: ['Verdadero', 'Falso'], respuesta: 1, cita:'Jueces 7:6' },
  //Preguntas del capitulo 8
  { pregunta: 'Después de derrotar a los madianitas, Gedeón aceptó ser señor sobre los israelitas.', opciones: ['Verdadero', 'Falso'], respuesta: 1, cita:'Jueces 8:23' },
  { pregunta: 'Al regresar de la batalla, Gedeón castigó a los hombres de Sucot con espinos y abrojos.', opciones: ['Verdadero', 'Falso'], respuesta: 0, cita:'Jueces 8:16' },
  //Preguntas del capitulo 9
  { pregunta: 'Abimelec mató a todos los hijos de Jerobaal para asumir el poder.', opciones: ['Verdadero', 'Falso'], respuesta: 1, cita:'jueces 9:5' },
  { pregunta: 'Abimelec gobernó sobre Israel durante tres años antes de que se produjera una discordia', opciones: ['Verdadero', 'Falso'], respuesta: 0, cita:'Jueces 9:22' },
  //Preguntas del capitulo 10
  { pregunta: 'Tola, hijo de Fúa, juzgó a Israel por veintitrés años', opciones: ['Verdadero', 'Falso'], respuesta: 0, cita:'Jueces 10:2' },
  { pregunta: 'Jair galaadita tenía treinta hijos y treinta ciudades.', opciones: ['Verdadero', 'Falso'], respuesta: 0, cita:'Jueces 10:4' },
  //Preguntas del capitulo 11
  { pregunta: 'Los ancianos de Galaad querían que Jefté fuera su caudillo para luchar contra los amonitas.', opciones: ['Verdadero', 'Falso'], respuesta: 0, cita:'Jueces 11:6' },
  { pregunta: 'El rey de los hijos de Amón atendió las razones que Jefté le había enviado.', opciones: ['Verdadero', 'Falso'], respuesta: 1, cita:'Jueces 11:28' },
  
  // Más preguntas...
];


//{ pregunta: '' , opciones: , respuesta: 0 }, 

const preguntasAbiertas = [
  //Preguntas del capitulo 1
  { pregunta: 'Según jueces 1:16 en donde dice textualmente lo siguiente: “Y los hijos del Ceneo, suegro de Moisés, subieron de la ciudad de las ____________ con los hijos de juda al desierto de Juda de Juda” completa la parte que falta.', respuesta: 'Palmera', cita: 'Jueces 1:16'},
  { pregunta: '¿Quién conquisto Quiriat-safer?', respuesta: 'Otoniel', cita: ''},
  //Preguntas del capitulo 2
  { pregunta: '¿Cómo reaccionaron los hijos de Israel tras las palabras del ángel de Jehová?', respuesta: 'alzaron la voz y lloraron', cita: 'Jueces 2:4'},
  { pregunta: '¿A qué dioses adoraron los hijos de Israel después de la muerte de Josué?', respuesta: 'a los dioses baales', cita: 'Jueces 2:11'},
  //Preguntas del capitulo 3
  { pregunta: '¿A quién sirvieron los hijos de Israel durante ocho años?', respuesta: 'A Cusan-risataim, rey de Mesopotamia.', cita: ''},
  { pregunta: '¿Cómo se llama el hijo de Cenaz?', respuesta: 'Otoniel', cita: 'Jueces 3:9'},
  //Preguntas del capitulo 4
  { pregunta: '¿Dónde solía sentarse Débora para que los hijos de Israel acudieran a ella?', respuesta: 'Bajo una palmera, entre Ramá y Bet-el', cita: 'Jueces 4:5'},
  { pregunta: '¿Cómo logró Jael asesinar a Sísara?', respuesta: 'Le clavó una estaca en las sienes mientras dormía', cita: 'Jueces 4:21'},
  //Preguntas del capitulo 5
  { pregunta: '¿Cómo describiría la acción de Débora según el texto?', respuesta: 'Débora se levantó como una madre en Israel cuando las aldeas estaban abandonadas y había decaído', cita: 'Jueces 5:7'},
  { pregunta: '¿Cómo se describe el comportamiento del pueblo de Rubén en el capitulo 5 de jueces?', respuesta: 'El pueblo de Rubén se quedó entre los rediles, tomando grandes decisiones pero sin tomar acción', cita: 'Jueces 5:16'},
  //Preguntas del capitulo 6
  { pregunta: '¿Por qué los hijos de Israel fueron entregados en manos de los madianitas?', respuesta: 'Porque hicieron lo malo ante los ojos de Jehová', cita: 'Jueces 6:7 '},
  { pregunta: '¿Cómo se llamaba el padre de Gedeon?', respuesta: 'Joas', cita: 'Jueces 6:29'},
  //Preguntas del capitulo 7
  { pregunta: '¿Qué le pidió Gedeón a Jehová antes de partir a preparar su ofrenda?', respuesta: 'Que esperara hasta que él volviera con su ofrenda', cita: 'Jueces 6:18'},
  { pregunta: '¿Cómo se aseguró Jehová de que Israel no se jactara de su propia fuerza en la victoria sobre los madianitas?', respuesta: 'Redujo el número de hombres que lucharían contra los madianitas', cita: 'Jueces 7:2'},
  //Preguntas del capitulo 8
  { pregunta: '¿Cómo respondió Gedeón cuando los israelitas le pidieron que gobernara sobre ellos?', respuesta: 'Rechazó la petición de los israelitas de gobernar sobre ellos', cita: 'Jueces 8:23'},
  { pregunta: '¿Por qué los hombres de Efraín estaban enojados con Gedeón al principio del relato y cómo aplacó Gedeón ese enojo?', respuesta: 'porque no los había llamado para la guerra contra los madianitas', cita: 'Jueces 8:2-3'},
  //Preguntas del capitulo 9
  { pregunta: '¿Qué acción provocó la rebelión de los hombres de Siquem contra Abimelec?', respuesta: 'Dios envió un espíritu de discordia entre Abimelec y los hombres de Siquem, lo que provocó su rebelión', cita: 'Jueces 9:22-23'},
  { pregunta: '¿Cómo murió Abimelec?', respuesta: 'Abimelec murió cuando una mujer dejó caer un pedazo de rueda de molino sobre su cabeza, rompiéndole el cráneo', cita: 'Jueces 9:53'},
  //Preguntas del capitulo 10
  { pregunta: '¿Cómo respondieron los hijos de Israel cuando Jehová les dijo que ya no los liberaría?', respuesta: 'admitieron que habían pecado y le pidieron a Jehová que los librara en ese día', cita: 'Jueces 10:15'},
  { pregunta: '¿Qué hicieron los hijos de Israel para intentar aliviar su aflicción después de que Jehová dijera que ya no los liberaría?', respuesta: 'Quitaron de entre ellos los dioses ajenos y comenzaron a servir a Jehová', cita: 'Jueces 10:16'},
  //Preguntas del capitulo 11
  { pregunta: '¿Qué voto hizo Jefté a Jehová y qué implicaciones tuvo esto para su hija?', respuesta: 'Que si le entregaba a los amonitas en sus manos, cualquier cosa que saliera de las puertas de su casa a recibirlo cuando regresara victorioso sería de Jehová y la ofrecería en holocausto. La implicación para su hija fue que ella fue la que salió a recibir a Jefté, y por lo tanto, según el voto de Jefté, debía ofrecerla en holocausto a Jehová', cita: 'Jueces 11:30-31'},
  { pregunta: '¿Cómo respondió la hija de Jefté a la situación que enfrentaba debido al voto de su padre?', respuesta: 'Aceptó la situación', cita: 'Jueces 11:36'},
  
  // Más preguntas...
];

let preguntas = [...opcionMultiples, ...verdaderoFalso]; 
let preguntasMostrar = [...opcionMultiples, ...verdaderoFalso, ...preguntasAbiertas]; 
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
  if (preguntas[indicePreguntaActual] !== preguntasAbiertas[indicePreguntaActual]) {
    if (respuesta === preguntas[indicePreguntaActual].respuesta) {
      puntosGanados += 1;
      mensaje.textContent = "¡Acertaste la respuesta!";
    } else {
      puntosPerdidos += 1;
      mensaje.textContent = "Te has equivocado.";
    }
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
    mostrarResumen();  // Llama a la función para mostrar el resumen
  }
}


function mostrarResumen() {
  const resumen = document.getElementById('resumen');
  const quizContainer = document.getElementById('quizContainer');

  // Esconde el contenedor del cuestionario
  quizContainer.style.display = "none";

  for (let pregunta of preguntasMostrar) {
    const preguntaElemento = document.createElement('p');
    let respuesta = pregunta.respuesta;
    if (pregunta.opciones) {
      respuesta = pregunta.opciones[pregunta.respuesta];
    }

    preguntaElemento.textContent = pregunta.pregunta + " Respuesta correcta: " + respuesta + " Cita biblica: " + pregunta.cita;
    resumen.appendChild(preguntaElemento);
  }
}



mostrarPregunta(); // Mostrar la primera pregunta
