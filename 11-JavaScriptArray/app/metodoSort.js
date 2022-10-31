let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    livrosordenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(livrosordenados)
}