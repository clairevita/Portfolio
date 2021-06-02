import React from 'react';
import '../Card.css';
import image from '../../images/5.png';
const Card5 = ({ onClick }) => (

    <div onClick={onClick} className="col-lg-6 mt-2" id="portfolioimg5">
        <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img"
                alt="A screenshot from the CSC-Visualizer app. It showcases visualized university statistics for Harvard.">
            </img>
            <div className="card-img-overlay">
            <h3 className="center">CSC-Visualizer, 2020</h3>
            </div>
        </div>
    </div>
)


export default Card5;