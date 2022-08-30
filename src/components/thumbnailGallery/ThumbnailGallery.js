import {useState} from 'react';

import THUMBNAIL_IMAGES_DATA from 'data/ThumbnailImagesData.js';

import './ThumbnailGallery.css';

const ThumbnailGallery=()=>{
    const [primaryImage,setPrimaryImage]=useState(THUMBNAIL_IMAGES_DATA[0]);

    const mouseEnterHandler=(image)=>{
        setPrimaryImage(image);
    }; 
    
    return (
        <div className="image-card">
            <img className="primary-image" src={primaryImage.url} alt="image" />
            <div className="thumbnail-gallery">
                {THUMBNAIL_IMAGES_DATA.map(image=>(
                    <img key={image.id} src={image.url} className={image.id===primaryImage.id?"thumbnail thumbnail-active":"thumbnail"} onMouseEnter={()=>mouseEnterHandler(image)} />
                ))}
            </div>
        </div>
    );
}

export default ThumbnailGallery;