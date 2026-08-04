import { Barrel } from "../domain/barrel";
import { BarrelRepository } from "../ports/barrel-repository";
import { fail, ok } from "../shared/result";

 export class UpdateBarrel{
    
    constructor( private readonly repository: BarrelRepository){}

    async atualizar(barrel: Barrel){
        const verifyExistsBarrel = await this.repository.consultaPorId(barrel.id);

        if(verifyExistsBarrel){
            const resultUpdateBarrel = await this.repository.atualizar( barrel ); 
            if( resultUpdateBarrel > 0 ){
                    return ok(barrel);
                }else{
                    return fail(`Erro ao tentar atualizar barril ${barrel.id}.`);
            }
        } else{
            return fail(`Barril id ${barrel.id} não foi encontrado.`);
        }
    }
 }