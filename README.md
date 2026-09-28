# 🛒 Loja Simples — Pontos & Canetas

Sistema simples de controle de produtos para uma papelaria, feito com **HTML, CSS e JavaScript puro** (sem frameworks). Projeto desenvolvido para a disciplina de Desenvolvimento Web.

## 📋 Funcionalidades

- **Cadastro de produtos** com nome, preço, quantidade, marca e cor
- **Editar produto**: os dados voltam para o formulário e o item existente é atualizado (sem criar um novo)
- **Remover produto**: remove apenas o item escolhido
- **Botão do formulário dinâmico**: alterna entre "Adicionar produto" e "Salvar alterações"
- **Contador** de produtos cadastrados, atualizado ao adicionar e remover
- **Mensagem de lista vazia** quando não há nenhum produto
- **Validação**: não permite cadastrar produto com quantidade igual a zero
- **Tema escuro**: botão no cabeçalho que alterna entre tema claro e escuro (a escolha fica salva no navegador)
- **Frase aleatória** no cabeçalho, com botão 🎲 para sortear outra
- **Rodapé** com informações do projeto e contato

## 🛠️ Tecnologias

| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura da página |
| CSS3 | Estilo, layout com Flexbox e tema escuro |
| JavaScript (ES6) | Lógica, manipulação do DOM e `localStorage` |

## 📁 Estrutura do projeto

```
loja-simples/
├── index.html      # Estrutura da página
├── style.css       # Estilos (inclui o tema escuro)
├── script.js       # Lógica da aplicação
├── img/
│   └── unilago-logo.jpg   # Logo exibido no rodapé
└── README.md
```

## 🚀 Como executar

Não é necessário instalar nada.

1. Baixe ou clone o repositório:
   ```bash
   git clone URL-DO-REPOSITORIO
   ```
2. Abra a pasta do projeto.
3. Dê dois cliques no arquivo `index.html` para abri-lo no navegador.

> Dica: no VS Code, a extensão **Live Server** recarrega a página automaticamente a cada alteração.

## 🖱️ Como usar

1. **Adicionar:** preencha o formulário e clique em **Adicionar produto**.
2. **Editar:** clique em **Editar** no produto desejado, altere os dados e clique em **Salvar alterações**.
3. **Remover:** clique em **Remover** no produto que deseja excluir.
4. **Tema:** clique no botão 🌙 / ☀️ no canto do cabeçalho.
5. **Frase:** clique no 🎲 para sortear outra frase.

**Exemplo:** cadastre `Caderno - R$ 12,50 (30 un.)`, clique em Editar, mude o preço para `15.00` e salve. O item passa a ser `Caderno - R$ 15,00 (30 un.)`, na mesma posição da lista.

## 🧠 Conceitos praticados

- Seleção e criação de elementos com `querySelector` e `createElement`
- Eventos (`submit`, `click`, `input`) com `addEventListener`
- Armazenamento de dados no elemento com `dataset`
- Estado da aplicação com variável (`itemEmEdicao`)
- Validação de formulário
- `Math.random()` e `Math.floor()` para sorteios
- `classList.toggle()` para alternar temas
- `localStorage` para guardar a preferência de tema
- Layout com Flexbox e transições em CSS

## 🔮 Ideias para o futuro

- [ ] Salvar os produtos no `localStorage` para não sumirem ao recarregar
- [ ] Mostrar o valor total do estoque
- [ ] Campo de busca para filtrar produtos
- [ ] Aviso de estoque baixo
- [ ] Bolinha colorida de acordo com a cor do produto
- [ ] Desfazer remoção

## 👤 Autor

Projeto desenvolvido por **João Pedro Sanches** para a disciplina de Desenvolvimento Web — Unilago, Sistemas de Informação, 2026.

## 📄 Licença

Projeto de uso educacional.
