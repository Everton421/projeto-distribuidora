import { Barrel } from "../domain/barrel";

export interface BarrelRepository {
	consultaPorId(id: number): Promise<Barrel | null>;
	consultaPersonalizada(input: Partial<Barrel>): Promise<Barrel[]>;
	cadastrar(Barrel: Omit<Barrel, 'id'>): Promise<number>;
	atualizar(input: Omit<Partial<Barrel>, 'id'> & { id: number }): Promise<number>;
}
