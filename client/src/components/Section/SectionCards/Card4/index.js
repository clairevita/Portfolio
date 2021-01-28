import React from 'react';
import '../Card.css';
import image from '../Images/4.png';
function Card4() {
    return (
        <div class="col-lg-6 px-0" id="portfolioimg4">
        <div class="card bg-dark text-white rounded-0">
        <img src={image} class="card-img"
                alt="A screenshot from the Work Day Scheduler web app. It shows a sections for each hour of the day colored according to if it has passed, current, or future.">
            </img>
            <div class="card-img-overlay">
                <h1 class="center display-4">What's My Weather, 2020</h1>
            </div>
        </div>
    </div>
    )
}

export default Card4;