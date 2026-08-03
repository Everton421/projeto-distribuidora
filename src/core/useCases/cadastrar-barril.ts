import { type Barril } from '../domain/barril';
import { type IBarrilRepository } from '../ports/barril-repository';
import { fail, ok, type Result } from '../shared/result';

export class CadastrarBarril {
	constructor(private readonly barrilRepository: IBarrilRepository) {}

	async cadastrar(barril: Omit<Barril, 'id'>): Promise<Result<Barril>> {
		const id = await this.barrilRepository.cadastrar(barril);
		const barrilCadastrado = await this.barrilRepository.consultaPorId(id);

		if (!barrilCadastrado) {
			return fail('Falha ao cadastrar o barril.');
		}

		return ok(barrilCadastrado);
	}
}
