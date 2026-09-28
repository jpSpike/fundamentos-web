const formProduto = document.querySelector("#form-produto");
const listaProdutos = document.querySelector("#lista-produtos");
const botaoForm = document.querySelector("#botao-form");
const tituloForm = document.querySelector("#titulo-form");
const contador = document.querySelector("#contador");
const mensagemVazia = document.querySelector("#mensagem-vazia");
const mensagemErro = document.querySelector("#mensagem-erro");

// Guarda qual <li> está sendo editado (null = modo "adicionar")
let itemEmEdicao = null;

// ---------- Contador e lista vazia ----------
function atualizarContador() {
    const quantidadeProdutos = listaProdutos.children.length;

    contador.textContent = `Produtos cadastrados: ${quantidadeProdutos}`;
    mensagemVazia.hidden = quantidadeProdutos > 0;
}

atualizarContador();

// ---------- Mensagens de erro ----------
function mostrarErro(texto) {
    mensagemErro.textContent = texto;
}

function limparErro() {
    mensagemErro.textContent = "";
}

// Some com o erro assim que o usuário mexer na quantidade
formProduto.querySelector("#quantidade").addEventListener("input", limparErro);

// ---------- Item da lista ----------
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

// Volta o formulário ao estado normal
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

    // Botão Editar
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

    // Botão Remover
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

// ---------- Envio do formulário ----------
formProduto.addEventListener("submit", function (event) {
    event.preventDefault();

    const dados = {
        nome: formProduto.querySelector("#nome").value,
        preco: formProduto.querySelector("#preco").value,
        quantidade: formProduto.querySelector("#quantidade").value,
        marca: formProduto.querySelector("#marca").value,
        cor: formProduto.querySelector("#cor").value
    };

    // Validação: quantidade deve ser maior que zero
    if (Number(dados.quantidade) <= 0) {
        mostrarErro("A quantidade deve ser maior que zero.");
        formProduto.querySelector("#quantidade").focus();
        return;
    }

    limparErro();

    if (itemEmEdicao) {
        // Modo edição: atualiza o item existente, sem criar outro
        preencherItem(itemEmEdicao, dados);
        sairModoEdicao();
    } else {
        // Modo adicionar: cria um item novo
        const item = document.createElement("li");
        preencherItem(item, dados);
        adicionarBotoes(item);
        listaProdutos.appendChild(item);
        formProduto.reset();
    }

    atualizarContador();
});

// ---------- Frase aleatória ----------
const frases = [
    "Hoje é dia de comprar caneta!",
    "Um caderno novo, uma vida nova.",
    "Organize seu estoque, organize sua vida.",
    "Papel aceita tudo, menos desorganização.",
    "Lápis apontado, mente afiada.",
    "Quem tem marca-texto, destaca o que importa.",
    "Toda grande ideia começou num rascunho.",
    "Borracha: porque errar faz parte."
];

const elementoFrase = document.querySelector("#frase-do-dia");
const botaoSortear = document.querySelector("#botao-frase");

let fraseAtual = "";

function sortearFrase() {
    let novaFrase;

    // Sorteia até vir uma frase diferente da atual
    do {
        const indice = Math.floor(Math.random() * frases.length);
        novaFrase = frases[indice];
    } while (novaFrase === fraseAtual);

    fraseAtual = novaFrase;
    elementoFrase.textContent = novaFrase;
}

sortearFrase();
botaoSortear.addEventListener("click", sortearFrase);