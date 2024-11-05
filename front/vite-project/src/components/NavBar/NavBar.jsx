import styles from "./Navbar.module.css";
import yogaImage from "../../assets/yogagif.gif"
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";


const NavBar = () => {

    const navigate = useNavigate();

    const { userActive, setUserActive, setUserAppointments} = useUser()

    const handleLogout = () => {

        setUserActive({});
        setUserAppointments([]);
        navigate("/")

    }

    return (
        <div className={styles.nav}>
            <img src={yogaImage} alt="Yoga" />

            {userActive.name ? (
                <>
                    <Link to="/" className={styles.link}>INICIO</Link>
                    <Link to="/MisTurnos" className={styles.link}>MIS TURNOS</Link>
                    <Link to="/CrearTurno" className={styles.link}>CREAR TURNO</Link>
                    <button onClick={handleLogout}>CERRAR SESIÓN</button>
                </>
            ) : (
                <>
                    <Link to="/" className={styles.link}>INICIO</Link>
                    <Link to="/Login" className={styles.link}>LOGIN</Link>
                    <Link to="/Register" className={styles.link}>REGISTRO</Link>
                </>
            )}
        </div>
    );
};

export default NavBar;













/*

const NavBar = () => {
    const navigate = useNavigate();
    const { user, logout } = useUser(); // Extraemos el usuario y la función de logout del contexto

    const handleLogout = () => {
        logout(); // Llamamos a la función logout del contexto
        navigate("/");
    };

    return (
        <div className={styles.nav}>
            <img src={yogaImage} alt="Yoga gif" />

            <Link to="/" className={styles.link}>INICIO</Link>

           
            {!user && (
                <>
                    <Link to="/Login" className={styles.link}>LOGIN</Link>
                    <Link to="/Register" className={styles.link}>REGISTRO</Link>
                </>
            )}

           
            {user && (
                <>
                    <Link to="/MisTurnos" className={styles.link}>MIS TURNOS</Link>
                    <Link to="/CrearTurno" className={styles.link}>CREAR TURNO</Link>
                    <button onClick={handleLogout} className={styles.link}>CERRAR SESION</button>
                </>
            )}
        </div>
    );
};

export default NavBar;
*/





