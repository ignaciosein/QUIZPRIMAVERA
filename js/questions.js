1let arrayDeDatos = [];
let todasLasRespuestas = [];
let allQuestions = [{}];

let allAnswers = [{}];
let arraydeobjetos = [];
let totales = [];
let puntuaciones = [];
let allCorrectas = [];
let allQuestions2 = [];

let arrayDeAciertos = [];
let solucion = [];

let arryKeys = [];
let nombreDeKeys = [];

let preguntaAcierto = [];

let puntos = [];
////////////////////////
const preguntas = async () => {
  let res = await fetch(
    `https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple`
  );
  let data = await res.json();

  printQuestions(data);
};

preguntas();

/////PINTA TODAS LAS PREGUNTAS EN EL ARRAY DE OBJETOS ALLQUESTIONS////////
function printQuestions(preguntas) {
  for (let index = 0; index < preguntas.results.length; index++) {
    pregCorrecta = preguntas.results[index].correct_answer;
    pregIncorrecta = preguntas.results[index].incorrect_answers;
    pregTitle = preguntas.results[index].question;

    allQuestions2.push({
      titulo: pregTitle,
      pCorrecta: pregCorrecta,
      pIncorrecta1: pregIncorrecta[0],
      pIncorrecta2: pregIncorrecta[1],
      pIncorrecta3: pregIncorrecta[2],
    });
  }

  preguntasRandom(allQuestions2);
}

