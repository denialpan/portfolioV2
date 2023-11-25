import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import Home from '../pages/home/Home';
import Blog from '../pages/blog/Blog';

function AnimatedRoutes() {
    
    const location = useLocation();
    return (

        <AnimatePresence mode="wait">

            <Routes location={location} key={location.pathname}>
            
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />

                <Route path='*' element={<h1>404 hhh</h1>} />


            </Routes>
            
        </AnimatePresence>

    )
}

export default AnimatedRoutes