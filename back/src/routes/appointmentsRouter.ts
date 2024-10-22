import { Router } from "express"
import { getAppointment, getAppointmentById, registerAppointment, cancelAppointment } from "../controllers/appointmentsControllers";

const router: Router = Router();


//! Obtener el listado de los turnos
router.get("/", getAppointment)

//------------------------------------------------------

//! Obtener el detalle de un turno específico
router.get("/:id", getAppointmentById)

//------------------------------------------------------

//!crear turno/ Registro de un nuevo turno.
router.post("/schedule", registerAppointment)

//------------------------------------------------------

//!cancelar turno.
router.put("/cancel/:id", cancelAppointment)

//------------------------------------------------------

export default router