function preguntasRandom(variable) {
  document.getElementById("resultados").innerHTML = `
  
    <div id="preg1"  ><h4>Pregunta 1</h4> <h2>${variable[0].titulo}</h2>
    <label>${variable[0].pCorrecta}<input type="radio" class="radios" name="pregunta1" id="radio1" value="${variable[0].pCorrecta}" /></label>
    
    <label>${variable[0].pIncorrecta1}<input type="radio" class="radios"  name="pregunta1" id="radio2" checked value="${variable[0].pIncorrecta1}" /></label>
    
    <label>${variable[0].pIncorrecta2}<input type="radio" class="radios" name="pregunta1" id="radio3" value="${variable[0].pIncorrecta2}" /></label>
    
    <label>${variable[0].pIncorrecta3}<input type="radio" class="radios"  name="pregunta1" id="radio4" value="${variable[0].pIncorrecta3}" /></label>
    
    
    <input id="button-Preg1" type="button" class="button" value="Siguiente" />
   
    </div>
    
    <div id="preg2" class="ocultar"><h4>Pregunta 2</h4>  <h2>${variable[1].titulo}</h2>
    
   <label>${variable[1].pCorrecta} <input type="radio" class="radios" name="pregunta2" id="radio1-2" value="${variable[1].pCorrecta}" /></label>
    <label>${variable[1].pIncorrecta1}<input type="radio"  class="radios" name="pregunta2" id="radio2-2"checked value="${variable[1].pIncorrecta1}" /></label>
    <label>${variable[1].pIncorrecta2}<input type="radio" class="radios" name="pregunta2" id="radio3-2" value="${variable[1].pIncorrecta2}" /></label>
   <label>${variable[1].pIncorrecta3} <input type="radio" class="radios" name="pregunta2" id="radio4-2" value="${variable[1].pIncorrecta2}" /></label>
    
    <input id="button-Preg2" type="button" class="button" value="Siguiente" />
    </div>
    
    <div id="preg3" class="ocultar"><h4>Pregunta 3</h4>  <h2>${variable[2].titulo}</h2>
    
    <label>${variable[2].pCorrecta}<input type="radio"  class="radios" name="pregunta3" id="radio1-3" value="${variable[2].pCorrecta}" /></label>
    <label>${variable[2].pIncorrecta1}<input type="radio"  class="radios" name="pregunta3" id="radio2-3"checked value="${variable[2].pIncorrecta1}" /></label>
    <label>${variable[2].pIncorrecta2}<input type="radio"  class="radios" name="pregunta3" id="radio3-3" value="${variable[2].pIncorrecta2}" /></label>
    <label>${variable[2].pIncorrecta3}<input type="radio"  class="radios" name="pregunta3" id="radio4-3" value="${variable[2].pIncorrecta3}" /></label>
    
    <input id="button-Preg3" type="button" class="button" value="Siguiente" />
    </div>
    
    <div id="preg4" class="ocultar"> <h4>Pregunta 4</h4> <h2>${variable[3].titulo}</h2>
    
    <label>${variable[3].pCorrecta}<input type="radio" class="radios" name="pregunta4" id="radio1-4" value="${variable[3].pCorrecta}" /></label>
    <label>${variable[3].pIncorrecta1}<input type="radio"  class="radios" name="pregunta4" id="radio2-4" checked value="${variable[3].pIncorrecta1}" /></label>
    <label>${variable[3].pIncorrecta2}<input type="radio" class="radios" name="pregunta4" id="radio3-4" value="${variable[3].pIncorrecta2}" /></label>
    <label>${variable[3].pIncorrecta3}<input type="radio" class="radios" name="pregunta4" id="radio4-4" value="${variable[3].pIncorrecta3}" /></label>
    
    <input id="button-Preg4" type="button" class="button" value="Siguiente" />
    </div>
    
    <div id="preg5" class="ocultar"> <h4>Pregunta 5</h4> <h2>${variable[4].titulo}</h2>
    
   <label>${variable[4].pCorrecta} <input type="radio" class="radios" name="pregunta5" id="radio1-5" value="${variable[4].pCorrecta}" /></label>
    <label>${variable[4].pIncorrecta1}<input type="radio"  class="radios" name="pregunta5" id="radio2-5" checked value="${variable[4].pIncorrecta1}" /></label>
    <label>${variable[4].pIncorrecta2}<input type="radio" class= "radios" name="pregunta5" id="radio3-5" value="${variable[4].pIncorrecta2}" /></label>
    <label>${variable[4].pIncorrecta3}<input type="radio" class= "radios" name="pregunta5" id="radio4-5" value="${variable[4].pIncorrecta3}" /></label>
    
    <input id="button-Preg5" type="button" class="button" value="Siguiente" />
    </div>
    
    <div id="preg6" class="ocultar"><h4>Pregunta 6</h4>  <h2>${variable[5].titulo}</h2>
   
    <label>${variable[5].pCorrecta}<input type="radio" class="radios" name="pregunta6" id="radio1-6" value="${variable[5].pCorrecta}" /></label>
   <label>${variable[5].pIncorrecta1} <input type="radio" class= "radios" class="radios" name="pregunta6" id="radio2-6"checked value="${variable[5].pIncorrecta1}" /></label>
    <label>${variable[5].pIncorrecta2}<input type="radio" class= "radios" class="radios" name="pregunta6" id="radio3-6" value="${variable[5].pIncorrecta2}" /></label>
    <label>${variable[5].pIncorrecta2}<input type="radio" class= "radios" class="radios" name="pregunta6" id="radio4-6" value="${variable[5].pIncorrecta3}" /></label>
    
    <input id="button-Preg6" type="button" class="button" value="Siguiente" />
    </div>
    
    <div id="preg7" class="ocultar"> <h4>Pregunta 7</h4> <h2>${variable[6].titulo}</h2>
    
    <label>${variable[6].pCorrecta}<input type="radio" class="radios" name="pregunta7" id="radio1-7" value="${variable[6].pCorrecta}" /></label>
    <label>${variable[6].pIncorrecta1}<input type="radio" class="radios" name="pregunta7" id="radio2-7"checked value="${variable[6].pIncorrecta1}" /></label>
    <label>${variable[6].pIncorrecta2}<input type="radio" class="radios" name="pregunta7" id="radio3-7" value="${variable[6].pIncorrecta2}" /></label>
    <label>${variable[6].pIncorrecta3}<input type="radio" class="radios" name="pregunta7" id="radio4-7" value="${variable[6].pIncorrecta3}" /></label>
    
    <input id="button-Preg7" type="button" class="button" value="Siguiente" />
    </div>
    
    <div id="preg8" class="ocultar"><h4>Pregunta 8</h4>  <h2>${variable[7].titulo}</h2>
    
    <label>${variable[7].pCorrecta}<input type="radio" class="radios" name="pregunta8" id="radio1-8" value="${variable[7].pCorrecta}" /></label>
    <label>${variable[7].pIncorrecta1}<input type="radio" class="radios" name="pregunta8" id="radio2-8" checked value="${variable[7].pIncorrecta1}" /></label>
    <label>${variable[7].pIncorrecta2}<input type="radio" class="radios"  name="pregunta8" id="radio3-8" value="${variable[7].pIncorrecta2}" /></label>
    <label>${variable[7].pIncorrecta3}<input type="radio" class="radios" name="pregunta8" id="radio4-8" value="${variable[7].pIncorrecta3}" /></label>
    
    <input id="button-Preg8" type="button" class="button" value="Siguiente" />
    </div>
    
    <div id="preg9" class="ocultar"> <h4>Pregunta 9</h4> <h2>${variable[8].titulo}</h2>
    
    <label>${variable[8].pCorrecta}<input type="radio" class="radios" name="pregunta9" id="radio1-9" value="${variable[8].pCorrecta}" /></label>
    <label>${variable[8].pIncorrecta1}<input type="radio" class="radios" name="pregunta9" id="radio2-9" checked  value="${variable[8].pIncorrecta1}" /></label>
    <label>${variable[8].pIncorrecta2}<input type="radio" class="radios" name="pregunta9" id="radio3-9" value="${variable[8].pIncorrecta2}" /></label>
    <label>${variable[8].pIncorrecta3}<input type="radio" class="radios" name="pregunta9" id="radio4-9" value="${variable[8].pIncorrecta3}" /></label>
    
    <input id="button-Preg9" type="button" class="button" value="Siguiente" />
    </div>
    
    <div id="preg10" class="ocultar"> <h4>Pregunta 10</h4> <h2>${variable[9].titulo}</h2>
    
    <label>${variable[9].pCorrecta}<input type="radio" class= "radios" name="pregunta10" id="radio1-10" value="${variable[9].pCorrecta}" /></label>
    <label>${variable[9].pIncorrecta1}<input type="radio" class="radios" name="pregunta10" id="radio2-10" checked value="${variable[9].pIncorrecta1}" /></label>
    <label>${variable[9].pIncorrecta2}<input type="radio" class="radios" name="pregunta10" id="radio3-10" value="${variable[9].pIncorrecta2}" /></label>
    <label>${variable[9].pIncorrecta3}<input type="radio" class="radios" name="pregunta10" id="radio4-10" value="${variable[9].pIncorrecta3}" /></label>
    
    <input id="button-Preg10" type="button" class="button" value="Siguiente" />
    </div>
    
    <div id="resultados" class="ocultar"><h1>FINAL</h1> </div>
   
     <div id="totales">TOTALESh</div>
    
     `;

  /////////////////////PREGUNTA1////////////////////////////
  document
    .getElementById("button-Preg1")
    .addEventListener("click", function () {
      let radio1 = document.getElementById("radio1").value;
      let radio2 = document.getElementById("radio2").value;
      let radio3 = document.getElementById("radio3").value;
      let radio4 = document.getElementById("radio4").value;

      if (document.getElementById("radio1").checked === true) {
        arrayDeDatos.push({ respuesta: radio1 });
      } else if (document.getElementById("radio2").checked === true) {
        arrayDeDatos.push({ respuesta: radio2 });
      } else if (document.getElementById("radio3").checked === true) {
        arrayDeDatos.push({ respuesta: radio3 });
      } else if (document.getElementById("radio4").checked === true) {
        arrayDeDatos.push({ respuesta: radio4 });
      }

      document.getElementById("preg1").style.display = "none";
      document.getElementById("preg2").style.display = "block";
    });

  /////////////////////PREGUNTA2////////////////////////////
  document
    .getElementById("button-Preg2")
    .addEventListener("click", function () {
      document.getElementById("preg2").style.display = "none";
      document.getElementById("preg3").style.display = "block";

      let radio1 = document.getElementById("radio1-2").value;
      let radio2 = document.getElementById("radio2-2").value;
      let radio3 = document.getElementById("radio3-2").value;
      let radio4 = document.getElementById("radio4-2").value;

      if (document.getElementById("radio1-2").checked === true) {
        arrayDeDatos.push({ respuesta: radio1 });
      } else if (document.getElementById("radio2-2").checked === true) {
        arrayDeDatos.push({ respuesta: radio2 });
      } else if (document.getElementById("radio3-2").checked === true) {
        arrayDeDatos.push({ respuesta: radio3 });
      } else if (document.getElementById("radio4-2").checked === true) {
        arrayDeDatos.push({ respuesta: radio4 });
      }
    });

  /////////////////////PREGUNTA3////////////////////////////
  document
    .getElementById("button-Preg3")
    .addEventListener("click", function () {
      document.getElementById("preg3").style.display = "none";
      document.getElementById("preg4").style.display = "block";

      let radio1 = document.getElementById("radio1-3").value;
      let radio2 = document.getElementById("radio2-3").value;
      let radio3 = document.getElementById("radio3-3").value;
      let radio4 = document.getElementById("radio4-3").value;

      if (document.getElementById("radio1-3").checked === true) {
        arrayDeDatos.push({ respuesta: radio1 });
      } else if (document.getElementById("radio2-3").checked === true) {
        arrayDeDatos.push({ respuesta: radio2 });
      } else if (document.getElementById("radio3-3").checked === true) {
        arrayDeDatos.push({ respuesta: radio3 });
      } else if (document.getElementById("radio4-3").checked === true) {
        arrayDeDatos.push({ respuesta: radio4 });
      }
    });

  /////////////////////PREGUNTA4////////////////////////////
  document
    .getElementById("button-Preg4")
    .addEventListener("click", function () {
      document.getElementById("preg4").style.display = "none";
      document.getElementById("preg5").style.display = "block";

      let radio1 = document.getElementById("radio1-4").value;
      let radio2 = document.getElementById("radio2-4").value;
      let radio3 = document.getElementById("radio3-4").value;
      let radio4 = document.getElementById("radio4-4").value;

      if (document.getElementById("radio1-4").checked === true) {
        arrayDeDatos.push({ respuesta: radio1 });
      } else if (document.getElementById("radio2-4").checked === true) {
        arrayDeDatos.push({ respuesta: radio2 });
      } else if (document.getElementById("radio3-4").checked === true) {
        arrayDeDatos.push({ respuesta: radio3 });
      } else if (document.getElementById("radio4-4").checked === true) {
        arrayDeDatos.push({ respuesta: radio4 });
      }
    });

  /////////////////////PREGUNTA5////////////////////////////
  document
    .getElementById("button-Preg5")
    .addEventListener("click", function () {
      document.getElementById("preg5").style.display = "none";
      document.getElementById("preg6").style.display = "block";

      let radio1 = document.getElementById("radio1-5").value;
      let radio2 = document.getElementById("radio2-5").value;
      let radio3 = document.getElementById("radio3-5").value;
      let radio4 = document.getElementById("radio4-5").value;

      if (document.getElementById("radio1-5").checked === true) {
        arrayDeDatos.push({ respuesta: radio1 });
      } else if (document.getElementById("radio2-5").checked === true) {
        arrayDeDatos.push({ respuesta: radio2 });
      } else if (document.getElementById("radio3-5").checked === true) {
        arrayDeDatos.push({ respuesta: radio3 });
      } else if (document.getElementById("radio4-5").checked === true) {
        arrayDeDatos.push({ respuesta: radio4 });
      }
    });

  /////////////////////PREGUNTA6////////////////////////////
  document
    .getElementById("button-Preg6")
    .addEventListener("click", function () {
      document.getElementById("preg6").style.display = "none";
      document.getElementById("preg7").style.display = "block";

      let radio1 = document.getElementById("radio1-6").value;
      let radio2 = document.getElementById("radio2-6").value;
      let radio3 = document.getElementById("radio3-6").value;
      let radio4 = document.getElementById("radio4-6").value;

      if (document.getElementById("radio1-6").checked === true) {
        arrayDeDatos.push({ respuesta: radio1 });
      } else if (document.getElementById("radio2-6").checked === true) {
        arrayDeDatos.push({ respuesta: radio2 });
      } else if (document.getElementById("radio3-6").checked === true) {
        arrayDeDatos.push({ respuesta: radio3 });
      } else if (document.getElementById("radio4-6").checked === true) {
        arrayDeDatos.push({ respuesta: radio4 });
      }
    });

  /////////////////////PREGUNTA7////////////////////////////
  document
    .getElementById("button-Preg7")
    .addEventListener("click", function () {
      document.getElementById("preg7").style.display = "none";
      document.getElementById("preg8").style.display = "block";

      let radio1 = document.getElementById("radio1-7").value;
      let radio2 = document.getElementById("radio2-7").value;
      let radio3 = document.getElementById("radio3-7").value;
      let radio4 = document.getElementById("radio4-7").value;

      if (document.getElementById("radio1-7").checked === true) {
        arrayDeDatos.push({ respuesta: radio1 });
      } else if (document.getElementById("radio2-7").checked === true) {
        arrayDeDatos.push({ respuesta: radio2 });
      } else if (document.getElementById("radio3-7").checked === true) {
        arrayDeDatos.push({ respuesta: radio3 });
      } else if (document.getElementById("radio4-7").checked === true) {
        arrayDeDatos.push({ respuesta: radio4 });
      }
    });

  /////////////////////PREGUNTA8////////////////////////////
  document
    .getElementById("button-Preg8")
    .addEventListener("click", function () {
      document.getElementById("preg8").style.display = "none";
      document.getElementById("preg9").style.display = "block";

      let radio1 = document.getElementById("radio1-8").value;
      let radio2 = document.getElementById("radio2-8").value;
      let radio3 = document.getElementById("radio3-8").value;
      let radio4 = document.getElementById("radio4-8").value;

      if (document.getElementById("radio1-8").checked === true) {
        arrayDeDatos.push({ respuesta: radio1 });
      } else if (document.getElementById("radio2-8").checked === true) {
        arrayDeDatos.push({ respuesta: radio2 });
      } else if (document.getElementById("radio3-8").checked === true) {
        arrayDeDatos.push({ respuesta: radio3 });
      } else if (document.getElementById("radio4-8").checked === true) {
        arrayDeDatos.push({ respuesta: radio4 });
      }
    });

  /////////////////////PREGUNTA9////////////////////////////
  document
    .getElementById("button-Preg9")
    .addEventListener("click", function () {
      document.getElementById("preg9").style.display = "none";
      document.getElementById("preg10").style.display = "block";

      let radio1 = document.getElementById("radio1-9").value;
      let radio2 = document.getElementById("radio2-9").value;
      let radio3 = document.getElementById("radio3-9").value;
      let radio4 = document.getElementById("radio4-9").value;

      if (document.getElementById("radio1-9").checked === true) {
        arrayDeDatos.push({ respuesta: radio1 });
      } else if (document.getElementById("radio2-9").checked === true) {
        arrayDeDatos.push({ respuesta: radio2 });
      } else if (document.getElementById("radio3-9").checked === true) {
        arrayDeDatos.push({ respuesta: radio3 });
      } else if (document.getElementById("radio4-9").checked === true) {
        arrayDeDatos.push({ respuesta: radio4 });
      }
    });

  /////////////////////PREGUNTA10////////////////////////////
  document
    .getElementById("button-Preg10")
    .addEventListener("click", function () {
      document.getElementById("preg10").style.display = "none";
      document.getElementById("resultados").style.display = "block";

      let radio1 = document.getElementById("radio1-10").value;
      let radio2 = document.getElementById("radio2-10").value;
      let radio3 = document.getElementById("radio3-10").value;
      let radio4 = document.getElementById("radio4-10").value;

      if (document.getElementById("radio1-10").checked === true) {
        arrayDeDatos.push({ respuesta: radio1 });
      } else if (document.getElementById("radio2-10").checked === true) {
        arrayDeDatos.push({ respuesta: radio2 });
      } else if (document.getElementById("radio3-10").checked === true) {
        arrayDeDatos.push({ respuesta: radio3 });
      } else if (document.getElementById("radio4-10").checked === true) {
        arrayDeDatos.push({ respuesta: radio4 });
      }
      sacarDatosRespuesta(allQuestions2);
    });
}

