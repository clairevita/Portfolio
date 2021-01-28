import React from 'react';
import '../Card.css';
import image from '../Images/2.png';
function Card2() {
    return (
        <div class="col-lg-6 px-0" id="portfolioimg2">
            <div class="card bg-dark text-white rounded-0">
            <img src={image} class="card-img" 
            alt="A screenshot from a VR welding simulator game.">
                </img>
                <div class="card-img-overlay">
                    <h1 class="center display-4">VRweld, 2020</h1>
                </div>
            </div>
        </div>
    )
}

export default Card2;