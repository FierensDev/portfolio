import { Link } from "react-router-dom"
import { Separator } from "../../Atoms/Separator/Separator"

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
        <div className='projet__item__photo'>
          <img className="projet__item__photo__img" src={img} alt={imgAlt} />
        </div>
      </div>
      <div className='projet__item__title idla' style={{color:color}}> {title1} <br /> {title2} </div>
      <div className='projet__item__description'><span className='projet__item__description idla'  style={{color:color}}>{subtitle1}</span> {subtitle2}</div>

      {true ? 
        <div className="epitech">
          <div>
            <div className="separator-idla adapt-to-container">
              <div className="separator__title-idla">année</div>
              <div className="separator__line-idla"></div>
            </div>
            <p className='color-idla text-20'>2022 . 2024</p>
          </div>
          <div>
            php, javascript, Typescript, java, python, GO, html, css, SQL
            React, Vu, Angular, Next, Node, Symfony, Laravel, Ruby, Springboot, react native
          </div>
        </div>
      :
        <></>
      }
    </Link >
  )
}