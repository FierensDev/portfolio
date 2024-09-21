import './SliderTech.css'
import { SliderTechCard } from "../../Molecules/SliderTechCard/SliderTechCard";
import PostgreSQLSVG from '../../../assets/postgresql.svg'
import NextSVG from '../../../assets/next.svg'
import HtmlSvg from '../../../assets/langages/html-5.svg'
import CssSvg from '../../../assets/langages/css-3.svg'
import JavascriptSvg from '../../../assets/langages/javascript.svg'
import PhpSvg from '../../../assets/langages/php.svg'
import JavaSvg from '../../../assets/langages/java.svg'
import NodeSvg from '../../../assets/langages/node-js.svg'
import GitSvg from '../../../assets/langages/git.svg'
import TypescriptSvg from '../../../assets/langages/typescript.svg'
import MySqlSvg from '../../../assets/langages/mysql.svg'
import MongoDbSvg from '../../../assets/langages/mongodb.svg'
import BootstrapSvg from '../../../assets/langages/bootstrap.svg'
import TailwindSvg from '../../../assets/langages/tailwind.svg'
import AngularSvg from '../../../assets/langages/angular.svg'
import VueSvg from '../../../assets/langages/vuejs.svg'
import ReactSvg from '../../../assets/langages/react.svg'
import ExpressSvg from '../../../assets/langages/express.svg'
import JquerySvg from '../../../assets/langages/jquery.svg'
import LaravelSvg from '../../../assets/langages/laravel.svg'
import SymfonySvg from '../../../assets/langages/symfony.svg'
import SpringbootSvg from '../../../assets/langages/spring-boot.svg'


