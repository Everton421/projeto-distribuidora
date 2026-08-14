import type { Request, Response } from 'express';
import { BarrelUseCases } from '../../../core/use-cases/barrel-use-cases.ts';
 

export class BarrelController    {

    barrelUseCases: BarrelUseCases

    constructor(barrelUseCases: BarrelUseCases){
        this.barrelUseCases  =barrelUseCases;
    }

    async create( req:Request , res: Response){
        const barrel = req.body;
       const resultCreate =  await this.barrelUseCases.create(barrel);
        return res.status(201).json(resultCreate.data);
    }

    async findById( req:Request , res: Response){
        const id = Number(req.params.id );
        if( !id){
            return res.status(400).json({ success:false, message: `Param Id is required!`})
        }   

        if( isNaN(id) ){
            return res.status(400).json({ success:false, message: `The provided Id is not a number!`})
        }
        
        const result = await  this.barrelUseCases.findById(id);

        return res.status(200).json(result);
    }
    
}