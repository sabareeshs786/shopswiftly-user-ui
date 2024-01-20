import Logo from "./generic/Logo";
import SearchBar from "./generic/SearchBar";
import MyAccount from "./generic/MyAccount";
import CartIcon from "./generic/CartIcon";
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