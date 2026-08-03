import { type Barril } from "../domain/barril";
import { type IBarrilRepository } from "../ports/barril-repository";
import { fail, ok } from "../shared/result";

 export class AtualizarBarril{
    
    constructor( private readonly repository: IBarrilRepository){}

    async atualizar(barril: Barril){
        const validarExistenciaDoBarril = await this.repository.consultaPorId(barril.id);
        if(validarExistenciaDoBarril){
            const resultadoAtualizaçãoBarril = await this.repository.atualizar( barril ); 
            if( resultadoAtualizaçãoBarril > 0 ){
                    return ok(barril);
                }else{
                    return fail(`Erro ao tentar atualizar barril ${barril.id}.`);
            }
        } else{
            return fail(`Barril id ${barril.id} não foi encontrado.`);
        }
    }
 }