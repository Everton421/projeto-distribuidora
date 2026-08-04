import { type Customer} from '../domain/customer';

export interface CustomerRepository {
	cadastrar(cliente: Omit<Customer, 'id'>): Promise<number>;
	pesquisarPorId(id: number): Promise<Customer | null>;
	consultaPersonalizada(input: Partial<Customer>): Promise<Customer[]>;
	atualizar(input: Omit<Customer, 'id'> & { id: number }): Promise<number>;
}
