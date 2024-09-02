import { DotPulse } from '../../Atoms/DotPulse/DotPulse'
import './NavbarStatus.css'

export function NavbarStatus(){
  return(
  <div className="navbar-status">
    <span className='color-subtitle2 font-semibold'>Bienvenue !</span>
    
    <div className="navbar-status__location">
      <DotPulse />
      <span className='color-subtitle2 font-semibold'>Paris</span>
      <span className='color-subtitle2 font-semibold'>12:34:57</span>
      <span className='color-subtitle2 font-semibold'>20°</span>
    </div>
  </div>
  )
}