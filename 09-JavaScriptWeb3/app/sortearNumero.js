const menorvalor = 1;
const maiorvalor = 100;
const numerosecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * (maiorvalor + 1));
}

console.log(numerosecreto);
const elementomenorvalor = document.getElementById('menor-valor');
elementomenorvalor.innerHTML = menorvalor;

const elementomaiorvalor = document.getElementById('maior-valor');
elementomaiorvalor.innerHTML = maiorvalor;