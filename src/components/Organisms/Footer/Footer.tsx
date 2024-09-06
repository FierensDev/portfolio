import GithubIcon from '../../../assets/github.svg'
import InstagramIcon from '../../../assets/instagram.svg'
import LinkedinIcon from '../../../assets/linkedin.svg'
export function Footer(){
  return(
  <div className='container'>
    <div className='footer adapt-to-container'>
    <a className="footer__website text-20 color-white">fierensdev.com</a>
    
    <div className='footer__navbar text-base '>
      <a className='onhover-color-white' href="#">projets</a>
      <a className='onhover-color-white' href="#">a propos</a>
      <a className='onhover-color-white' href="#">contact</a>
    </div>

    <div className='footer__contact text-base '>
      <p>dev.fierens@gmail.com</p>
      <p>06.60.97.30.82</p>
    </div>

    <div className='footer__social-media'>
      <img src={GithubIcon} alt="github icon" />
      <img src={InstagramIcon} alt="instagram icon" />
      <img src={LinkedinIcon} alt="linkedin icon" />
    </div>
    </div>
  </div>
  )
}