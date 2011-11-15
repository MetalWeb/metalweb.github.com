<?php

// Datos de conexion

define("servidor","localhost"); // Por defecto localhost.
define("usuario","root"); // Usuario de la base de datos.
define("clave",""); // Contraseña del usuario.
define("basededatos","m&p"); // Nombre de la base de datos.

// Funcion de conexion a la Base de Datos

$sql = mysql_connect(servidor,usuario,clave);
	
mysql_query("SET NAMES 'utf8'");

function conexion($sql) {
	
	if ( ! $link = mysql_connect(servidor,usuario,clave) ) {
		echo ("Datos de conexion incorrectos.");
		return false;
	}
	if ( ! mysql_select_db(basededatos,$link) ) {
		echo ("Error al seleccionar la base de datos.");
		return false;
	}
	if ( ! $consulta = mysql_query($sql,$link) ) {
		echo ("Error de sintaxis en la consulta.");
		return false;
	}
	return $consulta;
}

?>