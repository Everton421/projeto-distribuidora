import { BarrelRepository } from "../ports/barrel-repository";
import { fail, ok } from "../shared/result";

 
 export class BarrelRental{
    constructor( private readonly repostory:BarrelRepository){}

    async rent(id:number, codigoCliente: number) {
        
        const resultVerifyExistsBarrel = await this.repostory.consultaPorId(id)
    
        if(resultVerifyExistsBarrel){

            const resultBarrelAvailable = await this.repostory.consultaPersonalizada({ status:'DISPONIVEL', id })
            
            if(resultBarrelAvailable.length > 0 ){
                const { status } = resultBarrelAvailable[0];
                   if(status != 'DISPONIVEL'){
                        return fail(`Barril id ${id} não esta disponivel!`);
                    }

                    const resultUpdateBarrel = await this.repostory.atualizar({
                                status: 'ALUGADO',
                                id,
                                cliente: codigoCliente
                            })  

                        const resulBarrelUpdated = await this.repostory.consultaPorId(id)

                    if(resulBarrelUpdated  ){
                        return ok(resulBarrelUpdated)
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