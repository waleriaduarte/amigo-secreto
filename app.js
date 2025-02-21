// captura o campo de texto e o botão
const inputNome = document.getElementById('inputAmigo');
let nomes = []; //armazena os nomes

//função para adicionar nomes
function adicionarNome() {
    const nome = inputNome.value.trim();
    if (nome == '') {
        alert('Por favor, insira um nome');
        return;
    }

nomes.push(nome); // adiciona nomes a lista
inputNome.value = ''; // limpa o campo de texto
atualizarLista(); // atualiza a lista na tela
}

//função para atualizar a lista
function atualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // limpa a lista antes de adicionar novos nomes
    nomes.forEach(nome => {
        const li= document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li); //adiciona cada nome como um item  de lista
    });
}

//captura o botão de adicionar e adiciona o evento "clique"
const botaoAdicionar = document.getElementById('botaoAdicionar');
botaoAdicionar.addEventListener('click', adicionarNome);

