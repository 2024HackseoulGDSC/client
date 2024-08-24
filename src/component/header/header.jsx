import Cart from "../cart/cart";
import Logo from "../logo/logo";
import SearchField from "../search-field/search-field"

const Header = () => {
    return ( 
        <>
        <Logo></Logo>
        <SearchField></SearchField>
        <Cart></Cart>
        </>
    )
}

export default Header;