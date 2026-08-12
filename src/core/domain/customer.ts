import { type CustomerAddres } from "./customer-addres.ts";

export interface Customer {
	id: number;
	nome: string;
	telefone: string;
	email: string;
	endereco: CustomerAddres;
}
