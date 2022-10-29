function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;
    console.log(chute.toUpperCase())
    if(chuteForInvalido(numero)) {
        if(chute.toUpperCase() === "GAME OVER") {
            
            document.body.style.backgroundColor = 'black';
            document.body.style.color = '#FFFFFF';
            document.body.innerHTML = `
            <h2>Fim de jogo!</h2>
            <h3>Você disse Game Over</h3>
            <button id="jogar-novamente" class="btn-jogar">Jovar novamente</button>
            `
        }else {
        elementochute.innerHTML += '<div> Valor inválido </div>'
        return
    }
}
    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementochute.innerHTML += `
        <div>
        Valor inválido: o número secreto precisa estar entre ${menorvalor} e ${maiorvalor}
        </div>
        `
        return
    }

    
    if(numero === numerosecreto) {
        document.body.innerHTML = `
        <h2>VOCÊ ACERTOU!</h2>
        <h3>O número secreto era ${numerosecreto}</h3>
        <button id="jogar-novamente" class="btn-jogar">Jovar novamente</button>
        `
    } else if (numero > numerosecreto) {
        elementochute.innerHTML = `
        <div>O número é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementochute.innerHTML = `
        <div>O número é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }
}
function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}
function numeroForMaiorOuMenorQueOValorPermitido (numero) {
    return numero > maiorvalor || numero < menorvalor
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})

