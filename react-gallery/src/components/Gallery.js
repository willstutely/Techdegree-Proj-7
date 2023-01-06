import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';
// import { useParams } from 'react-router-dom';

const Gallery = ({data, searchTerm, setSearchTerm}) => {
    // const { url } = useParams();
    // setSearchTerm(url)
    const results = data
    let photos;
    if (results.length > 0) {
        photos = results.map(photo =>
            <Photo
                serverId={photo.server}
                id={photo.id}
                secret={photo.secret}
                key={photo.id}
            />
        );
    } else {
        photos = <NotFound />
    }

    return (
        <div className="photo-container">
            <h2>{searchTerm} photos...</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
};

export default Gallery;