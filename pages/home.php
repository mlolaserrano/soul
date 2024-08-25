<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Conviértete en esa persona que siempre soñaste ser." />

  <meta name="keywords"
    content="Bienestar, salud, tranquilidad, soledad, felicidad, acompañante, solo, sola, triste, Ayuda emocional, calendario emocional, beneficios, regalos, estar mejor" />
  <link rel="canonical" href=".../soul/home.php" />
  <meta name="robots" content="index, follow" />
  <meta name="author" content="Soul" />
  <meta name="publisher" content="Marina Duarte, Lara Olcesi, Lola Serrano" />

  <title>Soul</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />

  <!--tipografias-->
  <!--Poppins-->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet">

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

  <!--Signo mas, agregar-->
  <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-thin-straight/css/uicons-thin-straight.css'>

  <!--Buscar-->
  <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-thin-straight/css/uicons-thin-straight.css'>

<!--Check-->
  <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.5.1/uicons-thin-rounded/css/uicons-thin-rounded.css'>

    <!--Bootstrap-->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

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
            <i class="fi fi-ts-search-heart" style="font-size: 25px;"></i>
        </div>
          </div>
        </li>
        <li class="pregunta"><i class="fi fi-tr-seal-question"></i></li>
        <li class="usuario"><i class="fi fi-tr-man-head"></i></li>
        <a href="/index.php" class="sin-formato">
          <li class="salir"><i class="fi fi-ts-sign-out-alt"></i></li>
        </a>
      </ul>
    </nav>
    <div class="submenu">
      <ul class="submenu-list">
        <li><a href="calendario.php" class="bubbly-submenu">Calendario</a></li>
        <li><a href="actividades.php" class="bubbly-submenu">Actividades</a></li>
        <li><a href="acompañante.php" class="bubbly-submenu">Mi Acompañante</a></li>
        <li><a href="recompensa.php" class="bubbly-submenu">Recompensas</a></li>
      </ul>
    </div>

  </header>

  <!--Carga-->
  <section>
    <div id="spinner" class="spinner" style="display: none;"></div>
  </section>
  <!--Fin de carga-->

  <main>
<!-- Contenedor para las columnas -->
<div class="s-columnashome">
  <!-- Bienvenida -->
  <section class="s-presentacion">
      <img src="/images/Avatar.png" alt="" style="width: 400px;" class="s-img">
      <div class="s-dividir">
          <h1>¡Buenos Días, Lola!</h1>
          <br>
          <h3>¿Qué tal tu día? <i class="fi fi-tr-add" style="color: #5dc1b9;"></i></h3>
      </div>
  </section>

  <!-- Actividades Pendientes, vista previa -->



  <article class="s-articulo">
    <h3>Tenés desafíos pendientes</h3>
    <h4>Tu progreso:</h4>
    <div class="s-progreso1">
        <div class="s-progreso2" id="s-progreso3">
            <p class="s-progreso4">45%</p>
        </div>
    </div>
    <div class="s-lista">
        <ul class="s-lista1">
            <li class="s-lista2">
                <div class="s-lista5">
                    <i class="fi fi-tr-badge-check" style="color: #b95dd4;"></i> 
                    <p style="color: #b695c0;">Ejercicio regular</p>
                </div>
            </li>
            <li class="s-lista2">
                <div class="s-lista5">
                    <i class="fi fi-tr-badge-check" style="color: #b95dd4;"></i> 
                    <p style="color: #b695c0;">Meditación diaria</p>
                </div>
            </li>
            <li class="s-lista2">
                <div class="s-lista5">
                    <i class="fi fi-tr-badge-check" style="color: #a79fa7;"></i> 
                    <p style="color: #a79fa7;">Conexión social</p>
                </div>
            </li>
        </ul>
    </div>
</article>
</div>





    <!--Calendario-->
    <section>

      <section class="s-columnas">
        <div>
          <div class="s-centrar">
            <h3>Tabla de Emociones</h3>
            <div class="calendar">
              <div class="month">
                <p class="Mes">Mayo 2024</p>
              </div>
              <div class="days" id="days"></div>
            </div>
          </div>
          <div id="status">
            <div class="color">¡Añadí como te sentís hoy!</div>
            <br />
            <div class="message">
              <div>
                <i class="bi bi-emoji-angry-fill"></i>
                <button class="BotonesCalendario" id="rojo">Enojado</button>
              </div>
              <div>
                <i class="bi bi-emoji-frown-fill"></i>
                <button class="BotonesCalendario" id="azul">Triste</button>
              </div>
              <div>
                <i class="bi bi-emoji-expressionless-fill"></i>
                <button class="BotonesCalendario" id="verde">Aburrida</button>
              </div>
              <div>
                <i class="bi bi-emoji-smile-fill"></i>
                <button class="BotonesCalendario" id="amarillo">Feliz</button>
              </div>
            </div>
            <hr />
            <button class="BotonConfirm" id="confirm">Confirmar</button>
          </div>
        </div>
       
      

      <div class="container text-center"><h3 class="s-titulo3">Mis notas</h3>
        <div class="s-notitas"> 
        <div class="row">
          <div class="col-6 col-sm-3">  <div class="s-postit"></div>
         
         
          <div class="s-postit"></div></div>
          <div class="col-6 col-sm-3">  <div class="s-postit"></div>
          <div class="s-agregar"> 
          <div class="s-postit2"><br><i class="fi fi-tr-add"></i></div>
       </div>
      
       
        </div>
      </div>
    </div>
</section>


      
      
  </main>

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