import { type CustomerAddres } from "../domain/customer-addres.ts";
import {type CustomerAddresRepository } from "../ports/customer-addres-repository.ts"
import { fail, ok } from "../shared/result.ts";

export class UpdateCustomerAddres{
        
    constructor( private readonly cutomerAddresRepository: CustomerAddresRepository ){}
   
        async update(  customerAddres: CustomerAddres) {
            
            const verifyExistsCustomerAddres = await this.cutomerAddresRepository.findById(customerAddres.id);
                
                if(verifyExistsCustomerAddres.length > 0  ){
                    const resulUpdateAddres = await this.cutomerAddresRepository.update(customerAddres)
                    if(resulUpdateAddres) {
                        return ok(customerAddres);
                    }else{
                    return fail(`Erro ao tentar atualizar endereco id: ${customerAddres.id}.`);
                    }
                }else{
                    return fail(` endereço Id ${customerAddres.id} não foi encontrado.`);
                }

        }
}