export function SliderTech(){
  return(
    <div className='slider'>
      <div className='slider-ToRight'>
        <SliderTechCard link='https://www.postgresql.org/' title={'PostgreSQL'} img={PostgreSQLSVG} imgAlt='postgreSQL'/>
        <SliderTechCard link='https://nextjs.org/' title={'NextJS'} img={NextSVG} imgAlt='Next'/>
        <SliderTechCard link='https://developer.mozilla.org/fr/docs/Web/HTML' title={'HTML'} img={HtmlSvg} imgAlt='HTML-5'/>
        <SliderTechCard link='https://developer.mozilla.org/fr/docs/Web/CSS' title={'CSS'} img={CssSvg} imgAlt='CSS'/>
        <SliderTechCard link='https://developer.mozilla.org/fr/docs/Web/JavaScript' title={'Javascript'} img={JavascriptSvg} imgAlt='Javascript'/>
        
        <SliderTechCard link='https://www.php.net/manual/fr/intro-whatis.php' title={'PHP'} img={PhpSvg} imgAlt='PHP'/>
        <SliderTechCard link='https://www.java.com/fr/' title={'Java'} img={JavaSvg} imgAlt='Java'/>
        <SliderTechCard link='https://nodejs.org/fr' title={'NodeJS'} img={NodeSvg} imgAlt='NodeJS'/>
        <SliderTechCard link='https://git-scm.com/' title={'Git'} img={GitSvg} imgAlt='Git'/>
        <SliderTechCard link='https://www.typescriptlang.org/' title={'Typescript'} img={TypescriptSvg} imgAlt='Typescript'/>
        
        <SliderTechCard link='https://www.mysql.com/fr/' title={'MySQL'} img={MySqlSvg} imgAlt='MySQL'/>
        <SliderTechCard link='https://www.mongodb.com/fr-fr' title={'MongoDB'} img={MongoDbSvg} imgAlt='MongoDB'/>
        <SliderTechCard link='https://getbootstrap.com/' title={'Bootstrap'} img={BootstrapSvg} imgAlt='Bootstrap'/>
        <SliderTechCard link='https://tailwindcss.com/' title={'Tailwind'} img={TailwindSvg} imgAlt='Tailwind'/>
        <SliderTechCard link='https://angular.dev/' title={'Angular'} img={AngularSvg} imgAlt='Angular'/>
        
        <SliderTechCard link='https://fr.react.dev/' title={'ReactJS'} img={ReactSvg} imgAlt='ReactJS'/>
        <SliderTechCard link='https://expressjs.com/fr/' title={'ExpressJS'} img={ExpressSvg} imgAlt='ExpressJS'/>
        <SliderTechCard link='https://jquery.com/' title={'Jquery'} img={JquerySvg} imgAlt='Jquery'/>
        <SliderTechCard link='https://laravel.com/' title={'Laravel'} img={LaravelSvg} imgAlt='Laravel'/>
        <SliderTechCard link='https://symfony.com/' title={'Symfony'} img={SymfonySvg} imgAlt='Symfony'/>
        
        <SliderTechCard link='https://spring.io/projects/spring-boot' title={'Spring Boot'} img={SpringbootSvg} imgAlt='Spring Boot'/>
        <SliderTechCard link='https://vuejs.org/' title={'VueJS'} img={VueSvg} imgAlt='VueJS'/>


        <SliderTechCard link='https://www.postgresql.org/' title={'PostgreSQL'} img={PostgreSQLSVG} imgAlt='postgreSQL'/>
        <SliderTechCard link='https://nextjs.org/' title={'NextJS'} img={NextSVG} imgAlt='Next'/>
        <SliderTechCard link='https://developer.mozilla.org/fr/docs/Web/HTML' title={'HTML'} img={HtmlSvg} imgAlt='HTML-5'/>
        <SliderTechCard link='https://developer.mozilla.org/fr/docs/Web/CSS' title={'CSS'} img={CssSvg} imgAlt='CSS'/>
        <SliderTechCard link='https://developer.mozilla.org/fr/docs/Web/JavaScript' title={'Javascript'} img={JavascriptSvg} imgAlt='Javascript'/>
        
        <SliderTechCard link='https://www.php.net/manual/fr/intro-whatis.php' title={'PHP'} img={PhpSvg} imgAlt='PHP'/>
        <SliderTechCard link='https://www.java.com/fr/' title={'Java'} img={JavaSvg} imgAlt='Java'/>
        <SliderTechCard link='https://nodejs.org/fr' title={'NodeJS'} img={NodeSvg} imgAlt='NodeJS'/>
        <SliderTechCard link='https://git-scm.com/' title={'Git'} img={GitSvg} imgAlt='Git'/>
        <SliderTechCard link='https://www.typescriptlang.org/' title={'Typescript'} img={TypescriptSvg} imgAlt='Typescript'/>
        
        <SliderTechCard link='https://www.mysql.com/fr/' title={'MySQL'} img={MySqlSvg} imgAlt='MySQL'/>
        <SliderTechCard link='https://www.mongodb.com/fr-fr' title={'MongoDB'} img={MongoDbSvg} imgAlt='MongoDB'/>
        <SliderTechCard link='https://getbootstrap.com/' title={'Bootstrap'} img={BootstrapSvg} imgAlt='Bootstrap'/>
        <SliderTechCard link='https://tailwindcss.com/' title={'Tailwind'} img={TailwindSvg} imgAlt='Tailwind'/>
        <SliderTechCard link='https://angular.dev/' title={'Angular'} img={AngularSvg} imgAlt='Angular'/>
        
        <SliderTechCard link='https://fr.react.dev/' title={'ReactJS'} img={ReactSvg} imgAlt='ReactJS'/>
        <SliderTechCard link='https://expressjs.com/fr/' title={'ExpressJS'} img={ExpressSvg} imgAlt='ExpressJS'/>
        <SliderTechCard link='https://jquery.com/' title={'Jquery'} img={JquerySvg} imgAlt='Jquery'/>
        <SliderTechCard link='https://laravel.com/' title={'Laravel'} img={LaravelSvg} imgAlt='Laravel'/>
        <SliderTechCard link='https://symfony.com/' title={'Symfony'} img={SymfonySvg} imgAlt='Symfony'/>
        
        <SliderTechCard link='https://spring.io/projects/spring-boot' title={'Spring Boot'} img={SpringbootSvg} imgAlt='Spring Boot'/>
        <SliderTechCard link='https://vuejs.org/' title={'VueJS'} img={VueSvg} imgAlt='VueJS'/>


      </div>
    </div>
  )
}