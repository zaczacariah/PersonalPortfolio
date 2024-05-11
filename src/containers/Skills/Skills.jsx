import React, { useState, useEffect } from 'react';
import './Skills.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import images from '../../constants/images'



const Skills = () => {
  const [skills, setSkills] = useState([]);

  const [animateCard, setAnimateCard] = useState({y:0, opacity: 1});
  
  useEffect(() => {
   const data = [
        // graphql,
    // node,
    // html,
    // react,
    // heroku,
    // mysql,
    // adobe
    {
      title: 'HTML & CSS',
      img: images.html
    },
    {
      title: 'react',
      img: images.react
    },
    {
      title: 'Node.js',
      img: images.node
    },
    {
      title: 'GraphQL',
      img: images.graphql
    },
    {
      title: 'MySQL',
      img: images.mysql
    },
    {
      title: 'Adobe Creative Suite',
      img: images.adobe
    },
    {
      title: 'Heroku',
      img: images.heroku
    }
    
  


   ];
      setSkills(data);
  

  }, []);



  return (
    <section className="app__skills">
      <h1>Skills</h1>
      <div>
        {
        skills.map((skill, index) => (
          <motion.div 
            animate={animateCard}
            whileInView={{ opacity: [0,1]}}
            whileHover={{ scale: 1.05, transition: { duration: 0.5 }}}
            transition={{ duration: 1, type: 'tween'}}
            className="app__skills-item app__flex"
            key={skill.title + index}
            >
              <img src={skill.img} alt={skill.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }} >{skill.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }} >{skill.description}</p>
            </motion.div>
        ))}
      </div>
    </section>
  )
}

export default AppWrap(Skills, 'skills');