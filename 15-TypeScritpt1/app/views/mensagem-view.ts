import { Negociacao } from "../models/negociacao";
import { View } from "./view.js";

//aqui a classe herda de View, mas uma string
export class mensagemView extends View<string> {


    protected template(model: string): string {
        return `
        <p class="alert alert-info">${model}</p>
        `
    }
}