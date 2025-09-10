<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Proyecto - Base de Datos</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="assets/style.css">
</head>
<body>
    <!-- NAVBAR -->
    <nav class="navbar navbar-dark bg-gradient py-2 shadow-sm">
        <div class="container-fluid">
            <div class="d-flex align-items-center gap-3">
                <button id="sidebarToggle" class="btn btn-outline-light btn-sm d-md-none">
                    <i class="bi bi-list"></i>
                </button>
                <a class="navbar-brand d-flex align-items-center gap-2" href="index.php">
                    <div class="brand-mark">BD</div>
                    <div>
                        <div class="brand-title">Proyecto BD</div>
                        <small class="text-muted brand-sub">Actividades Semanales</small>
                    </div>
                </a>
            </div>

            <div class="d-flex align-items-center">
                <span class="me-3 text-white-50 small">TuNombre@uni.edu</span>
                <div class="dropdown">
                    <a class="btn btn-outline-light btn-sm dropdown-toggle" href="#" role="button" id="profileMenu" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person-circle"></i> Perfil
                    </a>
                    <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="profileMenu">
                        <li><a class="dropdown-item" href="#">Editar perfil</a></li>
                        <li><a class="dropdown-item" href="#">Ajustes</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="#">Cerrar sesión</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>

    <div class="d-flex">
        <!-- SIDEBAR -->
        <aside id="sidebar" class="sidebar bg-dark text-white">
            <div class="sidebar-inner p-3">
                <h6 class="text-uppercase text-white-50">Contenido</h6>
                <ul class="nav flex-column mt-3">
                    <li class="nav-item"><a class="nav-link" href="index.php"><i class="bi bi-house-door-fill me-2"></i>Inicio</a></li>
                    <li class="nav-item"><a class="nav-link" href="semana1.php"><i class="bi bi-journal-text me-2"></i>Semana 1</a></li>
                    <li class="nav-item"><a class="nav-link" href="semana2.php"><i class="bi bi-diagram-3 me-2"></i>Semana 2</a></li>
                    <li class="nav-item"><a class="nav-link" href="semana3.php"><i class="bi bi-list-columns-reverse me-2"></i>Semana 3</a></li>
                    <li class="nav-item"><a class="nav-link" href="semana4.php"><i class="bi bi-search me-2"></i>Semana 4</a></li>
                    <li><hr class="sidebar-divider bg-secondary"></li>
                    <li class="nav-item"><a class="nav-link small" href="#"><i class="bi bi-upload me-2"></i>Subir actividad</a></li>
                    <li class="nav-item"><a class="nav-link small" href="#"><i class="bi bi-github me-2"></i>Ver en GitHub</a></li>
                </ul>
            </div>
        </aside>

        <!-- MAIN -->
        <main class="main-content p-4">
