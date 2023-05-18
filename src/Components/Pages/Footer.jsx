import React from 'react';
import "../Styles/Footer.css";
import logo from "../Assets/Vector Smart Object.png"

const Footer = () => {
  return (
    <>
    <div className='footer-div-main-container'>
        <div className='footer-flex-items'>
            <p>Best solutions from</p>
            <img src={logo} alt="" />
        </div>
        <div className='footer-flex-items'>
            <p>DOL Max Overlaminate Films</p>
            <p>Why us</p>
            <p>Enquire now</p>
        </div>
        <div className='footer-flex-items'>
            <span className='footer-flex-span'>Avery Dennison Overlaminate Avery Dennison Overlaminate Films Avery Dennison Digital Overlaminate Films Avery Dennison DOL Max</span>
        </div>
        <div className='footer-flex-items'>
            <span className='footer-flex-span'>Overlaminate Overlaminate Films Digital Overlaminate Films</span>
        </div>
    </div>
    <span>© 2023 Avery Dennison Label Packaging Material. All rights reserved.</span>
    </>
  )
}
export default Footer