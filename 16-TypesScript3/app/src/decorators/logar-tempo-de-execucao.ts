export function logarTempoDeExecucao (emSegundos: boolean = false) {
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        //armazena o value do método onde o decorator é aplicado
        const metodoOriginal = descriptor.value;
        //o ...arg serve para quando não se sabe quantos parâmetros serão informados. 
        //ele armazena todos esses parâmetros em uma array do tipo any
        descriptor.value = function(...args: Array<any>) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if(emSegundos) {
                divisor = 1000;
                unidade = 'segundos'
            }
            const t1 = performance.now();
            //aqui se cria a variável de retorno da função, que é o método original, que vai executar os parâmetros da array depois do this.
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${unidade}`);
            retorno
        }
        return descriptor;
    }
}