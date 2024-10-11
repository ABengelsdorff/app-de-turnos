import UserDto from "../dto/UserDto"
import { CreateCredentialsService } from "./credentialsService";
import { User } from "../entities/User";
import { CredentialModel, UserModel } from "../config/data-source";


//----------------------------------------------------------------------

const getUsersService = async ():Promise<User[]> => {
    const users = await UserModel.find({
        relations: { appointments: true, credentials: true }
    })
    return users;
}

//----------------------------------------------------------------------

const getUserByIdService = async (id: number): Promise<User | null> => {
    const foundUser = await UserModel.findOne({
        where: { id },
        relations: ["appointments"],
    })
    return foundUser;
}

//----------------------------------------------------------------------

const createNewUser = async (userData: UserDto):Promise<User> => {

    const { username, password, name, email, birthdate, nDni } = userData;

    const newCreds = await CreateCredentialsService({username, password})
   
const newUser = UserModel.create({
    name,
    email,
    birthdate, 
    nDni,
    credentials: newCreds
});

newCreds.user = newUser;

await UserModel.save(newUser);

await CredentialModel.save(newCreds)

return newUser
}

export { getUsersService, getUserByIdService, createNewUser}


//----------------------------------------------------------------------



