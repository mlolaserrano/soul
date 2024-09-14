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
                window.location.href = '/pages/admin/(adm)home.html';
            }
            return;
        }
    }
    alert("Datos Incorrectos");
}

// Final de login

// Animación Menu
// CREADOR ORIGINAL https://codepen.io/nourabusoud/pen/ypZzMM*/ 
var animateSubmenu = function(e) {
    e.preventDefault(); 
    var targetUrl = e.target.href; 
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    
    // Mostrar el spinner
    document.getElementById('spinner').style.display = 'block';

    setTimeout(function(){
        e.target.classList.remove('animate');
        window.location.href = targetUrl; 
    }, 750); 
};

var bubblySubmenus = document.getElementsByClassName("bubbly-submenu");

for (var i = 0; i < bubblySubmenus.length; i++) {
    bubblySubmenus[i].addEventListener('click', animateSubmenu, false);
}

// menu hamburguesa

const menuHamburguesa = document.getElementById('menu-icon');
const navegacion = document.getElementById('menu-hamburguesa');
const submenuList = document.getElementById('submenulist');

menuHamburguesa.addEventListener('click', () => {
   navegacion.classList.toggle('menu-active');
   submenuList.classList.toggle('menu-active');
})

// Chat 

document.getElementById('chat').addEventListener('click', function() {
    document.getElementById('chatVentana').classList.toggle('hidden');
});

document.getElementById('cerrar').addEventListener('click', function() {
    document.getElementById('chatVentana').classList.add('hidden');
});

document.getElementById('enviar').addEventListener('click', function() {
    validarFormulario();
});

function validarFormulario() {
    var mensajeInput = document.getElementById("mensajeInput");
    var mensaje = mensajeInput.value.trim();
    var chatBody = document.getElementById("chatBody");
    var validador = true;

    if (mensaje.length > 0) {
        console.log("Mensaje correcto");
    } else {
        validador = false;
        console.log("Mensaje vacío");
    }

    if (validador) {

        var nuevoMensaje = document.createElement("p");
        nuevoMensaje.textContent = mensaje;
        
        nuevoMensaje.classList.add("mensaje-enviado");
        
        chatBody.appendChild(nuevoMensaje);
        
        mensajeInput.value = '';
        
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

// Calendario


document.addEventListener('DOMContentLoaded', function () {
    const daysContainer = document.getElementById('days');
    const statusDiv = document.getElementById('status');
    const confirmButton = document.getElementById('confirm');
  
  
    // Generar días del mes
    for (let i = 1; i <= 31; i++) {
      const day = document.createElement('div');
      day.classList.add('day');
      day.textContent = i;
  
  
      const color = document.createElement('div');
      color.classList.add('color');
  
  
      day.appendChild(color);
  
  
      daysContainer.appendChild(day);
    }
  
  
    // Añadir evento de clic para cambiar color
    const days = document.querySelectorAll('.day');
    days.forEach((day) => {
      day.addEventListener('click', function (e) {

        day.classList.add('selected');
  
  
        statusDiv.style.display = 'block';
        const dayMiddle = statusDiv.offsetWidth / 2 - day.offsetWidth / 2;
        statusDiv.style.left = `${day.offsetLeft - dayMiddle}px`;
        console.log(day.offsetLeft);
        statusDiv.style.top = `${day.offsetTop + day.offsetHeight}px`;
      });
    });
  
  
    confirmButton.addEventListener('click', function () {
      statusDiv.style.display = 'none';
    });
  
  
    // Función para generar un color aleatorio
    function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  
  
    document.getElementById('rojo').addEventListener('click', function () {
      const selected = document.querySelector('#days .selected');
      const color = selected.querySelector('.color');
  
  
      color.style.display = 'block';
      color.style.backgroundColor = 'red';
      deselect();
      close();
    });
  
  
    document.getElementById('azul').addEventListener('click', function () {
      const selected = document.querySelector('#days .selected');
  
  
      after.style.backgroundColor = 'blue';
      after.style.display = 'block';
  
  
      deselect();
      close();
    });
  
  
    function close() {
      statusDiv.style.display = 'none';
    }
  
  
    function deselect() {
      document
        .querySelectorAll('.selected')
        .forEach((e) => e.classList.remove('selected'));
    }
  });
  

  //Alerta de canjear recompensa

  document.getElementById('M-BotonReclamar2').addEventListener('click', function() {
    alert('¡Recompensa reclamada correctamente!');
});

// Modal de actividades 

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

 
