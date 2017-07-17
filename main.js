function planetas(peso) {

var nombre = prompt("Cual es tu nombre: ")
var peso = prompt("Cual es su peso: ");
var planetas = ["Jupiter", "Venus", "Urano", "Marte","Mercurio", "Saturno", "Neptuno", "Pluton"];

return alert( nombre +" tu peso en Marte es: " + (peso * 3.78).toFixed(2)) 

  
}
planetas();


var masa = prompt("Ingrese su peso actual");
var planeta = prompt("Ingrese un planeta del Sistema Solar");

var planetasC = [["mercurio", 3.70], ["venus", 8.87], ["marte", 3.71], ["jupiter", 23.12], ["saturno", 8.96], ["urano", 8.69], ["neptuno", 11], ["pluton", 0.81]]

function calcular(masa, planeta){
	var pesoFinal;
	for(var i = 0; i< planetasC.length; i++ ){
		if(planeta == planetasC[i][0]){
			pesoFinal = masa * planetasC[i][1];
		}
		else{
			return "No es un planeta del Sistema Solar";
		}
	}
	return pesoFinal;
}

var resp = calcular(masa, planeta);

alert(resp);
