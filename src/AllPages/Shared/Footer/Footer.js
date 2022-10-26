import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer,CDBBox } from 'cdbreact';
import Logo from '../../../images/favicon.ico';
import './Footer.css';

const Footer = () => {
    return (
        <CDBFooter className="shadow footer-container">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox display="flex" alignItems="center">
          <div  className="d-flex align-items-center p-0 text-dark">
            <img
              alt="logo"
              src={Logo}
              width="60px"
            />
            <span className="Footer-title">Pro EduOnline Care</span>
          </div>
        </CDBBox>
        <CDBBox>
          <small className="me-5">&copy; Pro EduOnline Care, 2022. All rights reserved.</small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </CDBFooter>
    );
};

export default Footer;