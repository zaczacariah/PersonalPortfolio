import React, { useState, useEffect } from 'react';
import './Header.scss';
import {images} from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { SwitchText } from '..';

const Header = () => {
    const [toggle, setToggle] = useState(false);
   return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo_circle_md} alt="logo" />
            
            <SwitchText 
                  initialText="Benjamin Taylor"
                  alternateText=".ZacZacariah"
                  interval={5000}
                  className="app__navbar-logo-h1"
                />
            
            
        </div>
        <ul className='app__navbar-links'>
            {['home', 'skills', 'work', 'testimonials', 'contact'].map((item) => (
                <li className="app__flex p-text" key={`link-${item}`}>
                    <div />
                    <a href={`#${item}`} className="">{item}</a>
                </li>
            ))}
        </ul>

        <div className="app__navbar-menu">
            <HiMenuAlt4 
                onClick={() => setToggle(true)}
            />

            {toggle && (
                <motion.div
                    whileInView={{ x: [300, 0] }}
                    transition={{ duration: 0.85, ease: 'easeOut'}}
                    
                >
                    <ul>
                    {['home', 'skills', 'work', 'testimonials', 'contact'].map((item) => (
                        <li key={`#${item}`}>
                            
                            <a href={`#${item}`} onClick={() =>  setToggle(false)} className="">{item}</a>
                        </li>
                    ))}
                    </ul>
                    <HiX onClick={() =>  setToggle(false)} />
                </motion.div>
            )}
        </div>
    
    </nav>
  )
}

export default Header