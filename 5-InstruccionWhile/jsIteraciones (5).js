function mostrar()
{
    var sexo = prompt ("Ingrese f ó m");

    while (sexo !=  "f"  && sexo  != "m")
    {
         sexo = prompt ("Ingrese f o m");
    }
    document.getElementById('Sexo').value=sexo;

    document.getElementById('Sexo').value = "El sexo es "+ sexo + " y es valido";
    

}//FIN DE LA FUNCIÓN