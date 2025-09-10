<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Proyecto Base de Datos</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f7fb;
            color: #333;
        }

        header {
            background: linear-gradient(90deg, #0066cc, #004080);
            color: white;
            padding: 20px;
            text-align: center;
            box-shadow: 0px 4px 6px rgba(0,0,0,0.2);
        }

        header h1 {
            margin: 0;
            font-size: 2rem;
            font-weight: 600;
        }

        nav {
            margin-top: 10px;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
            font-weight: bold;
            transition: 0.3s;
        }

        nav a:hover {
            text-decoration: underline;
        }

        main {
            max-width: 1100px;
            margin: 30px auto;
            padding: 20px;
        }

        h2 {
            color: #004080;
            margin-bottom: 20px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .card {
            background: white;
            padding: 20px;
            border-radius: 12px;
            box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
            transition: transform 0.2s, box-shadow 0.2s;
        }

        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 6px 15px rgba(0,0,0,0.2);
        }

        .card h3 {
            margin-top: 0;
            color: #0066cc;
        }

        .card p {
            font-size: 0.95rem;
            color: #555;
        }

        .card a {
            display: inline-block;
            margin-top: 10px;
            padding: 10px 15px;
            background: #0066cc;
            color: white;
            border-radius: 6px;
            text-decoration: none;
            font-weight: bold;
            transition: 0.3s;
        }

        .card a:hover {
            background: #004080;
        }

        footer {
            text-align: center;
            background: #004080;
            color: white;
            padding: 15px;
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <header>
        <h1>Repositorio - Proyecto Base de Datos</h1>
        <nav>
            <a href="index.php">Inicio</a>
            <a href="semana1.php">Semana 1</a>
            <a href="semana2.php">Semana 2</a>
            <a href="semana3.php">Semana 3</a>
            <a href="semana4.php">Semana 4</a>
        </nav>
    </header>

    <main>
        <h2>Actividades por Semana</h2>
        <div class="grid">
            <div class="card">
                <h3>Semana 1</h3>
                <p>Introducción a las Bases de Datos, conceptos fundamentales y ejemplos prácticos.</p>
                <a href="semana1.php">Ver más</a>
            </div>
            <div class="card">
                <h3>Semana 2</h3>
                <p>Modelado entidad-relación, claves primarias y foráneas, ejercicios prácticos.</p>
                <a href="semana2.php">Ver más</a>
            </div>
            <div class="card">
                <h3>Semana 3</h3>
                <p>Normalización de bases de datos, formas normales y optimización.</p>
                <a href="semana3.php">Ver más</a>
            </div>
            <div class="card">
                <h3>Semana 4</h3>
                <p>Consultas básicas en SQL: SELECT, INSERT, UPDATE y DELETE.</p>
                <a href="semana4.php">Ver más</a>
            </div>
        </div>
    </main>

    <footer>
        <p>&copy; <?php echo date("Y"); ?> Proyecto Base de Datos - Tu Nombre</p>
    </footer>
</body>
</html>
