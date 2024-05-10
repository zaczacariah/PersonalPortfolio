import React, { useState, useEffect } from 'react';
import './Work.scss';
import {images} from "../../constants";
import { motion } from 'framer-motion';
import { AppWrap } from '../../wrapper';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';


const Work = () => {

  const [animateCard, setAnimateCard] = useState({y:0, opacity: 1});
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [page, setPage] = useState(1);




  const handlePagination = (page) => {
  
    setPage(page);
    setFilterWork(works.slice((page - 1) * 4, page * 4));
    
 }
    //Work Object
  // {
  //    name,
  //    title
  //    projectLink
  //    codeLink
  //    description
  //   tags: []
  //  }


  
  let durations = [];
  useEffect(() => {

    const data = [
      {
        name: "GoalGetter, a node.js based goal management web app.",
        title: "GoalGetter",
        description: "Is a SQL, Sequalize, Node.js and Handlebars.js Web app built as a project to incorporate building API's, backend and front end. ",
        tags: ["NodeJs", "Sequalize", "SQL"],
        src: images.goalgetter,
        codeLink: "https://github.com/zaczacariah/GoalGetter"
      },
      {
        name: "NetworkEQ is a basic headless social network platform built using Mongodb, mongoose and node.js.",
        title: "NetworkEQ",
        description: "NetworkEQ is a basic headless social network platform built using Mongodb, mongoose and node.js",
        tags: ["NodeJs", "MongoDB", "Mongoose", "API"],
        src: images.networkeq,
        codeLink: "https://github.com/zaczacariah/NetworkEQ"
      }
    ]

      setWorks(data);
      setFilterWork(data);  //data.slice(0, 4) to get 4 pages

    
    durations = staggerChildCustom(works.length);

  }, []);

 
  // Staggering the child items of work by calculating the duration of each item
  function staggerChildCustom(numElements) {
    
    let increment = (4 - 0.5) / (numElements - 1);
    works.map((index) => {
      durations.push(0.5 + (index * increment));
    });
    
    return durations;
  }


  return (
    <section className="app__work">
      <h1>Work</h1>
    {/* <div className="app__work-filter">
      {['UI', 'Web App', 'Mobile App', 'React JS', 'All'].map((filter, index) => (
        <div
          key={index}
          onClick={() => handleWorkFilter(filter)}
          className={`app__work-filter-item app__flex p-text ${activeFilter === filter ? 'item-active' : ''}`}
          >
            {filter}
        </div>
      ))}
    </div> */}

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren:3}}
          className='app__work-portfolio'
          >
            {filterWork.map((work, index) => (
              <motion.div 
              whileInView={{ opacity: [0,1]}}
            
              whileHover={{ scale: 1.03, transition: { duration: 0.2 }}}
              transition={{ duration: durations[index], type: 'tween'}}
              className="app__work-item app__flex"
              key={index}
              >
                <div className="app__work-img app__flex">
                  
                  <img src={work.src} alt={work.name} />
                  
                  <motion.div
                  whileHover={{opacity: [0,1]}}
                  transition={{ duration: 0.25, ease: 'easeInOut'}}
                  className='app__work-hover app__flex'
                  >
                    <a href={work.projectLink} target="_blank" rel="norefferer">
                      <motion.div
                        whileInView={{scale: [0,1]}}
                        whileHover={{ scale: [1,0.9]}}
                        transition={{ duration: 0.25}}
                        className='app__flex'
                        >
                          <AiFillEye />
                        </motion.div>
                      </a>
                      <a href={work.codeLink} target="_blank" rel="norefferer">
                      <motion.div
                        whileInView={{scale: [0,1]}}
                        whileHover={{ scale: [1,0.9]}}
                        transition={{ duration: 0.25}}
                        className='app__flex'
                        >
                          <AiFillGithub />
                        </motion.div>
                      </a>
                  </motion.div>
                </div>
                <div className='app__work-content app__flex'>
                  <h4 className='bold-text'>{work.title}</h4>
                  <p className="p-text" style={{ marginTop:10 }}>{work.description}</p>
                  <div className="app__work-tag app__flex">
                    <p className="p-text">{
                    work.tags.map((tag, index)=>{
                      /*Formatting the tags*/
                      if(index !== work.tags.length-1){
                        return `${tag}  • `
                      } else {
                        return `${tag}`
                      }
                    })}</p>
                  </div>
                </div>
              </motion.div>
            ))}
            
          </motion.div>
          <div className="app__work-pagination app__flex">
            {/* Incase we have more that 4 works then add pagination */}
            {(Math.ceil(works.length / 4) > 1) && page > 1 &&  (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePagination(page - 1)}
                className="app__work-pagination-item app__flex"
                >
                  <p className="p-text">Prev</p>
              </motion.div>
            )}
           
            {page < Math.ceil(works.length / 4) && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePagination(page + 1)}
                className="app__work-pagination-item app__flex"
                >
                  <p className="p-text">Next</p>
              </motion.div>
            )}
          </div>

      <div>

      </div>
    </section>
  )
}

export default AppWrap(Work, 'work');