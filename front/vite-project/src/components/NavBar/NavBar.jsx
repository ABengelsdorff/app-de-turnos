import styles from "./Navbar.module.css";
import yogaImage from "../../assets/yogagif.gif"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <img src={yogaImage}></img>

            <Link to="/" className={styles.link}>INICIO</Link>
            <Link to="/MisTurnos" className={styles.link}>MIS TURNOS</Link>
            <Link to="/Login" className={styles.link}>LOGIN</Link>
            <Link to="/Register" className={styles.link}>REGISTRO</Link>


        </div>
    );
};

export default NavBar;


/*
            <button>INICIO</button>

            <button>MIS TURNOS</button>

            <button>NUEVO TURNO</button>

            <button>MI PERFIL</button>
*/