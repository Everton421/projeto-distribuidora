import { type Cliente } from '../domain/cliente';
import { type IClienteRepository } from '../ports/cliente-repository';
import { fail, ok, type Result } from '../shared/result';

export class CadastrarCliente {
	constructor(private readonly clienteRepository: IClienteRepository) {}

	async cadastrar(cliente: Omit<Cliente, 'id'>): Promise<Result<Cliente>> {
		const id = await this.clienteRepository.cadastrar(cliente);
		const clienteCadastrado = await this.clienteRepository.pesquisarPorId(id);

		if (!clienteCadastrado) {
			return fail('Falha ao cadastrar o cliente.');
		}

		return ok(clienteCadastrado);
	}
}
