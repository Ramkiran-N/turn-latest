import React from 'react'

import{
    Routes,
    Route,
    useLocation
  } from 'react-router-dom';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import { AnimatePresence } from 'framer-motion';
function AnimatedRoutes() {
    
    const location = useLocation();
  return (
                    <AnimatePresence>
                        <Routes location={location} key={location.pathname}>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/services' element={<Services/>}/>
                        </Routes>
                    </AnimatePresence>
  )
}

export default AnimatedRoutes