import React from 'react'
import "./footer.css"
import { BsTwitter, BsLinkedin,BsGithub } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>ALEX Z.</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/alex-zhang2/"><BsLinkedin/></a>
        <a href="https://github.com/karmalexz"><BsGithub/></a>
        <a href="https://twitter.com/alex_dizhang"><BsTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Alex Zhang. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer