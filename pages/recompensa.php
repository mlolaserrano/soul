<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta
      name="description"
      content="Conviértete en esa persona que siempre soñaste ser."
    />

    <meta
      name="keywords"
      content="Bienestar, salud, tranquilidad, soledad, felicidad, acompañante, solo, sola, triste, Ayuda emocional, calendario emocional, beneficios, regalos, estar mejor"
    />
    <link rel="canonical" href=".../soul/home.php" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Soul" />
    <meta name="publisher" content="Marina Duarte, Lara Olcesi, Lola Serrano" />

    <title>Soul</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
    />

    <!--tipografias-->
     <!--Poppins-->
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">

     <!--Coustard-->
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Coustard:wght@400;900&display=swap" rel="stylesheet">

    <!--flaticon-->
    <!--Ayuda-->
    <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-thin-rounded/css/uicons-thin-rounded.css'> 
    
     <!--Usuario-->
     <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-thin-rounded/css/uicons-thin-rounded.css'>

    <!--Usuario-->
     <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-thin-straight/css/uicons-thin-straight.css'>
 
    

    <!--Hoja de estilos-->
    <link rel="stylesheet" href="/assets/css/styles.css" />
  </head>


  <body>
    <header>   
      <nav>  
          <ul class="navegacion">  
            <li class="logo">  
              <a href="/pages/home.php"><img src="/images/Logo.png" alt="Logo de SOUL"></a> 
            </li> 
              <li class="busqueda">  
                  <div class="search-container">  
                      <input type="text" placeholder="Buscar..." class="buscador1">  
                      <button class="buscador2">Buscar</button>  
                  </div>  
              </li>  
              <li class="pregunta"><i class="fi fi-tr-seal-question"></i></li>  
              <li class="usuario"><i class="fi fi-tr-man-head"></i></li>  
              <li class="salir"><i class="fi fi-ts-sign-out-alt"></i></li>  
          </ul>  
      </nav>  
      <div class="submenu">
        <ul class="submenu-list">
            <li><a href="/pages/calendario.php" class="bubbly-submenu">Calendario</a></li>
            <li><a href="/pages/actividades.php" class="bubbly-submenu">Actividades</a></li>
            <li><a href="/pages/acompañante.php" class="bubbly-submenu">Mi Acompañante</a></li>
            <li><a href="/pages/recompensa.php" class="bubbly-submenu">Recompensas</a></li>
        </ul>
    </div>
    
  </header>


<section>
  <div id="spinner" class="spinner" style="display: none;"></div>
    <p>Pagina de recompensa</p>
</section>
       



      <footer>
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
        <hr>
        <p class="footer">&copy; Marina Duarte - Lara Olcesi - Lola Serrano </p>
    </footer>

 
      <script src="/assets/js/scripts.js"></script>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
  </body>
</html>