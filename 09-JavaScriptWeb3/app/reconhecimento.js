const elementochute = document.getElementById('chute')

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
const numeroexibido = document.querySelector('.box');
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak (e) {
    chute = e.results[0][0].transcript
    exibechutenatela(chute);
    verificaSeOChutePossuiUmValorValido(chute);
}
function exibechutenatela(chute) {
    elementochute.innerHTML = `
        <div> Você disse </div>
        <span class="box"> ${chute}</span>
    `
}

recognition.addEventListener('end', () => recognition.start())