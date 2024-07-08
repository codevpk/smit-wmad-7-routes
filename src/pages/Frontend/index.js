import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function Frontend() {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<Contact />} />
                <Route path='*' element={<h1>No Page, Page Not Found, 404 Error</h1>} />
            </Routes>
            <Footer />
        </>
    )
}
