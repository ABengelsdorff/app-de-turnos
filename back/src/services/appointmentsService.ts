import { AppointmentDto } from "../dto/AppointmentDto";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import { Appointment } from"../entities/Appointment";
import { AppointmentModel, UserModel } from "../config/data-source";
//-------------------------------------------------------------

const getAppointmentService = async ():Promise<Appointment[]> => {

    const allAppointments = await AppointmentModel.find({
        relations : { user: true }
    })

    return allAppointments
}

//-------------------------------------------------------------   

const getAppointmentByIdService = async (id: number): Promise<Appointment | null> => {
    const foundApp = await AppointmentModel.findOne({
        where: { id },
        relations: ["user"]
    });
    return foundApp;
}

//-------------------------------------------------------------  


const createAppointmentService = async (appointmentsData: AppointmentDto):Promise<Appointment | null> => {

    const { date, time, userId } = appointmentsData;

    const userEntity = await UserModel.findOneBy({id:userId})

    if (userEntity){
        const newAppointment = AppointmentModel.create ({
            date,
            time,
            user: userEntity
        })

        await AppointmentModel.save(newAppointment);
        return newAppointment
    } else return null
 }


//-------------------------------------------------------------  

const cancelAppointmentService = async (id:number): Promise<Appointment | null> => {

    const foundAppointment = await getAppointmentByIdService(id);

    if(foundAppointment){
       foundAppointment.status = AppointmentStatus.CANCELLED

       await AppointmentModel.save(foundAppointment)
 }
 return foundAppointment
};

//-------------------------------------------------------------  

export { getAppointmentService, getAppointmentByIdService, createAppointmentService, cancelAppointmentService }