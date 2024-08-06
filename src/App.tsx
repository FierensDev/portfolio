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
            <ImageOnSquare 
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
            <p className='text-left text-deuns-m font-light gradient-black-70 w-fit'>Based in London/UK, 9+ years of experience across Product Design disciplines(UI, UX and Branding). A passionate designer and I love what I do, and I strongly believe in;  "The less it is the cooler is your interface"</p>
            </div>

            <div className='relative'>
              <div className='absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl fade-in'></div>
              <img src={profilePicture} alt="me with the tower 101 in the background" className='rounded-xl fade-in '/>
            </div>

            <div className='h-[100px]'></div>

            <div className='m-auto relative flex place-items-center justify-center w-fit p-[2px] border-container'>
              <div className='bg-white w-[50%] h-full absolute border-to-right'></div>
              <div className='bg-black flex relative p-4'>
                <p className='text-custom-gray text-deuns-xs font-light'>A propos de moi</p>
                <div className='text-custom-gray arrow-disapear'>
                  <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <footer>
azeazer
            </footer>
          </div>
        </div>

        <Navbar />
      </main>
    </div>
  );
}

export default App;
