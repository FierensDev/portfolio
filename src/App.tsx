import { useEffect, useState } from 'react';
import './App.css';


import { Navbar } from './components/Navbar/Navbar';
import { Weather } from './components/Weather/Weather';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import { GifCard } from './components/GifCard/GifCard';

import idlamontageH from './assets/idlamontageH.jpg'
import profilePicture from './assets/tower101.png'
import IDLAmontage from './assets/IDLAmontage.jpg'

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

            {/* <div className='bg-gray-200 grid grid-cols-[40%,1fr] w-[calc(100vw-24px)] ml-[-24px]'>

              <img src={IDLAmontage} alt="IDLA website in a window on a laptop" />
              <div className='bg-blue-400 px-2'>
                <h3>INVESTIR DANS L'ANCIEN</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur iste cupiditate quasi unde deserunt quam quae. Ex mollitia quam repellendus laborum magni necessitatibus recusandae deleniti quas dolorem impedit.</p>
              </div>
              <div className='absolute w-[130px]'>
                <GifCard />
              </div>
            </div> */}

            <div className='bg-red-400 card-gif rounded-xl overflow-hidden'>
              <div className='flex justify-center place-items-center h-full hover-img-effect'>
                <img src={idlamontageH} alt="idla website on a laptop screen" className='w-full h-full' />
                {/* <svg id="Groupe_886" data-name="Groupe 886" width="50" height="50" viewBox="0 0 100 100.001">
                  <defs>
                    <clipPath id="clip-path">
                      <rect id="Rectangle_744" data-name="Rectangle 744" width="100" height="100.001" fill="none" />
                    </clipPath>
                  </defs>
                  <g id="Groupe_885" data-name="Groupe 885" clip-path="url(#clip-path)">
                    <path id="Tracé_9722" data-name="Tracé 9722"
                      d="M25.99,88.841H11.977a.817.817,0,0,1-.817-.817V11.978a.817.817,0,0,1,.817-.817H25.99a.817.817,0,0,0,.817-.817V.818A.817.817,0,0,0,25.99,0H.817A.816.816,0,0,0,0,.818V99.185A.816.816,0,0,0,.817,100H25.99a.817.817,0,0,0,.817-.817V89.659a.817.817,0,0,0-.817-.817"
                      transform="translate(0 0)" fill="#c49e69" />
                    <path id="Tracé_9723" data-name="Tracé 9723"
                      d="M123.167.817v9.526a.817.817,0,0,0,.817.817H138a.817.817,0,0,1,.817.817V88.024a.817.817,0,0,1-.817.817H123.984a.817.817,0,0,0-.817.817v9.527a.817.817,0,0,0,.817.816h25.173a.816.816,0,0,0,.816-.816V.817A.817.817,0,0,0,149.158,0H123.984a.817.817,0,0,0-.817.817"
                      transform="translate(-49.974)" fill="#c49e69" />
                    <path id="Tracé_9724" data-name="Tracé 9724"
                      d="M77.522,40.671l-7.317,5.478a.825.825,0,0,0-.33.661V57.6a.825.825,0,0,0,1.32.661l6.076-4.55a3.223,3.223,0,0,1,3.963.076l8.98,7.28a2.815,2.815,0,0,1,1.042,2.186V89.111a.825.825,0,0,0,.825.825h8.638a.825.825,0,0,0,.825-.825V58.349a2.816,2.816,0,0,0-1.042-2.186L81.485,40.747a3.225,3.225,0,0,0-3.963-.076"
                      transform="translate(-28.351 -16.241)" fill="#c49e69" />
                    <path id="Tracé_9725" data-name="Tracé 9725"
                      d="M45.408,91.209a.95.95,0,0,1-.3-.7V44.637a.915.915,0,0,1,.3-.745,1.059,1.059,0,0,1,.7-.248h9.136a.877.877,0,0,1,.993.994V90.514a1.059,1.059,0,0,1-.248.7.915.915,0,0,1-.745.3H46.1a.95.95,0,0,1-.7-.3"
                      transform="translate(-18.303 -17.708)" fill="#c49e69" />
                  </g>
                </svg> */}
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
