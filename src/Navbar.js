import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useLocation
  } from 'react-router-dom';
import './Navbar.css';
import './bootstrap.css'
import Home from './pages/Home';
import About from './pages/About';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AnimatedRoutes from './tools/AnimatedRoutes';
  function Navbar() {
        return (
                <Router>
                    <div className="row nav-div">
                        <div className='nav-left bg-dark text-white'>
                            <img src="logo/turn-branding-palakkad-logo.png" alt="" srcset="" />
                        </div>
                        <div className='nav-right'>
                         
                            <Link to="/" href="#"></Link>
                        
                            <div className='d-flex justify-content-center align-items-center h-100'>
                                <ul className="navbar-nav">
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
                                    <Link to="/" className="nav-link" >Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" >Works</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" >Clients</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" >Contact</Link>
                                </li>
                                </ul>
                            </div>
                          
                        </div>
                    </div>
                    <div className='row '>
                        <div className='col-random-1 bg-bw nav-left-container h-100vh'>
                            <pre className='text-white '>FACEBOOK   |   INSTAGRAM</pre>
                            {/* <div className=''> */}
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
                                    <Link to="/" className="nav-link" >Team</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" >Works</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" >Clients</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" >Contact</Link>
                                </li>
                                </ul>
                            </div>
                        {/* </div> */}
                       
                        <div className='col-random-10 h-100vh'>
                            <AnimatedRoutes/>
                        {/* <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/about' element={<About/>}/>
                        </Routes> */}
                        </div>
                        <div className='col-random-1 h-100vh'>

                        </div>
                
                    </div>
                </Router>
            
        );
    
    }

export default Navbar;