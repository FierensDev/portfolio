import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Weather } from './components/Weather/Weather';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import profilePicture from './assets/tower101.png'

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
      {/* background */}
      {/* <div className='absolute inset-0 bg-black px-[24px] flex place-content-between'>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[100%] w-[1px]'></div>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[100%] w-[1px]'></div>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[100%] w-[1px]'></div>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[100%] w-[1px]'></div>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[100%] w-[1px]'></div>
      </div> */}

      {/* content  */}
      <main className='px-[24px] '> 
        <div className='h-[59px]'></div>

        <div className='flex justify-between place-items-center'>
            <div>
              <p className='text-custom-gray text-deuns-xs'>Hey, bienvenue ! </p>
            </div>
            <div className='flex place-items-center'>
              <div className='bg-green-500 h-[7px] w-[7px] rounded-full opacity-100-to-0'></div>
              <p className='text-custom-gray px-2 text-deuns-xs'>Paris</p>
              <p className='text-custom-gray px-2 text-deuns-xs'>{currentTime}</p>
              <Weather />
            </div>
        </div>

        <div className='h-[100px]'></div>

        <div className='text-deuns-l md:text-deuns-xl text-left '>
          {/* Animer le gradient -> metal */}
          {/* <div className='bg-gradient-to-r from-gradient-black-71 absolute inset-0'></div> */}
          <p className='gradient-black-70 w-fit'>Je suis Denis,</p>
          <p className='gradient-black-70 w-fit'>un développeur web</p>
          <div className='overflow-hidden h-[59px]'>
            <p className='move-text-to-top font-semibold text-white'>Front end</p>
            <p className='move-text-to-top font-semibold text-white'>Back end</p>
          </div>
        </div>

        <div className='h-[100px]'></div>
        <div>scroll y technos</div>
        <div className='h-[100px]'></div>
{/* 
        <div className=''>
          <div className='h-[calc(100vh)] sticky top-[75px]'>
            <ProjectCard background="bg-blue-500"/>
          </div>
          <div className='h-[calc(100vh)] sticky top-[75px]'>
            <ProjectCard background="bg-green-500"/>
          </div>
          <div className='h-[calc(100vh)] sticky top-[75px]'>
            <ProjectCard background="bg-red-500"/>
          </div>
        </div> */}
        <div className=''>
          <div className='flex place-items-center mb-5'>
            <p className='pr-3 text-deuns-xs'>projects</p>
            <div className='h-[1px] w-full bg-custom-gray'></div>
          </div>

          {/* <div className='grid grid-cols-[1fr,1fr]'>
            <div className='bg-[#1D1D1D] w-full h-full'>
              
              <div className='rounded-lg'>
                <div className="card-glass-effect">
                  <div className='bg-blue-800 w-[110px] h-[110px]'></div>
                  <div className=' bg-red-600'>b</div>
                </div>
              </div>
            
            </div>
            <div className='bg-red-500 w-full h-full'>a</div>
          </div> */}

          <div className=''>
            {/* content */}
            <div className='card-glass-effect border-container'>
              <div className='w-[110px] h-[110px] rounded-lg bg-blue-700 mx-[19px] mt-[15px] '></div>
              <div className='mb-[20px]'>
                <p className='text-white font-bold text-deuns-xs text-left mx-[15px] mt-[7px]'>Investir dans l'ancien</p>
                <div className='text-custom-gray arrow-disapear flex place-items-center justify-end mx-[15px]'>
                  <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <p></p>
          </div>
        </div>

        <div>
          <div className='flex place-items-center'>
            <p className='pr-3 text-deuns-xs'>about</p>
            <div className='h-[1px] w-full bg-custom-gray'></div>
          </div>

          <div>
            <div className='relative z-10'>
            <p className='text-left text-deuns-m font-light gradient-black-70 w-fit'>Based in London/UK, 9+ years of experience across Product Design disciplines(UI, UX and Branding). A passionate designer and I love what I do, and I strongly believe in;  "The less it is the cooler is your interface"</p>
            </div>

            <div className='relative'>
              <div className='absolute inset-0 z-10 bg-gradient-to-t from-black via-transparent to-transparent rounded-xl fade-in'></div>
              <img src={profilePicture} alt="me with the tower 101 in the background" className='rounded-xl fade-in '/>
            </div>

            <div className='h-[100px]'></div>

            {/* <div className='flex justify-end place-items-center '>
              <div className='w-fit border-container bg-red-300'>
                <div className='flex place-items-end'>
                  <p className='text-custom-gray text-deuns-xs font-light'>A propos de moi</p>
                  <div className='text-custom-gray arrow-disapear'>
                    <svg width="15px" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className='bg-custom-gray h-[1px] border-to-right'></div>
              </div>
            </div> */}

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
