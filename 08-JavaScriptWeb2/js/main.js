const form = document.getElementById('novoItem');
const itens = JSON.parse(localStorage.getItem('itens')) || []




itens.forEach((elemento) => {
    criaElemento(elemento)
}
)
form.addEventListener('submit', (evento) => {
    evento.preventDefault();
    var nome = evento.target.elements['nome'];
    var quantidade = evento.target.elements['quantidade'];
    const existe = itens.find(elemento => elemento.nome === nome.value)
    const itemAtual = {
        "nome": nome.value, 
        "quantidade": quantidade.value,
    }

    if(existe) {
        itemAtual.id = existe.id
        atualizaElemento(itemAtual)
    } else {
        itemAtual.id = itens.length
        criaElemento(itemAtual);
        itens.push(itemAtual)
    }
    localStorage.setItem('itens', JSON.stringify(itens));
    nome.value = ""
    quantidade.value=""
})

function criaElemento (item) {
    const novoitem = document.createElement('li');
    novoitem.classList.add('item');
    const numeroitem = document.createElement('strong');
    numeroitem.innerHTML = item.quantidade;
    numeroitem.dataset.id = item.id;
    novoitem.appendChild(numeroitem);
    novoitem.innerHTML += item.nome; 
    ul = document.getElementById('lista');
    ul.appendChild(novoitem);
}

function atualizaElemento(item) {
    atual = document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade;
    console.log(atual)
}