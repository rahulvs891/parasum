import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row, Col} from 'react-bootstrap';
import './Header.css';

const Header = () => {
  return (
    <div className="header pb-5">
      <Row>
        <Col md={{ span: 6, order: 1 }} xs={{span:12, order:2}} className='d-flex flex-column gap-2 gap-lg-5 justify-content-between header-content p-0'>
          <div className='d-flex flex-column gap-3 gap-lg-5'>
          <div style={{height:"1rem"}}><div className="ellipse"></div></div>
          <p className='motto d-flex flex-column'>Discover the art of instant <span>Comprehension</span></p>
          <p className='quote'>
            Elevate your reading experience with our Chrome extension, effortlessly summarizing the essence of any text at your fingertips.
          </p>
          </div>
        </Col>
        <Col md={{ span: 6, order: 2 }} xs={{span:12, order:1}}  className="d-flex  header-image" style={{ justifyContent:"center", alignItems:"center"}}>
          <div className='image-container'>
          <img src='/assets/header-image.png' alt='header' style={{width:"100%"}} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
