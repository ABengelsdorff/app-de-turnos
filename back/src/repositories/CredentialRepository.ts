import { AppDataSource } from "../config/data-source";
import { Credential } from "../entities/Credentials"; 


const CredentialRepository = AppDataSource.getRepository(Credential);








export default CredentialRepository