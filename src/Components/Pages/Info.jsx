import React from 'react';
import "../Styles/Info.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Form from './Form';

const Info = () => {
  const handleForm =()=>{
    const form = document.getElementsByClassName("form");
    form[0].style.display = 'flex';
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
  });
  }
  return (
    <div className="info-div-main-container">
        <div className='info-div-content-container'>
          <span><p className='para aktifoa-semiBold'>DOL Max Overlaminate Films</p></span>
          <p className='subpara aktifoa-light'>Printed graphics deserve maximum protection, DOL Max is the solution.</p>
          <span className='spanFeature aktifoa-medium'>Features and Benefits:</span>
          <ul className='listflex-container aktifoa-light'>
            <li>Premium vertical durability of up to 7 years and up to 2 years horizontal durability protection.</li>
            <li>The high gloss finish enhances the appearance of graphics and adds a special touch to help your graphics stand out.</li>
            <li>Our digital overlaminates can be used on a variety of substrates, including banners, vehicle graphics, outdoor signage, and more.</li>
          </ul>
          <button className='btn aktifoa-semiBold' onClick={handleForm}>Inquire now <ArrowForwardIcon/></button>
        </div>
        <div className='info-div-bg-container'></div>
        <div className='displayVisible'>
          <Form/>
        </div>
    </div>
  )
}

export default Info