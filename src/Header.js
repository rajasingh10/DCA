import React,{useState,useEffect} from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import Bounce from 'react-reveal/Bounce';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
 const [show,setShow] = useState(false);
 const [showSidebar,setSidebar] = useState(false);

 const handleShow = ()=>{
    console.log("set")
    if(window.scrollY > 350){
            setShow(true)
        }
        else{
            setShow(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleShow)
     },[])

    return(
        <div className={`header ${show && "header_dark"}`}>
            <div className="navbar">
            <MenuIcon onClick={() => setSidebar(true)} className="menuIcon"/>
         <div className="header_left">
          <img className="header_left_logo" src="https://lh5.googleusercontent.com/cO6iHjNdBX9sjw64qjTpK90lgMkQWPSy6ZaLsuHq8c2Lpv0rivlOEMQQlmdRq4HHLqiJfknbTR9r9r1Jvn2LOdh_XxeOW4lOkgNwOcw1tNsqEO-i=w1280" alt="" />
          <Bounce bottom>
          <h2>Developer's Club of Acharya</h2>
          </Bounce>
         </div>
         <div className="header_right">
           <h5>Upcoming events</h5>
           <h5>Past events</h5>
            {/* <div className="header_right_profile">
                <Avatar/>
                <p>Raja</p>
            </div> */}
         </div>
            </div>
         <div onClick={() => setSidebar(false)} className={`sidebar ${showSidebar && "visible"}`}>
         <div className="sidebar_left">
          <img className="header_left_logo" src="https://lh3.googleusercontent.com/CkgYwDyFzErVlOcb0crED8sh013Ir6g9MX4SEo5utA5K2PMLEmEF7j3X-D5nGzN1W0vi25-SPESO0zt359fTaaxqtzz5MG3-c4pT-LaHbcrC0NPW=w1280" alt="" />
          
          <h2>Developer's Club of Acharya</h2>
         
         </div>
         <div className="sidebar_right">
           <h5>Upcoming events</h5>
           <h5>Past events</h5>
            <div className="sidebar_right_profile">
               <Avatar/>
                <p>Raja</p>
            </div>
         </div>
         </div>
        </div>
    )
}

export default Header;