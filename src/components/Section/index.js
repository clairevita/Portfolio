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
import { Modal } from 'react-bootstrap';
import ModalState from '../../utils/ModalState';
import PortfolioItems from '../../utils/PortfolioItems.json';

function ModalFrame(props) {
    const { title, technologies, description, links, semantic, i } = useContext(ModalState);
    let image;
    if (i == 0) {
        image = Image0;
    } else if (i == 1) {
        image = Image1;
    } else if (i == 2) {
        image = Image2;
    } else if (i == 3) {
        image = Image3;
    } else if (i == 4) {
        image = Image4;
    } else if (i == 5){
        image = Image5;
    } else if (i == 6){
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
                    <strong>{title}</strong>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="row">
                    <div className="col">
                        <h5><strong>Technical Contributions:</strong></h5>
                        <ul><li>{technologies}</li></ul>
                        <h5><strong>Description:</strong></h5>
                        <ul><li>{description}</li></ul>
                        <h5><strong>Links:</strong></h5>
                        <ul>
                            {links.map(function (links, i) {
                                let linkSemantic = semantic[i]
                                return <li><a href={links} target="_blank">{linkSemantic}</a></li>;
                            })}
                        </ul>

                    </div>
                    <div className="col d-none d-lg-block"><img className="exampleImage" src={image} width="100"></img></div>
                </div>
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
            technologies: PortfolioItems.technologies[val][0],
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