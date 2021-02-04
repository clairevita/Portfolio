import React from 'react';
import '../Card.css';
import image from '../../images/2.png';
const Card2 = ({ onClick }) => (

    <div onClick={onClick} className="col-lg-6 px-0" id="portfolioimg2">
        <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img"
                alt="A screenshot from a VR welding simulator game.">
            </img>
            <div className="card-img-overlay">
                <h1 className="center display-4">VRweld, 2020</h1>
            </div>
        </div>
    </div>
)


export default Card2;