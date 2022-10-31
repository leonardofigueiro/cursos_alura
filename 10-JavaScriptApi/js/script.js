
var campoendereco = document.getElementById('endereco');
var campocomplemento = document.getElementById('complemento');
var campobairro = document.getElementById('bairro');
var cidade = document.getElementById('cidade');



async function buscaEndereco(cep) {
    var erroretornado = document.getElementById('erro');
    erro.innerHTML = "";
try {
    cep = cep;
var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
var convert = await consultaCep.json();

campoendereco.value = convert.logradouro;
campoendereco.disabled = true;
campocomplemento.value = convert.complemento;
campobairro.value = convert.bairro;
campobairro.disabled = true;
cidade.value = convert.localidade;
cidade.disabled = true;

console.log(convert)


if(convert.erro) {
    throw Error('Esse CEP não existe!');
}
console.log(convert)
return convert;
} catch (erro) {
    erroretornado.innerHTML = `<p>CEP Inválido! Tente novamente</p>`;
    console.log(erro)
}
}

var campocep = document.getElementById('cep');
campocep.addEventListener('focusout', () => {
    retorno = buscaEndereco(campocep.value);
    
});
