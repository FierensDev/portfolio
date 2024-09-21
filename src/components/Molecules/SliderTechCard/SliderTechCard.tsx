import { Link } from 'react-router-dom'
import './SliderTechCard.css'

interface SliderTechCardProps {
  img: string,
  imgAlt: string,
  title: string
}

export function SliderTechCard({img, imgAlt, title}: SliderTechCardProps ){
  return(
  <Link to={"/"} className='slide-item'>
    <img src={img} alt={imgAlt} className='slide-item__img'/>
    <p className='slide-item__title'>{title}</p>
  </Link> 
  )
}