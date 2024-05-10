import React, { useState, useEffect } from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';



const Skills = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
   const data = [];
      setAbouts(data);
  

  }, []);

  function staggerChildCustom(numElements, index) {
    let increment = (4 - 0.5) / (numElements - 1);
    return 0.5 + (index * increment);
  }

  return (
    <section className="app__skills">
      <h1>Skills</h1>
      <div>
        {
        abouts.map((about, index) => (
          <motion.div 
            whileInView={{ opacity: [0,1]}}
            whileHover={{ scale: 1.05, transition: { duration: 0.5 }}}
            transition={{ duration: staggerChildCustom(abouts.length, index), type: 'tween'}}
            className="app__skills-item app__flex"
            key={about.title + index}
            >
              <img src="" alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }} >{about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }} >{about.description}</p>
            </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AppWrap(Skills, 'skills');