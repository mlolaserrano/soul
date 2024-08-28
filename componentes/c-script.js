
// Menu
fetch('/componentes/menu.html')
.then(response => response.text())
.then(data => {
    document.getElementById('componente-menu').innerHTML = data;

});

// footer
fetch('/componentes/footer.html')
.then(response => response.text())
.then(data => {
    document.getElementById('componente-footer').innerHTML = data;

});

// Chat
fetch('/componentes/chat.html')
.then(response => response.text())
.then(data => {
    document.getElementById('componente-chat').innerHTML = data;

});