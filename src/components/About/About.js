import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col} from 'react-bootstrap';
import './About.css';
const MyComponent = () => {
  return (
    <Container fluid className="mt-5 " id='about-container'>
      <Row className="d-flex gap-5 justify-content-center align-items-center">
        <Col xs={10} md={10} lg={4} className="d-flex justify-content-center">
          <div className='rounded d-flex  flex-column overflow-hidden leftcard'>
            <div className="mb-auto p-5 left-heading col-lg-12 text-white d-flex justify-content-center align-items-center w-100 " >
            Select text, Summarize instantly and unlock the power of concise comprehension.
            </div>
            <div className='row px-4'>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <button className='btn btn-light bg-white rounded-lg btn-lg btn-block text-secondary mt-2 text-sm text-md text-lg cardbutton' >Install Now</button>
            </div>
            <div className='col-lg-6 col-md-12 d-flex justify-content-lg-center align-items-end '>
            <img src='/assets/extension1.png' alt="Card Image" className='fliud-image w-100 mt-2 appimage1'/>
            </div>
            </div>
          </div>
        </Col>
        <Col xs={10} md={4} lg={2} className="d-flex justify-content-center">
          <div className='d-flex row overflow-hidden rounded rightcard' >
            <div className='col-lg-12 w-100  d-flex justify-content-end align-items-start p-0 mb-auto' style={{height:"60%"}}>
            <img src='/assets/extension3.png' alt="Card Image" className='fliud-image h-100' />
            </div>
            <div className="mt-4 pb-5 mx-3 col-lg-12 text-black w-100 " style={{fontWeight:"600"}}>
            GPT <br/><span className='text-secondary'>Assistance</span>
            </div>
          </div>
        </Col>
        <Col xs={10} md={4} lg={2} className="d-flex justify-content-center">
          <div className='d-flex row  overflow-hidden rounded rightcard' >
            <div className="mb-auto mt-4 mx-3 col-lg-12 text-black w-100 " style={{fontWeight:"600"}}>
             Install<br/> Simplify<br/> <span className='text-secondary'> Excel </span>
            </div>
            <div className='col-lg-12 w-100 d-flex justify-content-end align-items-center p-0'>
            <img src='/assets/extension2.png' alt="Card Image" className='fliud-image rightimage'/>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MyComponent;
