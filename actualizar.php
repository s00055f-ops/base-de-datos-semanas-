<?php
include("../includes/conexion.php");

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];

$sql = "UPDATE clientes SET nombre='$nombre', correo='$correo' WHERE id=$id";
$conn->query($sql);

header("Location: ../index.php");
?>
