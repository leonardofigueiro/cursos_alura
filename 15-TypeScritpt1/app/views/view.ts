//entre os diamantes é passado que a classe view vai receber dados genéricos
//a classe abstrata só pode ser herdada, nao da pra crar instancia
export abstract class View<T> {

    protected elemento: HTMLElement;
    
    constructor(seletor: string){
        this.elemento = document.querySelector(seletor)
    }
    update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    //como a classe é abstrata, o metodo pode ser abstrato para apenas ser sobrescrito 
    abstract template(model: T): string;
}