function mostrar()
{var contador=0;
	// declarar variables
	var numero;
	var maximo;
	var minimo;	
	var respuesta = "si";

	while(respuesta == "si")
	{
		contador ++;
		numero =  prompt("Ingrese el numero " + contador);
		numero =  parseInt(numero);
	
	if(contador == 1)
	{
		maximo = numero;
		minimo = numero;
	}
	if(numero > maximo)
	{
		maximo = numero;
	}
	else
	{
	if(numero < minimo)
	{
		minimo = numero;
	}
	
	}
	respuesta = prompt("Desea ingresar otro numero? si para continuar, de lo contrario presione cualquier tecla ");
	
	}
	document.getElementById("maximo").value=maximo;
	document.getElementById("minimo").value=minimo;




}//FIN DE LA FUNCIÓN