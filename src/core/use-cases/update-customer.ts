import { Customer } from "../domain/customer.ts";
import { CustomerRepository } from "../ports/customer-repository.ts";
import { fail, ok } from "../shared/result.ts";

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