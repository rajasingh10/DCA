import React from 'react';
import './PlaylistCard.css';


const PlaylistCard = ({name}) => {
    return(
        <div className="playlistcard">
          <h3>{name}</h3>
        </div>
    )
}

export default PlaylistCard;