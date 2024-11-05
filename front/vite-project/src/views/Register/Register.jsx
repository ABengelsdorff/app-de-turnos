import axios from "axios";
import { useState } from "react";
import styles from "./Register.module.css";
import { validateRegisterForm } from "../../helpers/validateRegisterForm";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [newUserData, setNewUserData] = useState({
        name: "",
        email: "",
        birthdate: "",
        nDni: "",
        username: "",
        password: "",
        repeatPassword: ""
    });

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const [serverError, setServerError] = useState(""); // Para errores específicos del backend

    const navigate = useNavigate();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewUserData({
            ...newUserData,
            [name]: value
        });
        setErrors(validateRegisterForm({ ...newUserData, [name]: value }));
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouched({
            ...touched,
            [name]: true
        });
        setErrors(validateRegisterForm(newUserData));
    };

    const resetForm = () => {
        setNewUserData({
            name: "",
            email: "",
            birthdate: "",
            nDni: "",
            username: "",
            password: "",
            repeatPassword: ""
        });
        setErrors({});
        setTouched({});
    };

    const submitRegisterForm = async (event) => {
        event.preventDefault();
        try {
            if (!Object.keys(errors).length) {
                await axios.post("http://localhost:3000/users/register", newUserData);
                resetForm();
                alert("Usuario creado con éxito");
                navigate("/Login");
            } else {
                alert("Errores en el formulario");
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.error) {
                setServerError(error.response.data.error); // Captura el mensaje de error del backend y lo guarda en serverError
            } else {
                setServerError("Ocurrió un error inesperado. Inténtalo de nuevo.");
            }
        }
    };

    return (
        <div className={styles.container}>
            <form onSubmit={submitRegisterForm} className={styles.form}>
                <h2>Formulario de registro</h2>

                

                <div>
                    <input
                        placeholder="NAME"
                        type="text"
                        name="name"
                        value={newUserData.name}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touched.name && errors.name && <p>{errors.name}</p>}
                </div>

                <div>
                    <input
                        placeholder="EMAIL"
                        type="email"
                        name="email"
                        value={newUserData.email}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touched.email && errors.email && <p>{errors.email}</p>}

                    {serverError && <p>{serverError}</p>}   {/* Mensaje de error del servidor */}
                </div>

                <div>
                    <input
                        placeholder="BIRTHDATE"
                        type="date"
                        name="birthdate"
                        value={newUserData.birthdate}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touched.birthdate && errors.birthdate && <p>{errors.birthdate}</p>}
                </div>

                <div>
                    <input
                        placeholder="N° DNI"
                        type="number"
                        name="nDni"
                        value={newUserData.nDni}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touched.nDni && errors.nDni && <p>{errors.nDni}</p>}
                </div>

                <div>
                    <input
                        placeholder="USERNAME"
                        type="text"
                        name="username"
                        value={newUserData.username}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touched.username && errors.username && <p>{errors.username}</p>}
                </div>

                <div>
                    <input
                        placeholder="CONTRASEÑA"
                        type="password"
                        name="password"
                        value={newUserData.password}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touched.password && errors.password && <p>{errors.password}</p>}
                </div>

                <div>
                    <input
                        placeholder="REPETIR CONTRASEÑA"
                        type="password"
                        name="repeatPassword"
                        value={newUserData.repeatPassword}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                    />
                    {touched.repeatPassword && errors.repeatPassword && <p>{errors.repeatPassword}</p>}
                </div>

                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
};

export default Register;























/*
import axios from "axios";
import { useState,} from "react";
import styles from "./Register.module.css"
import { validateRegisterForm } from "../../helpers/validateRegisterForm";
import { useNavigate } from "react-router-dom";


const Register = () => {
    
    const [newUserData, setNewUserData] = useState({

    "name": "",
    "email": "",
    "birthdate": "",
    "nDni": "",
    "username": "",
    "password": "",
    "repeatPassword": ""
    });


    const [errors, setErrors] = useState({})

    const [ touched, setTouched ] = useState({})

    const [serverError, setServerError] = useState(""); // Para errores específicos del backend


    const navigate = useNavigate(); 


    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setNewUserData({
            ...newUserData,
            [name]: value
        })
        setErrors (validateRegisterForm({...newUserData, [name]: value}))

    }

        const handleBlur = (event) => {

            const { name } = event.target

            setTouched ({
                ...touched,
                [name]: true
            })
            setErrors(validateRegisterForm(newUserData))
        }

        const resetForm = () => {
            setNewUserData({
                "name": "",
                "email": "",
                "birthdate": "",
                "nDni": "",
                "username": "",
                "password": "",
                "repeatPassword": ""
                });

                setErrors({});
                setTouched({});
        }

        //Para evitar el comportamiento por defecto del formulario 
        //que es actualizarce cada vez que precione el boton
        const submitRegisterForm = async (event) => {
            event.preventDefault();
            try {
                
                if(!Object.keys(errors).length){
                    await axios.post("http://localhost:3000/users/register", newUserData)

                    resetForm()

                    alert("Usuario creado con éxito")

                    navigate("/Login");

                }else(alert("Errores en el formulario"))

            } catch (error) {
                if (error.response && error.response.data && error.response.data.error) {
                    setServerError(error.response.data.error); // Captura el mensaje de error del backend y lo guarda en serverError
                } else {
                    setServerError("Ocurrió un error inesperado. Inténtalo de nuevo.");
                }
            }
        }

    return (
        <div className={styles.container}>
            <form onSubmit={submitRegisterForm} className={styles.form}>
                <h2>Formulario de registro</h2>
                
                    <div>
                        <input
                            placeholder="NAME"
                            type="text"
                            name="name"
                            value={newUserData.name}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                        {touched.name && errors.name && <p>{errors.name}</p>}
                    </div>
                   
                    <div>
                        <input
                            placeholder="EMAIL"
                            type="email"
                            name="email"
                            value={newUserData.email}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                         {touched.email && errors.email && <p>{errors.email}</p>}
                    </div>
                    
                    <div>
                        <input
                        placeholder="BIRTHDATE"
                            type="date"
                            name="birthdate"
                            value={newUserData.birthdate}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                         {touched.birthdate && errors.birthdate && <p>{errors.birthdate}</p>}
                    </div>
                    
                    <div>
                        <input
                            placeholder="N° DNI"
                            type="number"
                            name="nDni"
                            value={newUserData.nDni}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                         {touched.nDni && errors.nDni && <p>{errors.nDni}</p>}
                    </div>
                    
                        <div>
                        <input
                            placeholder="USERNAME"
                            type="text"
                            name="username"
                            value={newUserData.username}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                         {touched.username && errors.username && <p>{errors.username}</p>}
                    </div>
                    
                    <div>
                        <input
                            placeholder="CONTRASEÑA"
                            type="password"
                            name="password"
                            value={newUserData.password}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                         {touched.password && errors.password && <p>{errors.password}</p>}
                    </div>

                    <div>
                        <input
                            placeholder="REPETIR CONTRASEÑA"
                            type="password"
                            name="repeatPassword"
                            value={newUserData.repeatPassword}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                        />
                         {touched.repeatPassword && errors.repeatPassword && <p>{errors.repeatPassword}</p>}
                    </div>

                <button type="submit">Registrarse</button>

            </form>
        </div>
    )
}; 


export default Register;
*/


