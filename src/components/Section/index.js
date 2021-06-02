import React, { useState, useContext } from 'react';
import './Section.css';
import Card0 from './SectionCards/Card0';
import Card1 from './SectionCards/Card1';
import Card2 from './SectionCards/Card2';
import Card3 from './SectionCards/Card3';
import Card4 from './SectionCards/Card4';
import Card5 from './SectionCards/Card5';
import Card6 from './SectionCards/Card6';
import Card7 from './SectionCards/Card7';
import Card8 from './SectionCards/Card8';
import Card9 from './SectionCards/Card9';
import Card10 from './SectionCards/Card10';
import Card11 from './SectionCards/Card11';
import Card12 from './SectionCards/Card12';
import { Modal } from 'react-bootstrap';
import ModalState from '../../utils/ModalState';
import PortfolioItems from '../../utils/PortfolioItems.json';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function ModalFrame(props) {
    const { title, url, i } = useContext(ModalState);

    return (
        <Modal
            {...props}          
        >
            <iframe src={url} width={window.innerWidth*.85} height={window.innerHeight*.85} frameborder="0"></iframe>              
        </Modal>
    );
}

function Section() {
    const [modalShow, setModalShow] = useState(false);
    const [ModalContext, setModalContext] = useState({
        title: "",
        url: "",
        i: 0
    });
    function handleClick(val) {
        setModalContext({
            title: PortfolioItems.title[val],   
            url: PortfolioItems.url[val],
            i: val
        })
        setModalShow(true);
    }

    return (
        <section>
            <div className="mw-100 container">
                <Tabs defaultActiveKey="all">
                    <Tab eventKey="livestream" class="panel" title="Live Stream">
                        <div id="tabs" >
                            <Card0 onClick={() => { handleClick(0) }} />
                            <Card1 onClick={() => { handleClick(1) }} />
                            <Card2 onClick={() => { handleClick(2) }} />
                            
                        </div>
                    </Tab>
                    <Tab eventKey="interview" class="panel" title="Interview">
                        <div id="tabs">
                        <Card3 onClick={() => { handleClick(3) }} />
                        <Card4 onClick={() => { handleClick(4) }} />
                        <Card5 onClick={() => { handleClick(5) }} />
                        <Card6 onClick={() => { handleClick(6) }} />
                        </div>

                    </Tab>
                    <Tab eventKey="product" class="panel" title="Product">
                        <div id="tabs">
                        <Card7 onClick={() => { handleClick(7) }} />
                        <Card8 onClick={() => { handleClick(8) }} />
                        <Card9 onClick={() => { handleClick(9) }} />
                        </div>
                    </Tab>
                    <Tab eventKey="informational" class="panel" title="Informational">
                        <div id="tabs">
                        <Card10 onClick={() => { handleClick(10) }} />
                        <Card11 onClick={() => { handleClick(11) }} />
                        <Card12 onClick={() => { handleClick(12) }} />
                        </div>
                    </Tab>
                    <Tab eventKey="all" class="panel" title="All">
                        <div id="tabs">

                        </div>
                    </Tab>
                </Tabs>
                <div className="row">



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


<br></br>
        </section>
    )
}

export default Section;