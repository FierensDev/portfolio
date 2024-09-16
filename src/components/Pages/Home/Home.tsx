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
                <span className='move-text-to-top text-h2 text-color-text'>Front end</span>
                <span className='move-text-to-top text-h2 text-color-text'>Back end</span>
              </div>
            </div>
{/* 
            <div className='adapt-to-container'>
              <SliderTech />
              <SliderTech />
            </div>

            <div className='slide1'>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
              <div className='square'></div>
            </div> */}
          </div>
          <div className='presentation__project'>
            <Separator title='projets' id={"section_project"}/>

            <div className='grid_projet_items adapt-to-container'>
              <ProjectCard icon={IdlaIconPhoneSize} iconAlt="Investir dans l'ancien" img={IdlaBackground} imgAlt="Montage investir dans l'ancien" title1="Investir dans" title2="l'ancien" subtitle1="Site web" subtitle2="pour une société faisant de l'investissement locatif" color='#C49E69' link="idla"/>

              <ProjectCard icon={EpitechPhoneSize}  iconAlt="Epitech" img={EpitechExpertTech} imgAlt="Montage Epitech" title1="Epitech" title2="" subtitle1="Ecole de l'excellence informatique" subtitle2=". Pour devenir expert en ingénierie informatique" color='#0091D3' link="/portfolio"/>
              <ProjectCard icon={ESGISvg}  iconAlt="ESGI" img={ESGIBg} imgAlt="Montage ESGI" title1="ESGI" title2="" subtitle1="École Supérieure de Génie Informatique" subtitle2=", La Grande École d'Informatique n°1 en Alternance" color='#00eaff' link="/portfolio"/>
            </div>
          </div>
          
          <div className='presentation__about'>
            <div className='adapt-to-container'>
              <div className='about'>
                <div className='about__container'>
                  <Separator title='a propos' id={"section_about"}/>
                  <h3 className='text-gradient text-lg text-center'>Je suis Denis, un jeune français de 25 ans, passionné par le développement web, le sport et l'exploration du monde </h3>
                  <a href="/portfolio/assets/Fierens_Cv_Dev.pdf" download="Fierens_CV_DEV" className='button hide-phone'>
                    <div className='button__content'>Télécharger mon CV</div>
                    <div className='button__background-to-top'></div>
                  </a>
                </div>

                <div className='about__picture'>
                  <img className='about__picture__img' src={ProfilePicture} alt="photo de moi avec avec la tour 101" />
                </div>

                <a href="/portfolio/assets/Fierens_Cv_Dev.pdf" download="Fierens_CV_DEV" className='button hide-tablet'>
                  <div className='button__content'>Télécharger mon CV</div>
                  <div className='button__background-to-top'></div>
                </a>
              </div>
            </div>
          </div>
         
          <div className="adapt-to-container contact_1">
            <Link to="/portfolio/contact" className='contact__button text-h3 color-white' id="section_contact">
              <span className='text-h3 color-white'>Contactez moi</span>
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