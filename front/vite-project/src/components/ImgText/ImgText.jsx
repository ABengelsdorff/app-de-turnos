import yogaImage from "../../assets/yoga.jpg"
import styles from "./ImgText.module.css"



const ImgText = ({ texts }) => {
    return(
        <div className={styles.container}> 
            <img src={yogaImage} alt="Yoga"/>
            <p>
                {texts}
            </p>
        </div>
    )
}

export default ImgText