// import PostgreSQLSVG from '../../../assets/postgresql.svg'

interface SliderTechCardProps {
  img: string,
  title: string
}

export function SliderTechCard({img, title}: SliderTechCardProps ){
  return(
    <div className='slider-tech__item'>
      <div className='slider-tech__item_img'>
        <img src={img} alt="postgreSQL" />
      </div>
      <span className='slider-tech__item__text'>{title}</span>
    </div> 
  )
}