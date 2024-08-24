import styles from './cart.module.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        console.log("클릭됨");
        navigate('/mypage');
    }

  return (
    <div>
      <img
        className={styles.cart}
        src="https://via.placeholder.com/150"
        onClick={handleClick}
      />
    </div>
  );
};

export default Cart;
