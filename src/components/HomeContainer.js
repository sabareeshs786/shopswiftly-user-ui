import Carousel from "./Carousel";
import HomeHeader from "./HomeHeader";
import Navigation from "./Navigation";
import SwiperComponent1 from "./SwiperComponent";
import '../css/main.css';
import Grid2x2Layout from "./Grid2x2Layout";

function HomeContainer() {
    return (
        <>
            <HomeHeader />
            <div className="main-container">
                <Navigation />
                <Carousel />
                <SwiperComponent1 />
                <SwiperComponent1 />
                <SwiperComponent1 />
                <SwiperComponent1 />
                <SwiperComponent1 />
                <SwiperComponent1 />
            </div>
        </>
    )
}

export default HomeContainer;