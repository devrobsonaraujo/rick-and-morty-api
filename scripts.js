function mostrarDados(data) {
    const dados = document.getElementById('dados');

    dados.innerHTML = `
    <p><img src="${data.image}" alt=""></p>
    <p>Name: ${data.name}</p>
    <p>Gender: ${data.gender}</p>
    <p>Status: ${data.status}</p>
    <p>Origem: ${data.origin.name}</p>
    `
} 



async function myApi() {
    const id = document.getElementById('id_character').value;
    const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        mostrarDados(data);
    } catch (error) {
        console.error('Erro ao obter dados da API: ', error);
    }
}

function limparDados() {
    const dadosL = document.getElementById('id_character');
    dadosL.value = '';
}

const btnConsulta = document.getElementById('btn__consul');
const btnDelete = document.getElementById('btn__del');

btnConsulta.addEventListener("click", myApi);
btnDelete.addEventListener("click", limparDados);









