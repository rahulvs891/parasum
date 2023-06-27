import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './Catagory.css';
import { Icon } from '@iconify/react';

const Catagory = () => {
  return (
    <div className='row m-0 menu'>
      <div className='catagoryrow col-lg-6 p-0 col-md-12 col-sm-12'>
      <Button className='d-flex flex-column justify-content-center align-items-center choice' ><Icon icon="game-icons:archive-research" id='icon'/>Research and Academia</Button>
      <Button className='d-flex flex-column justify-content-center align-items-center choice' ><Icon icon="system-uicons:window-content" id='icon'/>Content Curation</Button>
      <Button className='d-flex flex-column justify-content-center align-items-center choice' ><Icon icon="eos-icons:machine-learning-outlined" id='icon'/>Learning and Education</Button> 
      </div>
      <div className='catagoryrow col-lg-6 p-0 col-md-12 col-sm-12'>
      <Button className='d-flex flex-column justify-content-center align-items-center choice' ><Icon icon="material-symbols:business-chip-outline" id='icon'/>Business and Professional </Button> 
      <Button className='d-flex flex-column justify-content-center align-items-center choice' ><Icon icon="ion:create-outline" id='icon'/>Content Creation</Button> 
      <Button className='d-flex flex-column justify-content-center align-items-center choice' ><Icon icon="streamline:computer-logo-facebook-1-media-facebook-social" id=''/>Social Media</Button> 
      
      </div>
      </div>
  )
}

export default Catagory
