import { AppointmentDto } from "../dto/AppointmentDto";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import { Appointment } from"../entities/Appointment";
//import { AppointmentModel, UserModel } from "../config/data-source";

import AppointmentRepository from "../repositories/AppointmentRepository";
import UserRepository from "../repositories/UserRepository";

//-------------------------------------------------------------

const getAppointmentService = async ():Promise<Appointment[]> => {

    const allAppointments = await AppointmentRepository.find({
        relations : { user: true }
    })

    return allAppointments
}

//-------------------------------------------------------------   

const getAppointmentByIdService = async (id: number): Promise<Appointment | null> => {
    const foundApp = await AppointmentRepository.findOne({
        where: { id },
        relations: ["user"]
    });
    return foundApp;
}

//-------------------------------------------------------------  

const createAppointmentService = async (appointmentsData: AppointmentDto):Promise<Appointment | null> => {

    const { date, time, userId } = appointmentsData;

    const userEntity = await UserRepository.findOneBy({id:userId})

    if (userEntity){
        const newAppointment = AppointmentRepository.create ({
            date,
            time,
            user: userEntity
        })

        await AppointmentRepository.save(newAppointment);
        return newAppointment
    } else return null
 }

//-------------------------------------------------------------  

const cancelAppointmentService = async (id:number): Promise<Appointment | null> => {

    const foundAppointment = await getAppointmentByIdService(id);

    if(foundAppointment){
       foundAppointment.status = AppointmentStatus.CANCELLED

       await AppointmentRepository.save(foundAppointment)
 }
 return foundAppointment
};

//-------------------------------------------------------------  

export { getAppointmentService, getAppointmentByIdService, createAppointmentService, cancelAppointmentService }