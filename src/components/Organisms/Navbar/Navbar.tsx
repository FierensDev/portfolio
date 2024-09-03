import { useState } from "react";
import { Burger } from "../../Atoms/burger/Burger";
import './Navbar.css'
import { NavbarStatus } from "../../Molecules/NavbarStatus/NavbarStatus";

export function Navbar(){
  const [displayNavbar, setDisplayNavbar] = useState<boolean>(false)
  
  function handlerDisplayNavbar(){
    setDisplayNavbar(!displayNavbar);
  }

  return(
      <nav className={displayNavbar ? `navbar anime-extend-menu` : `navbar anime-extend-menu-reverse` }>
        <div className="navbar__main">
          <a href="#">
            <h1>Denis Fierens</h1>
          </a>

          <div className="navbar__main__content__burger">
            <Burger handleDisplayNavbar={handlerDisplayNavbar} displayNavbar={displayNavbar}/>
          </div>
          <div className="navbar__main__content__display-menu">
            <a className="onhover-color-white" href="#section_project">projets</a>
            <a className="onhover-color-white" href="#section_about">a propos</a>
            <a className="onhover-color-white" href="#section_contact">me contacter</a>
          </div>  
          <div className={displayNavbar ? `hide-element` : `progress-bar` }>
            <div className="scroll-watcher"></div>
          </div>
        </div>

        {
          displayNavbar ? 
          <div className="navbar__display-menu">
            <a className="onhover-color-white" href="#section_project" onClick={handlerDisplayNavbar}>projets</a>
            <a className="onhover-color-white" href="#section_about" onClick={handlerDisplayNavbar}>a propos</a>
            <a className="onhover-color-white" href="#section_contact" onClick={handlerDisplayNavbar}>me contacter</a>
          </div>
          :
          <></>
        }
      
      
    </nav>
  )
}