// Función para mostrar alertas
function showAlert(message) {
    alert(message);
}

// Función de login
function login(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        showAlert('¡Login exitoso! Redirigiendo a campañas...');
        setTimeout(() => {
            window.location.href = 'campanas.html';
        }, 1000);
    } else {
        showAlert('Por favor, complete todos los campos');
    }
}

// Función de logout
function logout() {
    showAlert('Cerrando sesión...');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Función para exportar reportes
function exportReport() {
    // Obtener el formato seleccionado
    const selectedFormat = document.querySelector('input[name="format"]:checked');
    
    if (!selectedFormat) {
        showAlert('Por favor, selecciona un formato de exportación');
        return;
    }
    
    const format = selectedFormat.value;
    const formatNames = {
        'pdf': 'PDF',
        'excel': 'Excel',
        'csv': 'CSV'
    };
    
    // Simular proceso de exportación
    const exportBtn = document.querySelector('.export-btn');
    const originalText = exportBtn.innerHTML;
    
    // Cambiar el texto del botón para mostrar progreso
    exportBtn.innerHTML = '<span class="export-icon">⏳</span> Exportando...';
    exportBtn.disabled = true;
    
    // Simular tiempo de procesamiento
    setTimeout(() => {
        showAlert(`¡Reporte exportado exitosamente en formato ${formatNames[format]}!`);
        
        // Restaurar el botón
        exportBtn.innerHTML = originalText;
        exportBtn.disabled = false;
        
        // Simular descarga del archivo
        const fileName = `reporte_publicitario_${new Date().toISOString().split('T')[0]}.${format}`;
        console.log(`Archivo generado: ${fileName}`);
        
    }, 2000);
}

console.log('Sistema de Gestión - JavaScript cargado correctamente');