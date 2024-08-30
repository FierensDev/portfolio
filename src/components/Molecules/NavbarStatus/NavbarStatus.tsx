import './NavbarStatus.css'

export function NavbarStatus(){
  return(
  <div className="navbar-status">
    <span>Bienvenue !</span>
    
    <div className="navbar-status__location">
      <span>Paris</span>
      <span>12:34:57</span>
      <span>20°</span>
    </div>
  </div>
  )
}