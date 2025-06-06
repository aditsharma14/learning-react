import {motion} from "framer-motion"
function App(){
    return(
        <div>
            <motion.div
            animate={{x:100,y:200}}
            transition={{duration:0.25}}
            style={{
                width:100,
                height:200,
                backgroundColor:"skyblue"
            }}
            />
        </div>
    )
}
export default App;