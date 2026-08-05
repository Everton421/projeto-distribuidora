export type StatusBarrel = 'DISPONIVEL' | 'ALUGADO' | 'EM_MANUTENCAO' | 'EXTRAVIADO';

export interface Barrel {
	id: number;
	codigoPatrimonio: string | null;
	descricao: string;
	capacidadeLitros: number;
	valorLocacao: number;
	valorCaucao: number;
	status: StatusBarrel;
	cliente: number | null
}
