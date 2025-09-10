<?php
include("../includes/conexion.php");

$id = $_GET['id'];
$resultado = $conn->query("SELECT * FROM clientes WHERE id=$id");
$cliente = $resultado->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Editar Cliente</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <h2>Editar Cliente</h2>
    <form action="actualizar.php" method="POST">
        <input type="hidden" name="id" value="<?php echo $cliente['id']; ?>">
        <input type="text" name="nombre" value="<?php echo $cliente['nombre']; ?>" required>
        <input type="email" name="correo" value="<?php echo $cliente['correo']; ?>" required>
        <button type="submit">Actualizar</button>
    </form>
    <a href="../index.php">Volver</a>
</body>
</html>
