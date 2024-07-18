import { useState } from "react";
import './Navbar.css'

export function Navbar() {

  const [displayNavbar, setDisplayNavbar] = useState<boolean>(false)

  function handlerDisplayNavbar(){
    setDisplayNavbar(!displayNavbar);
  }

  return (
    <div>
      {displayNavbar === true ? 
        <div className="fixed top-0 left-0 right-0 anime-extend-menu">
        <div className="absolute inset-0 w-full z-10 bg-black bg-opacity-70 backdrop-blur-sm">
        </div>
        <div className="relative flex justify-between place-items-center px-[24px] py-[16px] z-20">
          <p className="text-white">Denis Fierens</p>
          <svg 
            onClick={() => {
              console.log('hi1');
              handlerDisplayNavbar()
            }}
            width="15.4" height="12.6" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <line className="anime-top-line" y1="0.5" x2="11" y2="0.5" stroke="#404040" strokeWidth={2}/>
            <line className="anime-bottom-line" y1="8.5" x2="11" y2="8.5" stroke="#404040" strokeWidth={2}/>
          </svg>
        </div>
        <div className=' h-[4px] w-full px-[24px]'>
          <div className="bg-custom-gray h-[4px] w-full"></div>
          <div className="bg-gray-400 h-[1px] w-[30%]"></div>
        </div>
      </div>
      :
        <div className="fixed top-0 left-0 right-0 anime-extend-menu-reverse">
          <div className="absolute inset-0 w-full z-10 bg-black bg-opacity-70 backdrop-blur-sm">
          </div>
          <div className="relative flex justify-between place-items-center px-[24px] py-[16px] z-20">
            <p className="text-white">Denis Fierens</p>
            <svg 
            onClick={() => {
              console.log('hi1');
              handlerDisplayNavbar()
            }}
            width="15.4" height="12.6" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"
          >
            <line className="anime-top-line-reverse" y1="0.5" x2="11" y2="0.5" stroke="#404040" strokeWidth={2} />
            <line className="anime-bottom-line-reverse" y1="8.5" x2="11" y2="8.5" stroke="#404040" strokeWidth={2} />
          </svg>
          </div>
          <div className=' h-[4px] w-full px-[24px]'>
            <div className="bg-custom-gray h-[4px] w-full"></div>
            <div className="bg-gray-400 h-[1px] w-[30%]"></div>
          </div>
        </div>
      }
    </div>
  );
}