export class Negociacao {
    //criação da classe e dados privados. É atribuído a tipagem para cada variável
    // private _data: Date;
    // private _quantidade: number;
    // private _valor: number;

    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number) {}
        // this._data = data;
        // this._quantidade = quantidade;
        // this._valor = valor;
    
    //criação dos métodos get para acessar as variáveis
    get data(): Date {
        const data = new Date(this._data.getTime()); //programação defensiva - cria uma data falsa
        return this._data;
    }

    // get quantidade(): Number {
    //     return this._quantidade;
    // }

    // get valor(): Number {
    //     return this._valor;
    // }

    get volume(): Number {
        return this.quantidade * this.valor;
    }
}