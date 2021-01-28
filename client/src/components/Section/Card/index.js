import React from 'react';
import "./SectionCard.css";
import github from './images/github.png'
import linkedin from './images/linkedin.png'
function SectionCard() {
    return (
      
        <div className="row">
            <div className="mt-5 col">
                <h1 className="display-4" id="suit">Claire ♘ Vita</h1>
                <br></br>
                <p className="lead">Claire is a professional in the field of gamified experience development. Her designs
                    span mobile, web, and virtual reality platforms. As a project manager, she elevates teams and
                    supports projects to delivery, come hell or highwater.
                </p>
                <div className="d-flex justify-content-center">
                    <a href="https://github.com/clairevita" target="_blank"><img src={github} id="socialIcon"
                            className="mx-4"></img></a>
                    <a href="https://www.linkedin.com/in/clairevita/" target="_blank"><img src={linkedin}
                            id="socialIcon" className="mx-4"></img></a>
                </div>
            </div>
        </div>
       
    );
}

export default SectionCard;