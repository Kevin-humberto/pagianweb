document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registroForm");
    const alertaError = document.querySelector(".alerta-error");

    // Expresiones regulares
    const nombreApellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    const telefonoRegex = /^[0-9]{9}$/;
    const emailRegex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,6}$/;

    // Validar y enviar el formulario
    form.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevenir envío por defecto
        alertaError.innerHTML = ""; // Limpiar errores previos

        const formData = {
            nombre: document.getElementById("nombre").value.trim(),
            apellido: document.getElementById("apellido").value.trim(),
            telefono: document.getElementById("telefono").value.trim(),
            correo: document.getElementById("correo").value.trim(),
            consulta: document.getElementById("consulta").value.trim(),
        };

        let errores = [];

        // Validaciones
        if (!formData.nombre || !nombreApellidoRegex.test(formData.nombre)) {
            errores.push("El nombre debe contener solo letras y no estar vacío.");
        }
        if (!formData.apellido || !nombreApellidoRegex.test(formData.apellido)) {
            errores.push("El apellido debe contener solo letras y no estar vacío.");
        }
        if (!formData.telefono || !telefonoRegex.test(formData.telefono)) {
            errores.push("El teléfono debe contener exactamente 9 dígitos.");
        }
        if (!formData.correo || !emailRegex.test(formData.correo)) {
            errores.push("El correo es inválido.");
        }
        if (!formData.consulta) {
            errores.push("La consulta no puede estar vacía.");
        }

        // Mostrar errores si existen
        if (errores.length > 0) {
            mostrarErrores(errores);
            return;
        }

        // Si no hay errores, enviar datos al servidor
        try {
            const response = await fetch("http://52.54.181.116:3000/registro", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message); // Mostrar mensaje de éxito
                form.reset(); // Reiniciar formulario
            } else {
                mostrarErrores([result.message || "Error al registrar el usuario."]);
            }
        } catch (error) {
            console.error("Error:", error);
            mostrarErrores(["Hubo un problema al enviar los datos."]);
        }
    });

    // Mostrar errores en el DOM
    function mostrarErrores(errores) {
        alertaError.innerHTML = errores
            .map((error) => `<p style="color: red;">${error}</p>`)
            .join("");
    }
});
