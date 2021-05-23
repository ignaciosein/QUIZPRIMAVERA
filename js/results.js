if (localStorage.length !== 0) {
  document.getElementById("graficaContainer").style.display = "block";
} else {
  document.getElementById("graficaContainer").style.display = "none";
}

//datos
let mierda = [];

for (x = 0; x <= localStorage.length - 1; x++) {
  clave = localStorage.key(x);

  let todo = JSON.parse(localStorage.getItem(clave));

  mierda.push({ fecha: clave, aciertos: todo[0].aciertos });
}

function arrancarGrafica() {
  let aciertos = [];
  let fechas = [];
  console.log(mierda);

  mierda.forEach((element) => {
    console.log(element.fecha);
    console.log(element.aciertos);

    aciertos.push(element.aciertos);
    fechas.push(element.fecha);
  });

  console.log(aciertos);
  console.log(fechas);

  const data = {
    labels: fechas,
    datasets: [
      {
        label: "Mis aciertos",
        backgroundColor: "blue",
        borderColor: "blue",
        data: aciertos,
      },
    ],
  };
  const config = {
    type: "line",
    data,
    options: {},
  };

  var myChart = new Chart(document.getElementById("myChart"), config);
}

arrancarGrafica();
