import { useEffect, useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';


function App() {

  const [currentDate, setCurrentDate] = useState<Date>(new Date())

  useEffect(()=>{
    
  }, [])
  

  return (
    <div className="App">
      <Navbar />

  
      <div className='h-[100vh] bg-black px-[24px] py-[16px] h-[100vh] overflow-auto'>
        <div className='w-full h-[59px]'></div>
        <div className='flex justify-between place-items-center'>
          <div></div>
          <div className='flex place-items-center'>
            <div className='bg-green-500 h-[7px] w-[7px] rounded-full opacity-100-to-0'></div>
            <p className='text-custom-gray px-2'>Paris</p>
            <p>{}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
