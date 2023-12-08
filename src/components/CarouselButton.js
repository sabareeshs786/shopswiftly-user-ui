export default function CarouselButton() {
    // TODO
    return (
        <button
            className="carousel-control-prev cust-carousel-btn"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">

            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
        </button>
    )
}