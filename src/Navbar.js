import React,{useState} from 'react';
import{
    BrowserRouter as Router,
    Link
  } from 'react-router-dom';
import './Navbar.css';
import './bootstrap.css'
import { motion } from 'framer-motion';
import AnimatedRoutes from './tools/AnimatedRoutes';

  const variants = {
    open:{opacity:1,x:"150%"},
    closed:{opacity:1,x:"100%"}
  }
  function Navbar() {
    const [show, setShow] = useState("close");
        return (
                <Router>
                    <div className="row nav-div">
                        <div className='nav-left bg-dark text-white'>
                            <img src="../logo/turn-branding-palakkad-logo.png" alt="" srcset="" />
                        </div>
                        <div className='nav-right'>
                         
                            <Link to="/" href="#"></Link>
                        
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/about" className="nav-link active" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/services" className="nav-link" >Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/team" className="nav-link" >Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/works" className="nav-link" >Works</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" >Careers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contact" className="nav-link" >Contact</Link>
                                </li>
                                </ul>
                             
                                <motion.div className="hamburger toggle" onClick={()=>setShow(show => !show)}>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                    <div className="line"></div>
                                </motion.div>
                            </div>
                          
                        </div>
                    </div>
                    <motion.div animate={show ? "open":"close"} variants={variants}
                                transition={{duration:0.5}} className="mob-nav-container" onClick={()=>setShow(show => !show)}>
                            <motion.div className='inner-nav mt-3'>
                                <ul className="navbar-nav-mob">
                                    <li className="nav-item active">
                                        <Link to="/" className="nav-link" >Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link" >About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/services" className="nav-link" >Services</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/team" className="nav-link" >Team</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/works" className="nav-link" >Works</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" >Careers</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link" >Contact</Link>
                                    </li>
                                </ul>
                            </motion.div>
                        </motion.div>
                    <div className='row '>
                        <div className='col-random-1 bg-bw nav-left-container h-100vh'>
                            <pre className='text-white '>FACEBOOK   |   INSTAGRAM</pre>
                        </div>
                       
                        <div className='col-random-10 h-100vh'>
                            <AnimatedRoutes/>
                        {/* <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/about' element={<About/>}/>
                        </Routes> */}
                        </div>
                        <div className='col-random-1 right h-100vh'>

                        </div>
                
                    </div>
                </Router>
            
        );
    
    }

export default Navbar;