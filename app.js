let nomes = [];
let amigo = document.getElementById('amigo');

function adicionarAmigo() {
    novoAmigo = document.createElement("li");
    novoAmigo.textContent = amigo.value.trim();
    document.getElementById('listaAmigos').appendChild(novoAmigo);
    nomes.push(amigo.value.trim());
    amigo.value = '';
}