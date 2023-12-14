import Carousel from "./Carousel";
import Navigation from "./generic/Navigation";
import SwiperComponent from "./SwiperComponent";
import '../css/main.css';

function HomeContainer() {
    return (
        <>
            <div className="main-container">
                <Navigation />
                <Carousel />
                <SwiperComponent />
                <SwiperComponent />
                <SwiperComponent />
                <SwiperComponent />
                <SwiperComponent />
                <SwiperComponent />
            </div>
        </>
    )
}

export default HomeContainer;