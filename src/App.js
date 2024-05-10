import React from 'react'
import {  About, Footer, Skills, Work, Testimonials } from './containers/index.js';
import { Header, Frame } from './components/index.js';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Frame />
      <About />
      {/* <About />  maybe can include teh bottom of this https://www.framer.com/motion/scroll-animations/*/}
      <Skills />
      <Work />
      {/* <Testimonials />
      <Footer /> */}
    </div>
  )
}

export default App