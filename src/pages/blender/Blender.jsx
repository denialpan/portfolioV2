import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import pageCSS from "./page.module.css"
import { useEffect, useState } from "react";

function Blog() {

    //page consistency (FIRST VISIT, LIGHTMODE)
    const [bg, setBg] = useState("");
    const [isDark, setIsDark] = useState(false);

    //effect to set the background color from local storage on component mount
    useEffect(() => {
        const savedBg = localStorage.getItem('backgroundColor');

        if (savedBg) {
            setBg(savedBg);
        }

        if (savedBg === '#111111') {
            setIsDark(true);
        }

    }, []);

    //effect to save the background color to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('backgroundColor', bg);
    }, [bg]);

    return(

        <motion.div 
            style={{backgroundColor: bg}}
            animate={{backgroundColor: bg}}
            transition={{
                ease: "linear",
                duration: 0.3
            }}
            className={pageCSS['page-container']}
            >

            <motion.div 
            
            animate={{color: isDark ? "#FFFFFF" : "#000000"}}
            transition={{
                ease: "linear",
                duration: 0.3
            }}
            
            className={pageCSS.text}>
                
                <div> Hello, this page is currently under construction! Come back soon! </div>
                <Link to="/">HOME</Link>
            </motion.div>

        </motion.div>
    )
}

export default Blog