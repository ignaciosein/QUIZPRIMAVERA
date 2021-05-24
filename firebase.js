
import {firebaseConfig} from './config.js'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();//objeto que representa base de datos link/firestore/quickstart


/* document.getElementById("form1").addEventListener("submit", function(event){

    event.preventDefault();
    
    let name = document.getElementById("fname").value;
    let email = document.getElementById("mail").value;
    let mensaje = document.getElementById("mensaje").value
    
    console.log(name)
    console.log(email)
    console.log(mensaje)
    
    
   
      */
    
    
    // 
    let mierda = [];

for (x = 0; x <= localStorage.length - 1; x++) {
  clave = localStorage.key(x);

  let todo = JSON.parse(localStorage.getItem(clave));

  mierda.push({ fecha: clave, aciertos: todo[0].aciertos });
}
   
    
console.log(mierda)

for (let index = 0; index < mierda.length; index++) {
   


    let registroPoints = {
        Fecha: mierda[index].fecha,
        aciertos:  mierda[index].aciertos
    
             
      }

    

    

       
      registroDePuntuaciones(registroPoints)
      //Add datos
    function registroDePuntuaciones(variable){
    
     
      
        db.collection("puntuaciones").add(variable) // crear objeto JSON en la base de datos con el nombre ANTONIO
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    
        
        
    }
     
}  
     
    
    function readAll(){
        db.collection("puntuaciones").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                console.log(doc.data());
                
            });
        });
    }
    
    readAll()
    
    
    //obtener datos de una sola vez READ ONCE
    
    var docRef = db.collection("users").doc("ul1");
    
    function readOne(id){
    db
    .collection("users")
    .doc(id)//aquí se pone el id del usuario que queremos leer
    .get()
    .then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
    }
    
    readOne("id del usuario")
    
      
    