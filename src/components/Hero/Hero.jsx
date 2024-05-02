import React, { useState, useEffect } from 'react';
import './Hero.scss';


const Hero = ({ logo, headshot }) => {
    // const [currentEntryIndex, setCurrentEntryIndex] = useState(0);
    var [translate, setTranslate] = useState(1);


    useEffect(() => {
        const interval = setInterval(() => {
            setTranslate(prevTranslate => prevTranslate * -1);
        }, 7000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this runs once on mount


    return (
        <div className={translate === 1 ? "app__header-hero translated" : "app__header-hero hero-logo"}>
            <div className={translate === 1 ? "hero-logo translated" : "hero-logo"}>
            <img src={logo}  alt="" />
            </div>
            <div className={translate === 1 ? "hero-headshot translated" : "hero-headshot"}>
            <img src={headshot}  alt=""  />
            </div>
        </div>
    )
}

export default Hero