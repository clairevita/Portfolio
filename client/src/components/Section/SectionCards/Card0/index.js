import React from 'react';
import '../Card.css';
import image from '../Images/0.png'
function Card0() {
    return (
        <div class="col-lg-6 px-0" id="portfolioimg0">
            <div class="card bg-dark text-white rounded-0">
                <img src={image} class="card-img"
                    alt="Image of a Unity Game. A pink cloud hosts a variety of abstract 3D objects."></img>
                <div class="card-img-overlay">
                    <h1 class="center display-4">.sombra, 2017</h1>
                </div>
            </div>
        </div>
    )
}

export default Card0;