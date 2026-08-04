import { CustomerAddres } from "../domain/customer-addres";

export interface CustomerAddresRepository{
    cadastrar( endereco: CustomerAddres):Promise<number>
    buscaPersonalizada(endereco: Partial<CustomerAddres>): Promise<CustomerAddres[]>
    buscaPoId(id:number): Promise<CustomerAddres[]>;
    atualizar(endereco: Omit<CustomerAddres, 'id'> & { id: number }):Promise<number>
}