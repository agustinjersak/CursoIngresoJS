function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
    case "Febrero":
    alert("Éste mes no tiene más de 29 días.");
    break;
    default:
    alert("Éste mes tiene 30 o más días.");
}

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN