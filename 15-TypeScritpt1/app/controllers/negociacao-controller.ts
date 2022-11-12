import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    //tipagem dos elementos como inputs html
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    //aqui não é necesssário tipar a variável negociacoes, pois já existe este valor atribuído
    private negociacoes = new Negociacoes();
    //mandando o controller chamar a classe NegociacoesView, e passando a propriedade
    //#negociacoesView, que é o id da div criada no HTML
    private negociacoesView = new NegociacoesView('#negociacoesView')

    constructor() {
        this.inputData = document.querySelector("#data");
        this.inputQuantidade = document.querySelector("#quantidade");
        this.inputValor = document.querySelector("#valor");
        //mandando construir o template, por meio da função update
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona(): void {
        //o método adiciona chama a função criaNegociação
        const negociacao = this.criaNegociacao();
        //quando o adiciona criar uma negociação, ele vai adicionar essa negociação à lista negociações
        this.negociacoes.adiciona(negociacao);
        console.log(this.negociacoes.lista());
        this.negociacoesView.update(this.negociacoes)
        //depois de criar a negociação, o formulário é limpo e o focus é transferido pra data
        this.limparFormulario();
    }
    //tipagem do retorno da função
    criaNegociacao(): Negociacao {
        //criação da const Data
        const date = new Date(this.inputData.value + 'T12:00');
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        //aqui o método criaNegociação retorna uma nova Negociação, passando a data, a quantidade e o valor
        return new Negociacao(date, quantidade, valor);
    }
    //tipo void significa que a função não retorna nada
    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

}