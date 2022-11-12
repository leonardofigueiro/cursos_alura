import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
    }

    adiciona(): void {
        //o método adiciona chama a função criaNegociação
        const negociacao = this.criaNegociacao();
        console.log(negociacao);
        //depois de criar a negociação, o formulário é limpo e o focus é transferido pra data
        this.limparFormulario();
    }
    criaNegociacao(): Negociacao {
        //criação da const Data
        const date = new Date(this.inputData.value + 'T12:00');
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        //aqui o método criaNegociação retorna uma nova Negociação, passando a data, a quantidade e o valor
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

}