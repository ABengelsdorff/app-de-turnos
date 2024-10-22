import { Request, Response } from "express";
import { getAppointmentService, getAppointmentByIdService, createAppointmentService, cancelAppointmentService } from "../services/appointmentsService";


const getAppointment = async (req: Request, res: Response):Promise<Response> => {
    try {
        const allApp = await getAppointmentService();
    return allApp.length? res.status(200).json(allApp):
    res.status(404).json({message: "No hay turnos registrados"});
    } catch (error) {
        return res.status(500).json(error)
    }
};

//----------------------------------------------------------------------

const getAppointmentById = async(req: Request, res: Response):Promise<Response> => {
    try {
        const { id } = req.params;
    const appointment = await getAppointmentByIdService(Number(id));
    return appointment ? res.status(200).json(appointment) :
    res.status(404).json({error: "El turno no existe"})
    } catch (error) {
        return res.status(500).json(error)
    }
};

//----------------------------------------------------------------------

const registerAppointment = async (req:Request, res:Response):Promise<Response> => {
    try {
        const { date, time, userId } = req.body
        if (!date || !time || !userId) return res.status(400).json({error: "Uno o mas datos estan incompletos"})

        const appointment = await createAppointmentService(req.body)
    return appointment ? res.status(201).json(appointment):
    res.status(400).json({error: "El usuario no existe"})
    
    } catch (error) {
        return res.status(500).json(error)
    }
}

//----------------------------------------------------------------------

const cancelAppointment = async (req: Request , res: Response) :Promise<Response> => {

   try {
    const { id } = req.params;

    const cancelApp = await cancelAppointmentService (Number(id));

    return cancelApp ? res.status(200).json({message:"Turno cancelado"}) : 
    res.status(404).json({message:"El turno no existe"})
   } catch (error) {
    return res.status(500).json(error)
   }
}

export { getAppointment, getAppointmentById, registerAppointment, cancelAppointment}
