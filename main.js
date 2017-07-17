function planetas(peso) {

var nombre = prompt("Cual es tu nombre: ")
var peso = prompt("Cual es su peso: ");
var planetas = ["Jupiter", "Venus", "Urano", "Marte","Mercurio", "Saturno", "Neptuno", "Pluton"];

return alert( nombre +" tu peso en Marte es: " + (peso * 3.78).toFixed(2)) 

  
}
planetas();
