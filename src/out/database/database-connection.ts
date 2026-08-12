import type { Pool } from "mysql2/promise";
import mysql from 'mysql2/promise';

export interface DbConfig  {
     dbHostName:string;
     dbUserName: string;
     dbPassword:string;
     dbPort:number
     database:string
}

export class DataBaseConnection {
    private static instance:Pool | null = null 

    private constructor(){}

    public static getPool( config?: DbConfig):Pool {
     if (!DataBaseConnection.instance) {
      if (!config) {
        throw new Error("É necessário fornecer as configurações do banco de dados na primeira execução.");
      }
    }

    DataBaseConnection.instance = mysql.createPool({
        connectionLimit:10,
        host: config?.dbHostName!,
        user: config?.dbUserName!,
        port: config?.dbPort!,
        password: config?.dbPassword!,
        database:config?.database!
    })

    return DataBaseConnection.instance;

    }


}