import { Link } from "react-router-dom"
import { Separator } from "../../Atoms/Separator/Separator"
import './ProjectCard.css'
import ArrowSvg from '../../../assets/arrow.svg'

interface ProjectCardProps{
  icon: string,
  iconAlt: string,
  img: string,
  imgAlt:string,
  title1: string,
  title2: string,
  subtitle1: string,
  subtitle2: string,
  color: string,
  link: string
}

export function ProjectCard({icon, iconAlt, img, imgAlt, title1, title2, subtitle1, subtitle2, color, link}: ProjectCardProps){
  return(
    <Link to={link} className='projet__item'>
      <div className='flex'>
        <div className='projet__item__icon'>
          <img src={icon} alt={iconAlt} />
        </div>
        <div className='projet__item__photo' style={{background:color}}>
          <img className="projet__item__photo__img" src={img} alt={imgAlt} />
        </div>
      </div>
      <div className='projet__item__title idla' style={{color:color}}> {title1} <br /> {title2} </div>
      <div className='projet__item__description'><span className='projet__item__description idla'  style={{color:color}}>{subtitle1}</span> {subtitle2}</div>
{/* var Onhover ===true ?  */}
      {title1 === "Investir dans" ? 
         <div className="projet__item__idla">
          <div className="">
            <div className="projet__item__idla__separator-idla adapt-to-container">
              <div className="projet__item__idla__separator__title-idla">année</div>
              <div className="projet__item__idla__separator__line-idla"></div>
            </div>
           <p className='color-idla text-20'>2022 . 2024</p>
          </div>
          {/* <div className="color-white text-20"> 
            <p>Réalisation de plusieurs projets en solo ou en équipe, avec une spécialisation en web afin de me perfectionner en front-end et back-end tout en intégrant différentes technologies.</p>
          </div> */}
          <Link to="/portfolio/idla" className='contact__button text-h3 color-white hover-color-idla place-right ' id="section_contact">
            <span className='text-h3 color-white hover-color-idla'>En savoir plus</span>
            <div className='arrow rotate-45'>
              <svg width="100%" height="100%" viewBox="0 0 13 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9016 1.09836L11.8751 0.0987085L12.9291 0.0707975L12.9012 1.12483L11.9016 1.09836ZM1.8054 12.6087C1.41488 12.9993 0.781715 12.9993 0.39119 12.6087C0.000666076 12.2182 0.000665739 11.5851 0.39119 11.1945L1.8054 12.6087ZM3.45544 0.321664L11.8751 0.0987085L11.9281 2.09801L3.50838 2.32096L3.45544 0.321664ZM12.9012 1.12483L12.6783 9.5445L10.679 9.49156L10.9019 1.07189L12.9012 1.12483ZM12.6087 1.80546L1.8054 12.6087L0.39119 11.1945L11.1945 0.391251L12.6087 1.80546Z" fill="currentColor"/>
              </svg>
            </div>
          </Link>
         {/* <div>
           php, javascript, Typescript, java, python, GO, html, css, SQL
           React, Vu, Angular, Next, Node, Symfony, Laravel, Ruby, Springboot, react native
         </div> */}
       </div>
      :
        <></>
      }

      {title1 === "Epitech" ? 
        <div className="epitech">
          <div>
            <div className="separator-epitech adapt-to-container">
              <div className="separator__title-epitech">année</div>
              <div className="separator__line-epitech"></div>
            </div>
            <p className='color-epitech text-20'>2022 . 2024</p>
          </div>
          <div className="color-white text-20"> 
            Réalisation de plusieurs projets, en solo ou en équipe, avec une spécialisation en développement web afin de me perfectionner en front-end et back-end, tout en intégrant diverses technologies.
          </div>
          {/* <div>
            php, javascript, Typescript, java, python, GO, html, css, SQL
            React, Vu, Angular, Next, Node, Symfony, Laravel, Ruby, Springboot, react native
          </div> */}
        </div>
      :
        <></>
      }

      {title1 === "ESGI" ? 
        <div className="esgi">
          <div>
            <div className="separator-esgi adapt-to-container">
              <div className="separator__title-esgi">année</div>
              <div className="separator__line-esgi"></div>
            </div>
            <p className='color-esgi text-20'>2024 . 2027</p>
          </div>
          <div className="color-white text-20"> 
          Avec l'évolution rapide du secteur du Web, tant dans les langages de programmation que dans les méthodes de gestion de projet, la filière Ingénierie du Web nous prépare à devenir des experts en développement web full-stack.
          </div>
        </div>
      :
        <></>
      }
    </Link >
  )
}