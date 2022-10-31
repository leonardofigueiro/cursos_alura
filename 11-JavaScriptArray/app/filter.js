const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
     let livrosfiltrados = categoria == 'disponivel' ? verificarQuantidadeDeLivro() : filtrarPorCategoria(categoria);
     console.table(livrosfiltrados)
     exibirOsLivrosNaTela(livrosfiltrados)
     if(categoria == 'disponivel') {
        const valortotal = calcularValorTotal(livrosfiltrados)
        console.log(valortotal)
        exibirValorTotal(valortotal);
     }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function verificarQuantidadeDeLivro() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotal(valor) {
    somatotal.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valor.toFixed(2)}</span></p>
    </div>

    
    `
}