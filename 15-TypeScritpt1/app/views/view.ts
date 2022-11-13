//entre os diamantes é passado que a classe view vai receber dados genéricos
//a classe abstrata só pode ser herdada, nao da pra crar instancia
export abstract class View<T> {

    protected elemento: HTMLElement;
    private scape = false;
    //aqui o parâmetro scape é opcional, por isso está no final
    constructor(seletor: string, scape?: boolean) {
        this.elemento = document.querySelector(seletor) as HTMLElement;
        //aqui eu verifico se o scape é undefined. Se for, vira false; se for verdadeiro, é true.
        if(scape)
            this.scape = scape;
    }
    public update(model: T): void {
        let template = this.template(model);
        if(this.scape) {
            template.replace(/<script>[\s\S]*?<script>/,'')
        }
        this.elemento.innerHTML = template;
    }
    //como a classe é abstrata, o metodo pode ser abstrato para apenas ser sobrescrito 
    protected abstract template(model: T): string;
}