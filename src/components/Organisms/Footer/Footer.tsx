import { Link } from 'react-router-dom'
import './Footer.css'
import GithubIcon from '../../../assets/github.svg'
import InstagramIcon from '../../../assets/instagram.svg'
import LinkedinIcon from '../../../assets/linkedin.svg'
export function Footer(){
  return(
  <div className='container'>
    <div className='footer adapt-to-container'>
    <Link to={'/portfolio#t'} className="footer__website text-20 color-white">fierensdev.com</Link>
    
    <div className='footer__navbar text-base '>
      <Link className='onhover-color-white' to={"/portfolio#section_project"}>projets</Link>
      <Link className='onhover-color-white' to={"/portfolio#section_about"}>a propos</Link>
      <Link className='onhover-color-white' to={"/portfolio/contact"}>contact</Link>
    </div>

    <div className='footer__contact text-base '>
      <a href="mailto:denis.fierens@epitech.eu" target="_blank" className=''>denis.fierens@epitech.eu</a>
      <a href="tel:+33660973082" className=''>06.60.97.30.82</a>
    </div>

    <div className='footer__social-media'>
      <a href="https://github.com/FierensDev" target="_blank" className='social-media'>
        <img src={GithubIcon} alt="github icon" />
      </a>
      <a href="https://www.instagram.com/d.fierens_" target="_blank" className='social-media'>
        <img src={InstagramIcon} alt="instagram icon" />
      </a>
      <a href='https://www.linkedin.com/in/fierensdenis' target="_blank" className='social-media'>
        <img src={LinkedinIcon} alt="linkedin icon" />
      </a>
    </div>
    </div>
  </div>
  )
}