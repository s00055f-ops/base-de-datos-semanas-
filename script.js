  // ===== VARIABLES GLOBALES =====
        let isLoggedIn = false;
        let currentWeek = null;
        
        // Datos de las semanas con enlaces editables (mejorados con más detalle)
        let semanasData = {
            1: { 
                desc: "Informe Técnico Comparativo Y manual de Git Hub", 
                links: [
                    { url: "https://www.canva.com/design/DAGzMAgwKcs/cDgWGMPUGi-ReOzBb-1Q4g/edit?utm_content=DAGzMAgwKcs&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton", texto: "📊 Informe Técnico Comparativo: Arquitecturas Centralizadas, Cliente- Servidor y Distribuidas" },
                    { url: "https://docs.google.com/document/d/1iA9bNV7w68wZU6t-g1Qa_psu4yUDOXWVNM9rRp6vuK4/edit?usp=sharing", texto: "📄 Manual: Creación de una cuenta en GitHub" },
                  { url: "https://docs.google.com/document/d/1SW5tpWgkpjzzfOfTWFI2-Y7z0oStLC_JaKF6Mhj9Hcw/edit?usp=sharing", texto: "📄 MANUAL PARA SUBIR LA PAGINA WEB A GIT HUB" },
              
              
                  
                ] 
            },
            2: { 
                desc: "Guía de Instalación SQL Server y Ejemplo 1", 
                links: [
                    { url: "https://docs.google.com/document/d/1-s3chNFEed1sG2SHfxuUaQUiHRUp-loLfKhLpgHzv9E/edit?usp=sharing", texto: "📘 Guía de Instalación SQL Server" },
                    { url: "https://docs.google.com/document/d/1IGBml0DSXOFgcUwRv6TUprx-FAC5YSo6GTD-s8_zwzg/edit?usp=sharing", texto: "EJEMPLO 1" },
                  
                ] 
            },
            3: { 
                desc: "Cuadro Comparativo", 
                links: [
                    { url: "https://docs.google.com/document/d/1_pKP5rK0kMUC5FdPw-1G2amaPCWln3FiDSyka2MKBz8/edit?usp=sharing", texto: "Cuadro comparativo" },
            
                ] 
            },
            4: { 
                desc: "Actividades de Clase", 
                links: [
                  { url: "https://drive.google.com/drive/folders/1w_jBoerVY10vfM6kElLKoYXYXV3zuJD4?usp=sharing", texto: "📋Actividades de Clase" },
            
                ] 
            },
            5: { 
                desc: "Manual de Crear cuenta de Azure y pasar repositorio desde Git Hub", 
                links: [
                   { url: "https://docs.google.com/document/d/1SIdAXJ-Ba01_XgxYU5jRowiLhWV1V6wPQ3s5eWemM5Q/edit?usp=sharing", texto: "MANUAL PARA SUBIR COPIAR MI REPOSITORIO A AZURE" },
                   { url: "https://docs.google.com/document/d/15hhtDbf09ot1yGM4NlEv0aC0AEqL5pMVmmOH5sToY2c/edit?usp=sharing", texto: "MANUAL PARA CREAR CUENTA EN MICROSOFT AZURE" },
             { url: "", texto: "Practica 2...En proceso" },
            
                ] 
            },
            6: { 
                desc: "SEMANA 6", 
                links: [
                 { url: "https://docs.google.com/document/d/1kU_GcW5DGhJ1NUaRoFOIeDxGbspCdr1TEGMdFmFD-qI/edit?usp=sharing", texto: "QhantuPerú" },
                  { url: "https://docs.google.com/document/d/1ofpzOQ930lm8WVtacScDyGD52SIUN1RXr55GDA826vY/edit?usp=sharing", texto: "Enunciados-Semana 6" },
            
            
                ] 
            },
            7: { 
                desc: "SEMANA 7", 
                links: [
                  { url: "https://docs.google.com/document/d/1yVv8gweAt0LfHSa5o6QUoJHU0Krx6q4spShacvmEaPo/edit?usp=sharing", texto: "📋 EJERCI9CIOS PROPUESTOS" },
            
                ] 
            },
            8: { 
                desc: "SEMANA 8", 
                links: [
                 { url: "", texto: "📋 EN DESARROLLO" },
            
                ] 
            },
            9: { 
                desc: "SEMANA 9", 
                links: [
                   { url: "", texto: "📋 EN DESARROLLO" },
            
                ] 
            },
            10: { 
                desc: "SEMANA 10", 
                links: [
      { url: "", texto: "📋 EN DESARROLLO" },
            
                ] 
            },
            11: { 
                desc: "SEMANA 11", 
                links: [
                      { url: "", texto: "📋 EN DESARROLLO" },
            
                ] 
            },
            12: { 
                desc: "SEMANA 12", 
                links: [
                        { url: "", texto: "📋 EN DESARROLLO" },
            
                ] 
            },
            13: { 
                desc: "SEMANA 13", 
                links: [
                    { url: "", texto: "📋 EN DESARROLLO" },
            
                ] 
            },
            14: { 
                desc: "SEMANA 14", 
                links: [
                   { url: "", texto: "📋 EN DESARROLLO" },
            
                ] 
            },
            15: { 
                desc: "SEMANA 15", 
                links: [
                   { url: "", texto: "📋 EN DESARROLLO" },
            
                ] 
            },
            16: { 
                desc: "SEMANA 16", 
                links: [
                    { url: "", texto: "📋 EN DESARROLLO" },
            
                ] 
            }
        };

        // ===== INICIALIZACIÓN DE LA PÁGINA =====
        document.addEventListener('DOMContentLoaded', function() {
            // Simular carga de página
            setTimeout(() => {
                document.getElementById('pageLoader').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('pageLoader').style.display = 'none';
                }, 500);
            }, 2000);
            
            // Generar partículas animadas
            generateParticles();
            
            // Generar semanas
            generateWeeks();
            
            // Configurar eventos
            setupEventListeners();
            
            // Animación de entrada
            setTimeout(() => {
                document.querySelector('.section.active').style.animation = 'fadeInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
            }, 2200);
        });

        // ===== GENERADOR DE PARTÍCULAS =====
        function generateParticles() {
            const particlesContainer = document.getElementById('particles');
            const numberOfParticles = 20;
            
            for (let i = 0; i < numberOfParticles; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.width = Math.random() * 4 + 2 + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                particlesContainer.appendChild(particle);
            }
        }

        // ===== NAVEGACIÓN MEJORADA =====
        function showSection(sectionName) {
            // Ocultar todas las secciones
            document.querySelectorAll('.section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Mostrar la sección seleccionada
            const targetSection = document.getElementById(sectionName);
            targetSection.classList.add('active');
            
            // Actualizar navegación activa
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            
            event.target.closest('.nav-link').classList.add('active');
            
            // Scroll suave al top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Mostrar notificación
            showNotification(`Navegando a: ${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}`, 'success');
        }

        // ===== GENERADOR DE SEMANAS MEJORADO =====
        function generateWeeks() {
            const grid = document.getElementById('semanas-grid');
            grid.innerHTML = '';
            
            for (let i = 1; i <= 16; i++) {
                const semana = semanasData[i];
                const card = document.createElement('div');
                card.className = 'semana-card';
                card.onclick = () => openWeek(i);
                
                // Calcular progreso (simulado)
                const progress = i <= 2 ? 100 : (i <= 5 ? 60 : (i <= 8 ? 30 : 0));
                const progressColor = progress === 100 ? '#10b981' : (progress >= 60 ? '#f59e0b' : '#6b7280');
                
                card.innerHTML = `
                    <div style="position: relative; margin-bottom: 1rem;">
                        <h3>Semana ${i}</h3>
                        <div style="width: 100%; height: 4px; background: rgba(30, 64, 175, 0.1); border-radius: 2px; margin-top: 8px;">
                            <div style="width: ${progress}%; height: 100%; background: ${progressColor}; border-radius: 2px; transition: width 0.3s ease;"></div>
                        </div>
                    </div>
                    <p>${semana.desc}</p>
                    <div style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                        <small><i class="fas fa-link"></i> ${semana.links.length} enlace(s)</small>
                        <small style="color: ${progressColor}; font-weight: 600;"><i class="fas fa-chart-line"></i> ${progress}%</small>
                    </div>
                    ${isLoggedIn ? `<div class="edit-link" onclick="event.stopPropagation(); editWeek(${i})"><i class="fas fa-edit"></i> Editar</div>` : ''}
                `;
                
                // Animación escalonada
                card.style.animationDelay = `${i * 0.1}s`;
                card.style.opacity = '0';
                card.style.animation = 'fadeInUp 0.6s ease forwards';
                
                grid.appendChild(card);
            }
        }

        // ===== MODAL DE SEMANAS MEJORADO =====
        function openWeek(weekNumber) {
            currentWeek = weekNumber;
            const semana = semanasData[weekNumber];
            const modal = document.getElementById('semanaModal');
            
            document.getElementById('modalTitle').innerHTML = `
                <i class="fas fa-calendar-week"></i> Semana ${weekNumber}
            `;
            document.getElementById('modalDescription').textContent = semana.desc;
            
            // Prellenar campos de edición
            document.getElementById('editDescription').value = semana.desc;
            
            const linksContainer = document.getElementById('modalLinks');
            linksContainer.innerHTML = '';
            
            semana.links.forEach((link, index) => {
                const linkElement = document.createElement('div');
                linkElement.style.cssText = `
                    display: flex; 
                    align-items: center; 
                    justify-content: space-between; 
                    background: rgba(30, 64, 175, 0.05); 
                    padding: 1rem; 
                    border-radius: 12px; 
                    border: 1px solid rgba(30, 64, 175, 0.1);
                `;
                
                linkElement.innerHTML = `
                    <a href="${link.url}" target="_blank" class="btn" style="margin: 0; flex: 1; margin-right: 10px;">
                        ${link.texto}
                    </a>
                    ${isLoggedIn ? `<button onclick="removeLink(${index})" style="background: #ef4444; color: white; border: none; padding: 8px 12px; border-radius: 8px; cursor: pointer; transition: all 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'"><i class="fas fa-trash"></i></button>` : ''}
                `;
                linksContainer.appendChild(linkElement);
            });
            
            // Mostrar controles de edición si está logueado
            const editSection = document.getElementById('modalEdit');
            if (isLoggedIn) {
                editSection.classList.add('active');
            } else {
                editSection.classList.remove('active');
            }
            
            modal.classList.add('active');
        }

        function closeModal() {
            document.getElementById('semanaModal').classList.remove('active');
            currentWeek = null;
        }

        // ===== EDICIÓN AVANZADA DE SEMANAS =====
        function editWeek(weekNumber) {
            openWeek(weekNumber);
        }

        function updateDescription() {
            const newDesc = document.getElementById('editDescription').value;
            if (newDesc && currentWeek) {
                semanasData[currentWeek].desc = newDesc;
                document.getElementById('modalDescription').textContent = newDesc;
                generateWeeks();
                showNotification('Descripción actualizada correctamente', 'success');
            } else {
                showNotification('Por favor ingresa una descripción válida', 'error');
            }
        }

        function addLink() {
            const url = document.getElementById('editLink').value;
            const text = document.getElementById('editLinkText').value;
            
            if (url && text && currentWeek) {
                semanasData[currentWeek].links.push({ url, texto: text });
                document.getElementById('editLink').value = '';
                document.getElementById('editLinkText').value = '';
                openWeek(currentWeek);
                generateWeeks();
                showNotification('Enlace agregado correctamente', 'success');
            } else {
                showNotification('Por favor completa ambos campos', 'error');
            }
        }

        function removeLink(index) {
            if (currentWeek && confirm('¿Estás seguro de eliminar este enlace?')) {
                semanasData[currentWeek].links.splice(index, 1);
                openWeek(currentWeek);
                generateWeeks();
                showNotification('Enlace eliminado correctamente', 'success');
            }
        }

        // ===== SISTEMA DE LOGIN MEJORADO =====
        function handleLogin(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const statusDiv = document.getElementById('loginStatus');
            const loginBtn = document.getElementById('loginBtn');
            
            // Animación de carga
            loginBtn.innerHTML = '<div class="loading-animation"></div> Verificando...';
            loginBtn.disabled = true;
            
            setTimeout(() => {
                if (username === 'admin' && password === 'admin123') {
                    isLoggedIn = true;
                    statusDiv.innerHTML = `
                        <div class="login-success">
                            <i class="fas fa-check-circle"></i> 
                            ¡Bienvenido Administrator! Sesión iniciada correctamente.
                            <br><small>Todos los modos de edición han sido activados.</small>
                        </div>
                    `;
                    
                    // Mostrar panel administrativo
                    document.getElementById('admin-panel').classList.add('active');
                    
                    // Activar modo edición en todas las secciones
                    document.querySelectorAll('.edit-mode').forEach(element => {
                        element.classList.add('active');
                    });
                    
                    // Hacer editables los textos
                    document.querySelectorAll('.editable-text').forEach(element => {
                        element.contentEditable = true;
                        element.style.background = 'rgba(14, 165, 233, 0.08)';
                        element.style.border = '2px dashed rgba(14, 165, 233, 0.2)';
                    });
                    
                    // Regenerar semanas con botones de edición
                    generateWeeks();
                    
                    showNotification('¡Sesión iniciada correctamente! Modo administrador activado.', 'success');
                    
                } else {
                    statusDiv.innerHTML = `
                        <div class="login-error">
                            <i class="fas fa-exclamation-triangle"></i> 
                            Credenciales incorrectas. Verifica tu usuario y contraseña.
                            <br><small>Usa: <strong>admin</strong> / <strong>admin123</strong></small>
                        </div>
                    `;
                    showNotification('Credenciales incorrectas', 'error');
                }
                
                // Restaurar botón
                loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Iniciar Sesión';
                loginBtn.disabled = false;
                
                // Limpiar formulario
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
                
            }, 1500);
        }

        function logout() {
            if (confirm('¿Estás seguro de que quieres cerrar sesión?')) {
                isLoggedIn = false;
                
                // Ocultar todos los modos de edición
                document.querySelectorAll('.edit-mode').forEach(element => {
                    element.classList.remove('active');
                });
                
                // Hacer no editables los textos
                document.querySelectorAll('.editable-text').forEach(element => {
                    element.contentEditable = false;
                    element.style.background = 'transparent';
                    element.style.border = 'none';
                });
                
                // Limpiar status de login
                document.getElementById('loginStatus').innerHTML = '';
                
                // Regenerar semanas sin botones de edición
                generateWeeks();
                
                showNotification('Sesión cerrada correctamente', 'success');
            }
        }

        // ===== GESTIÓN DE CAMBIOS =====
        function saveChanges(section) {
            const editableContent = document.getElementById(section + '-descripcion');
            showNotification(`Cambios guardados en la sección: ${section.charAt(0).toUpperCase() + section.slice(1)}`, 'success');
        }

        function resetContent(section) {
            if (confirm('¿Estás seguro de restaurar el contenido original?')) {
                const editableContent = document.getElementById(section + '-descripcion');
                const originalContent = `
                    <p>Hola, soy <strong>Antony Daniel Leiva Cárdenas</strong>, estudiante de Ingeniería de Sistemas en la Universidad Peruana Los Andes (UPLA) - Huancayo. Este es mi repositorio personal donde documento todos mis trabajos, proyectos y avances del curso <strong>Base de Datos II</strong>.</p>
                    <p>Aquí encontrarás una colección organizada de mis actividades semanales, desde diagramas E/R hasta proyectos completos de bases de datos, todo debidamente documentado y actualizado cada semana del semestre académico 2025.</p>
                    <p>Mi objetivo es demostrar el progreso y aprendizaje adquirido en cada sesión, aplicando conceptos teóricos en proyectos prácticos que reflejen mi crecimiento profesional.</p>
                `;
                editableContent.innerHTML = originalContent;
                showNotification('Contenido restaurado al original', 'success');
            }
        }

        // ===== FORMULARIO DE CONTACTO MEJORADO =====
        function handleContact(event) {
            event.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const asunto = document.getElementById('asunto').value;
            const mensaje = document.getElementById('mensaje').value;
            const submitBtn = document.getElementById('submitBtn');
            
            // Animación de envío
            submitBtn.innerHTML = '<div class="loading-animation"></div> Enviando...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                // Simular envío exitoso
                showNotification(`¡Gracias ${nombre}! Tu mensaje "${asunto}" ha sido enviado correctamente.`, 'success');
                
                // Limpiar formulario
                document.getElementById('contactForm').reset();
                
                // Restaurar botón
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Enviar Mensaje';
                submitBtn.disabled = false;
                
                // Crear elemento de confirmación visual
                const confirmDiv = document.createElement('div');
                confirmDiv.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: var(--gradient-card);
                    padding: 2rem;
                    border-radius: 16px;
                    box-shadow: var(--shadow-hover);
                    text-align: center;
                    z-index: 3000;
                    border: 1px solid rgba(16, 185, 129, 0.2);
                `;
                
                confirmDiv.innerHTML = `
                    <i class="fas fa-check-circle fa-3x" style="color: #10b981; margin-bottom: 1rem;"></i>
                    <h3 style="color: #10b981; margin-bottom: 1rem;">¡Mensaje Enviado!</h3>
                    <p style="color: var(--gray);">Gracias por contactarme. Te responderé pronto.</p>
                `;
                
                document.body.appendChild(confirmDiv);
                
                setTimeout(() => {
                    confirmDiv.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(confirmDiv);
                    }, 300);
                }, 3000);
                
            }, 2000);
        }

        // ===== GESTIÓN DE FOTO DE PERFIL =====
        function handlePhotoClick() {
            if (isLoggedIn) {
                document.getElementById('photoInput').click();
            } else {
                showNotification('Debes iniciar sesión para cambiar la foto', 'error');
            }
        }

        function handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                if (file.size > 5 * 1024 * 1024) {
                    showNotification('La imagen es muy grande. Máximo 5MB permitido.', 'error');
                    return;
                }
                
                const reader = new FileReader();
                reader.onload = function(e) {
                    const placeholder = document.getElementById('foto-placeholder');
                    placeholder.innerHTML = `
                        <img src="${e.target.result}" alt="Foto de Antony Leiva" class="foto-perfil" style="width: 100%; height: 100%; object-fit: cover; border-radius: 24px;">
                        <div style="position: absolute; bottom: 10px; right: 10px; background: rgba(0,0,0,0.7); color: white; padding: 5px 10px; border-radius: 8px; font-size: 0.8rem;">
                            <i class="fas fa-camera"></i> Clic para cambiar
                        </div>
                    `;
                    placeholder.style.position = 'relative';
                    showNotification('Foto de perfil actualizada correctamente', 'success');
                };
                reader.readAsDataURL(file);
            }
        }

        // ===== SISTEMA DE NOTIFICACIONES =====
        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.className = `notification ${type}`;
            notification.classList.add('show');
            
            setTimeout(() => {
                notification.classList.remove('show');
            }, 4000);
        }

        // ===== FUNCIONES ADMINISTRATIVAS AVANZADAS =====
        function showAdminStats() {
            const totalSemanas = Object.keys(semanasData).length;
            const totalLinks = Object.values(semanasData).reduce((acc, semana) => acc + semana.links.length, 0);
            const semanasCompletas = Object.values(semanasData).filter(semana => semana.links.length > 0).length;
            
            const statsModal = document.createElement('div');
            statsModal.style.cssText = `
                position: fixed;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background: rgba(30, 64, 175, 0.2);
                backdrop-filter: blur(8px);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 3000;
            `;
            
            statsModal.innerHTML = `
                <div style="background: var(--gradient-card); padding: 3rem; border-radius: 24px; max-width: 500px; width: 90%; text-align: center; position: relative;">
                    <span onclick="this.parentElement.parentElement.remove()" style="position: absolute; top: 20px; right: 25px; font-size: 30px; cursor: pointer; color: var(--gray);">&times;</span>
                    
                    <h3 style="color: var(--primary-blue); margin-bottom: 2rem; font-size: 2rem;">
                        <i class="fas fa-chart-bar"></i> Estadísticas del Repositorio
                    </h3>
                    
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 2rem;">
                        <div style="background: rgba(16, 185, 129, 0.1); padding: 1.5rem; border-radius: 16px;">
                            <i class="fas fa-calendar-alt fa-2x" style="color: #10b981; margin-bottom: 0.5rem;"></i>
                            <h4 style="color: #10b981; font-size: 2rem;">${totalSemanas}</h4>
                            <p style="color: var(--gray);">Total Semanas</p>
                        </div>
                        
                        <div style="background: rgba(59, 130, 246, 0.1); padding: 1.5rem; border-radius: 16px;">
                            <i class="fas fa-link fa-2x" style="color: #3b82f6; margin-bottom: 0.5rem;"></i>
                            <h4 style="color: #3b82f6; font-size: 2rem;">${totalLinks}</h4>
                            <p style="color: var(--gray);">Total Enlaces</p>
                        </div>
                        
                        <div style="background: rgba(168, 85, 247, 0.1); padding: 1.5rem; border-radius: 16px;">
                            <i class="fas fa-check-circle fa-2x" style="color: #a855f7; margin-bottom: 0.5rem;"></i>
                            <h4 style="color: #a855f7; font-size: 2rem;">${semanasCompletas}</h4>
                            <p style="color: var(--gray);">Semanas Completadas</p>
                        </div>
                        
                        <div style="background: rgba(245, 158, 11, 0.1); padding: 1.5rem; border-radius: 16px;">
                            <i class="fas fa-percentage fa-2x" style="color: #f59e0b; margin-bottom: 0.5rem;"></i>
                            <h4 style="color: #f59e0b; font-size: 2rem;">${Math.round((semanasCompletas/totalSemanas)*100)}%</h4>
                            <p style="color: var(--gray);">Progreso General</p>
                        </div>
                    </div>
                    
                    <p style="color: var(--gray); font-size: 0.9rem;">
                        <i class="fas fa-info-circle"></i> 
                        Estadísticas generadas el ${new Date().toLocaleDateString('es-PE')}
                    </p>
                </div>
            `;
            
            document.body.appendChild(statsModal);
        }

        function exportData() {
            if (isLoggedIn) {
                const data = {
                    semanas: semanasData,
                    exportDate: new Date().toISOString(),
                    version: '2.0',
                    student: 'Antony Daniel Leiva Cárdenas',
                    course: 'Base de Datos II',
                    university: 'UPLA'
                };
                
                const dataStr = JSON.stringify(data, null, 2);
                const dataBlob = new Blob([dataStr], {type: 'application/json'});
                const url = URL.createObjectURL(dataBlob);
                
                const link = document.createElement('a');
                link.href = url;
                link.download = `repositorio_UPLA_backup_${new Date().toISOString().split('T')[0]}.json`;
                link.click();
                
                URL.revokeObjectURL(url);
                showNotification('Backup exportado correctamente', 'success');
            }
        }

        function importData(event) {
            if (isLoggedIn) {
                const file = event.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(e) {
                        try {
                            const data = JSON.parse(e.target.result);
                            if (data.semanas && data.version) {
                                semanasData = data.semanas;
                                generateWeeks();
                                showNotification(`Datos importados correctamente. Versión: ${data.version}`, 'success');
                            } else {
                                showNotification('Formato de archivo no válido', 'error');
                            }
                        } catch (error) {
                            showNotification('Error al leer el archivo: formato JSON inválido', 'error');
                        }
                    };
                    reader.readAsText(file);
                }
            }
        }

        // ===== CONFIGURACIÓN DE EVENTOS =====
        function setupEventListeners() {
            // Cerrar modal al hacer clic fuera
            window.onclick = function(event) {
                const modal = document.getElementById('semanaModal');
                if (event.target === modal) {
                    closeModal();
                }
            };
            
            // Manejo de enlaces de navegación
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = this.getAttribute('href').substring(1);
                    if (target && document.getElementById(target)) {
                        showSection(target);
                    }
                });
            });
            
            // Efectos de header al hacer scroll
            let lastScrollY = window.scrollY;
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                const currentScrollY = window.scrollY;
                
                if (currentScrollY > 100) {
                    header.style.background = 'rgba(255, 255, 255, 0.98)';
                    header.style.boxShadow = '0 8px 32px rgba(30, 64, 175, 0.15)';
                    header.style.transform = currentScrollY > lastScrollY ? 'translateY(-100%)' : 'translateY(0)';
                } else {
                    header.style.background = 'rgba(255, 255, 255, 0.95)';
                    header.style.boxShadow = '0 8px 32px rgba(30, 64, 175, 0.1)';
                    header.style.transform = 'translateY(0)';
                }
                
                lastScrollY = currentScrollY;
            });
            
            // Atajos de teclado
            document.addEventListener('keydown', function(e) {
                if (e.ctrlKey || e.metaKey) {
                    switch(e.key) {
                        case '1':
                            e.preventDefault();
                            showSection('inicio');
                            break;
                        case '2':
                            e.preventDefault();
                            showSection('semanas');
                            break;
                        case '3':
                            e.preventDefault();
                            showSection('contacto');
                            break;
                        case '4':
                            e.preventDefault();
                            showSection('login');
                            break;
                    }
                }
                
                // Escape para cerrar modal
                if (e.key === 'Escape') {
                    closeModal();
                }
            });
        }

        // ===== EFECTOS VISUALES ADICIONALES =====
        
        // Intersección Observer para animaciones
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                }
            });
        }, observerOptions);

        // Observar elementos animables
        setTimeout(() => {
            document.querySelectorAll('.semana-card').forEach(card => {
                observer.observe(card);
            });
        }, 3000);

        // ===== MENSAJE DE BIENVENIDA =====
        setTimeout(() => {
            if (!sessionStorage.getItem('welcomeShown')) {
                showNotification('¡Bienvenido al repositorio de Base de Datos II - UPLA! 🎓', 'success');
                sessionStorage.setItem('welcomeShown', 'true');
            }
        }, 3000);

        // ===== PWA BÁSICO =====
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                // En una implementación real, aquí registrarías el service worker
                console.log('Repositorio UPLA - Base de Datos II cargado correctamente');
            });
        }
        
