import { type Cliente } from "../domain/cliente";
import { type IClienteRepository } from "../ports/cliente-repository";

export class UpdateCustomer{
    
    constructor (private readonly repository:  IClienteRepository){}
        
    async atualizar(customer: Cliente){
        const verifyExistsCustomer =  await this.repository.pesquisarPorId(customer.id);
                if(verifyExistsCustomer){
                        const resultUpdateCliente = await this.repository.atualizar(customer);
                }else{
                                
                }

        }
}