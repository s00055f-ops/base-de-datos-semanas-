<?php
include("../includes/conexion.php");

$id = $_GET['id'];

$sql = "DELETE FROM clientes WHERE id=$id";
$conn->query($sql);

header("Location: ../index.php");
?>
