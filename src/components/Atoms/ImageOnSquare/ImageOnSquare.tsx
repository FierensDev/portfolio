import './ImageOnSquare.css'

interface ImageOnSquareProps {
  background: string;
  backgroundAlt: string;
  logo: string;
  logoAlt: string;
}

export function ImageOnSquare({background, backgroundAlt, logo, logoAlt}: ImageOnSquareProps){
  return (
    <div className='parentImageOnSquare relative card-gif rounded-xl overflow-hidden'>
      <div className='absolute top-[calc(50%-40px)] left-[calc(50%-90px)] w-[177px] z-10'>
        <img src={logo} alt={logoAlt} />
      </div>
      <div className='flex justify-center place-items-center h-full hover-img-effect'>
        <img src={background} alt={backgroundAlt} className='w-full h-full' />
      </div>
    </div>
  )
}