import '../css/carousel.css';
import CarouselImageDisplay from './CarouselImage';

const carouselImgs = ['6572817f562b61272c815a6e', '6572817f562b61272c815a6f', '6572817f562b61272c815a70'];

export default function Carousel() {
    return (
        <div
            id="carouselExampleControls"
            className="carousel carousel-dark slide"
            data-bs-ride="carousel"
        >
            <div className="carousel-inner">
                {
                    carouselImgs.map((imageId, index) => {
                        if (index === 0) {
                            return (
                                <div className="carousel-item active">
                                    <CarouselImageDisplay imageId={imageId} />
                                </div>
                            )
                        }
                        return (
                            <div className="carousel-item">
                                <CarouselImageDisplay imageId={imageId} />
                            </div>
                        )
                    }
                    )
                }
            </div>

            <button
                className="carousel-control-prev cust-carousel-btn"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next cust-carousel-btn"
                type="button"
                data-bs-target="#carouselExampleControls"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>

    );
}
