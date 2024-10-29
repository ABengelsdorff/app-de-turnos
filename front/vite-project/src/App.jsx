import Home from "./views/Home/Home"
import MisTurnos from "./views/MisTurnos/MisTurnos";
import "./constants/GlobalStyles.css";
import "./components/NavBar/NavBar"
import NavBar from "./components/NavBar/NavBar";
import Register from "./views/Register/Register";
import Login from "./views/Login/Login";
import Footer from "./components/Footer/Footer";

function App() {

  return (
    <>
     <NavBar/>
     
     
     <Login/>
     <Register/>
     
    </> 
  )
}

export default App

//!  <Home/>
//! <MisTurnos/>
//!  <Footer/>
//! 
