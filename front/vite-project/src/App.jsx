import Home from "./views/Home/Home"
import MisTurnos from "./views/MisTurnos/MisTurnos";
import "./constants/GlobalStyles.css";
import "./components/NavBar/NavBar"
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <>
     <NavBar/>
     <Home/>
     <MisTurnos/>
    </> 
  )
}

export default App

//
