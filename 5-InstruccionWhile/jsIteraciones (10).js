function mostrar()
{
	var numerosIngresados;
	var respuesta;
	var acumuladoresPositivos = 0;
	var acumuladoresNegativos = 0;
	var contadorNegativos = 1;
	var contadorPositivos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var contador = 0;
	//declarar contadores y variables
	 
	
	var respuesta = "si";


	while(respuesta == "si")
	{
		numerosIngresados =  prompt ( " Ingrese numeros: " );
		numerosIngresados =  parseInt (numerosIngresados);

		if (numerosIngresados <  0 ) {
			contadorNegativos = contadorNegativos +  1 ;
			acumuladoresNegativos = acumuladoresNegativos + numerosIngresados;
		} else {
			contadorPositivos = contadorPositivos +  1 ;
			acumuladoresPositivos = acumuladoresPositivos + numerosIngresados;
			if (numerosIngresados ==  0 ) {
				contadorCeros = contadorCeros +  1 ;
			}
		}

		if (numerosIngresados %  2  ==  0 ) {
			contadorPares = contadorPares +  1 ;
		}

		respuesta =  prompt("Desea ingresar otro numero? si para continuar, de lo contrario presione cualquier tecla ");
	}
	
	alert("1 - La suma de los negativos es: "  + acumuladoresNegativos);
	alert("2 - La suma de los positivos es: "  + acumuladoresPositivos);
	alert("3 - La cantidad de positivos es: "  + contadorPositivos);
	alert("4 - La cantidad de negativos es: "  + contadorNegativos);
	alert("5 - La cantidad de 0 es: "  + contadorCeros);
	alert("6 - La cantidad de numeros pares es: "  + contadorPares);
	alert("7 - El promedio de los positivos es: " + acumuladoresPositivos / contadorPositivos);
	alert("8 - El promedio de los negativos es: " + acumuladoresNegativos / contadorNegativos);
	alert("9 - Diferencia entre positivos y negativos: " + acumuladoresPositivos / acumuladoresNegativos);

}//FIN DE LA FUNCIÓN