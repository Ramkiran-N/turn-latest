import DemoCarousel from "../tools/DemoCarousel";
import './Home.css';
import { motion } from 'framer-motion';
function Home(){
    return(
        <motion.div initial={{width:0, transition:{duration:0.9}}} animate={{width:"100%"}} exit={{x: window.innerWidth, transition:{duration:0.9},height:0,overflow:"hidden",zIndex:10}}>
                <DemoCarousel/>
        </motion.div>
      
    );
}
export default Home;