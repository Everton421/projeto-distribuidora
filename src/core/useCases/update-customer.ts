import { Customer } from "../domain/customer";
import { CustomerRepository } from "../ports/customer-repository";

export class UpdateCustomer{
    
    constructor (private readonly repository: CustomerRepository){}
        
    async atualizar(customer: Customer){
        const verifyExistsCustomer =  await this.repository.pesquisarPorId(customer.id);
                if(verifyExistsCustomer){
                        const resultUpdateCliente = await this.repository.atualizar(customer);
                }else{
                                
                }

        }
}