import React from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper'
import { images } from '../../constants';
import { SwitchTitle, SwitchInfo, Hero } from '../../components';


const About = () => {
  const titleText = [ 'Benjamin Taylor', '.ZacZacariah'];

  const entries = [
    {
      title: 'Full Stack Developer',
      head: 'MERN/NoSQL/SQL',
      // subtitles: ['Intelligent.', 'Fast.', 'Common Sense.'],
    },
    {
      title: 'Web Developer',
      head: 'MERN/NoSQL/SQL',
      // subtitles: ['Efficient.', 'Streamlined.', 'Automated.'],
    },
    // Add more entries as needed
  ];
  return (
    <section className="app__header app__flex">
      <motion.div
        whileInView={{ opacity:[0,1], staggerChildren: 1}}
        transition={{ duration: 2, staggerChildren: 0.5 }}
        className='app__header-badge app__flex'
        >
          <Hero 
            logo={images.logo_trans} 
            headshot={images.headshot}
            />
          <SwitchTitle 
                  entries={titleText}
                  className="app__header-h1"
                />
        </motion.div>

      <motion.div
        whileInView={{  opacity: [0,1]}}
        
        transition={{ duration: 2}}
        className='app__header-info app__flex'
        >
          <div className="app__header-slider ">
            <div>
            <SwitchInfo entries={entries} />
          {/* <motion.div 
            whileInView={{ y: [50, 0], opacity: [0,1]}}
            transition={{ duration: 1, delay: 0.7}}
          >
            
          </motion.div> */}
     
          </div>
          </div>

        </motion.div>
    </section> 
  )
}

export default AppWrap(About, 'home');