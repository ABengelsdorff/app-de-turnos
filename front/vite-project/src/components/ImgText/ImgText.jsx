import styles from "./ImgText.module.css";

const ImgText = ({ title, description, text, image }) => {
    return (
        <div className={styles.card__article}>
            <img src={image} alt={title} className={styles.card__img} />
            <div className={styles.card__data}>
                <h2 className={styles.card__title}>{title}</h2>
                <span className={styles.card__description}>{description}</span>
                <p className={styles.card__text}>{text}</p>
            </div>
        </div>
    );
};

export default ImgText;

