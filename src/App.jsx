import React from 'react'
import Portfolio from './components/portfolio-component/Portfolio'
import Experience from './components/experience-component/Experience'
import Header from './components/header-component/Header'
import Nav from './components/nav-component/Nav'
import About from './components/about-component/About'
import Contact from './components/contact-component/Contact'
import Footer from './components/footer-component/Footer'

import "./index.css"
export default function App() {
  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    <Footer/>
    </>
  )
}
