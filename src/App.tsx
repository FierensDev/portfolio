import { useEffect, useState } from 'react';
import './App.css';

import { Weather } from './components/Atoms/Weather/Weather';

import idlamontageH from './assets/idlamontageH.jpg'
import profilePicture from './assets/tower101.png'
import multipleProjects from './assets/multipleProjects.png'
import { CurrentTime } from './components/Atoms/CurrentTime/CurrentTime';
import { Navbar } from './components/Organisms/Navbar/Navbar';
import { IntroText } from './components/Atoms/IntroText/IntroText';
import { HorizontalLine } from './components/Atoms/HorizontalLine/HorizontalLine';
import { SectionIndicator } from './components/Molecules/SectionIndicator/SectionIndicator';
import { ImageOnSquare } from './components/Atoms/ImageOnSquare/ImageOnSquare';

import epitechSvg from './assets/epitech.svg'
import { ShadowText } from './components/Atoms/ShadowText/ShadowText';
import { ShadowGradientOnDiv } from './components/Atoms/ShadowGradientOnDiv/ShadowGradientOnDiv';
import { PictureProfile } from './components/Molecules/PictureProfile/PictureProfile';
import { ArrowLink } from './components/Atoms/ArrowLink/ArrowLink';
import { ButtonAnimated } from './components/Molecules/ButtonAnimated/ButtonAnimated';
import { FormContact } from './components/Molecules/FormContact/FormContact';
import { LinkSquare } from './components/Atoms/LinkSquare/LinkSquare';

function App() {

  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [currentTime, setCurrentTime] = useState<string>(currentDate.toLocaleTimeString())

  const handleChangeTime = () => {
    const resetDate = new Date();
    setCurrentTime(resetDate.toLocaleTimeString());
  };

  useEffect(()=>{ 
    const timer = setInterval(() => {
      handleChangeTime();
    }, 1000);
    
    return () => {
      clearInterval(timer);
    };
  }, [])
  
  return (
    <div className="App bg-black text-custom-gray">   

      {/* content  */}
      <main className='px-[24px] '> 
        <div className='h-[59px]'></div>

        <div className='flex justify-between place-items-center'>
            <div>
              <p className='text-custom-gray text-deuns-xs'>Bienvenue ! </p>
            </div>
            <div className='flex place-items-center'>
              <div className='bg-green-500 h-[7px] w-[7px] rounded-full opacity-100-to-0'></div>
              <p className='text-custom-gray px-2 text-deuns-xs'>Paris</p>
              <CurrentTime />
              <Weather />
            </div>
        </div>

        <div className='h-[100px]'></div>

        <IntroText/>

        <div className='h-[100px]'></div>

        <div>scroll y technos</div>

        <div className='h-[100px]'></div>

        <div className=''>
          <SectionIndicator title='projects'/>

          <div className='grid gap-4'>
            <Imagegit OnSquare 
            background={idlamontageH} 
            backgroundAlt="Logo company investir dans l'ancien"
            logo="https://marketplace.investirdanslancien.fr/idla-gold.svg"
            logoAlt="idla website on a laptop screen"
            />
            <ImageOnSquare 
            background={multipleProjects} 
            backgroundAlt="Multiple projects from epitech"
            logo={epitechSvg}
            logoAlt="Logo Epitech"
            />
          </div>
        </div>

        <div>
          <SectionIndicator title='a propos'/>

          <div>
            <div className='relative z-10'>
              <ShadowText content="Je suis Denis, un développeur full stack, je maîtrise plusieurs langages HTML/CSS, Javascript, Typescript, PHP, Java, SQL, et bien d'autres ! "/>
            </div>

            <PictureProfile picture={profilePicture} pictureAlt="me with the tower 101 in the background"/>

            <div className='h-[100px]'></div>
              <ButtonAnimated/>
          </div>
        </div>

        <div>
          <SectionIndicator title="contact"/>

          <h3 className='text-[1.8rem]'>Contactez moi</h3>
          <ShadowText content="N'hésitez pas à me contacter à tout moment, je vous répondrai dès que possible"/>

          <FormContact />
          <div className='h-[100px]'></div>

          <div className='grid grid-rows-3 gap-8'>
            <LinkSquare />
            <LinkSquare />
            <LinkSquare />
          </div>
          
          <div className='h-[100px]'></div>
        </div>
        <Navbar />
      </main>
    </div>
  );
}

export default App;
