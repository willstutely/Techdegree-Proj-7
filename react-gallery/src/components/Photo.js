import React from 'react';

const Photo = (props) => {
    const serverId = props.serverId;
    const id = props.id;
    const secret = props.secret;

    return (
        <li>
            <img src={`https://live.staticflickr.com/${serverId}/${id}_${secret}.jpg`} alt="" />
        </li>
    )

};

export default Photo;