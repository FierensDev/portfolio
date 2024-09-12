import './StatusBar.css'
import { DotPulse } from '../../Atoms/DotPulse/DotPulse'
import { CurrentTime } from '../../Atoms/CurrentTime/CurrentTime'
import { Weather } from '../../Atoms/Weather/Weather'

export function StatusBar(){
  return(
  <div className='status-bar adapt-to-container'>
    <span className='color-subtitle2 font-semibold'>Bienvenue !</span>
    <div></div>
    <DotPulse />
    <span className='color-subtitle2 font-semibold'>Paris</span>
    <CurrentTime />
    <Weather />
  </div>
  )
}