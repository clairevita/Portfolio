import React, { useEffect, useState } from 'react';
import './Section.css';
import Card0 from './SectionCards/Card0';
import Card1 from './SectionCards/Card1';
import Card2 from './SectionCards/Card2';
import Card3 from './SectionCards/Card3';
import Card4 from './SectionCards/Card4';
import Card5 from './SectionCards/Card5';
import { Modal, Button } from 'react-bootstrap';

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
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
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function Section() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <section>
            {/* <Button onClick={() => setModalShow(true)} /> */}
            <div className="mw-100 container">
                <div className="row">
                    <div onClick={() => setModalShow(true)}>
                    <Card0 /> 
                    </div>
                    
                    <Card1  onClick={() => setModalShow(true)}/>
                    <Card2  onClick={() => setModalShow(true)}/>
                    <Card3  onClick={() => setModalShow(true)}/>
                    <Card4  onClick={() => setModalShow(true)}/>
                    <Card5 onClick={() => setModalShow(true)}/>
                </div>
            </div>
      <MyVerticallyCenteredModal           
      show={modalShow}
          onHide={() => setModalShow(false)}/>


        </section>
    )
}

export default Section;