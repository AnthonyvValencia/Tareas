document.getElementById("clienteForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;
    const direccion = document.getElementById("direccion").value;
    const ciudad = document.getElementById("ciudad").value;
    const estado = document.getElementById("estado").value;
    const codigoPostal = document.getElementById("codigoPostal").value;

    const resultado = `Cliente Guardado: ${nombre} ${apellido}, ${correo}, ${telefono}, 
    ${direccion}, ${ciudad}, ${estado}, ${codigoPostal}`;
    document.getElementById("resultado").textContent = resultado;

    this.reset();
});
