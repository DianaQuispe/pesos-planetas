var nombre = prompt("Ingrese un nombre");
var peso = prompt(nombre +"Ingrese su peso ");
var masaTierra = peso /9.8;

var pMercurio = masaTierra * 3.70;
document.write(nombre + "tu peso en mercurio es : "+ pMercurio.toFixed(2)+"</br>");
var pVenus = masaTierra * 8.87;
document.write(nombre +"tu peso en Venus es : "+ pVenus.toFixed(2)+"</br>");
var pMARTE = masaTierra * 3.71;
document.write(nombre +"tu peso en Marte es : "+ pMARTE.toFixed(2)+"</br>");
var pJupiter = masaTierra * 23.12;
document.write(nombre +"tu peso en Jupiter es : "+ pJupiter.toFixed(2)+"</br>");
var pSaturno = masaTierra * 8.96;
document.write(nombre +"tu peso en Saturno es : "+ pSaturno.toFixed(2)+"</br>");
var pUrano = masaTierra * 8.69;
document.write(nombre +"tu peso en Urano es : "+ pUrano.toFixed(2)+"</br>");
var pNeptuno = masaTierra * 11;
document.write(nombre +"tu peso en Neptuno es : "+ pNeptuno.toFixed(2)+"</br>");
var pPluton = masaTierra * 0.81;
document.write(nombre +"tu peso en Pluton es : "+ pPluton.toFixed(2)+"</br>");
 
 
/*
function planetas(peso) {

var nombre = prompt("Cual es tu nombre: ")
var peso = prompt("Cual es su peso: ");
var planetas = ["Jupiter", "Venus", "Urano", "Marte","Mercurio", "Saturno", "Neptuno", "Pluton"];

return alert( nombre +" tu peso en Marte es: " + (peso * 3.78).toFixed(2)) 

  
}
planetas();
*/

var masa = prompt("Ingrese su peso actual");
var planeta = prompt("Ingrese un planeta del Sistema Solar");

var planetasC = [["mercurio", 3.70], ["venus", 8.87], ["marte", 3.71], ["jupiter", 23.12], ["saturno", 8.96], ["urano", 8.69], ["neptuno", 11], ["pluton", 0.81]]

function calcular(masa, planeta){
	var pesoFinal;
	for(var i = 0; i< planetasC.length; i++ ){
		console.log(planetasC[i][0]);
      if(planeta == planetasC[i][0]){
        pesoFinal = masa * planetasC[i][1];
        pesoFinal = pesoFinal.toFixed(2);
      }
		}
	return pesoFinal;
}

var resp = calcular(masa, planeta);
alert(resp);