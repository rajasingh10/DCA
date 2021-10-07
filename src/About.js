import React from 'react';
import './About.css';
import { Button } from '@material-ui/core';
import Flip from 'react-reveal/Flip';

const About = () => {
    return(
        <>
        <div className="about">
            <div className="about_background"></div>
            <div className="about_content">
            <Flip bottom>
               <h1>hii</h1>
               <h3>Welcome To</h3>
               <h1>Developer's Club of Acharya</h1>
               </Flip>
            </div>
        </div>
        <div className="join">
        <Button className="join_button" variant="contained" color="primary">
  Join
</Button>
        </div>
        </>
    )
}

export default About;