import Home from "./views/Home/Home"
import MisTurnos from "./views/MisTurnos/MisTurnos";
import "./constants/GlobalStyles.css";
import "./components/NavBar/NavBar"
import NavBar from "./components/NavBar/NavBar";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>

     <NavBar/>

     <Routes>

      <Route path="/" element={<Home/>}/>

      <Route path="MisTurnos" element={<MisTurnos/>} />

      <Route path="Login" element={<Login/>} />

      <Route path="Register" element={<Register/>} />
     

     </Routes>
     
     <Footer/>

    </> 
  )
}

export default App
