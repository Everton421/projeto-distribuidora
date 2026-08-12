import { type CustomerAddres } from "../domain/customer-addres.ts";
import { type CustomerAddresRepository } from "../ports/customer-addres-repository.ts";
import { fail, ok } from "../shared/result.ts";

export class CadastrarEnderecoCliente{
    constructor( private readonly repository: CustomerAddresRepository){}
   
    async cadastrar(endereco: CustomerAddres){

            const resultadoCadastroCliente = await this.repository.create(endereco);

            if(resultadoCadastroCliente ){
                return ok({ ...endereco, id:resultadoCadastroCliente });
            }else{
                return fail(`Erro ao tentar registrar endereco ${endereco.rua}.`);
            }
    }
}