import React from 'react';
import './EventCard.css';

const EventCard = () => {
    return(
        <div className="card">
            
             <img className="image" src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/WhatsApp%20Image%202020-10-02%20at%2023.38.52.jpeg" alt="" />
            
            <div className="content">
               <h4>MAY 23,2021</h4>
               <h2>Speaker Session/ Tech Talk - virtual</h2>
            </div>
            <div className="overview">
             <h1>Open Source Revived Acharya Institute Of Technology</h1>
            </div>
        </div>
    )
}

export default EventCard;