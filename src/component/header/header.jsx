import Cart from "../cart/cart";
import Logo from "../logo/logo";
import SearchField from "../search-field/search-field";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Logo className={styles.logo}></Logo>
      <SearchField className={styles.search}></SearchField>
      <Cart className={styles.cart}></Cart>
    </div>
  );
};

export default Header;
