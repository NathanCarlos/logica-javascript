const h3Titulo = document.getElementById('tituloH3');
let tituloEscondido = false;
const escondeTitulo = () => {
    if (!tituloEscondido) {
        // h3Titulo.style.display = 'none';
        h3Titulo.className = 'display-none';
        tituloEscondido = true;
    }
    else {
        // h3Titulo.style.display = 'block';
        // h3Titulo.style.color = 'red';
        // h3Titulo.style.fontSize = '30px';
        h3Titulo.className = 'display-block red';
        tituloEscondido = false;
    }
};
