import CredentialDto from "../dto/CredentialDto";
import { Credential} from "../entities/Credentials";
import { User } from "../entities/User";
//import { CredentialModel } from "../config/data-source";
import CredentialRepository from "../repositories/CredentialRepository";


const CreateCredentialsService = async (credentials : CredentialDto): Promise<Credential> => {
    const { username , password } = credentials;
    
    const newCredentials = CredentialRepository.create({
        username,
        password,
    })

    await CredentialRepository.save(newCredentials)

    return newCredentials;
}

//-------------------------------------------------------------------------------------

const checkCredentialsService = async (credentials : CredentialDto): Promise<User | undefined> => {
    const { username , password } = credentials;

    if(!username || !password){
        return undefined
    }

    const foundCredentials = await CredentialRepository.findOne ({
        where: {username},
        relations: ["user"],
})

    if(foundCredentials?.password === password) return foundCredentials.user;
}

//-------------------------------------------------------------------------------------

export { CreateCredentialsService, checkCredentialsService }; 