import React from 'react';
import './Learningcard.css';

const Learningcard = ({imgUrl,name,url}) => {
    return(
        <a href={url} target="_blank">
        <div className="learningcard">
           <img src={imgUrl} alt=""/>
           <div className="cardname">
           <h3>{name}</h3>
           </div>
        </div>
        </a>
    )
}

export default Learningcard;