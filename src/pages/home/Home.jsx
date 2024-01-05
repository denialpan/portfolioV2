import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import pageCSS from './page.module.css'

import linkedin from '../../images/icons/linkedin.svg'
import github from '../../images/icons/github.svg'
import facebook from '../../images/icons/facebook.svg'

import darkThemeToggle from '../../images/icons/dark-theme.svg'

import phrasesJSON from './phrases.json'

import me from '../../images/me.jpg'

function Home() {

    const defaultPhrase = "Hello, I'm Daniel Pan!";

    let colorDark = "#111111";
    let colorLight = "#FFFFFF";

    const [phrase, setPhrase] = useState(defaultPhrase);
    const [isHovered, setIsHovered] = useState(false);
    const [phrases, setPhrases] = useState([]);

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

    //load json 
    useEffect(() => {
        const getPhrases = async () => {
            try {
                const loadedData = JSON.stringify(phrasesJSON);
                const json = JSON.parse(loadedData);
                setPhrases(json);
            } catch (error) {
                console.log(error);
            }
        };
        getPhrases();
    }, []);

    const choosePhrase = () => {

        if (!isHovered) {
            setPhrase(phrases[Math.floor(Math.random() * phrases.length)]);
            setIsHovered(true);
        }
        // console.log(phrase);

    };

    const setDark = () => {
        setBg(colorDark);
        setIsDark(true);
        document.getElementById("main").style.backgroundColor = colorDark;

        localStorage.setItem('backgroundColor', bg);
        localStorage.setItem('isDark', isDark);
    }

    const setLight = () => {
        setBg(colorLight);
        setIsDark(false);
        document.getElementById("main").style.backgroundColor = colorLight;

        localStorage.setItem('backgroundColor', bg);
        localStorage.setItem('isDark', isDark);
    }

    const toggleThemes = () => {
        if (isDark) {
            setLight();
        } else {
            setDark();
        }
        setIsDark(!isDark);
    }

    return (

        <motion.div

            style={{ backgroundColor: bg }}
            animate={{ backgroundColor: bg }}
            transition={{
                ease: "linear",
                duration: 0.3
            }}

            className={pageCSS['page-container']}>

            <motion.div

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className={pageCSS['content']}>

                <motion.h1

                    key={phrase}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}

                    transition={{ duration: 0.3 }}
                    onHoverStart={choosePhrase}
                    onHoverEnd={function () {
                        setPhrase(defaultPhrase);
                        setIsHovered(false);
                    }}

                    className={pageCSS['name']}
                >
                    {phrase}

                </motion.h1>


                <motion.div

                    animate={{ color: isDark ? "#FFFFFF" : "#000000" }}
                    transition={{
                        ease: "linear",
                        duration: 0.3
                    }}

                    className={pageCSS['me']}>

                    <motion.img

                        src={me}
                        alt="me"
                        style={{ maxHeight: 100, borderRadius: "50%", userSelect: "none" }}></motion.img>


                    <div className={pageCSS['stats']}>

                        <div> <b>  21 year old U.G. at <a href="https://www.gatech.edu" target="_blank" rel="noreferrer" style={{ color: "inherit" }}> GATECH </a> </b></div>
                        <div> React, Java, C, JavaFX </div>
                        <div> <i> learning how to cook </i> </div>

                    </div>
                </motion.div>

                <motion.p

                    animate={{ color: isDark ? "#FFFFFF" : "#000000" }}
                    transition={{
                        ease: "linear",
                        duration: 0.3
                    }}

                    className={pageCSS['description']}> My passion surrounds all the complexity that the future of computer science has to offer. </motion.p>
                <motion.p

                    animate={{ color: isDark ? "#FFFFFF" : "#000000" }}
                    transition={{
                        ease: "linear",
                        duration: 0.3
                    }}
                    className={pageCSS['description']}> Even with all that logical thinking, I also like to do 3D art and design in my free time. </motion.p>

                <motion.ul

                    animate={{ color: isDark ? "#FFFFFF" : "#000000" }}
                    transition={{
                        ease: "linear",
                        duration: 0.3
                    }}

                    className={pageCSS['link-to-projects']}>
                    <li className={pageCSS['item']}> <a href="https://github.com/denialpan/DoABarrelWall" target="_blank" rel="noreferrer" className={pageCSS['link']}> DoABarrelWall</a> - iOS tweak development for iOS 12 - 15</li>
                    <li className={pageCSS['item']}> <Link to="/blender" className={pageCSS['link']}>Blender</Link> - some digital art things I've made </li>
                    <li className={pageCSS['item']}> <a href="https://github.com/denialpan/JoeBot" target="_blank" rel="noreferrer" className={pageCSS['link']}> JoeBot</a> - custom Discord bot for my friends</li>
                    <li className={pageCSS['item']}> <a href="https://denialpan.github.io/portfolio-old-1/" target="_blank" rel="noreferrer" className={pageCSS['link']}> Old Portfolio</a> - learned a lot of CSS from this</li>
                </motion.ul>

                <div className={pageCSS['social-container']}>

                    <div style={{ display: "flex", gap: 17 }}>
                        <motion.button

                            whileHover={{ color: "#7500FF", backgroundColor: isDark ? "#111111" : "#FFFFFF" }}
                            transition={{ duration: 0.3 }}

                            onClick={(e) => {
                                e.preventDefault();
                                window.open("https://raw.githubusercontent.com/denialpan/portfolio/b5da335a582340b0c2866c0b2a433c9696b5c946/src/Daniel%20Pan%20-%20Resume.pdf", "_blank");
                            }}
                            className={pageCSS['resume']}> RESUME </motion.button>
                        <motion.div

                            animate={{ filter: isDark ? "invert(100%)" : "invert(0%)" }}
                            transition={{
                                ease: "linear",
                                duration: 0.3
                            }}
                            className={pageCSS['social-icons']}>
                            <a href="https://www.linkedin.com/in/danielpan-/" target="_blank" rel="noreferrer"><img className={pageCSS['social-svg']} src={linkedin} alt="linkedin"></img></a>
                            <a href="https://www.facebook.com/danpan123/" target="_blank" rel="noreferrer"><img className={pageCSS['social-svg']} src={facebook} alt="facebook"></img></a>
                            <a href="https://github.com/denialpan" target="_blank" rel="noreferrer"><img className={pageCSS['social-svg']} src={github} alt="github"></img></a>

                        </motion.div>
                    </div>

                    <motion.div

                        whileHover={{ cursor: "pointer" }}
                        animate={{ filter: isDark ? "invert(100%)" : "invert(0%)", transform: isDark ? "rotate(180deg)" : "rotate(0deg)" }}
                        transition={{

                            transform: { duration: 0.5, ease: "circIn" },
                            duration: 0.3
                        }}
                        onClick={() => {
                            toggleThemes();
                        }}
                    >
                        <img className={pageCSS['social-svg']} src={darkThemeToggle} alt="toggle"></img>
                    </motion.div>

                </div>


            </motion.div>

        </motion.div>

    )
}

export default Home