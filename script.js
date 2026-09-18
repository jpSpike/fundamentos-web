const formProduto = document.querySelector("#form-produto");
const listaProdutos = document.querySelector("#lista-produtos");

formProduto.addEventListener("submit", function (event) {
    // Sem isso, o navegador recarrega a página ao enviar o fomulário
    event.preventDefault();
    // Lê o valor digitado em cada campo
    const nome = formProduto.querySelector("#nome").value;
    const preco = formProduto.querySelector("#preco").value;
    const quantidade = formProduto.querySelector("#quantidade").value;
    const marca = formProduto.querySelector("#marca").value;
    const cor = formProduto.querySelector("#cor").value;

    // Adicionar produto à lista
    const item = document.createElement("li");

    // Adiciona as informações do produto
    item.textContent = `${nome} - R$ ${Number(preco).toFixed(2)} - (${quantidade} un.) - ${marca} - ${cor}     `;

    // Adiciona um nome item no final da lista
    listaProdutos.appendChild(item);

    // Criar Botão Editar
    const botaoEditar = document.createElement("button");

    botaoEditar.classList.add("botaoEditar")
    botaoEditar.textContent = "🛠️";
    botaoEditar.addEventListener("click", function () { // Detectar o clique do botão editar
        formProduto.querySelector("#nome").value = nome;
        formProduto.querySelector("#preco").value = preco;
        formProduto.querySelector("#quantidade").value = quantidade;
        formProduto.querySelector("#marca").value = marca;
        formProduto.querySelector("#cor").value = cor;

        item.remove()
    })
    item.appendChild(botaoEditar);

    // Criar botão remover
    const botaoRemover = document.createElement("button");
    
    botaoRemover.classList.add("botaoRemover")
    botaoRemover.textContent = "🗑️";
    botaoRemover.addEventListener("click", function () { // Dectar o clique no botão
        item.remove();
    });
    item.appendChild(botaoRemover); // Adciona o botão dentro do item

    // Limpa o formulario para o próximo cadastro
    formProduto.reset()
});