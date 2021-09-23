import React from 'react'; 
import { Link } from 'react-router-dom';

const EasterEgg = () => {
    return (
        <div class="easter-egg-avocado">
            <div class="nav">
                <Link to="/porfolio">
                    Home
                </Link>
                <Link to="/portfolio/alabama">
                    Alabama
                </Link>
            </div>
            <div class="inner-avocado">
                <div class="inner-inner-avocado">
                    Inner-inner div
                </div>
                Avocado
                <div class="other-inner-inner-avocado">
                    Other inner-inner div
                </div>
                <div class="img-lion-fish"></div>
                <h6 class="other-inner-inner-avocado" id="penguin" swordfish="batman" value="1">
                    Other inner-inner div
                </h6>
                <p>
                    Oak Tree
                </p>
            </div>
        </div>
    ); 
}; 

export default EasterEgg; 