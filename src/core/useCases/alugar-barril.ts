import { type Barril } from '../domain/barril';
import { type IBarrilRepository } from '../ports/barril-repository';
import { fail, ok, type Result } from '../shared/result';

export class AlugarBarril {
	constructor(private readonly barrilRepository: IBarrilRepository) {}

	async alugar(id: number): Promise<Result<Barril>> {
		const barril = await this.barrilRepository.consultaPorId(id);

		if (!barril) {
			return fail('Barril não encontrado.');
		}

		if (barril.status !== 'DISPONIVEL') {
			return fail('Barril não está disponível para locação.');
		}

		const barrilAlugado = { ...barril, status: 'ALUGADO' as const };
		await this.barrilRepository.atualizar(barrilAlugado);

		return ok(barrilAlugado);
	}
}
