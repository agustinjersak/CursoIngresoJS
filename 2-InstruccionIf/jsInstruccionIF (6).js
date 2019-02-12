function mostrar()
{
//tomo la edad  
var edad 
edad = document.getElementById("edad").value;
if(edad<13){
    alert("niño");
}else{ 
    
     if(edad>18){
        alert("adulto");
     }
    
    if(edad>=13 && edad<=17){
        alert("adolescente");
    }
    




}//FIN DE LA FUNCIÓN