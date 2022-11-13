import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { mensagemView } from "../views/mensagem-view.js";
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
    private negociacoesView = new NegociacoesView('#negociacoesView', true)
    private mensagemView = new mensagemView("#mensagemView", false)

    constructor() {
        //é necessário declarar que essa variável vai ser recebida como HTMLinputElement
        this.inputData = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantidade = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValor = document.querySelector("#valor") as HTMLInputElement;
        //mandando construir o template, por meio da função update
        this.negociacoesView.update(this.negociacoes);
    }
    public adiciona(): void {
        //o método adiciona chama a função criaNegociação
        const negociacao = this.criaNegociacao();
        const data = negociacao.data.getDay();
        //verifica se o método dia Util retorna um não-dia útil
        if (!this.diaUtil(negociacao.data)) {
            //caso seja true, o método já dá a mensagem de erro e retorna, parando a função
            this.mensagemView.update("Somente são aceitas negociações em dias úteis.")
            return
        }
        //quando o adiciona criar uma negociação, ele vai adicionar essa negociação à lista negociações
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        //depois de criar a negociação, o formulário é limpo e o focus é transferido pra data
        this.limparFormulario();
    }
    //tipagem do retorno da função
    private criaNegociacao(): Negociacao {
        //criação da const Data
        const date = new Date(this.inputData.value + 'T12:00');
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        //aqui o método criaNegociação retorna uma nova Negociação, passando a data, a quantidade e o valor
        return new Negociacao(date, quantidade, valor);
    }
    //tipo void significa que a função não retorna nada
    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("A negociação foi cadastrada com sucesso!")
    }
    private diaUtil(data: Date): boolean {
        //o metodo getDay retorna qual é o dia da semana, de 0 (domingo) a 6 (sabado)
        const getdate = data.getDay();
        return getdate > DiasDaSemana.DOMINGO && getdate < DiasDaSemana.SABADO;
    }
}