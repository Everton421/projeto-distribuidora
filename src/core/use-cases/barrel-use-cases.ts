import { type StatusBarrel, type Barrel } from "../domain/barrel.ts";
import { type BarrelRepository } from "../ports/barrel-repository.ts";
import { fail, ok } from "../shared/result.ts";

export class BarrelUseCases{
        constructor ( private readonly  barrelRepository: BarrelRepository){}

    async findById( id: number ){
         const resultBarrel =  await this.barrelRepository.findById(id);
         return resultBarrel
    }

   async update(barrel: Barrel){
        const verifyExistsBarrel = await this.barrelRepository.findById(barrel.id);

        if(verifyExistsBarrel){
            const resultUpdateBarrel = await this.barrelRepository.update( barrel ); 
            if( resultUpdateBarrel > 0 ){
                    return ok(barrel);
                }else{
                    return fail(`Erro ao tentar atualizar barril ${barrel.id}.`);
            }
        } else{
            return fail(`Barril id ${barrel.id} não foi encontrado.`);
        }
    }
 
    async updateStatus(status: StatusBarrel, barrelId:number){
            const verifyExistsBarrel = await this.barrelRepository.findById(barrelId);

            if(verifyExistsBarrel){
                const resultUpdateBarrel = await this.barrelRepository.update( { status , id: barrelId } ); 
                if( resultUpdateBarrel > 0 ){
                        return ok(barrelId);
                    }else{
                        return fail(`Erro ao tentar atualizar barril ${barrelId}.`);
                }
            } else{
                return fail(`Barril id ${barrelId} não foi encontrado.`);
            }
        }

     async rent(id:number, codigoCliente: number) {
        
        const resultVerifyExistsBarrel = await this.barrelRepository.findById(id)
    
        if(resultVerifyExistsBarrel){

            const resultBarrelAvailable = await this.barrelRepository.findByParams({ status:'DISPONIVEL', id })
            
            if(resultBarrelAvailable.length > 0 ){
                const { status } = resultBarrelAvailable[0];
                   if(status != 'DISPONIVEL'){
                        return fail(`Barril id ${id} não esta disponivel!`);
                    }

                    const resultUpdateBarrel = await this.barrelRepository.update({
                                status: 'ALUGADO',
                                id,
                                cliente: codigoCliente
                            })  

                        const resulBarrelUpdated = await this.barrelRepository.findById(id)

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
    	async create(Barrel: Omit<Barrel, 'id'>){
		const resultadoCadastroBarrel = await this.barrelRepository.create(Barrel);
		if(resultadoCadastroBarrel > 0 ){
			 return	ok( { ...Barrel, id: resultadoCadastroBarrel }) ;
		}else{
			return fail(`Ocorreu um erro ao tentar registrar o Barrel ${Barrel.descricao}.`)
		}
	}
    }