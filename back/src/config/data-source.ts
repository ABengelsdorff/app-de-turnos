import { DataSource } from "typeorm";

import { DB_HOST, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_DATABASE } from "./envs";
import { Appointment } from "../entities/Appointment";
import { Credential } from "../entities/Credentials";
import { User } from "../entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: DB_HOST,
    port: Number (DB_PORT),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    synchronize: true,
    dropSchema: false, //!limpiar la base de datos
    logging: false, //!mostrar o no información en la terminal
    entities: [Appointment, Credential, User],
    subscribers: [],
    migrations: [],
})

export const conectDataBase = async () => {
    try {
        await AppDataSource.initialize()
        console.log("Conected to the database")
    } catch (error) {
        console.log(error)
    }
}

//export const UserModel = AppDataSource.getRepository(User)
//export const CredentialModel = AppDataSource.getRepository(Credential)
//export const AppointmentModel = AppDataSource.getRepository(Appointment)