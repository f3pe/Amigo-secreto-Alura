let nomes = [];
let amigo = document.getElementById('amigo');

function adicionarAmigo() {
    if(!amigo.value){
        alert("Por favor, insira um nome.");
        return;
    }
    let novoAmigo = document.createElement("li");
    novoAmigo.textContent = amigo.value.trim();
    document.getElementById('listaAmigos').appendChild(novoAmigo);
    nomes.push(amigo.value.trim());
    amigo.value = '';
}

function sortearAmigo(){
    let n = nomes.length;
    let cont = 0;
    while(n > 0){
        n = Math.floor(n/10);
        cont++;
    }
    let numSoteado = parseInt(parseInt((Math.random() * cont*10) % nomes.length));
    
    document.getElementById('resultado').innerHTML = `<li>${nomes[numSoteado]}</li>`;
}