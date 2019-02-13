/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var numero, numero1, numero2, suma;
    numero = document.getElementById("PrecioUno").value;
    numero1 = document.getElementById("PrecioDos").value;
    numero2 = document.getElementById("PrecioTres").value;
    parseInt(numero);
    parseInt(numero1);
    parseInt(numero2);
    suma = parseInt(numero) + parseInt(numero1) + parseInt(numero2);
    alert("La suma es: " + suma);

	
}
function Promedio () 
{
    var numero,numero1,numero2,promedio;
    numero = document.getElementById("PrecioUno").value;
    numero1 = document.getElementById("PrecioDos").value;
    numero2 = document.getElementById("PrecioTres").value;
    parseInt(numero);
    parseInt(numero1);
    parseInt(numero2);
    promedio = parseInt(numero) % parseInt(numero1) % parseInt(numero2);
    alert("El promedio es: " + promedio)

	
}
function PrecioFinal () 
{

 

	
}