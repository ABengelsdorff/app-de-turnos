import { Router } from "express";
import { getUsers, getUserById, registerUser, login} from "../controllers/usersController";


const router: Router = Router();

//------------------------------------------------------

// Obtener el listado de todos los usuarios
router.get("/", getUsers)

//------------------------------------------------------

// Obtener el detalle de un usuario específico
router.get("/:id", getUserById);

//------------------------------------------------------


// Crear usuario/ Registro de un nuevo usuario.
router.post("/register", registerUser) 

//------------------------------------------------------

// Verificar login del usuario.
router.post("/login", login)

//------------------------------------------------------

export default router;
