import { Router } from "express"
import { getAppointment, getAppointmentById, registerAppointment, cancelAppointment } from "../controllers/appointmentsControllers";

const router: Router = Router();


// Obtener el listado de los turnos
router.get("/", getAppointment)

//------------------------------------------------------

// Obtener el detalle de un turno específico
router.get("/:id", getAppointmentById)

//------------------------------------------------------

// Crear turno/ Registro de un nuevo turno.
router.post("/schedule", registerAppointment)

//------------------------------------------------------

// Cancelar turno.
router.put("/cancel/:id", cancelAppointment)

//------------------------------------------------------

export default router