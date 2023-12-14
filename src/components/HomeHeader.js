import Logo from "../components/generic/Logo";
import SearchBar from "../components/generic/SearchBar";
import MyAccount from "./generic/MyAccount";
import CartIcon from "../components/generic/CartIcon";
import '../css/header.css';

function HomeHeader({bgBlue=false}) {
    return (
        <div className="my-container" style={{backgroundColor: bgBlue ? 'blue': 'white'}}>
            <div className="cust-container" style={{backgroundColor: bgBlue ? 'blue': 'white'}}>
                <Logo bgBlue={bgBlue} />
                <SearchBar />
                <MyAccount bgBlue={bgBlue}/>
                <CartIcon bgBlue={bgBlue}/>
            </div>
        </div>
    )
}

export default HomeHeader;