import { type Barrel } from "../domain/barrel";
import { BarrelRepository } from "../ports/barrel-repository";
import { fail, ok } from "../shared/result";

 export class CreateBarrel{
	
	constructor( private readonly repository: BarrelRepository ){}
	
	async cadastrar(Barrel: Omit<Barrel, 'id'>){
		const resultadoCadastroBarrel = await this.repository.create(Barrel);
		if(resultadoCadastroBarrel > 0 ){
			 return	ok( { ...Barrel, id: resultadoCadastroBarrel }) ;
		}else{
			return fail(`Ocorreu um erro ao tentar registrar o Barrel ${Barrel.descricao}.`)
		}
	}
 }