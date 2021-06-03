import React from 'react';
import '../Card.css';
import image from '../../images/4.png';
const Card4 = ({ onClick }) => (

    <div onClick={onClick} className="col-lg-6 mt-2" id="portfolioimg4">
        <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img">
            </img>
            <div className="card-img-overlay">
            <h3 className="center">PTTI Admissions Interview, 2020</h3>
            </div>
        </div>
    </div>
)


export default Card4;