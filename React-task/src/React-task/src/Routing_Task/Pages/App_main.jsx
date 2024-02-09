

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import PNF from '../Pages/PNF'

import Header from '../Component/Header'
import Footer from '../Component/Footer'

function App_main() {
    return (
        <BrowserRouter>

            <Routes>
                <Route path="/" element={<><Header /><Home /><Footer /></>}></Route>
                <Route path="/about" element={<><Header /><About /><Footer /></>}></Route>
                <Route path="/contact" element={<><Header /><Contact /><Footer /></>}></Route>
                <Route path="*" element={<><PNF /></>}></Route>
            </Routes>

        </BrowserRouter>
    )
}

export default App_main