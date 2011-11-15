<?php


include('conexion.php');


$eli = conexion("DELETE FROM pedido");



header("Location: index.html");

?>