//o decorator vai receber o seletor
export function domInjector(seletor: string) {
    return function (
        //a função não vai receber o propertyDescriptor, por que ainda não existem
        target: any,
        propertyKey: String
    ){
        //aqui é criado um método getter que vai retornar o elemento do dom
        const getter = function() {
            const elemento = document.querySelector(seletor);
            return elemento;
        }
        //aqui é definido a property do objeto, passando como parâmetros: o target (classe), a propertyKey (método) e
        //um objeto, cujo parâmetro get é a constante getter que retorna o elemento do DOM
        Object.defineProperty(target, propertyKey as string, {get: getter})
    }
}