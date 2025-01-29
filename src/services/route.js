import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home/index'
import About from '../pages/About/index'
import Portfolio from '../pages/Portfolio/index'

export default function Rotas(){

    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Portfolio" element={<Portfolio/>}/>
            </Routes>
        </Router>
    )
} 