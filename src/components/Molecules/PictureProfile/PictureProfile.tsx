import { ShadowGradientOnDiv } from "../../Atoms/ShadowGradientOnDiv/ShadowGradientOnDiv";

export function PictureProfile({picture, pictureAlt}:{picture:string, pictureAlt:string}){
  return(

  <div className='relative'>
    <ShadowGradientOnDiv />
    <img src={picture} alt={pictureAlt} className='rounded-xl fade-in '/>
  </div>

  )
}