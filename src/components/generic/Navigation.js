import '../../css/nav.css';
import NavItem from './NavItem';

function getAltText(src){
    const srctext = src.split('.')[0];
    return srctext[0].toUpperCase() + srctext.slice(1) + " Image";
}

function getCateText(src){
    const srctext = src.split('.')[0];
    return srctext[0].toUpperCase() + srctext.slice(1);
}

function getLink(src){
    return '/' + src.split('.')[0];
}

export default function Navigation(){
    const imgSrcBaseUrl = '/categories/';
    const imageSrcs = ["grocery.webp", 
    "mobiles.webp", "electronics.webp",
    "appliances.webp", "fashion.webp", 
    "travel.webp", "toys.webp", "furniture.webp", 
    "two-wheelers.webp"];

    return (
        <div className="cust-container-all-cate">
            {
                imageSrcs.map((src, index) => {return (
                    <NavItem 
                        key={src.split('.')[0]}
                        imgSrc={imgSrcBaseUrl + src}
                        altText={getAltText(src)}
                        cateText={getCateText(src)}
                        link={getLink(src)}
                    />
                )})
            }
        </div>
    )
}