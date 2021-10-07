import React, {useState,useEffect} from 'react';
import './Contests.css';
import Contest from './Contest';
const API = "https://kontests.net/api/v1/all";

const Contests = () => {
   const [ongoing,setOngoing] = useState([]);
   const [upcoming,setUpcoming] = useState([]);

   useEffect(() => {
      fetch(API)
        .then(response => response.json())
        .then(datas => {
            setOngoing(datas.filter(data => data.status === "CODING" && data.start_time.slice(11,16)!=data.end_time.slice(11,16)))
            setUpcoming(datas.filter(data => data.status === "BEFORE" && data.start_time.slice(11,16)!=data.end_time.slice(11,16)))
        });
   },[]);
   

    return(
        <div className="contests">
            <div className="contests_heading">
            <h1>Contests</h1>
            </div>
            <Contest name="Ongoing Contests" content={ongoing}/>
            <Contest name="Upcoming Contests" content={upcoming}/>
        </div>
    )
}

export default Contests;