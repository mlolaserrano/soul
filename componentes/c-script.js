
// Menu
class componenteMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
          <nav>
      <ul class="navegacion">
        <li class="logo">
          <a href="/pages/home.html"><img src="/images/Logo.png" alt="Logo de SOUL"></a>
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
        <li><a href="calendario.html" class="bubbly-submenu">Calendario</a></li>
        <li><a href="actividades.html" class="bubbly-submenu">Actividades</a></li>
        <li><a href="acompañante.html" class="bubbly-submenu">Mi Acompañante</a></li>
        <li><a href="recompensa.html" class="bubbly-submenu">Recompensas</a></li>
      </ul>
    </div>
  </nav>
      `;
  }
}
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
           <button id="chat"><img src="/images/Chat.png" width="150"></button>
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

// Menu Admin
class componenteAdm extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
      `
           <nav>
       <ul class="navegacion">
         <li class="logo">
           <a href="/pages/admin/(adm)home.html"><img src="/images/Logo.png" alt="Logo de SOUL"></a>
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