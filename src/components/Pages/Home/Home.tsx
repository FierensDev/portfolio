import { Separator } from "../../Atoms/Separator/Separator";
import { ProjectCard } from "../../Molecules/ProjectCard/ProjectCard";
import { Link, useLocation } from 'react-router-dom';

import IdlaIconPhoneSize from '../../../assets/idlaPhoneSize.svg'
import EpitechPhoneSize from '../../../assets/epitech-eu.svg'
import IdlaBackground from '../../../assets/idlamontageH.jpg'
import ProfilePicture from '../../../assets/tower101.png'
import EpitechExpertTech from '../../../assets/expertTech.jpg'
import ESGISvg from '../../../assets/esgi.svg'
import ESGIBg from '../../../assets/esgibg2.jpg'

import ArrowSvg from '../../../assets/arrow.svg'
import { useEffect } from "react";
import { SliderTech } from "../../Organisms/SliderTech/SliderTech";

export function Home(){

  const location = useLocation();

  useEffect(() => {
    console.log(location);

    const hash = location.hash;
    if(hash){
      const element = document.getElementById(hash.replace("#", ""));
      if (element){
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location])

  return(
    <>
          <div className='presentation' id="t">
            <div className='adapt-to-container'>
              <h2 className='text-gradient text-h2'>Je suis Denis,<br></br>un développeur web</h2>
              <div className='text-animation'>
                <span className='move-text-to-top text-h2 text-color-text'>Front-end</span>
                <span className='move-text-to-top text-h2 text-color-text'>Back-end</span>
              </div>
            </div>

            <div className='adapt-to-container'>
              <SliderTech />
            </div>
            
          </div>
          <div className='presentation__project'>
            <Separator title='projets' id={"section_project"}/>

            <div className='grid_projet_items adapt-to-container'>
              <ProjectCard icon={IdlaIconPhoneSize} iconAlt="Investir dans l'ancien" img={IdlaBackground} imgAlt="Montage investir dans l'ancien" title1="Investir dans" title2="l'ancien" subtitle1="Site web" subtitle2="pour une société spécialisée dans l'investissement locatif" color='#C49E69' link="idla"/>

              <ProjectCard icon={EpitechPhoneSize}  iconAlt="Epitech" img={EpitechExpertTech} imgAlt="Montage Epitech" title1="Epitech" title2="" subtitle1="École de l'excellence informatique." subtitle2=" Pour devenir expert en ingénierie informatique" color='#0091D3' link="/portfolio"/>
              <ProjectCard icon={ESGISvg}  iconAlt="ESGI" img={ESGIBg} imgAlt="Montage ESGI" title1="ESGI" title2="" subtitle1="École Supérieure de Génie Informatique." subtitle2="La grande école d'informatique n°1 en alternance." color='#00eaff' link="/portfolio"/>
            </div>
          </div>
          
          <div className='presentation__about'>
            <div className='adapt-to-container'>
              <div className='about'>
                <div className='about__container'>
                  <Separator title='à propos' id={"section_about"}/>
                  <h3 className='text-gradient text-lg text-center'>À 25 ans, en tant que jeune Français, je combine mon expertise en informatique avec ma passion pour le sport et les voyages. Toujours en quête de nouveaux défis et d'innovations, je suis enthousiaste à l'idée de m'engager dans de nouveaux projets et de découvrir de nouvelles opportunités.</h3>
                  <a href="/portfolio/assets/Fierens_Cv_Dev.pdf" download="Fierens_CV_DEV" className='button hide-phone'>
                    <div className='button__content'>Téléchargez mon CV</div>
                    <div className='button__background-to-top'></div>
                  </a>
                </div>

                <div className='about__picture'>
                  <img className='about__picture__img' src={ProfilePicture} alt="photo de moi avec avec la tour 101" />
                </div>

                <a href="/portfolio/assets/Fierens_Cv_Dev.pdf" download="Fierens_CV_DEV" className='button hide-tablet'>
                  <div className='button__content'>Téléchargez mon CV</div>
                  <div className='button__background-to-top'></div>
                </a>
              </div>
            </div>
          </div>
         
          <div className="adapt-to-container contact_1">
            <Link to="/portfolio/contact" className='contact__button text-h3 color-white' id="section_contact">
              <span className='text-h3 color-white'>Contactez-moi</span>
              <div className='arrow rotate-45'>
                <img src={ArrowSvg} alt="arrow" />
              </div>
            </Link>
            <div className='contact__separator'></div>
          </div>

          <div className='contact '>
          </div>
    </>
  )
}