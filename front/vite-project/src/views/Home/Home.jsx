import { useState } from "react";
import texts from "../../helpers/texts";
import ImgText from "../../components/ImgText/ImgText";

const Home = () => {
    const [textToShow, setTexToShow] = useState(texts)
    return (
        <>
            <div>

            <h1>Este es el componente Home 😉</h1>

            {textToShow.map((texts, index) => {
                return <ImgText key={index} texts={texts}/>
            })}

            </div>



        </>
    ) 
}

export default Home;