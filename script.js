const formProduto = document.querySelector("#form-produto");
const listaProdutos = document.querySelector("#lista-produtos");
const botaoForm = document.querySelector("#botao-form");
const tituloForm = document.querySelector("#titulo-form");
const contador = document.querySelector("#contador");
const mensagemVazia = document.querySelector("#mensagem-vazia");
const mensagemErro = document.querySelector("#mensagem-erro");

let itemEmEdicao = null;

// Bônus 1 e 2: contador + mensagem de lista vazia
function atualizarContador() {
    const quantidadeProdutos = listaProdutos.children.length;

    contador.textContent = `Produtos cadastrados: ${quantidadeProdutos}`;

    // Mostra a mensagem só quando a lista está vazia
    mensagemVazia.hidden = quantidadeProdutos > 0;
}

atualizarContador();

// Bônus 3: mensagens de erro
function mostrarErro(texto) {
    mensagemErro.textContent = texto;
}

function limparErro() {
    mensagemErro.textContent = "";
}

// Some com o erro assim que o usuário mexer na quantidade
formProduto.querySelector("#quantidade").addEventListener("input", limparErro);

function preencherItem(item, dados) {
    item.dataset.nome = dados.nome;
    item.dataset.preco = dados.preco;
    item.dataset.quantidade = dados.quantidade;
    item.dataset.marca = dados.marca;
    item.dataset.cor = dados.cor;

    let texto = item.querySelector(".texto-produto");
    if (!texto) {
        texto = document.createElement("span");
        texto.classList.add("texto-produto");
        item.prepend(texto);
    }

    const precoFormatado = Number(dados.preco).toFixed(2).replace(".", ",");
    texto.textContent = `${dados.nome} - R$ ${precoFormatado} (${dados.quantidade} un.) - ${dados.marca} - ${dados.cor}`;
}

function sairModoEdicao() {
    if (itemEmEdicao) {
        itemEmEdicao.classList.remove("em-edicao");
    }
    itemEmEdicao = null;
    botaoForm.textContent = "Adicionar produto";
    tituloForm.textContent = "Novo produto";
    formProduto.reset();
    limparErro();
}

function adicionarBotoes(item) {
    if (item.querySelector(".area-botoes")) return;

    const areaBotoes = document.createElement("div");
    areaBotoes.classList.add("area-botoes");

    const botaoEditar = document.createElement("button");
    botaoEditar.type = "button";
    botaoEditar.classList.add("botaoEditar");
    botaoEditar.textContent = "Editar";

    botaoEditar.addEventListener("click", function () {
        if (itemEmEdicao) {
            itemEmEdicao.classList.remove("em-edicao");
        }

        itemEmEdicao = item;
        item.classList.add("em-edicao");
        limparErro();

        formProduto.querySelector("#nome").value = item.dataset.nome;
        formProduto.querySelector("#preco").value = item.dataset.preco;
        formProduto.querySelector("#quantidade").value = item.dataset.quantidade;
        formProduto.querySelector("#marca").value = item.dataset.marca;
        formProduto.querySelector("#cor").value = item.dataset.cor;

        botaoForm.textContent = "Salvar alterações";
        tituloForm.textContent = "Editar produto";
        formProduto.querySelector("#nome").focus();
    });

    const botaoRemover = document.createElement("button");
    botaoRemover.type = "button";
    botaoRemover.classList.add("botaoRemover");
    botaoRemover.textContent = "Remover";

    botaoRemover.addEventListener("click", function () {
        if (item === itemEmEdicao) {
            sairModoEdicao();
        }
        item.remove();
        atualizarContador();
    });

    areaBotoes.appendChild(botaoEditar);
    areaBotoes.appendChild(botaoRemover);
    item.appendChild(areaBotoes);
}

formProduto.addEventListener("submit", function (event) {
    event.preventDefault();

    const dados = {
        nome: formProduto.querySelector("#nome").value,
        preco: formProduto.querySelector("#preco").value,
        quantidade: formProduto.querySelector("#quantidade").value,
        marca: formProduto.querySelector("#marca").value,
        cor: formProduto.querySelector("#cor").value
    };

    // Bônus 3: validação da quantidade
    if (Number(dados.quantidade) <= 0) {
        mostrarErro("A quantidade deve ser maior que zero.");
        formProduto.querySelector("#quantidade").focus();
        return; // interrompe: nada é cadastrado nem alterado
    }

    limparErro();

    if (itemEmEdicao) {
        preencherItem(itemEmEdicao, dados);
        sairModoEdicao();
    } else {
        const item = document.createElement("li");
        preencherItem(item, dados);
        adicionarBotoes(item);
        listaProdutos.appendChild(item);
        formProduto.reset();
    }

    atualizarContador();
});