import React from 'react';
import '../Card.css';
import image from '../../images/3.png';
const Card3 = ({ onClick }) => (

    <div onClick={onClick} className="col-lg-6 px-0" id="portfolioimg3">
        <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img"
                alt="A screenshot from the UMEWE web app. It consists of two address inputs and restaurant information inputs">
            </img>
            <div className="card-img-overlay">
                <h1 className="center display-4">UMEWE, 2020</h1>
            </div>
        </div>
    </div>
)


export default Card3;