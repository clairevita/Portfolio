import React, { createContext, useReducer, useContext } from 'react';
import './Section.css';
import Card0 from './SectionCards/Card0';
import Card1 from './SectionCards/Card1';
import Card2 from './SectionCards/Card2';
import Card3 from './SectionCards/Card3';
import Card4 from './SectionCards/Card4';
import Card5 from './SectionCards/Card5';
import { Modal, Button } from 'react-bootstrap';

function ModalFrame(props) {
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
    function handleClick(val) {
        console.log(val);
        
        for (let i = 0; i<6; i++){
            if (i == val) {

            } 
        }

        setModalShow(true);
    }
    return (
        <section>
            <div className="mw-100 container">
                <div className="row">
                    <Card0 onClick= {() => {handleClick(0)}} />
                    <Card1  onClick= {() => {handleClick(1)}} />
                    <Card2 onClick= {() => {handleClick(2)}} />
                    <Card3 onClick= {() => {handleClick(3)}} />
                    <Card4 onClick= {() => {handleClick(4)}} />
                    <Card5 onClick= {() => {handleClick(5)}} />
                </div>
            </div>
            <ModalFrame
                show={modalShow}
                onHide={() => setModalShow(false)} />


        </section>
    )
}

export default Section;