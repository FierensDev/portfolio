import './StatusBar.css'
import { DotPulse } from '../../Atoms/DotPulse/DotPulse'

export function StatusBar(){
  return(
  <div className='status-bar adapt-to-container'>
    <span className='color-subtitle2 font-semibold'>Bienvenue !</span>
    <div></div>
    <DotPulse />
    <span className='color-subtitle2 font-semibold'>Paris</span>
    <span className='color-subtitle2 font-semibold'>12:34:57</span>
    <span className='color-subtitle2 font-semibold'>20°</span>
  </div>
  )
}