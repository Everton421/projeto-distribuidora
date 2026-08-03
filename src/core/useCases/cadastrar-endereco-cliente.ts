import { EnderecoCliente } from "../domain/endereco-cliente";
import { type IEnderecoRepository } from "../ports/endereco-repository";

export class CadastrarEderecoCliente{
    constructor( private readonly repository: IEnderecoRepository){}
   
    async cadastrar(endereco: EnderecoCliente){

    }
}