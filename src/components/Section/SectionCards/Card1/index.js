import React from 'react';
import '../Card.css';
import image from '../../images/1.png';
const Card1 = ({ onClick }) => (

        <div onClick={onClick} className="col-lg-6 mt-2" id="portfolioimg1">
            <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img">
                </img><div className="card-img-overlay">
                <h3 className="center">preRound: Future Tech, 2019</h3>
                </div>
            </div>
        </div>
    )

    
export default Card1;