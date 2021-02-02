import React, { useState, useContext } from 'react';
import './Section.css';
import Card0 from './SectionCards/Card0';
import Card1 from './SectionCards/Card1';
import Card2 from './SectionCards/Card2';
import Card3 from './SectionCards/Card3';
import Card4 from './SectionCards/Card4';
import Card5 from './SectionCards/Card5';
import { Modal, Button } from 'react-bootstrap';
import ModalState from '../../utils/ModalState';
import PortfolioItems from '../../utils/PortfolioItems.json';

function ModalFrame(props) {
    const { title, technologies, description, links, semantic } = useContext(ModalState);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   {title}
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
    const [modalShow, setModalShow] = useState(false);
    const [ModalContext, setModalContext] = useState({
        title: "", 
        technologies: "",
        description: "",
        links: "",
        semantic: ""
    });
    function handleClick(val) {
        console.log(val);
                setModalContext({
                    title: PortfolioItems.title[val], 
                    technologies: PortfolioItems.technologies[val],
                    description: "",
                    links: PortfolioItems.links[val],
                    semantic: PortfolioItems.semantic[val]
                })
                    setModalShow(true);
                console.log(ModalContext);
             
                
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
        <ModalState.Provider value={ModalContext}>
        <ModalFrame
                show={modalShow}
                onHide={() => setModalShow(false)} 
                value={ModalState}
                />
        </ModalState.Provider>

          

        </section>
    )
}

export default Section;