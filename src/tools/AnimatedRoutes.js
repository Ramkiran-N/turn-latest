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
import Team from '../pages/Team';
import Works from '../pages/Works';
import Contact from '../pages/Contact';
import { AnimatePresence } from 'framer-motion';
function AnimatedRoutes() {
    
    const location = useLocation();
  return (
                    <AnimatePresence>
                        <Routes location={location} key={location.pathname}>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/about' element={<About/>}/>
                            <Route path='/services' element={<Services/>}/>
                            <Route path='/team' element={<Team/>}/>
                            <Route path='/works' element={<Works/>}/>
                            <Route path='/contact' element={<Contact/>}/>
                        </Routes>
                    </AnimatePresence>
  )
}

export default AnimatedRoutes