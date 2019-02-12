/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var numero
    var numero2
    var resultado
    numero = document.getElementById("numeroDividendo").value;
    numero2 = document.getElementById("numeroDivisor").value;
    resultado = parseInt(numero) % parseInt(numero2);
    alert("El resto es: " + resultado);
}
