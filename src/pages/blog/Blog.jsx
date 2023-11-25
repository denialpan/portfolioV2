import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import pageCSS from "./page.module.css"

function Blog() {
    return(

        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}>

            <div className={pageCSS.text}>
                BLENDER
                <Link to="/">HOME</Link>
            </div>

        </motion.div>
    )
}

export default Blog