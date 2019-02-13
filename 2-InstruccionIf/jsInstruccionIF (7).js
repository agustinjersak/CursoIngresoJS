function mostrar()
{
//tomo la edad  
var edad, eCivil;
edad = document.getElementById("edad").value;
eCivil = document.getElementById("estadoCivil").value;
if(edad<18 && eCivil !="Soltero"){
    alert("Es muy pequeño para no ser soltero")
}

	


}//FIN DE LA FUNCIÓN