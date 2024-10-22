import styles from "./Navbar.module.css";
import yogaImage from "../../assets/yogagif.gif"

const NavBar = () => {
    return (
        <div className={styles.nav}>
            <img src={yogaImage}></img>
            <button>INICIO</button>
            <button>MIS TURNOS</button>
            <button>NUEVO TURNO</button>
            <button>MI PERFIL</button>
        </div>


    );
};

export default NavBar;
