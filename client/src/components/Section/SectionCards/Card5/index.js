import React from 'react';
import '../Card.css';
import image from '../Images/5.png';
function Card5() {
    return (
        <div class="col-lg-6 px-0" id="portfolioimg5">
            <div class="card bg-dark text-white rounded-0">
            <img src={image} class="card-img"
                    alt="A screenshot from the CSC-Visualizer app. It showcases visualized university statistics for Harvard.">
                </img>
                <div class="card-img-overlay">
                    <h1 class="center display-4">CSC-Visualizer, 2020</h1>
                </div>
            </div>
        </div>
    )
}

export default Card5;