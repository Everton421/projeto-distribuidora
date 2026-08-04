import { type CustomerAddres } from "../domain/customer-addres";
import { type CustomerAddresRepository } from "../ports/customer-addres-repository";
import { fail, ok } from "../shared/result";

export class CadastrarEnderecoCliente{
    constructor( private readonly repository: CustomerAddresRepository){}
   
    async cadastrar(endereco: CustomerAddres){

            const resultadoCadastroCliente = await this.repository.cadastrar(endereco);

            if(resultadoCadastroCliente ){
                return ok({ ...endereco, id:resultadoCadastroCliente });
            }else{
                return fail(`Erro ao tentar registrar endereco ${endereco.rua}.`);
            }
    }
}