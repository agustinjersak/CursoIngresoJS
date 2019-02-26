function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while (numero >  9 ) {
		numero =  prompt (" Ingrese solo numeros del 0 al 9 inclusive: " );
	}

	Numero.value =  " El numero es " + numero + " y es correcto";


}//FIN DE LA FUNCIÓN