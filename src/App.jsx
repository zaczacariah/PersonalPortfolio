import React from 'react'
import {Outlet} from 'react-router-dom'
import { Header } from './components/index.js';

import './App.scss';


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      </>
  )
}

export default App
