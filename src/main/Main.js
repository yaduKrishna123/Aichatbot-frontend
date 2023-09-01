import React, { useState } from 'react'
import './style.css'
import {
    Button,
    Card,
    Carousel,
    Dropdown,
    Form,
    FormControl,
    InputGroup,
    Nav,
    Row,
  } from "react-bootstrap";
  import Modal from 'react-bootstrap/Modal';
import Header from './Header';
import botImage from '../bot.png';
import Ai_bot from './Ai_bot';
import ReactTyped from "react-typed";

function Main() {

    const [modalShow, setModalShow] = React.useState(true);
  return (
    <>

    <section>
    <Header/>
    <div className="container">
      <div className="mt-5">
        <div className="row">

        <div className="auto-heading col-lg-12">  <p className="designy">We are <span className='sub-designy'><ReactTyped
                strings={[`Powerful AI Team`,`Social Media Management`,`Content Marketing`,`Search Engine Optimization`,`Performance Marketing`,`
                Branding Services`,`Email Marketing`,` AI-integrated leading IT Services`,`WebApp Developement`,`mobile App Developement`]}
                typeSpeed={100}
                loop
              /></span></p> </div>
        </div>
        
      </div>
      <div className="move-icon">

      <Ai_bot/>
      </div>
       
    </div>
  <div class='air air1'></div>
  <div class='air air2'></div>
  <div class='air air3'></div>
  <div class='air air4'></div>
</section>
   
    
    
{/* <Modal

      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
      </Modal.Footer>
    </Modal> */}
    </>
  )
}

export default Main