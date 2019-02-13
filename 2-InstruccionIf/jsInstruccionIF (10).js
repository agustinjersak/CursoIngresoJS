function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero
	numero = Math.floor(Math.random()*(1, 10));
	alert(numero);
	if(numero == 9 || numero == 10){
		alert("EXCELENTE");
	}
	if(numero >=4){ 
		alert("APROBÓ")
	}
	if (numero <4){
		alert("Vamos, la proxima se puede")
	}
	

}//FIN DE LA FUNCIÓN