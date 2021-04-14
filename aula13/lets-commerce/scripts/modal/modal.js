const abrirModal = (idModal) => {
    const modal = document.getElementById(idModal);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'Block';
    document.body.style.overflow = 'hidden';
}

const fecharModal = (idModal) => {
    const modal = document.getElementById(idModal);

    if (typeof modal == 'undefined' || modal === null)
        return;

    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}
