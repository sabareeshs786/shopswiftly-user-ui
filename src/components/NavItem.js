import { Link } from "react-router-dom";

export default function NavItem({link, imgSrc, altText, cateText}) {
    return (
        <div className="cate-item" id="grocery">
            <Link to={"/" + link} role="button">
                <div className="cate-image">
                    <img src={imgSrc} alt={altText} />
                </div>
                <div className="cate-text">{cateText}</div>
            </Link>
        </div>
    )
}