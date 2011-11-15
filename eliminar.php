<?php


include('conexion.php');

function limpiar($cadena)
{
  if (get_magic_quotes_gpc())
    $cadena = stripslashes($cadena);
	$cadena = htmlspecialchars($cadena);
  return mysql_real_escape_string($cadena);
}

$id = limpiar($_POST["idpro"]);

$eli = conexion("DELETE FROM pedido WHERE id = '$id' ");



header("Location: carrito.php");

?>














