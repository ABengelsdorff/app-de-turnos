import ICredentials from "../interfaces/ICredentials";
import CredentialDto from "../dto/CredentialDto";

const credentialsDB: ICredentials[] = []
let id: number = 1;

const CreateCredentialsService = async (credentials : CredentialDto): Promise<number> => {
    const { username , password } = credentials;

    const newCredentials : ICredentials = {
        id,
        username,
        password
    }
    credentialsDB.push(newCredentials);
    id++

    return newCredentials.id;
}

const checkCredentialsService = async (credentials : CredentialDto): Promise<number | undefined> => {
    const { username , password } = credentials;

    const foundCredentials = credentialsDB.find ((cred) => cred.username === username)

    /*if(foundUser) {
        if (foundUser.password === password){
            return foundUser.id;
        }
    } else throw new Error("Uno o mas datos son incorrectos");*/

    if(foundCredentials?.password === password) return foundCredentials.id;
    else throw new Error("Uno o mas datos son incorrectos");
    
}

export { CreateCredentialsService, checkCredentialsService }; 