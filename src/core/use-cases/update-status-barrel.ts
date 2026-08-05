import { type StatusBarrel } from "../domain/barrel";
import { BarrelRepository } from "../ports/barrel-repository";
import { fail, ok } from "../shared/result";

 export class UpdateStatusBarrel{
    
    constructor( private readonly repository: BarrelRepository){}

    async update(status: StatusBarrel, barrelId:number){
        const verifyExistsBarrel = await this.repository.findById(barrelId);

        if(verifyExistsBarrel){
            const resultUpdateBarrel = await this.repository.update( { status , id: barrelId } ); 
            if( resultUpdateBarrel > 0 ){
                    return ok(barrelId);
                }else{
                    return fail(`Erro ao tentar atualizar barril ${barrelId}.`);
            }
        } else{
            return fail(`Barril id ${barrelId} não foi encontrado.`);
        }
    }
 }