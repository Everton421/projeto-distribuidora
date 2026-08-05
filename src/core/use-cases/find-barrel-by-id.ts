import { type BarrelRepository } from "../ports/barrel-repository";

export class FindBarrelByIdUseCases{
        constructor ( private readonly  barrelRepository: BarrelRepository){}

        async findById( id: number ){
             const resultBarrel =  await this.barrelRepository.findById(id);
             return resultBarrel
        }
    }