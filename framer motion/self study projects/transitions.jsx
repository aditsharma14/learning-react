import { easeIn, easeInOut, motion } from "framer-motion";
import { div } from "framer-motion/client";
const App=()=>{
    return(
        <div>
            <motion.div
                initial={{x:0}}
                animate={{x:100,y:100,scaleX:2,scaleY:2,rotateX:10,skewX:30}}
                style={{backgroundColor:"skyblue",
                    width:200,
                    height:100
                }}
                transition={{delay:5,duration:10,ease:easeIn}}
                    
            />
        </div>
    )
}
export default App;