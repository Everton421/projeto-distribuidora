import { z } from 'zod';


export type StatusBarrel = 'DISPONIVEL' | 'ALUGADO' | 'EM_MANUTENCAO' | 'EXTRAVIADO';

export const barrelCreateSchema = z.object({
    codigoPatrimonio: z.string().min(1).nullable(),
    descricao: z.string().min(1).nullable(),
    capacidadeLitros: z.coerce.number().positive(), 
    valorLocacao:  z.coerce.number().nonnegative(),
    valorCaucao: z.coerce.number().nonnegative(),
    status: z.enum(['DISPONIVEL' , 'ALUGADO' , 'EM_MANUTENCAO' ,'EXTRAVIADO']),
    cliente: z.coerce.number().int().nonnegative().nullable()
})

// Cria uma tipagem estatica a partir do schema
export type BarrelCreateInput = z.infer< typeof barrelCreateSchema>;

