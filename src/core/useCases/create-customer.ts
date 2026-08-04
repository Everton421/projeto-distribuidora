import { type Customer } from '../domain/customer';
import {type CustomerRepository } from '../ports/customer-repository';
import { fail, ok, type Result } from '../shared/result';

export class CreateCustomer {
	constructor(private readonly clienteRepository: CustomerRepository) {}

	async cadastrar(cliente: Omit<Customer, 'id'>): Promise<Result<Customer>> {
		const id = await this.clienteRepository.cadastrar(cliente);
		const clienteCadastrado = await this.clienteRepository.pesquisarPorId(id);

		if (!clienteCadastrado) {
			return fail('Falha ao cadastrar o cliente.');
		}

		return ok(clienteCadastrado);
	}
}
