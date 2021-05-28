import React from 'react';
import '../Card.css';
import image from '../../images/1.png';
const Card1 = ({ onClick }) => (

        <div onClick={onClick} className="col-lg-3 px-0" id="portfolioimg1">
            <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img"
                    alt="Three cellphone screenshots are displayed. Each show images of a Fin Tech app, for gamified pitch competitions.">
                </img><div className="card-img-overlay">
                <h3 className="center">Funding Founding, 2019</h3>
                </div>
            </div>
        </div>
    )

    
export default Card1;