import React from 'react';
import '../Card.css';
import image from '../../images/12.png';
const Card11 = ({ onClick }) => (

    <div onClick={onClick} className="col-lg-6 mt-2" id="portfolioimg12">
        <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img">
            </img>
            <div className="card-img-overlay">
                <h3 className="center">What Is Sterile Processing?, 2021</h3>
            </div>
        </div>
    </div>
)


export default Card11;