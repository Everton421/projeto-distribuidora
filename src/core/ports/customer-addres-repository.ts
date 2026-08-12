import { CustomerAddres } from "../domain/customer-addres.ts";

export interface CustomerAddresRepository{
    create( endereco: CustomerAddres):Promise<number>
    findByParams(endereco: Partial<CustomerAddres>): Promise<CustomerAddres[]>
    findById(id:number): Promise<CustomerAddres[]>;
    update(endereco: Omit<CustomerAddres, 'id'> & { id: number }):Promise<number>
}