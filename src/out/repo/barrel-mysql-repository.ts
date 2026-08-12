import type { Barrel } from "../../core/domain/barrel.ts";
import type { BarrelRepository } from "../../core/ports/barrel-repository.ts";
import  { type ResultSetHeader, type Pool } from 'mysql2/promise';

export class BarrelMysqlRepository implements BarrelRepository{
         
    constructor ( private readonly pool: Pool){}

   async findById(id: number): Promise<Barrel | null> {
            const  [result]  = await this.pool.query(` SELECT * FROM  barrels where id = ?  `, id)  ;
            const resultBarrel = result as Barrel[];
            if(resultBarrel.length > 0  ){
                return resultBarrel[0] as Barrel;
            } else{
                return null
            }
        }

       async create(Barrel: Omit<Barrel, "id">): Promise<number> {
            
                const  sql = ` INSERT INTO barrel 
                    codigopatrimonio = ?,
                    descricao = ?,
                    capacidadeLitros = ?,
                    valorLocacao = ?,
                    valorCaucao = ?,
                    status = ?,
                    cliente = ? 
                `   
                const { capacidadeLitros, cliente, codigoPatrimonio, descricao, status, valorCaucao,valorLocacao} =Barrel;

                const values = [codigoPatrimonio, descricao, capacidadeLitros, valorLocacao, valorCaucao, status, cliente]
            const [resultInsertBarel] = await this.pool.query(sql, values)  
            const  resultInsert  = resultInsertBarel as ResultSetHeader;
            return resultInsert.insertId;
        }

        findByParams(input: Partial<Barrel>): Promise<Barrel[]> {
                 const c =null ;
                return c as any
                }
        update(input: Omit<Partial<Barrel>, "id"> & { id: number; }): Promise<number> {
            const c =null ;
                return c as any
        }
}