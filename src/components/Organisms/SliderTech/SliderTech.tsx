import './SliderTech.css'
import { SliderTechCard } from "../../Molecules/SliderTechCard/SliderTechCard";
import PostgreSQLSVG from '../../../assets/postgresql.svg'
import NextSVG from '../../../assets/next.svg'

export function SliderTech(){
  return(
    <div className='slider-tech'>
      <SliderTechCard title={'PostgreSQL'} img={PostgreSQLSVG}/>
      <SliderTechCard title={'NextJS'} img={NextSVG}/>
      <SliderTechCard title={'PostgreSQL'} img={PostgreSQLSVG}/>
      <SliderTechCard title={'NextJS'} img={NextSVG}/>
      <SliderTechCard title={'PostgreSQL'} img={PostgreSQLSVG}/>
      <SliderTechCard title={'NextJS'} img={NextSVG}/>
    </div>
  )
}