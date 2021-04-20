const h1TotalSalarios = document.getElementById('totalSalarios');
const h1MediaSalarios = document.getElementById('mediaSalarios');
const ulMediaSalariosPorCargo = document.getElementById('mediaSalariosPorCargo');
const ulTotalSalariosPorCargo = document.getElementById('totalSalariosPorCargo');

const setaH1TotalSalarios = (texto) => {
    h1TotalSalarios.innerText = texto;
}
const setaH1MediaSalarios = (texto) => {
    h1MediaSalarios.innerText = texto;
}
const setaUlMediaSalariosPorCargo = (texto) => {
    ulMediaSalariosPorCargo.innerHTML = texto;
}
const setaUlTotalSalariosPorCargo = (texto) => {
    ulTotalSalariosPorCargo.innerHTML = texto;
}

const retornaUlMediaSalariosPorCargo = () => {
    return ulMediaSalariosPorCargo.innerHTML;
}

const retornaUlTotalSalariosPorCargo = () => {
    return ulTotalSalariosPorCargo.innerHTML;
}