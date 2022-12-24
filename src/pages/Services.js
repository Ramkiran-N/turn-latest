import React from 'react'
import './Services.css'
import { motion } from 'framer-motion';
function Services() {
  return (
    <motion.div className='services' initial={{width:0, transition:{duration:0.9},position:"relative"}} animate={{width:"100%"}} exit={{x: window.innerWidth,transition:{duration:0.6},height:0,overflow:"hidden",position:"absolute",zIndex:1}}>
        <div className="container d-flex flex-wrap justify-content-center pb-5">
            <motion.div className="card text-center mt-5 mx-2"   whileHover={{
                        scale: 1.1,
                        transition: { duration: .5 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    >
                <img className="card-img-top mx-auto mt-3" src="icons/brand-planning.png" alt="branding service"/>
                <div className="card-body">
                    <h6 className="card-title">Branding</h6>
                    {/* <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </motion.div>
            <motion.div className="card text-center mt-5 mx-2"   whileHover={{
                        scale: 1.1,
                        transition: { duration: .5 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    >
                <img className="card-img-top mx-auto mt-3" src="icons/digital-marketing.png" alt="digital marketing service"/>
                <div className="card-body">
                    <h6 className="card-title">Digital Marketing</h6>
                    {/* <p className="card-text text-center">Hey what is  the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </motion.div>
            <motion.div className="card text-center mt-5 mx-2"   whileHover={{
                        scale: 1.1,
                        transition: { duration: .5 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    >
                <img className="card-img-top mx-auto mt-3" src="icons/print-ads-flex.png" alt="print ads service"/>
                <div className="card-body">
                    <h6 className="card-title">Print Ads</h6>
                    {/* <p className="card-text text-center">Hey what is  the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </motion.div>
            <motion.div className="card text-center mt-5 mx-2"   whileHover={{
                        scale: 1.1,
                        transition: { duration: .5 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    >
                <img className="card-img-top mx-auto mt-3" src="icons/package-designing.png" alt="package designing service"/>
                <div className="card-body">
                    <h6 className="card-title">Packaging</h6>
                    {/* <p className="card-text text-center">Hey what is  the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </motion.div>
            <motion.div className="card text-center mt-5 mx-2"   whileHover={{
                        scale: 1.1,
                        transition: { duration: .5 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    >
                <img className="card-img-top mx-auto mt-3" src="icons/web-designing.png" alt="web designing"/>
                <div className="card-body">
                    <h6 className="card-title">Websites</h6>
                    {/* <p className="card-text text-center">Hey what is  the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </motion.div>
            <motion.div className="card text-center mt-5 mx-2"   whileHover={{
                        scale: 1.1,
                        transition: { duration: .5 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    >
                <img className="card-img-top mx-auto mt-3" src="icons/seo-agency.png" alt="seo"/>
                <div className="card-body">
                    <h6 className="card-title">SEO</h6>
                    {/* <p className="card-text text-center">Hey what is  the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </motion.div>
            <motion.div className="card text-center mt-5 mx-2"   whileHover={{
                        scale: 1.1,
                        transition: { duration: .5 },
                    }}
                    whileTap={{ scale: 0.7 }}
                    >
                <img className="card-img-top mx-auto mt-3" src="icons/video-advertising.png" alt="video ad"/>
                <div className="card-body">
                    <h6 className="card-title">TVC</h6>
                    {/* <p className="card-text text-center">Hey what is  the card's content.</p> */}
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                </div>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Services