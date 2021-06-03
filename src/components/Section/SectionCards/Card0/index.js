import React from 'react';
import '../Card.css';
import image from '../../images/0.png'
const Card0 = ({ onClick }) => (

    <div onClick={onClick} className="col-lg-6 mt-2" id="portfolioimg0">
        <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img"
                ></img>
            <div className="card-img-overlay">
            <h3 className="center">PTTI Graduation Live Stream, 2021</h3>
            </div>
        </div>
    </div>
)


export default Card0;