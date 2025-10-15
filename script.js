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

// Funciones para el modal de nueva campaña
function openCampaignModal() {
    document.getElementById('campaignModal').style.display = 'block';
    // Establecer fecha mínima como hoy
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('campaignStartDate').min = today;
    document.getElementById('campaignEndDate').min = today;
}

function closeCampaignModal() {
    document.getElementById('campaignModal').style.display = 'none';
    document.getElementById('campaignForm').reset();
}

// Cerrar modal al hacer clic fuera del contenido
window.onclick = function(event) {
    const modal = document.getElementById('campaignModal');
    if (event.target === modal) {
        closeCampaignModal();
    }
}

// Manejar el envío del formulario de campaña
document.addEventListener('DOMContentLoaded', function() {
    const campaignForm = document.getElementById('campaignForm');
    if (campaignForm) {
        campaignForm.addEventListener('submit', function(e) {
            e.preventDefault();
            createCampaign();
        });
    }
    
    // Validar fechas
    const startDateInput = document.getElementById('campaignStartDate');
    const endDateInput = document.getElementById('campaignEndDate');
    
    if (startDateInput && endDateInput) {
        startDateInput.addEventListener('change', function() {
            endDateInput.min = this.value;
        });
    }
});

function createCampaign() {
    // Obtener datos del formulario
    const formData = new FormData(document.getElementById('campaignForm'));
    const campaignData = {
        name: formData.get('campaignName'),
        client: formData.get('campaignClient'),
        type: formData.get('campaignType'),
        status: formData.get('campaignStatus'),
        startDate: formData.get('campaignStartDate'),
        endDate: formData.get('campaignEndDate'),
        budget: formData.get('campaignBudget'),
        objective: formData.get('campaignObjective'),
        description: formData.get('campaignDescription'),
        targetAudience: formData.get('campaignTargetAudience')
    };
    
    // Validar campos requeridos
    if (!campaignData.name || !campaignData.client || !campaignData.type || 
        !campaignData.startDate || !campaignData.endDate) {
        showAlert('Por favor, complete todos los campos obligatorios');
        return;
    }
    
    // Validar fechas
    const startDate = new Date(campaignData.startDate);
    const endDate = new Date(campaignData.endDate);
    if (endDate <= startDate) {
        showAlert('La fecha de fin debe ser posterior a la fecha de inicio');
        return;
    }
    
    // Simular creación de campaña
    showAlert(`¡Campaña "${campaignData.name}" creada exitosamente para ${campaignData.client}!`);
    
    // Cerrar modal y limpiar formulario
    closeCampaignModal();
    
    // Aquí se podría agregar la campaña a la tabla (simulación)
    console.log('Nueva campaña creada:', campaignData);
    
    // Opcional: recargar la página para simular actualización de datos
    setTimeout(() => {
        location.reload();
    }, 1500);
}

console.log('Sistema de Gestión - JavaScript cargado correctamente');