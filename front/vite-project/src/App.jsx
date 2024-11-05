import "./constants/GlobalStyles.css";
import Home from "./views/Home/Home"
import MisTurnos from "./views/MisTurnos/MisTurnos";
import NavBar from "./components/NavBar/NavBar";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Footer from "./components/Footer/Footer";
import CrearTurno from "./views/CrearTurnos/CrearTurno";

import { Routes, Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const userId = localStorage.getItem("userID")

if(!userId){
  return <Navigate to={"/Login"} />
}

  return children;
}


function App() {

  return (

    <>
    
     <NavBar/>

     <Routes>

      <Route path="/" element={<Home/>} />
   
      <Route path="Login" element={<Login/>}/>  

      <Route path="Register" element={<Register/>} />


      <Route path="MisTurnos" element={
        <ProtectedRoute>
          <MisTurnos/>
        </ProtectedRoute>
        } />
    

    
      <Route path="CrearTurno" element={
        <ProtectedRoute>
        <CrearTurno/>
        </ProtectedRoute>
        } />
    

     </Routes>
     
     <Footer/>
     </>
  )
}

export default App
