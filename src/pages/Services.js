import React from 'react'
import './Services.css'
import { motion } from 'framer-motion';
function Services() {
  return (
    <motion.div className='services' initial={{width:0,position:'absolute',zIndex:1, transition:{duration:1}}} animate={{width:"100%",position:'relative',zIndex:1}} exit={{x: window.innerWidth,transition:{duration:0.5},position:'absolute',zIndex:0}}>
        <div className="container d-flex flex-wrap justify-content-center pb-5">
            <div className="card text-center mt-5 mx-2" >
                <img className="card-img-top mx-auto mt-3" src="icons/brand-planning.png" alt="branding service"/>
                <div className="card-body">
                    <h6 className="card-title">Branding</h6>
                    {/* <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card text-center mt-5 mx-2" >
                <img className="card-img-top mx-auto mt-3" src="icons/digital-marketing.png" alt="digital marketing service"/>
                <div className="card-body">
                    <h6 className="card-title">Digital Marketing</h6>
                    {/* <p className="card-text text-center">Hey what is  the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card text-center mt-5 mx-2" >
                <img className="card-img-top mx-auto mt-3" src="icons/print-ads-flex.png" alt="print ads service"/>
                <div className="card-body">
                    <h6 className="card-title">Print Ads</h6>
                    {/* <p className="card-text text-center">Hey what is  the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card text-center mt-5 mx-2" >
                <img className="card-img-top mx-auto mt-3" src="icons/package-designing.png" alt="package designing service"/>
                <div className="card-body">
                    <h6 className="card-title">Packaging</h6>
                    {/* <p className="card-text text-center">Hey what is  the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card text-center mt-5 mx-2" >
                <img className="card-img-top mx-auto mt-3" src="icons/web-designing.png" alt="web designing"/>
                <div className="card-body">
                    <h6 className="card-title">Websites</h6>
                    {/* <p className="card-text text-center">Hey what is  the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card text-center mt-5 mx-2" >
                <img className="card-img-top mx-auto mt-3" src="icons/seo-agency.png" alt="seo"/>
                <div className="card-body">
                    <h6 className="card-title">SEO</h6>
                    {/* <p className="card-text text-center">Hey what is  the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
            <div className="card text-center mt-5 mx-2" >
                <img className="card-img-top mx-auto mt-3" src="icons/video-advertising.png" alt="video ad"/>
                <div className="card-body">
                    <h6 className="card-title">TVC</h6>
                    {/* <p className="card-text text-center">Hey what is  the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Services