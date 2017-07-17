
var masa = prompt("Ingrese su peso actual");

var planetasC = [["mercurio", 3.70], ["venus", 8.87], ["marte", 3.71], ["jupiter", 23.12], ["saturno", 8.96], ["urano", 8.69], ["neptuno", 11], ["pluton", 0.81]]

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
