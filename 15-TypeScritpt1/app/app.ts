//importanto o controller, que pega as informações do input e manda para um construtor
import { NegociacaoController } from "./controllers/negociacao-controller.js";

//a variável controller armazena o controller
const controller = new NegociacaoController();
//chamando o form e adicionando um event listener do tipo submit
//quando o formulário for submetido, ele chamará o método "adiciona" do controller
const form = document.querySelector('.form');
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        //aqui o método adiciona é chamado. Este método chama a função criarNegociação, que cria uma nova negociação
        //passando os atributos de formulário capturados pelo controller

        controller.adiciona()
    }

    )
} else {
    throw Error("O código não pode ser compilado. Verifique se o formulário existe")
};