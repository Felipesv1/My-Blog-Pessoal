import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from '../pages/Home/index'
import About from '../pages/About/index'
import Portfolio from '../pages/Portfolio/index'
import Onu from '../pages/Onu-Mare/CardsOnu/index'
import Erradicacao from '../pages/Onu-Mare/pagesOnu/erradicacao/index'
import Violencia from '../pages/Onu-Mare/pagesOnu/Violencia/index'
import Oportunidade from '../pages/Onu-Mare/pagesOnu/Oportunidade/index'
import Educacao from '../pages/Onu-Mare/pagesOnu/Educacao/index'

export default function Rotas(){


    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Portfolio" element={<Portfolio/>}/>
                <Route path="/Onu-Mare" element={<Onu/>}/>
                <Route path="/Erradicacao" element={<Erradicacao/>}/>
                <Route path="/Nao-Violencia" element={<Violencia/>}/>
                <Route path="/oportunidade" element={<Oportunidade/>}/>
                <Route path="/Educação" element={<Educacao/>}/>
            </Routes>
        </Router>
    )
} 