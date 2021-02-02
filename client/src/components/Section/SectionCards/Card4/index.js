import React from 'react';
import '../Card.css';
import image from '../../images/4.png';
const Card4 = ({ onClick }) => (

        <div onClick={onClick} className="col-lg-6 px-0" id="portfolioimg4">
        <div className="card bg-dark text-white rounded-0">
        <img src={image} className="card-img"
                alt="A screenshot from the Work Day Scheduler web app. It shows a sections for each hour of the day colored according to if it has passed, current, or future.">
            </img>
            <div className="card-img-overlay">
                <h1 className="center display-4">What's My Weather, 2020</h1>
            </div>
        </div>
    </div>
    )


export default Card4;