//////////////////////////PINTA EN LA PAGINA PRINCIPAL LOS DATOS////////////////

function sacarDatosRespuesta() {
  let aciertosFinales = [];
  if (arrayDeDatos[0].respuesta === allQuestions2[0].pCorrecta) {
    aciertosFinales.push(1);
    document.getElementsByClassName("acierto");
  } else {
    aciertosFinales.push(0);
  }

  if (arrayDeDatos[1].respuesta === allQuestions2[1].pCorrecta) {
    aciertosFinales.push(1);
  } else {
    aciertosFinales.push(0);
  }
  if (arrayDeDatos[2].respuesta === allQuestions2[2].pCorrecta) {
    aciertosFinales.push(1);
  } else {
    aciertosFinales.push(0);
  }

  if (arrayDeDatos[3].respuesta === allQuestions2[3].pCorrecta) {
    aciertosFinales.push(1);
  } else {
    aciertosFinales.push(0);
  }

  if (arrayDeDatos[4].respuesta === allQuestions2[4].pCorrecta) {
    aciertosFinales.push(1);
  } else {
    aciertosFinales.push(0);
  }

  if (arrayDeDatos[5].respuesta === allQuestions2[5].pCorrecta) {
    aciertosFinales.push(1);
  } else {
    aciertosFinales.push(0);
  }

  if (arrayDeDatos[6].respuesta === allQuestions2[6].pCorrecta) {
    aciertosFinales.push(1);
  } else {
    aciertosFinales.push(0);
  }

  if (arrayDeDatos[7].respuesta === allQuestions2[7].pCorrecta) {
    aciertosFinales.push(1);
  } else {
    aciertosFinales.push(0);
  }

  if (arrayDeDatos[8].respuesta === allQuestions2[8].pCorrecta) {
    aciertosFinales.push(1);
  } else {
    aciertosFinales.push(0);
  }

  if (arrayDeDatos[9].respuesta === allQuestions2[9].pCorrecta) {
    aciertosFinales.push(1);
  } else {
    aciertosFinales.push(0);
  }

  let finish = aciertosFinales.reduce((a, b) => a + b);
  document.getElementById("iniciarTest2").style.display = "block";
  document.getElementById("irATest2").style.display = "block";
  document.getElementById("totales").style.display = "block";
  document.getElementById("totales").innerHTML = `

  <h1>Has acertado ${finish}/10</h1>
Respuesta 1 : <div id="res1">${arrayDeDatos[0].respuesta}</div><br>
Respuesta 2 :<div id="res2">${arrayDeDatos[1].respuesta}</div><br>
Respuesta 3 :<div id="res3">${arrayDeDatos[2].respuesta}</div><br>
Respuesta 4 :<div id="res4">${arrayDeDatos[3].respuesta}</div><br>
Respuesta 5 :<div id="res5">${arrayDeDatos[4].respuesta}</div><br>
Respuesta 6 :<div id="res6">${arrayDeDatos[5].respuesta}</div><br>
Respuesta 7 :<div id="res7">${arrayDeDatos[6].respuesta}</div><br>
Respuesta 8 :<div id="res8">${arrayDeDatos[7].respuesta}</div><br>
Respuesta 9 :<div id="res9">${arrayDeDatos[8].respuesta}</div><br>
Respuesta 10 :<div id="res10">${arrayDeDatos[9].respuesta}</div><br>
 
 

`;

  if (arrayDeDatos[0].respuesta === allQuestions2[0].pCorrecta) {
    console.log("acierto");
    arrayDeAciertos.push(1);

    document.getElementsByClassName("acierto");
    document.getElementById("res1").style.color = "green";
  } else {
    console.log("incorrecta");

    arrayDeAciertos.push(0);
    document.getElementById("res1").style.color = "red";
  }

  if (arrayDeDatos[1].respuesta === allQuestions2[1].pCorrecta) {
    console.log("acierto");
    arrayDeAciertos.push(1);
    document.getElementById("res2").style.color = "green";
  } else {
    console.log("incorrecta");
    document.getElementById("res2").style.color = "red";
    arrayDeAciertos.push(0);
  }

  if (arrayDeDatos[2].respuesta === allQuestions2[2].pCorrecta) {
    document.getElementById("res3").style.color = "green";

    arrayDeAciertos.push(1);
  } else {
    document.getElementById("res3").style.color = "red";
    arrayDeAciertos.push(0);
  }

  if (arrayDeDatos[3].respuesta === allQuestions2[3].pCorrecta) {
    document.getElementById("res4").style.color = "green";

    arrayDeAciertos.push(1);
  } else {
    document.getElementById("res4").style.color = "red";
    console.log("incorrecta");

    arrayDeAciertos.push(0);
  }

  if (arrayDeDatos[4].respuesta === allQuestions2[4].pCorrecta) {
    document.getElementById("res5").style.color = "green";

    arrayDeAciertos.push(1);
  } else {
    document.getElementById("res5").style.color = "red";
    console.log("incorrecta");

    arrayDeAciertos.push(0);
  }

  if (arrayDeDatos[5].respuesta === allQuestions2[5].pCorrecta) {
    document.getElementById("res6").style.color = "green";
    console.log("acierto");
    arrayDeAciertos.push(1);
  } else {
    document.getElementById("res6").style.color = "red";
    console.log("incorrecta");

    arrayDeAciertos.push(0);
  }

  if (arrayDeDatos[6].respuesta === allQuestions2[6].pCorrecta) {
    document.getElementById("res7").style.color = "green";
    console.log("acierto");
    arrayDeAciertos.push(1);
  } else {
    console.log("incorrecta");
    document.getElementById("res7").style.color = "red";
    arrayDeAciertos.push(0);
  }

  if (arrayDeDatos[7].respuesta === allQuestions2[7].pCorrecta) {
    document.getElementById("res8").style.color = "green";
    console.log("acierto");
    arrayDeAciertos.push(1);
  } else {
    document.getElementById("res8").style.color = "red";
    console.log("incorrecta");

    arrayDeAciertos.push(0);
  }

  if (arrayDeDatos[8].respuesta === allQuestions2[8].pCorrecta) {
    document.getElementById("res9").style.color = "green";
    console.log("acierto");
    arrayDeAciertos.push(1);
  } else {
    document.getElementById("res9").style.color = "red";
    console.log("incorrecta");

    arrayDeAciertos.push(0);
  }

  if (arrayDeDatos[9].respuesta === allQuestions2[9].pCorrecta) {
    console.log("acierto");
    arrayDeAciertos.push(1);
    document.getElementById("res10").style.color = "green";
  } else {
    console.log("incorrecta");
    document.getElementById("res10").style.color = "red";
    arrayDeAciertos.push(0);
  }

  paintGrafica();
  function paintGrafica() {
    let acertadas = arrayDeAciertos.reduce((a, b) => a + b); // Cómputo total puntos
    let hoy = new Date();
    let fecha =
      hoy.getDate() + "-" + (hoy.getMonth() + 1) + "-" + hoy.getFullYear();
    let hora = hoy.getHours() + ":" + hoy.getMinutes() + ":" + hoy.getSeconds();
    let FechaAMeter = fecha + " " + hora;
    preguntaAcierto.push({ fecha: FechaAMeter, aciertos: acertadas });

 
      let registroPoints = {
        Fecha: FechaAMeter ,
        aciertos: acertadas,
      };



      registroDePuntuaciones(registroPoints);
      //Add datos






/ ///////////////ESTA FUNCION INTRODYUCE EL OBJETO EN LA BASE DE DATOS
      function registroDePuntuaciones(puntosUltimoTest) {
        db.collection("puntuaciones")/// nomvbre de objeto en la base de datos
          .add(puntosUltimoTest) 
          .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            console.error("Error adding document: ", error);
          });
      }
    }


  
//datos
let mierda = [];

 
 
}

arrancarGrafica();
