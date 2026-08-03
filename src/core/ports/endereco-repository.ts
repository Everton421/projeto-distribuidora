import { type EnderecoCliente } from "../domain/endereco-cliente";

export interface IEnderecoRepository{
    cadastrar( endereco: EnderecoCliente):Promise<number>
    buscaPersonalizada(endereco: Partial<EnderecoCliente>): Promise<EnderecoCliente[]>
    buscaPoId(id:number): Promise<EnderecoCliente[]>;
    atualizar(endereco: Omit<EnderecoCliente, 'id'> & { id: number }):Promise<number>
}