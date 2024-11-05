import styles from "../../views/MisTurnos/MisTurnos.module.css";

const Turno = ({ date, time, status, handleCancelApp }) => {
    return (
        <div className={styles.turno}>

            <h1>Fecha: {date}</h1>
            <h1>Hora: {time}</h1>
            <h1>Estado: {status}</h1>
            <button onClick={handleCancelApp} disabled={ status=== "cancelado" || (new Date(date) <= new Date())}>cancelar</button>

        </div>
    )
}

export default Turno

//Componente tonto



