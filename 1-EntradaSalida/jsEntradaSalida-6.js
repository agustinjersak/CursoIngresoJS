/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero1;
    var numero2;
    var resultado;
    numero1 = document.getElementById(numeroUno);
    numero2 = document.getElementById(numeroDos);
    parseInt(numero1)
    parseInt(numero2)
    resultado = parseInt(numero1) + parseInt(numero2);

    alert("la suma es: " + resultado);

}

