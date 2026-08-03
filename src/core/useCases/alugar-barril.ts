import { type IBarrilRepository } from "../ports/barril-repository";
import { fail, ok } from "../shared/result";

 
 export class AlugarBarril{
    constructor( private readonly repostory:IBarrilRepository){}

    async alugar (id:number, codigoCliente: number) {
        
        const dadosConsultaBarril = await this.repostory.consultaPorId(id)
    
        if(dadosConsultaBarril){

            const dadosBarrilDisponivel = await this.repostory.consultaPersonalizada({ status:'DISPONIVEL', id })
            if(dadosBarrilDisponivel.length > 0 ){
                const { status } = dadosBarrilDisponivel[0];
                   if(status != 'DISPONIVEL'){
                        return fail(`Barril id ${id} não esta disponivel!`);
                    }

            const resultadoBarrilAlugado = await this.repostory.atualizar({
                        status: 'ALUGADO',
                        id,
                        cliente: codigoCliente
                      })  

                        const dadosConsultaBarril = await this.repostory.consultaPorId(id)

                    if(resultadoBarrilAlugado > 0 ){
                        return ok(dadosConsultaBarril)
                    }else{
                        return fail(`Ocorreu um erro ao tentar alugar barril ${id}.`)
                    }

            }else{
                return fail(`Barril ${id} não se encontra disponivel no momento.`)
            }

        }else{
                return fail(`Barril ${id} não foi encontrado.`)
        }
    }
 }