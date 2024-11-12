/* https://magicloops.dev/es */

function enviarMail(email, nombre, apellido, mensaje) {

    // Por si necesito usar letrs o simbolos raros

    const emailEncoded = encodeURIComponent(email);
    const nombreEncoded = encodeURIComponent(nombre);
    const apellidoEncoded = encodeURIComponent(apellido);
    const mensajeEncoded = encodeURIComponent(mensaje);

    const url = `https://magicloops.dev/api/loop/run/6f7ce9b6-0176-499e-ac5d-10d3cd218c53?email=${emailEncoded}&nombre=${nombreEncoded}&mensaje=${mensajeEncoded}`;

    fetch(url) 
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data); 
            return true;
        })
        .catch(error => {
            console.error('Hubo un error:', error);
            return 0;
        });
}
function enviarCorreo(){
    const email = document.getElementById("email").value;
    const usuario = document.getElementById("nombreUsuario").value;
    const apellido = document.getElementById("apellidoUsuario").value;
    const mensaje = document.getElementById("mensajeUsuario").value;
    console.log(email,usuario,apellido,mensaje);
    enviarMail(email,usuario,"",mensaje);
    return false;
}
