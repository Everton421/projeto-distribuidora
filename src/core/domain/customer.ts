import { type CustomerAddres } from "./customer-addres";

export interface Customer {
	id: number;
	nome: string;
	telefone: string;
	email: string;
	endereco: CustomerAddres;
}
