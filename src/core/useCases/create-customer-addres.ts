import { EnderecoCliente } from "../domain/endereco-cliente";
import { type IEnderecoRepository } from "../ports/endereco-repository";
import { fail, ok } from "../shared/result";

export class CadastrarEnderecoCliente{
    constructor( private readonly repository: IEnderecoRepository){}
   
    async cadastrar(endereco: EnderecoCliente){

            const resultadoCadastroCliente = await this.repository.cadastrar(endereco);

            if(resultadoCadastroCliente ){
                return ok({ ...endereco, id:resultadoCadastroCliente });
            }else{
                return fail(`Erro ao tentar registrar endereco ${endereco.rua}.`);
            }
    }
}