import { Link } from 'react-router-dom';
import '../css/grid.css';

const images = [
    { src: '/electronics/camera.webp', alt: 'Image 1', caption: 'Caption 1', description: 'Description for Image 1.' },
    { src: '/electronics/keyboard.webp', alt: 'Image 2', caption: 'Caption 2', description: 'Description for Image 2.' },
    { src: '/electronics/printer.webp', alt: 'Image 3', caption: 'Caption 3', description: 'Description for Image 3.' },
    { src: '/electronics/sd-card.webp', alt: 'Image 4', caption: 'Caption 4', description: 'Description for Image 4.' },
];

export default function Grid2x2Layout() {
    return (
        <div className="grid-flex-container">
            <div className="grid-block">
                <Link to="/electronics-more">
                    <div className="grid-title">
                        <div className="grid-title-text">
                            Electronics
                        </div>
                        <div className="show-more">
                            show more
                        </div>
                    </div>
                </Link>
                <div className="grid-container">
                    {images.map((image, index) => (
                        <div className="grid-item" key={index}>
                            <Link to="/ele">
                                <img src={image.src} alt={image.alt} />
                                <div className="caption">{image.caption}</div>
                                <div className="description">{image.description}</div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-image">
                <img src="/electronics/camera.webp" alt="" />
            </div>
        </div>
    )
}