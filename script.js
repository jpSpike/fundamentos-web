const formProduto = document.querySelector("#form-produto");
const listaProdutos = document.querySelector("#lista-produtos");

function atualizarContador() {
    const contador = document.querySelector("#contador")
    const quantidadeProdutos = listaProdutos.children.length;

    if (quantidadeProdutos === 0) {
        contador.textContent = "Nenhum produto cadastrado ainda!";
    } else {
        contador.textContent = `${quantidadeProdutos} Produtos cadastrados`;
    }
}

atualizarContador();

// Função para adicionar os botões a qualquer item <li>
function adicionarBotoes(item) {
    // Evita adicionar botões duplicados se a função for chamada mais de uma vez
    if (item.querySelector(".area-botoes")) return;

    // Container que vai agrupar os dois botões
    const areaBotoes = document.createElement("div");
    areaBotoes.classList.add("area-botoes")

    // Botão Editar
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botaoEditar");
    botaoEditar.textContent = "🛠️";

    botaoEditar.addEventListener("click", function () {
        // Lê os dados armazenados nos dataset do <li>
        formProduto.querySelector("#nome").value = item.dataset.nome || "";
        formProduto.querySelector("#preco").value = item.dataset.preco || "";
        formProduto.querySelector("#quantidade").value = item.dataset.quantidade || "";
        formProduto.querySelector("#marca").value = item.dataset.marca || "";
        formProduto.querySelector("#cor").value = item.dataset.cor || "";

        item.remove();
        atualizarContador();
    });

    // Botão Remover
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("botaoRemover");
    botaoRemover.textContent = "🗑️";

    botaoRemover.addEventListener("click", function () {
        item.remove();
        atualizarContador();
    });

    // Os botões vão dentro da div, e a div vai dentro do item
    areaBotoes.appendChild(botaoEditar);
    areaBotoes.appendChild(botaoRemover);
    item.appendChild(areaBotoes)
}



// 1. Manipula o envio do formulário para novos produtos
formProduto.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = formProduto.querySelector("#nome").value;
    const preco = formProduto.querySelector("#preco").value;
    const quantidade = formProduto.querySelector("#quantidade").value;
    const marca = formProduto.querySelector("#marca").value;
    const cor = formProduto.querySelector("#cor").value;
    const item = document.createElement("li");

    // Guarda os dados no dataset do novo item
    item.dataset.nome = nome;
    item.dataset.preco = preco;
    item.dataset.quantidade = quantidade;
    item.dataset.marca = marca;
    item.dataset.cor = cor;

    item.textContent = `${nome} - R$ ${Number(preco).toFixed(2)} (${quantidade} un.) - ${marca} - ${cor} `;

    // Adiciona os botões usando a mesma função
    adicionarBotoes(item);
    
    listaProdutos.appendChild(item);
    formProduto.reset();
    
    atualizarContador();

});
