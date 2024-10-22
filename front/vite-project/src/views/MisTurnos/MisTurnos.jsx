import { useState } from "react";
import myAppointments from "../../helpers/myAppointments";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css"

const MisTurnos = () => {

    const [appointment, setApointment] = useState(myAppointments) 

        console.log(myAppointments)

        const handleCancelApp = (id) => {
            console.log(`Turno ${id} cancelado`)
        }

    return (
        <>
            <h1>Este es el componente MisTurnos 😎</h1>
            
            <div className={styles.container}>
                {
                    appointment.map((appointment, ) => {

                        return <Turno
                        key={appointment.id}
                        id = {appointment.id}
                        name= {appointment.user.name}
                        date= {appointment.date}
                        time= {appointment.time} 
                        status= {appointment.status}

                        handleCancelApp={() => handleCancelApp(appointment.id)}
                        />
                    })
                }
                
            </div>
        </>
    ) 
}

export default MisTurnos;

//Componente inteligente
