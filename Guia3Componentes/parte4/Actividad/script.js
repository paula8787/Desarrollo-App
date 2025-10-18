
// ============================================
// VARIABLES GLOBALES
// ============================================
// Usando nombres descriptivos según buenas prácticas
const btnAbrirLogin = document.getElementById('btnAbrirLogin');
const btnBienvenida = document.getElementById('btnBienvenida');
const btnCurso1 = document.getElementById('btnCurso1');
const btnCurso2 = document.getElementById('btnCurso2');
const btnCurso3 = document.getElementById('btnCurso3');
const formLogin = document.getElementById('formLogin');
const formContacto = document.getElementById('formContacto');
const inputUsuario = document.getElementById('inputUsuario');
const inputPassword = document.getElementById('inputPassword');

// Instancia del modal de Bootstrap
const modalLogin = new bootstrap.Modal(document.getElementById('modalLogin'));

let contadorAlertas = 0;

// ============================================
// FUNCIONES - Nombres claros y descriptivos
// ============================================

/**
 * Muestra una alerta flotante personalizada
 * @param {string} tipo - Tipo de alerta (success, danger, info, warning)
 * @param {string} mensaje - Mensaje a mostrar
 */
function mostrarAlerta(tipo, mensaje) {
    contadorAlertas++;
    const idAlerta = `alerta-${contadorAlertas}`;
    
    const alertaHTML = `
        <div id="${idAlerta}" class="alert alert-${tipo} alert-dismissible fade show alerta-flotante" role="alert">
            <strong>${mensaje}</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', alertaHTML);
    
    // Auto-eliminar la alerta después de 4 segundos
    setTimeout(() => {
        const elementoAlerta = document.getElementById(idAlerta);
        if (elementoAlerta) {
            const alerta = new bootstrap.Alert(elementoAlerta);
            alerta.close();
        }
    }, 4000);
}

/**
 * Valida el formulario de login
 * @returns {boolean} - true si es válido, false si no
 */
function validarFormularioLogin() {
    const usuario = inputUsuario.value.trim();
    const password = inputPassword.value.trim();
    let esValido = true;

    // Validación básica de campos vacíos
    if (usuario === '') {
        esValido = false;
    }

    if (password.length < 4) {
        esValido = false;
    }

    return esValido && formLogin.checkValidity();
}

/**
 * Procesa el inicio de sesión
 */
function procesarLogin() {
    const usuario = inputUsuario.value.trim();
    const password = inputPassword.value.trim();

    // Validación según la guía (Parte 4)
    if (usuario === "admin" && password === "1234") {
        modalLogin.hide();
        mostrarAlerta('success', '✅ Inicio de sesión exitoso. ¡Bienvenido!');
        formLogin.reset();
        formLogin.classList.remove('was-validated');
    } else {
        mostrarAlerta('danger', '❌ Credenciales incorrectas. Intenta de nuevo.');
    }
}

/**
 * Maneja la inscripción a un curso
 * @param {string} nombreCurso - Nombre del curso
 */
function inscribirCurso(nombreCurso) {
    mostrarAlerta('info', `📚 Para inscribirte en "${nombreCurso}", primero inicia sesión.`);
    modalLogin.show();
}