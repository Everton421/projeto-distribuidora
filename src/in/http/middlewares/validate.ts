 
import { type ZodSchema } from "zod/v3";
import type { Request, Response, NextFunction }  from "express"; 

export function validateSchema<T>( schema: ZodSchema<T>){
    return ( req: Request, res: Response, next: NextFunction)=>{
        const result = schema.safeParse( req.body)
        if(!result.success){
            return res.status(400).json({
                success:false,
                message: "Dados inválidos",
                errors: result.error.issues.map(( issue)=>({
                    field: issue.path.join(' . '),
                    message: issue.message
                }))
            })
        }
        req.body = result.data;
        next();
    }
}