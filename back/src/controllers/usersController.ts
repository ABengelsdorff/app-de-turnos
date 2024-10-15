import { Request, Response } from "express"
import { getUsersService, getUserByWhereClauseService, createNewUser} from "../services/usersService"
import { checkCredentialsService } from "../services/credentialsService";

//----------------------------------------------------------------------

const getUsers = async (req: Request, res: Response):Promise<Response> => { 
    try {
        const allUsers = await getUsersService();
    return allUsers.length? res.status(200).json(allUsers):
    res.status(404).json({message: "No hay usuarios registrados"});
    } catch (error) {
        return res.status(500).json(error)
    }
    
    
}

//----------------------------------------------------------------------

const getUserById = async(req:Request , res: Response):Promise<Response> => {

    try {
        const { id } = req.params;
        const foundUser = await getUserByWhereClauseService({id:Number(id), email: null});
    
        return foundUser 
        ? res.status(200).json(foundUser) 
        : res.status(404).json({message: "El usuario buscado no existe"});
    } catch (error) {
        return res.status(500).json(error)
    }
};

//----------------------------------------------------------------------

const registerUser = async (req:Request, res:Response):Promise<Response> => {

    try {

        const { name, email, birthdate, nDni, username, password } = req.body;

        if(!name || !email || !birthdate || !nDni || !username || !password) return res
        .status(400)
        .json({error: "Faltan uno o mas datos"})

        const foundUserByEmail = await getUserByWhereClauseService ({id: null, email})
        if(foundUserByEmail){
            res.status(400)
            .json({error: "Ya existe un usuario con ese email"})
        }

        const newUser = await createNewUser(req.body)
        return res.status(201).json({message : "success" , newUser});
      } catch (error) {
        return res.status(500).json(error)
    } 
}

//----------------------------------------------------------------------

const login = async (req: Request, res: Response):Promise<Response> => {

    try {
        const { username, password } = req.body;
       
        const credentialChecked = await checkCredentialsService({ username, password })

        return credentialChecked? 
        res.status(200).json({login: true, user: credentialChecked})
        : res.status(400).json({login: false})

    } catch (error) {
     return res.status(500).json(error)
    }
};

//----------------------------------------------------------------------

export { getUsers, getUserById, registerUser, login}


