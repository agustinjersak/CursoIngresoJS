
function mostrar()
{
   var mascota1;
   var mascota2;
   var mascota3;
   var mascota4;
   var kilos;
   mascota1 = prompt("Nombre");
   mascota2 = prompt("Nombre");
   mascota3 = prompt ("Peso");
   mascota4 = prompt ("Peso");
   parseInt(mascota3);
   parseInt(mascota4);
   kilos = parseInt(mascota3) + parseInt(mascota4);
   alert("Tenes dos mascotas " + mascota1 + " y " + mascota2 + " que pesan " + mascota3 + " y " + mascota4 + " kilos, " + "la suma de los kilos es " + kilos);


}
