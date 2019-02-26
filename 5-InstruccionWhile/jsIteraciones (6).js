function mostrar()
{

	var contador=0;
	var acumulador=0;
	var Suma=0;
	var numero;
	while(contador <5)
	{
		acumulador = prompt(acumulador);
		acumulador = parseInt(acumulador);
		Suma = Suma + acumulador;
		contador ++;
		numero = prompt("Ingrese el numero: " + contador);
		numero = parseInt(numero);
		acumulador = numero + acumulador;
		
	}
	acumulador = Suma;

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
document.getElementById('promedio').value= acumulador / contador;

}//FIN DE LA FUNCIÓN