import AppointmentDto from "../dto/AppointmentDto";
import { AppointmentStatus } from "../enums/AppointmentStatus";
import IAppointment from "../interfaces/IAppoitments";

const appointmentsDB: IAppointment[] = []

let id: number = 1

//-------------------------------------------------------------

const getAppointmentService = async ():Promise<IAppointment[]> => {
    return appointmentsDB
}

//-------------------------------------------------------------   

const getAppointmentByIdService = async (id: number): Promise<IAppointment | undefined> => {
    const foundApp = appointmentsDB.find(appointment => appointment.id === id);
    return foundApp;
}

//-------------------------------------------------------------  


const createAppointmentService = async (appointmentsData: AppointmentDto):Promise<IAppointment | undefined> => {

    const { date, time, userId } = appointmentsData;

    //const foundUser = usersDB.find((user) => user.id === id)

    //if(foundUser){
        const newAppointment: IAppointment = {
            id,
            date,
            time,
            status: AppointmentStatus.ACTIVE,
            userId
        }
        appointmentsDB.push(newAppointment)
            id++; 
            return newAppointment
   // } else return undefined
    }
//-------------------------------------------------------------  

const cancelAppointmentService = async (id:number): Promise<IAppointment | undefined> => {

    const foundAppointment = await getAppointmentByIdService(id);

    if(foundAppointment){
       foundAppointment.status = AppointmentStatus.CANCELLED
 }
 return foundAppointment
};

//-------------------------------------------------------------  

export { getAppointmentService, getAppointmentByIdService, createAppointmentService, cancelAppointmentService }