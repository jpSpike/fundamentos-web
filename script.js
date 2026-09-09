const formProduto = document.querySelector("#form-produto");
const listaProdutos = document.querySelector("#lista-produtos");

formProduto.addEventListener("submit", function (event) {
    //Sem isso, o navegador recarrega a página ao enviar o fomulário
    event.preventDefault();
    //lê o valor digitado em cada campo
    const nome = formProduto.querySelector("#nome").value;
    const preco = formProduto.querySelector("#preco").value;
    const quantidade = formProduto.querySelector("#quantidade").value;
    const marca = formProduto.querySelector("#marca").value;
    const cor = formProduto.querySelector("#cor").value;

    // Adicionar produto à lista
    const item = document.createElement("li");
    item.textContent = `${nome} - R$ ${Number(preco).toFixed(2)} - (${quantidade} un.) - ${marca} - ${cor}`;
    //Adiciona um nome item no final da lista
    listaProdutos.appendChild(item);
    //limpa o formulario para o próximo cadastro
    formProduto.reset()
});