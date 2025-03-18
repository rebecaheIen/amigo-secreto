//Criando uma Array
let nomes = [];

function adicionarAmigo(){

    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    //Condição para validar a entrada
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome à lista, atualiza a lista e limpa o campo de entrada

    nomes.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {

    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    nomes.forEach(nome => {

        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

function sortearAmigo(){
    if (nomes.length === 0) {

        alert("A lista está vazia. Adicione nomes antes de sortear.");

        return;
    }

    let indiceSorteado = Math.floor(Math.random() * nomes.length); 
    let amigoSorteado = nomes [indiceSorteado];

    document.getElementById("resultado").innerHTML = `Amigo(a) sorteado(a): <strong>${amigoSorteado}</strong>!`;
}