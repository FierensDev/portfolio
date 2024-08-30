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
            <a href="#">projets</a>
            <a href="#">a propos</a>
            <a href="#">me contacter</a>
          </div>  
          <div className={displayNavbar ? `hide-element` : `progress-bar` }>
          </div>
        </div>

        {
          displayNavbar ? 
          <div className="navbar__display-menu">
            <a href="#" onClick={handlerDisplayNavbar}>projets</a>
            <a href="#" onClick={handlerDisplayNavbar}>a propos</a>
            <a href="#" onClick={handlerDisplayNavbar}>me contacter</a>
          </div>
          :
          <></>
        }
      
      
    </nav>
  )
}