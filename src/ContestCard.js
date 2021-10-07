import React from 'react';
import './ContestCard.css';

const ContestCard = ({name,url,start_time,end_time,duration,site}) => {
    const convertTime = (duration) =>{
        var sec = Number(duration);
        var hr = Math.floor(sec/3600);
        return hr > 24? Math.floor(hr/24).toString()+" days":hr==1?hr.toString()+" hr":hr.toString()+" hrs";
    }


    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function convertDate(date_str) {
       var temp_date = date_str.split("-");
        return temp_date[2] + " " + months[Number(temp_date[1]) - 1] + " " + temp_date[0];
      }

    return(
        <a href={url} target="_blank">
        <div className="contestCard">
           <div className="contestCard_content">
               <div className="heading">
                <h3>{name}</h3>
               </div>
               <div className="details">
               <p className="start_time"><span>{convertDate(start_time.slice(0,10))}<span>({start_time.slice(11,16)})</span></span></p>
                <p className="end_time"><span>{convertDate(end_time.slice(0,10))}<span>({end_time.slice(11,16)})</span></span></p>
                <p className="duration">{convertTime(duration)}</p>
               </div>
                
           </div>
           <div className="contestCard_name">
             <p>{site}</p>
           </div>
        </div>
        </a>
    )
}

export default ContestCard;