import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from 'framer-motion'

import Home from '../pages/home/Home';
import Blender from '../pages/blender/Blender';

function AnimatedRoutes() {
    
    const location = useLocation();
    return (

        <AnimatePresence mode="wait">

            <Routes location={location} key={location.pathname}>
            
                <Route path="/" element={<Home />} />
                <Route path="/blender" element={<Blender />} />

                <Route path='*' element={<h1>404 lololololololololol</h1>} />


            </Routes>
            
        </AnimatePresence>

    )
}

export default AnimatedRoutes