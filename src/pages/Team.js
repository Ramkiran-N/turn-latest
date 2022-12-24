import React from 'react'
import './Team.css'
import { motion } from 'framer-motion';
function Team() {
  return (
    <div className='team'>
        <div className="container d-flex flex-wrap justify-content-center pb-5">
            <div className="card text-center mt-5 "  >
                <img className="card-img-top mx-auto mt-3" src="../team/team1.png" alt="branding service"/>
                <div className="card-body">
                    <h6 className="card-title">Joe</h6>
                    {/* <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card text-center mt-5 "  >
                <img className="card-img-top mx-auto mt-3" src="../team/team2.png" alt="branding service"/>
                <div className="card-body">
                    <h6 className="card-title">John</h6>
                    {/* <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card text-center mt-5 "  >
                <img className="card-img-top mx-auto mt-3" src="../team/team3.png" alt="branding service"/>
                <div className="card-body">
                    <h6 className="card-title">Jose</h6>
                    {/* <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card text-center mt-5 mx-2"  >
                <img className="card-img-top mx-auto mt-3" src="../team/team3.png" alt="branding service"/>
                <div className="card-body">
                    <h6 className="card-title">Jose</h6>
                    {/* <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team