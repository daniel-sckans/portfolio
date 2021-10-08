import React from "react";
import ChocoBike from '../../assets/images/chocoloate-bike-1-0-1440615893.jpg'; 



const Banner = ({ children }) => {
    return (
        <>
            <div className="banner">
                <img className="cb" src={ChocoBike} />
                <div className="text-cont">
                    { children }
                </div>
            </div>
        </>
    ); 
}

export default Banner; 