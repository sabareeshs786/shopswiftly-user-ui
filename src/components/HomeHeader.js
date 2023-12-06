import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MyAccount from "./MyAccount";
import CartIcon from "./CartIcon";

function HomeHeader(){
    return (
        <div className="cust-container">
            <Logo forLogin={false} />
            <SearchBar />
            <MyAccount />
            <CartIcon />
        </div>
    )
}

export default HomeHeader;