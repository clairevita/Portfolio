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
    const { title, technologies, description, links, semantic, i } = useContext(ModalState);
    const image = require('./images/' + i + '.png');
    return (
        <Modal
            {...props}
            dialogClassName="my-modal"
            aria-labelledby="example-custom-modal-styling-title"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                   {title}
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="row">
            <div className="col">
            <h4>{technologies}</h4>
                <p>
                    {description}
                </p>
            </div>
            
            <img className="exampleImage" src={image}></img>
            
            
            </div>

            </Modal.Body>
            <Modal.Footer>
                <Button className="btn btn-default btn-lg btn-block" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Section() {
    const [modalShow, setModalShow] = useState(false);
    const [ModalContext, setModalContext] = useState({
        title: "", 
        technologies: [],
        description: "",
        links: [],
        semantic: [],
        i: 0
    });
    function handleClick(val) {
        console.log(val);
       
                setModalContext({
                    title: PortfolioItems.title[val], 
                    technologies: PortfolioItems.technologies[val][0],
                    description: "",
                    links: PortfolioItems.links[val],
                    semantic: PortfolioItems.semantic[val],
                    i: val
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
                dialogClassName="modal-90w"
                value={ModalState}
                />
        </ModalState.Provider>

          

        </section>
    )
}

export default Section;