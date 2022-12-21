// import DemoCarousel from "../tools/DemoCarousel";
import './About.css';
import { motion } from 'framer-motion';
function About(){
    return(
        <motion.div className='about' initial={{width:0,position:'absolute',height:0,overflow:"auto",zIndex:1, transition:{duration:1}}} animate={{width:"100%",position:'relative',zIndex:1,overflow:"auto",height:"100%"}} exit={{x: window.innerWidth, transition:{duration:0.5},position:'absolute',zIndex:0}}>
                <div className="inner-container">
                    <div className="image-container d-flex justify-content-center align-items-center text-center">
                        <img src="banner/turn-about.jpg" alt="" srcset="" />
                        <div>
                            <pre>A BRAND IS MORE THAN A COLLECTION OF PRODUCTS AND ADS.</pre>
                            <pre>IT'S AN EXPERIENCE THAT ENJOYED FOR IT'S UTILITY AND ELEGANCE- AT LEAST.</pre>
                            <pre>IT SHOULD BE. WHAT GOES INTO THE CREATION OF THAT EXPERIENCE ARE A THOUSAND DETAILS</pre>
                            <pre>BIG AND SMALL. BUT NONE OF THEM INSIGNIFICANT</pre><br />
                            <pre>THIS BELIEF IS WHAT MAKES TURN A DEPENDABLE BRAND STRATEGY AND</pre>
                            <pre>COMMUNICATION PARTNER FOR YOU</pre>
                            <p>A BRAND IS MORE THAN A COLLECTION OF PRODUCTS AND ADS. IT'S AN EXPERIENCE THAT ENJOYED FOR IT'S UTILITY AND ELEGANCE- AT LEAST. 
                            IT SHOULD BE. WHAT GOES INTO THE CREATION OF THAT EXPERIENCE ARE A THOUSAND DETAILS BIG AND SMALL. BUT NONE OF THEM INSIGNIFICANT
                            THIS BELIEF IS WHAT MAKES TURN A DEPENDABLE BRAND STRATEGY AND COMMUNICATION PARTNER FOR YOU
                            </p>
                        </div>
                    </div>
                </div>
        </motion.div>
      
    );
}
export default About;