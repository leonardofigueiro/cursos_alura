import { Negociacao } from "../models/negociacao";
import { View } from "./view.js";

//aqui a classe herda de View, mas uma string
export class mensagemView extends View<string> {


    template(model: string): string {
        return `
        <p class="alert alert-info">${model}</p>
        `
    }
    update(model:string):void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}