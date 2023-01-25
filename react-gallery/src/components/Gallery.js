import React from 'react';
import { useParams } from 'react-router-dom';

// Import the required components
import Photo from './Photo';
import NotFound from './NotFound';

// Gallery component takes the data and searchTerm props and uses them to 
// first display the images by rendering a Photo component for each photo
// and second using the searchTerm prop to dynamically display the gallery title
// If there are no photos, the component conditionally displays the NotFound component
const Gallery = ({ data, searchTerm }) => {
    const { url } = useParams();
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
            <h2>{url ? url : searchTerm} photos...</h2>
            <ul>
                {photos}
            </ul>
        </div>
    )
};

export default Gallery;