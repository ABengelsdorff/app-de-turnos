import { createContext, useContext, useState } from "react"; 

export const UserContext = createContext({
    userActive: {},
    userAppointments: [],
    setUserActive: () => {},
    setUserAppointments: () => {} //Estado inicial
})



export const UserProvider = ({children}) => {

    const [userActive, setUserActive] = useState([])
    const [userAppointments, setUserAppointments] = useState([])

    console.log(userActive, userAppointments, "Esto tiene el contexto" )

    return(
        <UserContext.Provider value={{userActive, setUserActive, userAppointments, setUserAppointments}}>{children}</UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext); //hook useUser, seria como mi prpoio hook

    