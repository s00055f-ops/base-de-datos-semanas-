<?php
$host = "localhost";
$user = "root";     // por defecto en XAMPP
$pass = "1234";         // contraseña vacía por defecto
$db   = "basededatosproyecto";

$conexion = new mysqli($host, $user, $pass, $db);

if ($conexion->connect_error) {
    die("Error de conexión: " . $conexion->connect_error);
}
?>
