import { type EnderecoCliente } from './endereco-cliente';

export interface Cliente {
	id: number;
	nome: string;
	telefone: string;
	email: string;
	endereco: EnderecoCliente;
}
