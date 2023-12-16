import React from 'react'

import {Footer, Blog, Possibility, Features, WhatGPT4, Header} from "./containers";
import { Brand, Navbar, Cta} from "./components";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
        <div className='gradient_bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT4/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App