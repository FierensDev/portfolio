import { Link } from 'react-router-dom'
import './SliderTechCard.css'

interface SliderTechCardProps {
  img: string,
  imgAlt: string,
  title: string,
  link:string
}

export function SliderTechCard({img, imgAlt, title, link}: SliderTechCardProps ){
  return(
  <a href={link} className='slide-item' target="_blank" rel="noopener noreferrer">
    <img src={img} alt={imgAlt} className='slide-item__img'/>
    <p className='slide-item__title'>{title}</p>
  </a> 
  )
}