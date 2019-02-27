function mostrar()
{
  var precio;
  var paquete;
  var pago;
  var total;
  var descuento;
  precio = prompt("Ingresar el precio de su habitacion: ");
  precio = parseInt(precio);
  pago = prompt("Puede pagar con: Visa - PayPal - MercadoPago - Efectivo - Otro ");
  paquete = prompt("Ingrese el paquete elegido: todoIncluido - soloDesayunos ");
switch(pago){
  case "Visa", "MercadoPago":
  descuento = precio * 0.90;
  break;
  case "PayPal":
  switch(paquete){
    case "todoIncluido":
    descuento = precio * 0.75;
    break;

    default:
    descuento = precio * 0.85;
    break;
   }
    case "Efectivo":
    switch(paquete){
      case "todoIncluido":
      descuento = precio * 0.65;
      break;
      case "soloDesayunos":
      descuento = precio * 0.70;
      break;
      default:
      descuento = precio * 0.80;
      break;
    }
      default:
      descuento = precio * 0.95;
      break;
    }
  total = precio * descuento;
  alert("El precio final de la habitacion es: " + total);


}


