function mostrar()
{
	var contador = 0;
	var acumulador = 0;
	var respuesta = "si";
	var Suma;
	
	while (respuesta !=  "si")
	var numero;
	
	while (respuesta ==  "si")
	{
		acumulador =  prompt("Ingrese un numero ");
		acumulador =  parseInt(acumulador);
		Suma = Suma + acumulador;
		respuesta =  prompt(" Desea ingresar otro numero? para continuar indique si ");
		contador ++ ;
		numero =  prompt(" Ingrese el numero " + contador);
		numero =  parseInt(numero);
		acumulador = numero + acumulador;
		respuesta =  prompt("Desea ingresar otro numero? para continuar indique si, de lo contrario cualquier tecla ");

	}





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN