function mostrar()
{
    var importe1;
    var importe2;
    var importe3;
    var importe4;
    var suma;
    importe1 = prompt("Ingrese un importe");
    importe2 = prompt("Ingrese un importe");
    importe3 = prompt("Ingrese un importe");
    importe4 = prompt("Ingrese un importe");
    suma = parseInt(importe1) + parseInt(importe2) + parseInt(importe3) + parseInt (importe4);
    alert("Su importe es: " + suma);
    if((importe1>importe2) && (importe1>importe3) && (importe1>importe4)){
      alert("El importe mayor es: " + importe1);

    }
    else{
      if((importe2>importe1) && (importe2>importe3) && (importe2>importe4))
      alert("El importe mayor es: " + importe2);

    }
      if((importe3>importe1) && (importe3>importe2) && (importe3>importe4)){
      alert("El importe mayor es: " + importe3);
    }
    else{
      if((importe4>importe1) && (importe4>importe2) && (importe4>importe3))
      alert("El importe mayor es: " + importe4);
    }
    if(suma > 100){
      alert("Su importe con un 10% es: " + suma * 0.90);
    }
    else{
      if((suma > 50) && (suma < 100))
      alert("Su importe con un 5% es: " + suma * 0.95);
    }
    if(suma < 50){
      alert("Su importe tiene un 15% de recargo: " + suma * 1.75);
    }







}
