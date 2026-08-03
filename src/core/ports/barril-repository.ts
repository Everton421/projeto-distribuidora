import { type Barril } from '../domain/barril';

export interface IBarrilRepository {
	consultaPorId(id: number): Promise<Barril | null>;
	consultaPersonalizada(input: Partial<Barril>): Promise<Barril[]>;
	cadastrar(barril: Omit<Barril, 'id'>): Promise<number>;
	atualizar(input: Omit<Partial<Barril>, 'id'> & { id: number }): Promise<number>;
}
