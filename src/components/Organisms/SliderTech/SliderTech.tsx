import './SliderTech.css'
import { SliderTechCard } from "../../Molecules/SliderTechCard/SliderTechCard";
import PostgreSQLSVG from '../../../assets/postgresql.svg'
import NextSVG from '../../../assets/next.svg'

export function SliderTech(){
  return(
    <div className='slider'>
      <div className='slider-ToRight'>
        <SliderTechCard title={'PostgreSQL'} img={PostgreSQLSVG} imgAlt='postgreSQL'/>
        <SliderTechCard title={'NextJS'} img={NextSVG} imgAlt='Next'/>
        <SliderTechCard title={'PostgreSQL'} img={PostgreSQLSVG} imgAlt='postgreSQL'/>
        <SliderTechCard title={'NextJS'} img={NextSVG} imgAlt='Next'/>
        <SliderTechCard title={'PostgreSQL'} img={PostgreSQLSVG} imgAlt='postgreSQL'/>
        <SliderTechCard title={'NextJS'} img={NextSVG} imgAlt='Next'/>
        <SliderTechCard title={'PostgreSQL'} img={PostgreSQLSVG} imgAlt='postgreSQL'/>
        <SliderTechCard title={'NextJS'} img={NextSVG} imgAlt='Next'/>
        <SliderTechCard title={'PostgreSQL'} img={PostgreSQLSVG} imgAlt='postgreSQL'/>

{/* 9more */}

      </div>
    </div>
  )
}