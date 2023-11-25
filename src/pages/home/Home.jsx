import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import pageCSS from './page.module.css'

import linkedin from '../../images/icons/linkedin.svg'
import github from '../../images/icons/github.svg'
import facebook from '../../images/icons/facebook.svg'

import phrasesJSON from './phrases.json'

import me from '../../images/me.jpg'

function Home() {
    
    const defaultPhrase = "Hello, I'm Daniel Pan!";   

    const [phrase, setPhrase] = useState(defaultPhrase);  
    const [isHovered, setIsHovered] = useState(false);
    const [phrases, setPhrases] = useState([]);
    
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
        console.log(phrase);

    };

    return (
    
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 0.2}}
            
            className={pageCSS['page-container']}
            
            >    

            <div className={pageCSS['content']}> 
                
                <motion.h1

                    key={phrase}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}

                    whileHover={{ letterSpacing: '0.5px'}}
                    transition={{ 
                        opacity: {duration: 0.3},
                        letterSpacing: {duration: 0.2} 
                    }}
                    onHoverStart={choosePhrase}
                    onHoverEnd={function() {
                        setPhrase(defaultPhrase);
                        setIsHovered(false);
                    }}
                    
                    className={pageCSS['name']}
                    >
                    {phrase}

                </motion.h1>

                <div className={pageCSS['me']}>
                    <img src={me} alt="me" style={{maxHeight: 100, borderRadius: "50%"}}></img>
                    <div className={pageCSS['stats']}> 
                    
                        <div> <b>  21 year old U.G. at <a href="https://www.gatech.edu" target="_blank" rel="noreferrer" style={{color: "inherit"}}> GATECH </a> </b></div>
                        <div> React, Java, SQL, C, Objective-C, Assembly, JavaFX </div>
                        <div> <i> learning how to cook </i> </div>
                    
                    </div>
                </div>

                <p className={pageCSS['description']}> My passion surrounds all the complexity that the future of computer science has to offer. </p>
                <p className={pageCSS['description']}> Even with all that logical thinking, I also like to do 3D art and design in my free time. </p>

                <ul className={pageCSS['link-to-projects']}>
                    <li className={pageCSS['item']}> <a href="https://github.com/denialpan/DoABarrelWall" target="_blank" rel="noreferrer" className={pageCSS['link']}> DoABarrelWall</a> - iOS tweak development for iOS 12 - 15</li>
                    <li className={pageCSS['item']}> <Link to="/blog" className={pageCSS['link']}>Blender</Link> - art things I've made in my free time</li>
                    <li className={pageCSS['item']}> <a href="https://github.com/denialpan/JoeBot" target="_blank" rel="noreferrer" className={pageCSS['link']}> JoeBot</a> - custom Discord bot for my friends</li>
                    <li className={pageCSS['item']}> <a href="https://denialpan.github.io/portfolio-old-1/" target="_blank" rel="noreferrer" className={pageCSS['link']}> Old Portfolio</a> - learned a lot of CSS from this</li>    
                </ul>

                <div className={pageCSS['social-container']}>
                    <motion.button 
                        
                        whileHover={{color: "#7500FF", background: "#FFFFFF"}}
                        transition={{duration: 0.3}}

                        className={pageCSS['resume']}> RESUME </motion.button>
                    <div className={pageCSS['social-icons']}>
                    <a href="https://www.linkedin.com/in/danielpan-/" target="_blank" rel="noreferrer"><img className={pageCSS['social-svg']} src={linkedin} alt="linkedin"></img></a>
                    <a href="https://www.facebook.com/danpan123/" target="_blank" rel="noreferrer"><img className={pageCSS['social-svg']} src={facebook} alt="facebook"></img></a>
                    <a href="https://github.com/denialpan" target="_blank" rel="noreferrer"><img className={pageCSS['social-svg']} src={github} alt="github"></img></a>

                    </div>
                </div>
               

            </div>

        </motion.div>

    )
}

export default Home