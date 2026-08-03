import { type Cliente } from '../domain/cliente';

export interface IClienteRepository {
	cadastrar(cliente: Omit<Cliente, 'id'>): Promise<number>;
	pesquisarPorId(id: number): Promise<Cliente | null>;
	consultaPersonalizada(input: Partial<Cliente>): Promise<Cliente[]>;
	atualizar(input: Omit<Cliente, 'id'> & { id: number }): Promise<number>;
}
