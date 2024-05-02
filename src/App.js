import React from 'react'
import { Header, Footer, Skills, Work, About, Testimonials } from './containers/index.js';
import { Navbar, Frame } from './components/index.js';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Frame />
      <Header />
      {/* <About />  maybe can include teh bottom of this https://www.framer.com/motion/scroll-animations/*/}
      <Skills />
      <Work />
      {/* <Testimonials />
      <Footer /> */}
    </div>
  )
}

export default App