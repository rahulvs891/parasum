import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';
const Footer = () => {
  return (
    <footer className="py-2 mt-5 px-5 footer" >
      <div fluid className="m-2 mt-5 m-sm-2 w-100 d-flex flex-column align-items-center justify-content-center gap-3 "   >
        <img src='/assets/footer-logo.png' alt="footer logo" className='footerlogo'/> 
      
        <hr className='w-100 mb-0 text-white'  />
        <p className="text-center text-white copyright">@ 2077 parasum All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
