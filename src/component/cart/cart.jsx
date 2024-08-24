import styles from './cart.module.css';

const Cart = () => {
    const handleClick = () => {
        console.log("클릭됨")
    }

    return (
        <div>
            <img className= { styles.cart } src="https://via.placeholder.com/150" onClick={handleClick}/>
        </div>
    )
}

export default Cart;