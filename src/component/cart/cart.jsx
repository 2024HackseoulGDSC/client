import styles from './cart.module.css';

export default Cart = () => {
    const handleClick = () => {
        
    }

    return (
        <div>
            <img className= { styles.cart } src="public/cart.svg" onClick={handleClick}/>
        </div>
    )
}