import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    //por padrão, o ts vai inferir que é um array do tipo any. Se disser que o tipo é um array,
    //o ts reclama que a array exige um tipo. Entre <> é especificado o que vai ser guardado na array
    // private negociacoes: Array<Negociacao> = []; => atalho:
    private negociacoes: Negociacao[] = [];


    //criando o método que vai incluir a negociação na array
    adiciona (negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }
    //criando o método que vai listar as negociações. 
    //este método vai retornar a lista negociações. A tipagem ReadonlyArray garante
    //que a lista só pode ser lida, e nunca alterada
    // lista():ReadonlyArray<Negociacao>{
    lista(): readonly Negociacao[]{ //forma menos verbosa
        return this.negociacoes;
    }

}