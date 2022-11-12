//esse função vai receber o input inteiro, com todos os seus atributos
export function valida(input) {
    //nesta linha (abaixo), cria-se uma constante que armazena o tipo do dataset do input (ex: "datanascimento")
    const tipodeinput = input.dataset.tipo
    //aqui apenas um console log pra verificar qual dado está sendo recebido na variável
    console.log(tipodeinput)
    //este if chama o objeto validadores (aquele ali mais embaixo), e passa dentro dos colchetes qual item quer, e verifica se ele existe. Caso exista, executa o código
    if(validadores[tipodeinput]) {
    //então, caso o input passado seja "dataset-tipo=datanascimento", a chamada do objeto vai ficar assim: validadores[datanascimento]
    //dentro do objeto, o item chamado é uma função anônima que recebe o input, e chama a função de validação de data de nascimento criada mais embaixo.
        validadores[tipodeinput](input)
    }
    //este if verifica se o elemento é válido (pode ser pelo required, pelo regex ou type)
    if(input.validity.valid) {
        //caso o if seja true (ou seja, o input seja válido, o pai do input é acessado em sua lista de classes, e a classe "input-container--invalido" é removida)
        input.parentElement.classList.remove('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
    } else {
        input.parentElement.classList.add('input-container--invalido');
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErrro(tipodeinput, input)
    }
}

const mensagensdeerro = {
    nome: {
    valueMissing: 'O campo nome não pode estar vazio.'
    },
    email: {
        valueMissing: 'O campo de email não pode estar vazio.',
        typeMismatch: 'O email digitado não é válido.'
    },
    senha: {
        valueMissing: 'O campo de senha não poe estar vazio.',
        patternMismatch: 'A senha deve conter entre 4 e 8 caracteres'
    },
    datanascimento: {
        valueMissing: 'Data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior do que 18 anos para se cadastrar'
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        customError: 'O CPF digitado não é válido.'
    }
}

const tiposdeerro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

//aqui é criado o objeto que vai armazenar uma função para cada tipo de data-set atribuído para o input.
const validadores = {
    datanascimento:input => validaDataNascimento(input),
    cpf: input => validaCPF(input)

}

function mostraMensagemDeErrro(tipodeinput, input) {
    let mensagem = ''
    tiposdeerro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensdeerro[tipodeinput][erro]
        }
    })

    return mensagem
}

function validaDataNascimento (input) {
    const datarecebida = new Date(input.value)
    let mensagem = ""
    if(!maiorQue18(datarecebida)){
        mensagem = "Você deve ser maior do que 18 anos para se cadastrar"
    }
    
    input.setCustomValidity(mensagem)
}

function maiorQue18(data) {
    const dataatual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() +18, data.getUTCMonth(), data.getUTCDate());

    return dataMais18 <= dataatual
}

function validaCPF(input) {
    const cpfFomatado = input.value.replace(/\D/g, '')
    let mensagem = ''

    if(!checaCPFRepetido(cpfFomatado)){
        mensagem = 'O CPF digitado não é válido.'
    }

    input.setCustomValidity(mensagem)

}

function checaCPFRepetido(cpf) {
    const valoresRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
    ]
    let cpfValido = true

    valoresRepetidos.forEach(valor => {
        if(valor == cpf) {
            cpfValido = false
        }
    })

    return cpfValido
}