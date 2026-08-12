import  express   from "express"
import { BarrelController } from "./controllers/barrel.controller.ts"
import { BarrelMysqlRepository } from "../../out/repo/barrel-mysql-repository.ts"
import { DataBaseConnection } from "../../out/database/database-connection.ts"
import { BarrelUseCases } from "../../core/use-cases/barrel-use-cases.ts"
import {   barrelCreateSchema } from "../contracts/barrel-create-schema.ts"
import { validateSchema } from "./middlewares/validate.ts"

    export class CreateServer{
   
   static async create(port:number){

        const app = express()
        app.use(express.json())

            const pool = DataBaseConnection.getPool({
                dbPassword: 'Nileduz',
                dbHostName: '192.168.100.106',
                dbPort:3306,
                dbUserName: 'intersig',
                database:'teste1'
            });

        const repository = new BarrelMysqlRepository(pool)
        const findBarrelByIdUseCases = new BarrelUseCases(repository);

        const barrelController = new BarrelController(findBarrelByIdUseCases);

        app.get('/barrel/:id', ( req, res) => barrelController.findById(req,res))
       
        app.post('/barrel', validateSchema(barrelCreateSchema), ( req, res) => barrelController.create(req,res))

        app.listen(port, ()=> console.log(`Server is running port ${port}!`))
    }
}