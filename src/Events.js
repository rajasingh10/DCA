import React from 'react';
import './Events.css';
import EventCard from './EventCard';
import Slide from 'react-reveal/Slide';

const Events = ({name}) => {
    return(
        <div className="Events">
          <div className="heading">
           <h1>{name} events</h1>
          </div>
          <div className="all_events">
          <Slide bottom>
           <EventCard/>
           <EventCard/>
           <EventCard/>
           <EventCard/>
           
           </Slide>
          </div>
        </div>
    )
}

export default Events;