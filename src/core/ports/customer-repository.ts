import { type Customer} from '../domain/customer.ts';

export interface CustomerRepository {
	create(cliente: Omit<Customer, 'id'>): Promise<number>;
	findById(id: number): Promise<Customer | null>;
	findByParams(input: Partial<Customer>): Promise<Customer[]>;
	update(input: Omit<Customer, 'id'> & { id: number }): Promise<number>;
}
