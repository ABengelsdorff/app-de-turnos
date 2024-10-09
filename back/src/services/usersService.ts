import UserDto from "../dto/UserDto"
import IUser from "../interfaces/IUser"
import { CreateCredentialsService } from "./credentialsService";

 export const usersDB: IUser[] = []

let id: number = 1;

//----------------------------------------------------------------------

const getUsersService = async ():Promise<IUser[]> => {
return usersDB
}

//----------------------------------------------------------------------

const getUserByIdService = async (id: number): Promise<IUser | undefined> => {
    const foundUser = usersDB.find((user) => user.id === id)
    return foundUser;
}

//----------------------------------------------------------------------

const createNewUser = async (userData: UserDto):Promise<IUser> => {

    const { username, password, name, email, birthdate, nDni } = userData;

    const newCredsId = await CreateCredentialsService({username, password})
   
const newUser: IUser = {
    id,
    name,
    email,
    birthdate, 
    nDni,
    credentialsId: newCredsId
}

usersDB.push(newUser)
id++; 
return newUser
}

export { getUsersService, getUserByIdService, createNewUser}

//----------------------------------------------------------------------



