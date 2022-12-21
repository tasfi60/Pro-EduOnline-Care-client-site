import React from 'react';
import Pdf from "react-to-pdf";
import logo from '../../../images/bg.jpg';
import './Banner.css';
import FileDownloadIcon from '@mui/icons-material/FileDownload';



const Banner = () => {

  
    return (
        <div className='bg-color container my-3 rounded'>
           
<div class="container pt-5">
<div class="banner-image">
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-6 col-md-12 mr-auto ">
        <h5 class="text-dark fw-bold fs-5 pb-2 font-style">Welcome to Pro EduOnline Care</h5>
        <p class="text-dark lead font-style">Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge.</p>
        {/* <a href="#" class="btn btn-primary btn-lg"> I'M AVAILABLE </a>  */}
  
                
        </div>
      <div class="col-lg-6 col-md-12 ">
      <img src={logo} className="rounded-circle  display-img mb-4"  alt="..."/>
        
        </div>
    </div>
  </div>
</div>
</div>
</div>

        
    );
};

export default Banner;





