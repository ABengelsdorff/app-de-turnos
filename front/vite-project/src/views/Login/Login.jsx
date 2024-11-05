import axios from "axios";
import styles from "./Login.module.css";
import { useState } from "react";
import { validateLogin } from "../../helpers/validateLogin";
import { useNavigate } from "react-router-dom"

import estadoInicio from "../../assets/mientrastanto.gif"; // GIF para estado inactivo (opcional)
import estadoEmail from "../../assets/cuandoescribeel mail.gif"; // GIF cuando se escribe el email
import estadoContraseña from "../../assets/cuandoponemostrarlacontrasea.gif"; // GIF cuando se escribe la contraseña

import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";



const Login = () => {
    const { setUserActive } = useUser();

    const [userData, setUserData] = useState({ //Guarda los datos ingresados del formulario 
        username: "",
        password: "",
    });



    const [errors, setErrors] = useState({}) //Guarda los mensajes de error para cada campo del formulario.

    const [ touched, setTouched ] = useState({}) // Lleva registro de los campos que han sido tocados o enfocados, para mostrar errores solo cuando el usuario ha interactuado con ellos.
   
    const navigate = useNavigate(); 


    const handleInputChange = (event) => {
        const { name, value } = event.target; //desestructuro name y value de event.target

        setUserData({
                ...userData,
                [name]: value,
            }) 
            setErrors (validateLogin({...userData, [name]: value}))
    };


    const handleBlur = (event) => {

        const { name } = event.target

        setTouched ({
            ...touched,
            [name]: true
        })
        setErrors(validateLogin(userData))
    }


    const resetForm = () => {
        setUserData ({
            username: "",
            password: "",
        });

        setErrors({}); 
        setTouched({});
    }



    const submitLogin = async (event) => {
        event.preventDefault();
        try {
            if(!Object.keys(errors).length){
                const loggedUser = await axios.post("http://localhost:3000/users/login", userData)

                localStorage.setItem("userID", loggedUser.data.user.id)



               resetForm()
                
                alert("Usuario logeado correctamente");

                setUserActive(loggedUser.data.user)

                navigate("/MisTurnos");


            }else(alert("Errores en el formulario"))
           
        } catch (error) {
            if(error.status >= 400 && error.status <= 499)
                return alert("Usuario o contraseña incorrecto");
            return alert("Error del servidor")
        }
    };


    let characterGif = estadoInicio; // Estado por defecto
    if (userData.username) {
      characterGif = estadoEmail; // Cuando se escribe un email
    }
    if (userData.password) {
      characterGif = estadoContraseña; // Dependiendo del estado de la contraseña
    }



    return (
        <div className={styles.container}>
            <form onSubmit={submitLogin} className={styles.form}>
                
            <img
          src={characterGif}
          alt="Character animation"
          className={styles.character}
        />
                
                <h2>LOGIN</h2>

                <div>
                    <input 
                        placeholder="USUARIO"
                        type="text"
                        value={userData.username}
                        name="username"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touched.username && errors.username && <p>{errors.username}</p>}
                </div>

                <div>
                    <input 
                        placeholder="CONTRASEÑA"
                        type="password"
                        value={userData.password}
                        name="password"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touched.password && errors.password && <p>{errors.password}</p>} 

                </div>

                <button type="submit">Enviar</button>
                <p className={styles.mensaje}>Para registrarte haz clic <span style={{ marginRight: "4px" }}> </span> <Link to={"/Register"}> acá</Link></p>

            </form>
        </div>
    );
};

export default Login;
