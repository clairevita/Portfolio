import React from 'react';
import '../Card.css';
import image from '../../images/3.png';
const Card3 = ({ onClick }) => (

    <div onClick={onClick} className="col-lg-6 mt-2" id="portfolioimg3">
        <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img">
            </img>
            <div className="card-img-overlay">
            <h3 className="center">A Conversation with PTTI CEO, 2021</h3>
            </div>
        </div>
    </div>
)


export default Card3;