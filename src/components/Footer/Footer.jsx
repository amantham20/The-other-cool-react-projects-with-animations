import React from 'react'

import './footer.css'

import {FaInstagram} from 'react-icons/fa'
import {BsFillHeartFill} from 'react-icons/bs'
import {GrFacebookOption} from 'react-icons/gr'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {SiDevpost} from 'react-icons/si'


import {BiCoffee} from 'react-icons/bi'

const Footer = () => {
    return (
        <footer className='footer'>
          <a href='#' className='footer__logo'> &lt; Aman Dhruva Thamminana /&gt;</a>  


          <ul className='permalinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Expeiriences</a></li>
            <li><a href="#">Contact</a></li>
          </ul>

          <div className='footer__socials'>
            <a href='https://www.facebook.com/aman.dhruva/' target='_blank'> <GrFacebookOption /></a>
            <a href='https://www.instagram.com/living_like_a.man/' target='_blank'> <FaInstagram /> </a>
            <a href='https://www.linkedin.com/in/aman-thamminana/' target='_blank'> <FaLinkedinIn /></a>
            <a href='https://twitter.com/amanthamminana' target='_blank'> <FaTwitter /> </a>
            <a href='https://github.com/amantham20' target='_blank'> <FaGithub /> </a>
            <a href='https://devpost.com/amantham20' target='_blank'> <SiDevpost /> </a>
          </div>

            <div className='build_with'><h5>Built with &nbsp;</h5> <BsFillHeartFill className='icon__end icon__end1'/> <h5> &nbsp; Fueled by&nbsp;</h5><BiCoffee  className='icon__end icon__end2'/></div>
          <div className="footer__copyright">

            <small>&copy; 2022 Aman Dhruva Thamminana</small> <br />
            {/* <small>v {data.version}</small> */}
            
          </div>
          
        </footer>
  )
}

export default Footer