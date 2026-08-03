import { type Barril } from "../domain/barril";
import { type IBarrilRepository } from "../ports/barril-repository";
import { fail, ok } from "../shared/result";

 export class CadastrarBarril{
	
	constructor( private readonly repository: IBarrilRepository ){}
	
	async cadastrar(barril: Omit<Barril, 'id'>){
		const resultadoCadastroBarril = await this.repository.cadastrar(barril);
		if(resultadoCadastroBarril > 0 ){
			 return	ok( { ...barril, id: resultadoCadastroBarril }) ;
		}else{
			return fail(`Ocorreu um erro ao tentar registrar o barril ${barril.descricao}.`)
		}
	}
 }