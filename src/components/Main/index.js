import React from 'react';
import "./Main.css";
import github from './images/github.png';
import linkedin from './images/linkedin.png';
import claire from './images/profile-2.png';
function Main() {
    return (
        <main role="main" className="container">
            
            <div className="row">
                <div className="col d-none d-lg-block">
                <img className="mt-5" width="120%" src={claire}></img>
                </div>
                <div className="mt-5 mx-5 col-9">
                    <h1 className="display-4" id="suit">Claire Vita</h1>
                    <br></br>
                    <p className="lead">Claire produces media for screens. She has designed and coordinated production for video, interactive, and live stream media. 
                    
                    As a project manager, she elevates teams and supports projects to delivery, come hell or highwater.

                    <br></br>
                    <br></br>

                    This is her video portfolio! Included are samples of the kinds of work she's produced in the past. For development samples, see her <a href="https://clairevita.herokuapp.com/">programming portfolio</a>.
                </p>

                </div>
            </div>
            <div className="mt-5 row justify-content-center">
            <div className="d-flex justify-content-center">
                        <a href="https://github.com/clairevita" target="_blank"><img src={github} id="socialIcon"
                            className="mx-4"></img></a>
                        <a href="https://www.linkedin.com/in/clairevita/" target="_blank"><img src={linkedin}
                            id="socialIcon" className="mx-4"></img></a>
                    </div>
            </div>
        </main>
    );
}

export default Main;