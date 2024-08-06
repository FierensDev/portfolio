import { useEffect, useState } from 'react';
import './App.css';


import { Navbar } from './components/Navbar/Navbar';
import { Weather } from './components/Weather/Weather';
import { ProjectCard } from './components/ProjectCard/ProjectCard';
import { GifCard } from './components/GifCard/GifCard';

import idlamontageH from './assets/idlamontageH.jpg'
import profilePicture from './assets/tower101.png'
import IDLAmontage from './assets/IDLAmontage.jpg'
import eCommerce from './assets/e-commerce.gif'
import multipleProjects from './assets/multipleProjects.png'

import IdlaSVG from './assets/idlaSvg.svg'

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

          <div className='grid gap-4'>
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

            <div className='bg-red-400 relative card-gif rounded-xl overflow-hidden'>
              <div className='absolute top-[calc(50%-40px)] left-[calc(50%-90px)] w-[177px] z-10'>
                <img src="https://marketplace.investirdanslancien.fr/idla-gold.svg" alt="" />
              </div>
              <div className='flex justify-center place-items-center h-full hover-img-effect'>
                <img src={idlamontageH} alt="idla website on a laptop screen" className='w-full h-full' />
              </div>
            </div>

            <div className='bg-red-400 relative card-gif rounded-xl overflow-hidden'>
              <div className='absolute top-[calc(50%-40px)] left-[calc(50%-90px)] w-[177px] z-10'>
                <svg xmlns="http://www.w3.org/2000/svg" width="177.648" height="44.102" viewBox="0 0 177.648 44.102">
                  <path d="M4.281,41.205V25.387c0-1.5-.987-2.536-2.668-3.05A6.328,6.328,0,0,0,0,22.051c2.525-.092,4.281-1.407,4.281-3.33V2.9C4.281,1.065,6.105-.01,9.61,0L13.53.008V1.465l-.768,0c-3.43-.009-4.13.551-4.13,2.9V18.486c0,1.924-1.968,3.379-4.628,3.565,2.66.188,4.628,1.643,4.628,3.567V39.743c0,2.349.633,2.907,4.13,2.9l.768,0v1.453L9.61,44.1H9.544C6.082,44.1,4.281,43.028,4.281,41.205Zm163.757,2.9-3.92-.01V42.639l.768,0c3.5.008,4.131-.551,4.131-2.9V25.618c0-1.924,1.967-3.379,4.628-3.567-2.661-.186-4.628-1.641-4.628-3.565V4.365c0-2.352-.7-2.912-4.131-2.9l-.768,0V.007L168.038,0c3.5-.01,5.329,1.065,5.329,2.894V18.721c0,1.923,1.757,3.238,4.282,3.33a6.323,6.323,0,0,0-1.613.285c-1.681.515-2.668,1.546-2.668,3.05V41.205c0,1.823-1.8,2.9-5.266,2.9Zm-14.125-8.751V24.8H143.382V35.351h-5.649V8.751h5.649v10.39h10.531V8.751h5.649v26.6Zm-27.306,0q-12.107,0-12.105-13.259V21.97q.121-13.221,12.144-13.219h9.211V14.41H125.516a4.652,4.652,0,0,0-4.035,1.839q-1.33,1.841-1.332,5.883v.323q0,7.239,5.326,7.238h10.341v5.659Zm-26.628,0a10.308,10.308,0,0,1-4.014-.688A7.248,7.248,0,0,1,93.3,32.824a7.077,7.077,0,0,1-1.494-2.605,9.809,9.809,0,0,1-.464-2.994,9.218,9.218,0,0,1,.142-1.557,5.947,5.947,0,0,1,.484-1.556,4.833,4.833,0,0,1,.887-1.293,3.391,3.391,0,0,1,1.351-.849,4.234,4.234,0,0,1-2.217-2.283,9.633,9.633,0,0,1-.606-3.58,6.808,6.808,0,0,1,2.22-5.438,9.461,9.461,0,0,1,6.375-1.918h13.234V14.41H99.292a2.117,2.117,0,0,0-1.594.707,2.478,2.478,0,0,0-.04,3.336,2.154,2.154,0,0,0,1.674.688h13.88V24.8H99.292a2.117,2.117,0,0,0-1.594.707,2.475,2.475,0,0,0-.665,1.76,2.411,2.411,0,0,0,.665,1.717,2.161,2.161,0,0,0,1.635.707h13.88v5.659Zm-21.558,0V14.41H72.166V8.751H89.959V14.41H84.068V35.351Zm-13.814,0V8.751h5.649v26.6Zm-23.384,0V27.145a7.591,7.591,0,0,1,2.28-5.964,9.077,9.077,0,0,1,6.275-2.04H55.1a2.189,2.189,0,0,0,1.633-.688,2.3,2.3,0,0,0,.665-1.658,2.369,2.369,0,0,0-.665-1.678,2.118,2.118,0,0,0-1.595-.707H41.222V8.751H54.456A10.577,10.577,0,0,1,58.35,9.4a7.468,7.468,0,0,1,2.683,1.74,6.63,6.63,0,0,1,1.533,2.547,9.634,9.634,0,0,1,.485,3.073,9.47,9.47,0,0,1-.465,2.931,6.934,6.934,0,0,1-1.492,2.566,7.626,7.626,0,0,1-2.663,1.839,10.006,10.006,0,0,1-3.975.708H49.011a1.912,1.912,0,0,0-1.533.727,2.58,2.58,0,0,0-.606,1.7v8.126Zm-14.5,0a10.3,10.3,0,0,1-4.014-.688,7.245,7.245,0,0,1-2.663-1.839,7.087,7.087,0,0,1-1.494-2.605,9.808,9.808,0,0,1-.463-2.994,9.212,9.212,0,0,1,.141-1.557,5.948,5.948,0,0,1,.484-1.556,4.836,4.836,0,0,1,.887-1.293,3.381,3.381,0,0,1,1.351-.849,4.235,4.235,0,0,1-2.218-2.283,9.633,9.633,0,0,1-.606-3.58,6.808,6.808,0,0,1,2.22-5.438A9.459,9.459,0,0,1,26.72,8.751H39.954V14.41H26.034a2.119,2.119,0,0,0-1.595.707,2.48,2.48,0,0,0-.04,3.336,2.154,2.154,0,0,0,1.675.688H39.954V24.8H26.034a2.119,2.119,0,0,0-1.595.707,2.478,2.478,0,0,0-.665,1.76,2.413,2.413,0,0,0,.665,1.717,2.163,2.163,0,0,0,1.636.707H39.954v5.659Z" transform="translate(0 0)" fill="#0091d3"></path>
                </svg>
              </div>
              <div className='flex justify-center place-items-center h-full hover-img-effect'>
                <img src={multipleProjects} alt="idla website on a laptop screen" className='w-full h-full' />
              </div>
            </div>
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
