import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/Organisms/Navbar/Navbar';
import { NavbarStatus } from './components/Molecules/NavbarStatus/NavbarStatus';
import { SliderTech } from './components/Organisms/SliderTech/SliderTech';
import { Separator } from './components/Atoms/Separator/Separator';
import { ProjectCard } from './components/Molecules/ProjectCard/ProjectCard';

import IdlaIconPhoneSize from './assets/idlaPhoneSize.svg'
import EpitechPhoneSize from './assets/epitech-eu.svg'
import IdlaBackground from './assets/idlamontageH.jpg'
import ProfilePicture from './assets/tower101.png'
import GithubIcon from './assets/github.svg'
import InstagramIcon from './assets/instagram.svg'
import LinkedinIcon from './assets/linkedin.svg'
import ArrowSvg from './assets/arrow.svg'

function App() {

  
  return (
    <div className="App">
      <Navbar/>
      <main className='bg-black'> 
        <div className="navbar-fake"></div>

        <div className='container'>
          <NavbarStatus />

          <div className='delete'></div>

          <div className='adapt-to-container'>
            <h2 className='text-gradient text-h2'>Je suis Denis,<br></br>un développeur web</h2>
            <div className='text-animation'>
              <span className='move-text-to-top text-h2 text-color-text'>Front end</span>
              <span className='move-text-to-top text-h2 text-color-text'>Back end</span>
            </div>
          </div>

          <div className='delete'></div>

          <div className='adapt-to-container'>
          <SliderTech />

          <SliderTech />
          </div>
          <div className='delete'></div>
          <Separator title='projets' id={"section_project"}/>

          <div className='grid_projet_items adapt-to-container'>
            <ProjectCard icon={IdlaIconPhoneSize} iconAlt="Investir dans l'ancien" img={IdlaBackground} imgAlt="Montage investir dans l'ancien" title1="Investir dans" title2="l'ancien" subtitle1="Site web" subtitle2="pour une société faisant de l'investissement locatif" color='#C49E69'/>
            <ProjectCard icon={EpitechPhoneSize}  iconAlt="Investir dans l'ancien" img={IdlaBackground} imgAlt="Montage investir dans l'ancien" title1="Epitech" title2="" subtitle1="Ecole" subtitle2="de l'excellence informatique. Pour devenir expert en ingénierie informatique" color='#0091D3'/>
            {/* <ProjectCard /> */}
          </div>
          <div className='delete'></div>
          <div className='adapt-to-container'>
            <div className='about'>
              <div className='about__container'>
                <Separator title='a propos' id={"section_about"}/>
                <h3 className='text-gradient text-lg'>Je suis Denis, un jeune français de 25 ans, passionné par le développement web, le sport et l'exploration du monde </h3>
                <a href="/assets/Fierens_Cv_Dev.pdf" download="Fierens_CV_DEV" className='button hide-phone'>
                <div className='button__content'>Télécharger mon CV</div>
                <div className='button__background-to-top'></div>
              </a>
              </div>

              <div className='about__picture'>
                <img className='about__picture__img' src={ProfilePicture} alt="photo de moi avec avec la tour 101" />
              </div>

              <a href="/assets/Fierens_Cv_Dev.pdf" download="Fierens_CV_DEV" className='button hide-tablet'>
                <div className='button__content'>Télécharger mon CV</div>
                <div className='button__background-to-top'></div>
              </a>
            </div>
          </div>
          <div className='delete'></div>
          <div className='contact adapt-to-container'>
            <a href="#" className='contact__button text-h3 color-white' id="section_contact">
              <span className='text-h3 color-white'>Contactez moi</span>
              <div className='arrow rotate-45'>
                <img src={ArrowSvg} alt="arrow" />
              </div>
            </a>
            <div className='contact__separator'></div>
          </div>

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
      </main>
    </div>
  );
}

export default App;
