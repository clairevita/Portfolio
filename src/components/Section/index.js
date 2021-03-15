import React, { useState, useContext } from 'react';
import './Section.css';
import Card0 from './SectionCards/Card0';
import Image0 from './images/0.png';
import Card1 from './SectionCards/Card1';
import Image1 from './images/1.png';
import Card2 from './SectionCards/Card2';
import Image2 from './images/2.png';
import Card3 from './SectionCards/Card3';
import Image3 from './images/3.png';
import Card4 from './SectionCards/Card4';
import Image4 from './images/4.png';
import Card5 from './SectionCards/Card5';
import Image5 from './images/5.png';
import Card6 from './SectionCards/Card6';
import Image6 from './images/6.png';
import { Modal, Badge } from 'react-bootstrap';
import ModalState from '../../utils/ModalState';
import PortfolioItems from '../../utils/PortfolioItems.json';

function ModalFrame(props) {
    const { title, technologies, description, links, semantic, i } = useContext(ModalState);
    let image;
    if (i === 0) {
        image = Image0;
    } else if (i === 1) {
        image = Image1;
    } else if (i === 2) {
        image = Image2;
    } else if (i === 3) {
        image = Image3;
    } else if (i === 4) {
        image = Image4;
    } else if (i === 5){
        image = Image5;
    } else if (i === 6){
        image = Image6;
    }

    return (
        <Modal
            {...props}
            dialogClassName="my-modal"
            aria-labelledby="custom-modal-styling-title"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"
                    elementType="StyledAsH1"
                >
                    <h2 className="text-center"><strong>{title}</strong></h2>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col-lg-6">
                        <h4><strong>Contributions:</strong></h4>
                        <ul><li><h4 className="text-center">
                        {technologies.map(function (tech, i){
                            return <Badge id="techBadge" className='mx-1'pill variant="info">{tech}</Badge> 
                        }
                        
                        )
                        } 
                        </h4></li></ul>
                        <h4><strong>Description:</strong></h4>
                        <ul><li><h5 id="description">{description}</h5></li></ul>
                        <h4><strong>Links:</strong></h4>
                        <ul>
                            {links.map(function (links, i) {
                                let linkSemantic = semantic[i]
                                return <li><h5><a href={links} target="_blank">{linkSemantic}</a></h5></li>;
                            })}
                        </ul>
                        <hr></hr>

                    </div>

                    <div className="col-lg-6"><a href={links[0]} target="_blank"><img className="exampleImage" id="exampleImage" src={image} fluid></img></a></div>
                    </div>
              <hr></hr>
            </Modal.Body>
            <Modal.Footer className="text-center" onClick={props.onHide}>
                <h4><strong>Close</strong></h4>
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
        setModalContext({
            title: PortfolioItems.title[val],
            technologies: PortfolioItems.technologies[val],
            description: PortfolioItems.description[val],
            links: PortfolioItems.links[val],
            semantic: PortfolioItems.semantic[val],
            i: val
        })
        setModalShow(true);
    }

    return (
        <section>
            <div className="mw-100 container">
                <div className="row">
                    <Card6 onClick={() => { handleClick(6) }} />
                    <Card5 onClick={() => { handleClick(5) }} />
                    <Card4 onClick={() => { handleClick(4) }} />
                    <Card3 onClick={() => { handleClick(3) }} />
                    <Card2 onClick={() => { handleClick(2) }} />
                    <Card1 onClick={() => { handleClick(1) }} />
                    <Card0 onClick={() => { handleClick(0) }} />
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