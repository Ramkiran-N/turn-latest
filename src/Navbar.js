import{
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';
import './Navbar.css';
import './bootstrap.css'
import Home from './pages/Home';
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
                                <ul className="navbar-nav d-flex">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" >About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/" className="nav-link" >Services</Link>
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
                    <div className='row'>
                        <div className='col-random-1 bg-bw nav-left-container'>
                            <pre className='text-white '>FACEBOOK   |   INSTAGRAM</pre>
                        </div>
                        <div className='col-random-10'>
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                        </Routes>
                        </div>
                        <div className='col-random-1'>

                        </div>
                    </div>
                </Router>
            
        );
    
    }

export default Navbar;