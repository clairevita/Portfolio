import React from 'react';
import '../Card.css';
import image from '../../images/0.png'
const Card0 = ({ onClick }) => (

    <div onClick={onClick} className="col-lg-6 mt-2" id="portfolioimg0">
        <div className="card bg-dark text-white rounded-0">
            <img src={image} className="card-img"
                alt="Image of a Unity Game. A pink cloud hosts a variety of abstract 3D objects."></img>
            <div className="card-img-overlay">
            <h3 className="center">.sombra, 2017</h3>
            </div>
        </div>
    </div>
)


export default Card0;