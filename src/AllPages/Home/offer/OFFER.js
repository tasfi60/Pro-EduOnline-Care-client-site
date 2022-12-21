import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer,CDBBox } from 'cdbreact';
import Logo from '../../../images/favicon.ico';
import './OFFER.css';

const Footer = () => {
    return (
        <CDBFooter className="shadow footer-container mt-5">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}>
        <CDBBox display="block" alignItems="center">
          <div  className="d-flex align-items-center p-0 text-dark">
            <span className="Footer-title">From Pro EduOnline Care's Student <br/><br/></span>
           
          </div>
          <div>
          <h6>
          <CDBIcon fab icon="comma" /> 
              Before I took the 'Data Structure and algorithm' course, I had many misconceptions about it. I invested in this course and learned really good fundamentals for a career in Data Structure and algorithm.
              </h6>
          </div>
          <div>
          <h6>
              
              I took the 'Introduction To Python Programming' course, I had many misconceptions about it's basic. I invested a lot of time in this course and learned really good fundamentals for my career. This strong basic can help me build a better carrier.Thanks to ProEdu.
              </h6>
          </div>
        </CDBBox>
       
      </CDBBox>
    </CDBFooter>
    );
};

export default Footer;