import { type Barrel } from "../domain/barrel.ts";

export interface BarrelRepository {
	findById(id: number): Promise<Barrel | null>;
	findByParams(input: Partial<Barrel>): Promise<Barrel[]>;
	create(Barrel: Omit<Barrel, 'id'>): Promise<number>;
	update(input: Omit<Partial<Barrel>, 'id'> & { id: number }): Promise<number>;
}
