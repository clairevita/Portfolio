import React from 'react';
import '../Card.css';
import image from '../Images/3.png';
function Card3() {
    return (
        <div class="col-lg-6 px-0" id="portfolioimg3">
            <div class="card bg-dark text-white rounded-0">
            <img src={image} class="card-img"
                    alt="A screenshot from the UMEWE web app. It consists of two address inputs and restaurant information inputs">
                </img>
                <div class="card-img-overlay">
                    <h1 class="center display-4">UMEWE, 2020</h1>
                </div>
            </div>
        </div>
    )
}

export default Card3;