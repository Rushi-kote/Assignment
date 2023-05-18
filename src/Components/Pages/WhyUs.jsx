import React from 'react';
import "./../Styles/WhyUs.css";
import tick from "../Assets/Group 110.png";
import icsAdesive from "../Assets/ici-adhesives.png";
import onlineComu from "../Assets/ici-online-communication.png";
import path68 from "../Assets/Path 68.png";
import { ArrowForward } from '@mui/icons-material';

const WhyUs = () => {
    
    const handleForm =()=>{
        const form = document.getElementsByClassName("form");
        form[0].style.display = 'flex';
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
      });
    }
  return (
    <div className='whyus-div-main-container'>
        <div className='whyus-div-bg-container'></div>
        <div className='whyus-content-container'>
            <p className='whyus-heading aktifoa-medium'>Why us?</p>
            <div className='whyus-content-container-flex'>
                <div className='flex-logo-container'>
                    <img src={tick} alt="tickLogo" />
                </div>
                <div className='flex-content-items'>
                    <p className='flex-content-heading aktifoa-medium'>Quality Products </p>
                    <p className='flex-content-para aktifoa-light'>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</p>
                </div>
            </div>
            <div className='whyus-content-container-flex'>
                <div className='flex-logo-container'>
                    <img src={icsAdesive} alt="tickLogo" />
                </div>
                <div className='flex-content-items'>
                    <p className='flex-content-heading aktifoa-medium'>Quality Products </p>
                    <p className='flex-content-para aktifoa-light'>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</p>
                </div>
            </div>
            <div className='whyus-content-container-flex'>
                <div className='flex-logo-container'>
                    <img src={onlineComu} alt="tickLogo" />
                </div>
                <div className='flex-content-items'>
                    <p className='flex-content-heading aktifoa-medium'>Quality Products </p>
                    <p className='flex-content-para aktifoa-light'>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</p>
                </div>
            </div>
            <div className='whyus-content-container-flex'>
                <div className='flex-logo-container'>
                    <img src={path68} alt="tickLogo" />
                </div>
                <div className='flex-content-items'>
                    <p className='flex-content-heading aktifoa-medium'>Quality Products </p>
                    <p className='flex-content-para aktifoa-light'>Our digital overlaminate films are made from the highest quality materials and are designed to provide superior protection and appearance to your digital prints.</p>
                </div>
            </div>
            <button className='btn' onClick={handleForm}>Request a call back <ArrowForward/></button>
        </div>
    </div>
  )
}

export default WhyUs