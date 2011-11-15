<?php



include('conexion.php');

function limpiar($cadena)
{
  if (get_magic_quotes_gpc())
    $cadena = stripslashes($cadena);
	$cadena = htmlspecialchars($cadena);
  return mysql_real_escape_string($cadena);
}

$precio1 = limpiar($_POST["precio1"]);
$cantidad1 = limpiar($_POST["cantidad1"]);


$precio2 = limpiar($_POST["precio2"]);
$cantidad2 = limpiar($_POST["cantidad2"]);


$precio3 = limpiar($_POST["precio3"]);
$cantidad3 = limpiar($_POST["cantidad3"]);


$pagina = limpiar($_POST["pagina"]);



if($cantidad1 > 0 && isset($_REQUEST["tipo1"])){
$producto1 = limpiar($_POST["tipo1"]);
$insertar = conexion("INSERT INTO pedido (producto, precio, cantidad) VALUES('$producto1','$precio1','$cantidad1')");
}
if($cantidad2 > 0 && isset($_REQUEST["tipo2"])){
$producto2 = limpiar($_POST["tipo2"]);
$insertar = conexion("INSERT INTO pedido (producto, precio, cantidad) VALUES('$producto2','$precio2','$cantidad2')");
}
if($cantidad3 > 0 && isset($_REQUEST["tipo3"])){
$producto3 = limpiar($_POST["tipo3"]);
$insertar = conexion("INSERT INTO pedido (producto, precio, cantidad) VALUES('$producto3','$precio3','$cantidad3')");
}

if($pagina == "bocadito")
header("Location: productosBocaditos.html");
if($pagina == "postre")
header("Location: productosPostres.html");


?>




