import UserDto from "../dto/UserDto"
import { CreateCredentialsService } from "./credentialsService";
import { User } from "../entities/User";
import UserRepository from "../repositories/UserRepository";
import CredentialRepository from "../repositories/CredentialRepository";

//----------------------------------------------------------------------

const getUsersService = async ():Promise<User[]> => {
    const users = await UserRepository.find({
        relations: { appointments: true, credentials: true }
    })
    return users;
}

//----------------------------------------------------------------------

const getUserByWhereClauseService = async (user: {id: number | null, email: string | null}):
 Promise<User | null> => {

    const { id, email }= user;

    interface IWere{
        id?: number,
        email?: string
    }
    const whereClause:IWere = {};
    if(id) whereClause.id = id;
    if(email) whereClause.email = email


    const foundUser = await UserRepository.findOne({
        where: whereClause,
        relations: ["appointments"],
    })
    return foundUser;
}

//----------------------------------------------------------------------

const createNewUser = async (userData: UserDto):Promise<User> => {

    const { username, password, name, email, birthdate, nDni } = userData;

    const newCreds = await CreateCredentialsService({username, password})
   
const newUser = UserRepository.create({
    name,
    email,
    birthdate, 
    nDni,
    credentials: newCreds
});

newCreds.user = newUser;

await UserRepository.save(newUser);

await CredentialRepository.save(newCreds)

return newUser
}

//----------------------------------------------------------------------

export { getUsersService, getUserByWhereClauseService, createNewUser}





