import React from 'react'
import {BsLinkedin,BsGithub,BsTwitter} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/alex-zhang2/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/karmalexz" target='_blank'><BsGithub/></a>
        <a href="https://twitter.com/alex_dizhang" target='_blank'><BsTwitter/></a>

    </div>
  )
}

export default HeaderSocials