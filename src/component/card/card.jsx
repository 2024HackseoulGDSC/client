import styles from "./card.module.css";

const Card = ({
    image,
    productUrl
}) => {
        
  return (
    <div className={styles.cardContainer}>
        <a href={productUrl} target="_blank" rel="noopener noreferrer">
            <img src={image}></img>
        </a>
    </div>
  )
};

export default Card;
