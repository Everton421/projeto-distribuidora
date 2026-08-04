import { type Barril } from "../domain/barril";
import { type IBarrilRepository } from "../ports/barril-repository";
import { fail, ok } from "../shared/result";

 export class UpdateBarrel{
    
    constructor( private readonly repository: IBarrilRepository){}

    async atualizar(barrel: Barril){
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