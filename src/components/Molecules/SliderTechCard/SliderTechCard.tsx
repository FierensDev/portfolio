import './SliderTechCard.css'

interface SliderTechCardProps {
  img: string,
  title: string
}

export function SliderTechCard({img, title}: SliderTechCardProps ){
  return(
    <div className='slider-tech__item'>
      <div className='slider-tech__item-img'>
        <img src={img} alt="postgreSQL" />
      </div>
      <span className='slider-tech__item-text'>{title}</span>
    </div> 
  )
}