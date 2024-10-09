import { Request, Response } from "express"
import { getUsersService, getUserByIdService, createNewUser} from "../services/usersService"

//----------------------------------------------------------------------

const getUsers = async (req: Request, res: Response):Promise<Response> => { 
    const allUsers = await getUsersService();
    return res.status(200).json(allUsers);
}

//----------------------------------------------------------------------

const getUserById = async(req:Request , res: Response):Promise<Response> => {
    const { id } = req.params;

    const foundUser = await getUserByIdService(Number(id));

    return foundUser ? res.status(200).json(foundUser) 
    : res.status(404).json({message: "El usuario buscado no existe"});
};

//----------------------------------------------------------------------


const registerUser = async (req:Request, res:Response):Promise<Response> => {

    const newUser = await createNewUser(req.body)
    return res.status(201).json({message : "success" , newUser});
}

//----------------------------------------------------------------------

const login = async (req: Request, res: Response) => {
    return res.status(200).json({message: "Ruta que permite el inicio de sesion"})
};

//----------------------------------------------------------------------

export { getUsers, getUserById, registerUser, login}


