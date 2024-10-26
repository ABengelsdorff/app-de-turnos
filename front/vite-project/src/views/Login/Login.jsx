//import axios from "axios";
import styles from "./Login.module.css"
//import { useEffect, useState } from "react";

const Login = () => {
    const [userData, setUserData] = useState({
        username: "",
        password: "",
    })

    const handleImputChange = (event) => {
        console.log(event);
        const { name, value } = event.target;

        setUserData({
            ...userData,
            [name]: value
        });

        // if (name === "username"){
        //     setUserData({
        //         ...setUserData,
        //         username: value
        //     })
        // }
        // if(name === "password") {
        //     setUserData({
        //         ...setUserData,
        //         password: value
        //     })
        // }

        }
        const handleOnSubmit = (event) => {
            event.preventDefault();
            alert(`Username: ${userData.username} Password: ${userData.password}`)
    }

        

//!             Ver

   /* useEffect(() => {
        axios
        .post("http://localhost:3000/users/login")
        .then((res) => {setUserData(res.data);
        })
        .catch((error) => console.log(error))
    }),[]; */



//!        Esto está OK 

    return (
            <div className={styles.container}>

                <form onSubmit={handleOnSubmit} className={styles.form}>

                    <h2>LOGIN</h2>

                        <div>
                            <label>USUARIO: </label>
                            <input 
                            type="text"
                            value={userData.username}
                            name="username"
                            placeholder="    example@gmail.com"
                            onChange={handleImputChange}
                            />
                        </div>

                            <div>
                                <label>CONTRASEÑA: </label>
                                <input 
                                type="password"
                                value={userData.password}
                                name="password"
                                onChange={handleImputChange}
                                />
                            </div>

                        <button>Enviar</button>

                </form>

            </div>

    )
}


export default Login
/*
{
    "username" : "SGomez96",
    "password" : "SantiagoG2024"  
} 
*/


//!Formulario controlado => email, pasword
//!enviar la peticion al backend /users/login
//!pasandole email y pasword y que me devuelva la respuyesta si esta logeado o no.

/*Implementar en el componente Login un formulario controlado que
 se encargará del login del usuario. 

Controlar el formulario de manera tal que se pueda validar que 
todos los datos necesarios para el login están completos,
 al mismo tiempo que los datos de los inputs son reflejados en el estado 
 local correspondiente y viceversa. 

Una vez completos y validados los datos, se debe poder presionar un botón 
que dispare un evento, el cual ejecutará una función que se encargue 
de realizar la petición de tipo POST correspondiente al servidor 
para el login del usuario enviando como body el estado que se 
confeccionó a través del formulario.

En caso de que el login sea exitoso, informar al usuario. 
Del mismo modo, informar al usuario si ha ocurrido un error.*/