import { Customer } from "../domain/customer";
import { CustomerRepository } from "../ports/customer-repository";
import { fail, ok } from "../shared/result";

export class UpdateCustomer{
    
    constructor (private readonly repository: CustomerRepository){}
        
    async update(customer: Customer){
        const verifyExistsCustomer =  await this.repository.findById(customer.id);
                if(verifyExistsCustomer){
                        const resultUpdateCliente = await this.repository.update(customer);
                        if(resultUpdateCliente){
                                return ok(customer)
                        }else{
                            return fail(`Erro ao tentar atualizar Cliente ${customer.nome}.`)           
                        }
                }else{
                     return fail(`Cliente Id: ${customer.id} não foi encontrado.`)           
                }

        }
}