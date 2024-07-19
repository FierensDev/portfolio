import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { Weather } from './components/Weather/Weather';


function App() {

  const [currentDate, setCurrentDate] = useState<Date>(new Date())
  const [currentTime, setCurrentTime] = useState<String>(currentDate.toLocaleTimeString())

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

  // useEffect(() => {
  //   console.log(currentTime);
  // }, [currentTime]);
  

  return (
    <div className="App">   
      <div className='absolute inset-0 bg-black px-[24px] flex place-content-between'>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[calc(100%)] w-[1px]'></div>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[calc(100%)] w-[1px]'></div>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[calc(100%)] w-[1px]'></div>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[calc(100%)] w-[1px]'></div>
          <div className='bg-gradient-to-t from-custom-gray to-black h-[calc(100%)] w-[1px]'></div>
      </div>

      <div className='absolute inset-0 h-[100vh] px-[24px] py-[16px] overflow-auto'>
        <div className='w-full h-[59px]'></div>
        <div className='flex justify-between place-items-center'>
          <div><p className='text-custom-gray text-deuns-xs'>Oh, bienvenue ! </p></div>
          <div className='flex place-items-center'>
            <div className='bg-green-500 h-[7px] w-[7px] rounded-full opacity-100-to-0'></div>
            <p className='text-custom-gray px-2 text-deuns-xs'>Paris</p>
            <p className='text-custom-gray px-2 text-deuns-xs'>{currentTime}</p>
            <Weather />
          </div>
        </div>
        
        <div className='h-[100px]'></div>
        
        <div className='text-white font-light text-deuns-l text-left py-[]'>
          <p>Je suis Denis,</p>
          <p>un développeur web</p>
          <div className='overflow-hidden  h-[59px]'>
            <p className='move-text-to-top font-semibold'>Front end</p>
            <p className='move-text-to-top font-semibold'>Back end</p>
          </div>
        </div>
      </div>


      <Navbar />
    </div>
  );
}

export default App;
