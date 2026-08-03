import { type StatusBarril } from '../domain/barril';
import { type IBarrilRepository } from '../ports/barril-repository';
import { fail, ok, type Result } from '../shared/result';

export class AtualizarStatusBarril {
	constructor(private readonly barrilRepository: IBarrilRepository) {}

	async atualizar(id: number, status: StatusBarril): Promise<Result<null>> {
		const barril = await this.barrilRepository.consultaPorId(id);

		if (!barril) {
			return fail('Barril não encontrado.');
		}

		await this.barrilRepository.atualizar({ ...barril, status });

		return ok(null);
	}
}
