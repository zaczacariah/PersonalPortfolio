import {  About, Skills, Work } from '../containers';

const Home = () => {
  return (
    <>
      <About />
      {/* <About />  maybe can include teh bottom of this https://www.framer.com/motion/scroll-animations/*/}
      <Skills />
      <Work />
    </>
  )
}

export default Home