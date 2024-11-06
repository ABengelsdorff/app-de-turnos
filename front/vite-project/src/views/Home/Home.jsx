import { useState } from "react";
import texts from "../../helpers/texts";
import ImgText from "../../components/ImgText/ImgText";
import styles from "../../components/ImgText/ImgText.module.css"
import yogaImag from "../../assets/ultimaimgyoga.jpg"

const Home = () => {
    const [textToShow] = useState(texts)
    return (
        <div className={styles.container}>
            <h1>¿Que es el yoga?</h1>
            <p className={styles.parrafoInicio}><br></br>El yoga es una práctica milenaria que combina la mente, el cuerpo y el espíritu en una búsqueda de equilibrio y bienestar. A través de la meditación, la respiración consciente y las posturas físicas, el yoga ofrece un camino hacia la paz interior y la autoconciencia. La práctica regular del yoga puede contribuir a la reducción del estrés, mejorar la flexibilidad y aumentar la fuerza. Además, se ha demostrado que el yoga tiene beneficios significativos para la salud mental, ayudando a aliviar la ansiedad y promoviendo una mayor claridad mental. La conexión entre la respiración y el movimiento es fundamental en el yoga, permitiendo a los practicantes encontrar un estado de armonía tanto física como emocional. Ya sea que se busque mejorar la condición física o simplemente encontrar un momento de tranquilidad en la vida cotidiana, el yoga ofrece una vía accesible y transformadora para todos.</p>
            <p><br></br></p>
            <p><br></br></p>
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
            <p className={styles.parrafoInicio}>
                <br></br>
                    El yoga, más que una simple práctica, es un viaje de autoconocimiento y transformación personal. Al incorporar el yoga en tu vida diaria, no solo mejoras tu bienestar físico, sino que también cultivas la paz mental y la conexión espiritual. Esta disciplina milenaria nos enseña a vivir el presente, a abrazar la impermanencia y a encontrar la armonía en cada respiración. <br></br>

                    Con el tiempo, las posturas y la meditación se convierten en herramientas valiosas para enfrentar los desafíos de la vida, permitiéndonos fluir con mayor facilidad y gracia. Practicar yoga te ofrece la oportunidad de desconectar del ruido del mundo exterior y reconectar con tu interior, creando un espacio de calma en medio del caos.<br></br>

                    Además, el yoga fomenta la autocompasión y la aceptación, enseñándonos a ser amables con nosotros mismos en cada etapa de nuestro viaje. Al explorar diferentes estilos y técnicas, encuentras un enfoque que resuena contigo, enriqueciendo tu experiencia y profundizando tu práctica. Así, el yoga se transforma en un refugio en el que descubrimos nuestro verdadero ser y cultivamos la compasión hacia nosotros mismos y hacia los demás, creando un impacto positivo que se extiende más allá del mat.<br></br>

                    Integrar el yoga en tu vida puede abrirte a nuevas perspectivas, ayudándote a enfrentar los altibajos con una mente más clara y un corazón más abierto. Este camino de transformación no tiene fin; cada práctica es una nueva oportunidad para crecer y evolucionar, llevándote hacia una vida más plena y consciente.</p>
                <p><br />
            </p>
            <img className={styles.imgInicio} src={yogaImag} alt="Yoga"/>
            
        </div>
    ) 
}

export default Home;