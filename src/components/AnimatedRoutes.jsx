import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'
import Home from '../pages/home/Home';

function AnimatedRoutes() {
    
    const location = useLocation();
    return (

        <AnimatePresence mode="wait">

            <Routes location={location} key={location.pathname}>
            
                <Route path="/" element={<Home />} />
            
            </Routes>
            
        </AnimatePresence>

    )
}

export default AnimatedRoutes