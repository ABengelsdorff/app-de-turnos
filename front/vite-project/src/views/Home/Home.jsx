import { useState } from "react";
import texts from "../../helpers/texts";
import ImgText from "../../components/ImgText/ImgText";
import styles from "../../components/ImgText/ImgText.module.css"

const Home = () => {
    const [textToShow, setTexToShow] = useState(texts)
    return (
        <div className={styles.container}>
            <div className={styles.card__container}>
                {textToShow.map((text, index) => (
                    <ImgText 
                    key={index} 
                    title={text.title}
                    description={text.description}
                    text={text.text}
                    image={text.image}
                     />
                ))}
            </div>
        </div>
    ) 
}

export default Home;