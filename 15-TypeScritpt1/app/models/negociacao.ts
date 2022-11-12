export class Negociacao {
    //criação da classe e dados privados. É atribuído a tipagem para cada variável
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date, quantidade: number, valor: number) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }
    //criação dos métodos get para acessar as variáveis
    get data(): Date {
        return this._data;
    }

    get quantidade(): Number {
        return this._quantidade;
    }

    get valor(): Number {
        return this._valor;
    }

    get volume(): Number {
        return this._quantidade * this._valor;
    }
}