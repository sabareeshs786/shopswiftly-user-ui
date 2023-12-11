import Carousel from "./Carousel";
import HomeHeader from "./HomeHeader";
import Navigation from "./Navigation";
import SwiperComponent1 from "./SwiperComponent";
import '../css/main.css';

function HomeContainer() {
    return (
        <>
            <HomeHeader />
            <div className="main-container">
                <Navigation />
                <Carousel />
                <SwiperComponent1 />
            </div>
        </>
    )
}

export default HomeContainer;