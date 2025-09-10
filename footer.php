        </main>
    </div>

    <footer class="footer bg-white border-top py-3">
        <div class="container d-flex justify-content-between align-items-center">
            <div>
                <strong>Proyecto - Base de Datos</strong> • Avances semana a semana
            </div>
            <div class="text-muted small">© <?php echo date('Y'); ?> · Tu Nombre</div>
        </div>
    </footer>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Small script: sidebar toggle & active nav -->
    <script>
        (function () {
            const body = document.body;
            const sidebarToggle = document.getElementById('sidebarToggle');
            const current = localStorage.getItem('bd_sidebar_collapsed') === 'true';
            if (current) body.classList.add('sidebar-collapsed');

            if (sidebarToggle) {
                sidebarToggle.addEventListener('click', () => {
                    body.classList.toggle('sidebar-collapsed');
                    localStorage.setItem('bd_sidebar_collapsed', body.classList.contains('sidebar-collapsed'));
                });
            }

            // mark active link
            const links = document.querySelectorAll('#sidebar .nav-link');
            links.forEach(l => {
                if (l.href === location.href || location.href.includes(l.getAttribute('href'))) {
                    l.classList.add('active');
                }
            });
        })();
    </script>
</body>
</html>
