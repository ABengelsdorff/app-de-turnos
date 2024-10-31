import { useState, useEffect} from "react";
//import myAppointments from "../../helpers/myAppointments";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css"
import axios from "axios"


const MisTurnos = () => {

    const [appointment, setApointment] = useState([]) 
    const [flag, setFlag] = useState(false) //estado auxiliar

        useEffect(() => {
           axios
           .get("http://localhost:3000/users/2")
           .then((res) => {setApointment(res.data);
           })
           .catch((error) => console.log(`Detalles del error: ${error}`));
            },[flag]);

        const handleCancelApp = async (id) => {
            try {
                await axios.put(`http://localhost:3000/appointments/cancel/${id}`)
                setFlag(!flag)
                console.log(`Turno ${id} cancelado`)
                
            } catch (error) {
                alert(error)
            }
        }

    return (
        <>
            <div className={styles.container}>
                {
                    appointment?.appointments?.map((appointment) => (

                       <Turno
                        key={appointment.id}
                        id = {appointment.id}
                        date= {appointment.date}
                        time= {appointment.time} 
                        status= {appointment.status}

                        handleCancelApp={() => handleCancelApp(appointment.id)}
                        />
                    ))
                }
            </div>
        </>
    ) 
}

export default MisTurnos;

//!Componente inteligente
