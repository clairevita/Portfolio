import React from 'react';
import '../Card.css';
import image from '../../images/10.png';
const Card10 = ({ onClick }) => (

    <div onClick={onClick} className="col-lg-6 mt-2" id="portfolioimg5">
        <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img">
            </img>
            <div className="card-img-overlay">
                <h3 className="center">How To Set Up an Adept Quattro, 2021</h3>
            </div>
        </div>
    </div>
)


export default Card10;