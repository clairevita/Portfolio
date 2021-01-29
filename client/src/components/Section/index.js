import React from 'react';
import './Section.css';
import Card0 from './SectionCards/Card0';
import Card1 from './SectionCards/Card1';
import Card2 from './SectionCards/Card2';
import Card3 from './SectionCards/Card3';
import Card4 from './SectionCards/Card4';
import Card5 from './SectionCards/Card5';
function Section() {
    return (
        <section>
            <div className="mw-100 container">
                <div className="row">
                    <Card0 />
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                    <Card5 />
                </div>
            </div>
        </section>
    )
}

export default Section;