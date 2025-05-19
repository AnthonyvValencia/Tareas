document.getElementById("clienteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const direccion = document.getElementById("direccion").value.trim();
    const ciudad = document.getElementById("ciudad").value.trim();
    const estado = document.getElementById("estado").value.trim();
    const codigoPostal = document.getElementById("codigoPostal").value.trim();

    // Validar que ningún campo esté vacío
    if (!nombre || !apellido || !correo || !telefono || !direccion || !ciudad || !estado || !codigoPostal) {
        alert("Todos los campos son obligatorios.");
        return;
    }

    // Validar nombre y apellido (solo letras y espacios)
    const nombreApellidoRegex = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]{2,50}$/;
    if (!nombreApellidoRegex.test(nombre)) {
        alert("Nombre inválido. Solo se permiten letras y espacios.");
        return;
    }
    if (!nombreApellidoRegex.test(apellido)) {
        alert("Apellido inválido. Solo se permiten letras y espacios.");
        return;
    }

    // Validar correo
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert("Correo electrónico inválido.");
        return;
    }

    // Validar teléfono (solo números 10)
    const telefonoRegex = /^\d{10}$/;
    if (!telefonoRegex.test(telefono)) {
        alert("Teléfono inválido. Debe contener 10 dígitos numéricos.");
        return;
    }

    // Validar dirección (mínimo 5 caracteres)
    if (direccion.length < 5) {
        alert("Dirección inválida. Debe contener al menos 5 caracteres.");
        return;
    }

    // Validar ciudad y estado (solo letras y espacios)
    const ciudadEstadoRegex = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ\s]{2,50}$/;
    if (!ciudadEstadoRegex.test(ciudad)) {
        alert("Ciudad inválida. Solo se permiten letras y espacios.");
        return;
    }
    if (!ciudadEstadoRegex.test(estado)) {
        alert("Estado inválido. Solo se permiten letras y espacios.");
        return;
    }

    // Validar código postal (4 a 10 caracteres, letras, números, guiones)
    const codigoPostalRegex = /^[a-zA-Z0-9\s\-]{4,10}$/;
    if (!codigoPostalRegex.test(codigoPostal)) {
        alert("Código postal inválido. Debe tener entre 4 y 10 caracteres.");
        return;
    }

    const resultado = `Cliente Guardado: ${nombre} ${apellido}, ${correo}, ${telefono}, 
    ${direccion}, ${ciudad}, ${estado}, ${codigoPostal}`;

    document.getElementById("resultado").textContent = resultado;
    this.reset();
});
S