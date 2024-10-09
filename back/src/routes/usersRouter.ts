import { Router } from "express";
import { getUsers, getUserById, registerUser, login} from "../controllers/usersController";


const router: Router = Router();

//------------------------------------------------------

//! Obtener el listado de todos los usuarios
router.get("/", getUsers)

//------------------------------------------------------

//! Obtener el detalle de un usuario específico
router.get("/:id", getUserById);

//------------------------------------------------------


//!crear usuario/ Registro de un nuevo usuario.
router.post("/register", registerUser) 

//------------------------------------------------------


router.post("/login", login)


//------------------------------------------------------

// Eliminar usuario
/*router.delete("/", deleteUser)*/

export default router;

/*{
    "name": "Angie Bengelsdorff",
    "email": "angie@gmail.com",
    "birthdate": "11/06/1998",
    "nDni": 12345678,
    "username":"Angie",
    "password":"123456"
}*/