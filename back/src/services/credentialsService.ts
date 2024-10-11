import CredentialDto from "../dto/CredentialDto";
import { Credential } from "../entities/Credentials";
import { CredentialModel } from "../config/data-source";


const CreateCredentialsService = async (credentials : CredentialDto): Promise<Credential> => {
    const { username , password } = credentials;
    

    const newCredentials = CredentialModel.create({
        username,
        password,
    })

    await CredentialModel.save(newCredentials)

    return newCredentials;
}


//!-------------------------------------------------------------------------------------

const checkCredentialsService = async (credentials : CredentialDto): Promise<number | undefined> => {
    const { username , password } = credentials;

    const foundCredentials = await CredentialModel.findOneBy ({username})

    if(foundCredentials?.password === password) return foundCredentials.id;
    else return 0;
    
}

export { CreateCredentialsService, checkCredentialsService }; 