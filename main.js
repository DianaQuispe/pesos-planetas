var masa = prompt("Ingrese su peso actual");

var planetasC = [["Mercurio", 3.70], ["Venus", 8.87], ["Marte", 3.71], ["Jupiter", 23.12], ["Saturno", 8.96], ["Urano", 8.69], ["Neptuno", 11], ["Pluton", 0.81]]


function calcular(masa){
	var pesoFinal;
	var str = "";
	for(var i = 0; i< planetasC.length; i++ ){
			pesoFinal = masa * planetasC[i][1];
			pesoFinal = pesoFinal.toFixed(2);
			str += "Su peso en " + planetasC[i][0] + " es " + pesoFinal + " kg"+"\n";
	}
	return str;
}

var resp = calcular(masa);
alert(resp);