import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MyAccount from "./MyAccount";
import CartIcon from "./CartIcon";
import '../css/header.css';

function HomeHeader() {
    return (
        <div className="my-container">
            <div className="cust-container">
                <Logo forLogin={false} />
                <SearchBar />
                <MyAccount />
                <CartIcon />
            </div>
        </div>
    )
}

export default HomeHeader;