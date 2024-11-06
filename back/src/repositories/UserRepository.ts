import { AppDataSource } from "../config/data-source";
import { User } from "../entities/User";

const UserRepository = AppDataSource.getRepository(User).extend({
    findById : async function (id: number): Promise<User> {
        const user = await this.findOneBy ({ id })    // Buscamos el usuario por id
        if (user) return user                         //Si existe lo retornamos
        else throw Error ("Invalid ID")               //Si no que explote todo, porque no me sirve que arroje un null
    },

    checkById: async function (id: number):Promise<boolean> {    //Funcion a la que le paso un id
        const user = await this.findById(id);                    //Va a buscar un usuario
        if (user) return true;                                   //Retorna true si lo encuentra
        else return false                                        //O false si no encuentra el usuario con ese id
    }
})

export default UserRepository
