import { useState } from "react";
import { Burger } from "../../Atoms/burger/Burger";
import './Navbar.css'
import { Link } from "react-router-dom";

export function Navbar(){
  const [displayNavbar, setDisplayNavbar] = useState<boolean>(false)
  
  function handlerDisplayNavbar(){
    setDisplayNavbar(!displayNavbar);
  }

  return(
<nav className={displayNavbar ? `navbar anime-extend-menu` : `navbar anime-extend-menu-reverse` }>
  <div className="navbar__main">
    
 
    
    <Link to="/portfolio">
      <h1>Denis Fierens</h1>
    </Link>

    <div className="navbar__main__links-burger">
      <Burger handleDisplayNavbar={handlerDisplayNavbar} displayNavbar={displayNavbar}/>
    </div>
    <div className="navbar__main__links">
      <a className="onhover-color-white" href="#section_project">projets</a>
      <a className="onhover-color-white" href="#section_about">a propos</a>
      <Link className="onhover-color-white" to="/portfolio/contact">me contacter</Link>
    </div>  
    <div className={displayNavbar ? `hide-element` : `navbar__main__progress-bar` }>
      <div className="navbar__main__progress-bar__scroll-watcher"></div>
    </div>
  </div>

  {
    displayNavbar ? 
    <div className="navbar__burger-menu-open">
      <a className="onhover-color-white" href="#section_project" onClick={handlerDisplayNavbar}>projets</a>
      <a className="onhover-color-white" href="#section_about" onClick={handlerDisplayNavbar}>a propos</a>
      <Link className="onhover-color-white" to="/portfolio/contact" onClick={handlerDisplayNavbar}>me contacter</Link>
    </div>
    :
    <></>
  }
</nav>
  )
}