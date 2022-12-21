import DemoCarousel from "../tools/DemoCarousel";
import './Home.css';
import { motion } from 'framer-motion';
function Home(){
    return(
        <motion.div initial={{width:0,position:'absolute',zIndex:1, transition:{duration:1}}} animate={{width:"100%",position:'relative',zIndex:1}} exit={{x: window.innerWidth,transition:{duration:0.5},position:'absolute',zIndex:0}}>
                <DemoCarousel/>
        </motion.div>
      
    );
}
export default Home;