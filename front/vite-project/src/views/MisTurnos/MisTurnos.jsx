import { useEffect } from "react";
import Turno from "../../components/Turno/Turno";
import styles from "./MisTurnos.module.css";
import axios from "axios";
import { useUser } from "../../context/UserContext";
import { useNavigate, Link } from "react-router-dom";

const MisTurnos = () => {
    const navigate = useNavigate(); 
    const { userActive, setUserAppointments, userAppointments } = useUser();
    
    useEffect(() => {
        // Verificar si userActive tiene un nombre antes de hacer la solicitud
        if (!userActive.name) {
            navigate("/"); // Navegar a la página principal si no hay usuario activo
            return; // Salir del useEffect
        }

        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/users/${userActive.id}`);
                setUserAppointments(response.data.appointments); 
            } catch (error) {
                console.log(`Detalles del error: ${error}`);
            }
        };

        fetchData();
    }, [ userActive, setUserAppointments, navigate]); 

    const handleCancelApp = async (id) => {
        try {
            await axios.put(`http://localhost:3000/appointments/cancel/${id}`);

            // Actualiza la lista de turnos en el estado global
            const newAppointments = userAppointments.map(appointment => {
                if (appointment.id === id) {
                    return { ...appointment, status: 'cancelado' }; 
                }
                return appointment;
            });

            setUserAppointments(newAppointments);
            console.log(`Turno ${id} cancelado`);
        } catch (error) {
            alert(`Error al cancelar el turno: ${error}`);
        }
    };

    return (
        <div className={`${styles.container} ${userAppointments.length === 0 ? styles.noAppointments : ""}`}>
            {userAppointments.length === 0 ? (
                <p className={styles.mensaje}>Aún no tienes turnos registrados. Para crear un nuevo turno has clic <Link to={"/CrearTurno"}> acá </Link> </p>
            ) : (
                userAppointments.map((appointment) => (
                    <Turno
                        key={appointment.id}
                        id={appointment.id}
                        date={appointment.date}
                        time={appointment.time}
                        status={appointment.status}
                        handleCancelApp={() => handleCancelApp(appointment.id)}
                    />
                ))
            )}
        </div>
    );
};

export default MisTurnos;

//!Componente inteligente



 