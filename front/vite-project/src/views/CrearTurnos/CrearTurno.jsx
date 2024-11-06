import axios from "axios";
import styles from "./CrearTurno.module.css"
import { useState } from "react";
import { validateNuevoTurno } from "../../helpers/validateNuevoTurno";
import { useUser } from "../../context/UserContext"
import { useNavigate } from "react-router-dom"; 


const CrearTurno = () => {
    const navigate = useNavigate();
    const { userActive } = useUser();
    const [appointmentData, setAppointmentData] = useState({
            date: "",
            time: "",
    });
 
    const [errors, setErrors] = useState({})

    const [ touched, setTouched ] = useState({})

    const handleInputChange = (event) => {
        const { name, value } = event.target; //desestructuro name y value de event.target

        const newAppointmentData = {
                ...appointmentData,
                [name]: value,
            }

            setAppointmentData(newAppointmentData);
            setErrors (validateNuevoTurno(newAppointmentData))  // Usa la nueva cita para validar
    };
    
    const handleBlur = (event) => {

        const { name } = event.target

        setTouched ({
            ...touched,
            [name]: true
        })
        setErrors(validateNuevoTurno(appointmentData))
    }

    const resetForm = () => {
        setAppointmentData ({
            date: "",
            time: "",
        });

        setErrors({}); 
        setTouched({});
    }

    const submitNuevoTurno = async (event) => {
        event.preventDefault();
        try {
            if(!Object.keys(errors).length){
                await axios.post("http://localhost:3000/appointments/schedule", {
                    date: appointmentData.date,
                    time: appointmentData.time,
                    userId: userActive.id
                })

                resetForm()
                alert("Turno creado correctamente")
                navigate("/MisTurnos")
            }
        } catch (error) {
            alert(` Error al solicitar un turno ${error}`)
        }
    }

    return (
        <div className={styles.container}>
            <form onSubmit={submitNuevoTurno} className={styles.form}>
                
                <h2>NUEVO TURNO</h2>

                <div>
                    <input 
                        placeholder="FECHA"
                        type="date"
                        value={appointmentData.date}
                        name="date"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touched.date && errors.date && <p>{errors.date}</p>}
                </div>

                <div>
                    <input 
                        placeholder="HORA"
                        type="time"
                        value={appointmentData.time}
                        name="time"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                     {touched.time && errors.time && <p>{errors.time}</p>}
                </div>

                <button type="submit" disabled = {Object.keys(errors).length || !appointmentData.date || !appointmentData.time}>Enviar</button>
            </form>
        </div>
    );
};

export default CrearTurno;
