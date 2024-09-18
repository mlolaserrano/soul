function loadPage(pageUrl) {
    fetch(pageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la solicitud: ' + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('login-admi').innerHTML = html;
        })
        .catch(error => {
            console.error('Hubo un problema al cargar la página:', error);
        });
}

document.getElementById('login-admi').addEventListener('click', function() {
    loadPage('pages/(adm)login.html');

});

document.getElementById('login-id').addEventListener('click', function() {
    loadPage('login.html');

    
});


