import { Request, Response } from "express";
import { getAppointmentService, getAppointmentByIdService, createAppointmentService, cancelAppointmentService } from "../services/appointmentsService";


const getAppointment = async (req: Request, res: Response):Promise<Response> => {
    const allApp = await getAppointmentService();
    return res.status(200).json(allApp);
};

//----------------------------------------------------------------------

const getAppointmentById = async(req: Request, res: Response):Promise<Response> => {
    const { id } = req.params;
    const appointment = await getAppointmentByIdService(Number(id));
    return appointment ? res.status(200).json(appointment) :
    res.status(400).json({error: "El turno no existe"})
};

//----------------------------------------------------------------------

const registerAppointment = async (req:Request, res:Response):Promise<Response> => {
    const appointment = await createAppointmentService(req.body)
    return appointment ? res.status(200).json(appointment):
    res.status(400).json({error: "El usuario no existe"})
}

//----------------------------------------------------------------------

const cancelAppointment = async (req: Request , res: Response) :Promise<Response> => {

    const { id } = req.params;

    const cancelApp = await cancelAppointmentService (Number(id));

    return cancelApp ? res.status(200).json({message:"Turno cancelado"}) : 
    res.status(400).json({message:"El turno no existe"})
}


export { getAppointment, getAppointmentById, registerAppointment, cancelAppointment}
