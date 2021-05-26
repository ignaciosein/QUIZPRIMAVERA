import {firebaseConfig} from "./config.js"

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

let ejeX = [];
let ejeY = [];
 
 readAll();
 function readAll() {
   db.collection("puntuaciones")
     .get()
     .then((querySnapshot) => {
       querySnapshot.forEach((doc) => {console.log(`${doc.id} => ${doc.data().Fecha}, ${doc.data().Aciertos}`) ,  ejeX.push(doc.data().Fecha) ,ejeY.push(doc.data().Aciertos) });
      
       graficaNueva(ejeX,ejeY)
     });

  
     
 }
;

  



function graficaNueva(op1, op2) {

console.log(op1)
console.log(op2)

const data = {
 labels:  op1,
 datasets: [
   {
     label: "Mis aciertos",
     backgroundColor: "blue",
     borderColor: "blue",
     data: op2,
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





