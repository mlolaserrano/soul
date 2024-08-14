// Login

var usuarios = [

    // Pasajero
    {
        "mail": "Juana",
        "contraseña": "123",
        "rol": 1
    },

    // Administrador
    {
        "mail": "Graciela",
        "contraseña": "123",
        "rol": 2
    }
];

// Captura de datos para el login 

function InicioSesion() {
    var mail = document.getElementById("mail").value;
    var contraseña = document.getElementById("contraseña").value;


    for (let index = 0; index < usuarios.length; index++) {
        if (usuarios[index].mail === mail && usuarios[index].contraseña === contraseña) {
            if (usuarios[index].rol == 1) {


                // Redirigir al pasajero
                window.location.href = '/pages/home.html';
            } else if (usuarios[index].rol == 2) {


                // Redirigir al administrador
                window.location.href = '/(adm)home.html';
            }
            return;
        }
    }
    alert("Datos Incorrectos");
}

// Final de login
