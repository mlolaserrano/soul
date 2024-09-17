
// Menu
class componenteMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
    <nav>
      <div class="menu">
      <input type="checkbox" id="check">
      <label for="check" class="checkbox">
          <i class="bi bi-list"></i>
      </label>
      <a href="../pages/home.html" class="enlace-home">
          <img src="../images/Logo.png" alt="" class="logo">
      </a>
      <ul class="iconos">
          <li class="icon">
              <div class="search-container">
            <input type="text" placeholder="Buscar..." class="buscador1">
            <i class="fi fi-ts-search-heart" style="font-size: 20px;"></i>
          </li>
          <li class="icon">
              <i class="fi fi-tr-seal-question"></i>
          </li>
          <li class="icon">
               <i class="fi fi-tr-man-head"></i>
          </li>
          <li class="icon">
              <a href="../index.html">
              <i class="fi fi-ts-sign-out-alt" id="salir"></i>
              </a>
          </li>
      </ul>

           <ul class="submenu-list">
              <li><a href="../pages/calendario.html" class="bubbly-submenu">Calendario</a></li>
              <li><a href="../pages/actividades.html" class="bubbly-submenu">Actividades</a></li>
              <li><a href="../pages/acompañante.html" class="bubbly-submenu">Mi Acompañante</a></li>
              <li><a href="../pages/recompensa.html" class="bubbly-submenu">Recompensas</a></li>
          </ul>
      </div>
  </nav>
      `;
  }
}

 //<li class="menu-hamburguesa"><i class="fi fi-br-menu-burger" id="menu-toggle"></i></li>
customElements.define('componente-menu', componenteMenu);

// footer
fetch('/componentes/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('componente-footer').innerHTML = data;

  });

// Chat
class componenteChat extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
           <button id="chat"><img src="../images/Chat.png" width="150"></button>
<div id="chatVentana" class="chat-ventana hidden">
  <div class="chat-header">
    <span>Chat</span>
    <button id="cerrar" class="cerrar">X</button>
  </div>
  <div class="chat-body" id="chatBody">
    <p>¡Hola Juana! ¿En que te puedo ayudar?</p>
  </div>
  <div class="chat-footer">
    <input type="text" id="mensajeInput" placeholder="Escribe un mensaje...">
    <button id="enviar">Enviar</button>
  </div>
</div>
       `;
  }
}
customElements.define('componente-chat', componenteChat);

// Chat admin
class componenteChat extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
           <button id="chat"><img src="../../images/Chat.png" width="150"></button>
<div id="chatVentana" class="chat-ventana hidden">
  <div class="chat-header">
    <span>Chat</span>
    <button id="cerrar" class="cerrar">X</button>
  </div>
  <div class="chat-body" id="chatBody">
    <p>¡Hola Graciela! ¿En que te puedo ayudar?</p>
  </div>
  <div class="chat-footer">
    <input type="text" id="mensajeInput" placeholder="Escribe un mensaje...">
    <button id="enviar">Enviar</button>
  </div>
</div>
       `;
  }
}
customElements.define('componente-chatadmin', componenteChatadmin);

// Menu Admin
class componenteAdm extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
           <nav>
       <ul class="navegacion">
         <li class="logo">
           <a href="../../pages/admin/(adm)home.html"><img src="../../images/Logo.png" alt="Logo de SOUL"></a>
         </li>
         <li class="busqueda">
           <div class="search-container">
             <input type="text" placeholder="Buscar..." class="buscador1">
             <i class="fi fi-ts-search-heart" style="font-size: 25px;"></i>
         </div>
           </div>
         </li>
         <li class="pregunta"><i class="fi fi-tr-seal-question"></i></li>
         <li class="usuario"><i class="fi fi-tr-man-head"></i></li>
         <a href="/index.html" class="sin-formato">
           <li class="salir"><i class="fi fi-ts-sign-out-alt"></i></li>
         </a>
       </ul>
     </nav>
     <div class="submenu">
       <ul class="submenu-list">
         <li><a href="(adm)calendario.html" class="bubbly-submenu">Calendario</a></li>
         <li><a href="(adm)actividades.html" class="bubbly-submenu">Actividades</a></li>
         <li><a href="(adm)acompañante.html" class="bubbly-submenu">Mi Acompañante</a></li>
         <li><a href="(adm)recompensa.html" class="bubbly-submenu">Recompensas</a></li>
       </ul>
     </div>
   </nav>
       `;
  }
}
customElements.define('componente-admi', componenteAdm);